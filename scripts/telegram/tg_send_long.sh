#!/bin/bash
# Send a long message (auto-splits if > 4096 chars)
# Usage: tg_send_long.sh "long message"
source /home/z/my-project/scripts/telegram/config.sh
MESSAGE="$1"
if [ -z "$MESSAGE" ]; then
  MESSAGE=$(cat)
fi
# Split into 4000-char chunks
echo "$MESSAGE" | python3 -c "
import sys
text = sys.stdin.read()
chunk_size = 4000
for i in range(0, len(text), chunk_size):
    print(text[i:i+chunk_size])
    print('---CONTINUE---')
" | while IFS= read -r chunk; do
  if [ "$chunk" != "---CONTINUE---" ] && [ -n "$chunk" ]; then
    curl -s -X POST \"${TG_API}/sendMessage\" \
      -H 'Content-Type: application/json' \
      -d \"$(python3 -c "import json,sys; print(json.dumps({'chat_id': int('${TG_CHAT_ID}'), 'text': sys.stdin.read()}))" <<< "$chunk")\" \
      > /dev/null 2>&1
    sleep 1
  fi
done
echo "sent_long"
