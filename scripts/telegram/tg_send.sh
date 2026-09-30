#!/bin/bash
# Send a text message to Telegram
# Usage: tg_send.sh "message text"
source /home/z/my-project/scripts/telegram/config.sh
MESSAGE="$1"
if [ -z "$MESSAGE" ]; then
  MESSAGE=$(cat)
fi
curl -s -X POST "${TG_API}/sendMessage" \
  -H "Content-Type: application/json" \
  -d "$(python3 -c "import json,sys; print(json.dumps({'chat_id': int('${TG_CHAT_ID}'), 'text': sys.stdin.read(), 'parse_mode': 'HTML'}))" <<< "$MESSAGE")" \
  > /dev/null 2>&1
echo "sent"
