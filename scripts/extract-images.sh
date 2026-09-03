#!/bin/bash
# Extract images from agent-browser's loaded page using canvas
# Since images are same-origin (wa-theq.com), canvas won't be tainted

set -e

OUT_DIR="/home/z/my-project/landing-assets"
mkdir -p "$OUT_DIR"

# First navigate to the homepage and wait for it to fully load
echo "→ Navigating to wa-theq.com..."
agent-browser open "https://wa-theq.com/" > /dev/null 2>&1
agent-browser wait 8000 > /dev/null 2>&1

# Verify the page loaded
TITLE=$(agent-browser get title 2>&1 | tail -1)
echo "  Title: $TITLE"

# Scroll through page to ensure all images are loaded
echo "→ Scrolling to trigger image loading..."
for i in 0 10 20 30 40 50 60 70 80 90 100; do
  agent-browser eval "window.scrollTo(0, document.body.scrollHeight * $i / 100)" > /dev/null 2>&1
  agent-browser wait 300 > /dev/null 2>&1
done
agent-browser eval "window.scrollTo(0, 0)" > /dev/null 2>&1
agent-browser wait 2000 > /dev/null 2>&1

# List of images to extract: "filename|url"
IMAGES=(
  "logo.png|https://wa-theq.com/wp-content/uploads/2025/05/Untitled-1.png|png"
  "hero-procedure.webp|https://wa-theq.com/wp-content/uploads/2025/05/male-adulte-faisant-une-extraction-d-unite-folliculaire-68236705365ab.webp|webp"
  "before-after-1.jpg|https://wa-theq.com/wp-content/uploads/2025/05/13-scaled.jpg|jpg"
  "before-after-2.jpg|https://wa-theq.com/wp-content/uploads/2025/05/11-scaled.jpg|jpg"
  "before-after-3.jpg|https://wa-theq.com/wp-content/uploads/2025/05/16.jpg|jpg"
  "before-after-4.jpg|https://wa-theq.com/wp-content/uploads/2025/05/7u.jpg|jpg"
  "before-after-5.jpg|https://wa-theq.com/wp-content/uploads/2025/05/o.jpg|jpg"
  "before-after-6.jpg|https://wa-theq.com/wp-content/uploads/2025/05/0.jpg|jpg"
  "before-after-7.jpg|https://wa-theq.com/wp-content/uploads/2025/05/uj.jpg|jpg"
  "before-after-8.jpg|https://wa-theq.com/wp-content/uploads/2025/05/Untitled-2.jpg|jpg"
  "before-after-9.jpg|https://wa-theq.com/wp-content/uploads/2025/05/uij.jpg|jpg"
  "before-after-10.jpg|https://wa-theq.com/wp-content/uploads/2025/05/Untitled-3.jpg|jpg"
  "before-after-11.jpg|https://wa-theq.com/wp-content/uploads/2025/05/Untitled-4.jpg|jpg"
  "before-after-12.jpg|https://wa-theq.com/wp-content/uploads/2026/07/1-scaled-e1783786212896.jpg|jpg"
  "before-after-13.jpg|https://wa-theq.com/wp-content/uploads/2025/05/Untitled-scaled.jpg|jpg"
  "before-after-14.jpg|https://wa-theq.com/wp-content/uploads/2025/05/2-scaled.jpg|jpg"
  "before-after-15.jpg|https://wa-theq.com/wp-content/uploads/2025/05/9-scaled.jpg|jpg"
  "before-after-16.jpg|https://wa-theq.com/wp-content/uploads/2025/05/10-scaled.jpg|jpg"
  "before-after-17.jpg|https://wa-theq.com/wp-content/uploads/2025/05/18.jpg|jpg"
  "before-after-18.jpg|https://wa-theq.com/wp-content/uploads/2025/05/12-scaled.jpg|jpg"
  "before-after-19.jpg|https://wa-theq.com/wp-content/uploads/2025/05/14-scaled.jpg|jpg"
  "before-after-20.jpg|https://wa-theq.com/wp-content/uploads/2025/05/19.jpg|jpg"
  "before-after-21.jpg|https://wa-theq.com/wp-content/uploads/2025/05/15.jpg|jpg"
)

for entry in "${IMAGES[@]}"; do
  IFS='|' read -r name url fmt <<< "$entry"
  echo "→ Extracting $name"
  # Use canvas to extract image data
  # Image is on same origin (wa-theq.com) so canvas won't be tainted
  RESULT=$(agent-browser eval "
    (function() {
      var imgs = Array.from(document.querySelectorAll('img'));
      var img = imgs.find(function(i) { return i.src === '$url' && i.complete && i.naturalWidth > 0; });
      if (!img) return JSON.stringify({ok: false, error: 'not found'});
      try {
        var canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var mime = '$fmt' === 'png' ? 'image/png' : ('$fmt' === 'webp' ? 'image/webp' : 'image/jpeg');
        var dataUrl = mime === 'image/png' ? canvas.toDataURL(mime) : canvas.toDataURL(mime, 0.92);
        // Return just the base64 part, splitting into chunks to avoid truncation
        var b64 = dataUrl.split(',')[1];
        return JSON.stringify({ok: true, w: img.naturalWidth, h: img.naturalHeight, len: b64.length, b64: b64});
      } catch (e) {
        return JSON.stringify({ok: false, error: 'canvas: ' + e.message});
      }
    })()
  " 2>&1 | tail -1)
  
  # Parse result and save
  echo "$RESULT" | python3 -c "
import json, sys, base64
data = json.loads(sys.stdin.read().strip().strip('\"').replace('\\\\n', '').replace('\\\\\"', '\"'))
if not data.get('ok'):
    print(f'  ✗ {data.get(\"error\", \"unknown\")}')
    sys.exit(0)
b64 = data['b64']
buf = base64.b64decode(b64)
with open('$OUT_DIR/$name', 'wb') as f:
    f.write(buf)
print(f'  ✓ Saved {len(buf)} bytes ({data[\"w\"]}x{data[\"h\"]})')
"
done

echo ""
echo "=== Final listing ==="
ls -lh "$OUT_DIR"
