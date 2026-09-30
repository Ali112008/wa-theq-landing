#!/bin/bash
# Send typing indicator
source /home/z/my-project/scripts/telegram/config.sh
curl -s -X POST "${TG_API}/sendChatAction" \
  -H "Content-Type: application/json" \
  -d "{\"chat_id\": ${TG_CHAT_ID}, \"action\": \"typing\"}" \
  > /dev/null 2>&1
