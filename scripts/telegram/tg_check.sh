#!/bin/bash
# Check for new messages from Telegram (one-shot)
# Usage: tg_check.sh [offset]
source /home/z/my-project/scripts/telegram/config.sh
OFFSET="${1:-0}"
curl -s -X POST "${TG_API}/getUpdates" \
  -H "Content-Type: application/json" \
  -d "{\"offset\": ${OFFSET}, \"limit\": 10, \"timeout\": 0}" \
  2>/dev/null
