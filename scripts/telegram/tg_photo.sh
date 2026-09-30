#!/bin/bash
# Send a photo to Telegram
# Usage: tg_photo.sh /path/to/photo.png "caption"
source /home/z/my-project/scripts/telegram/config.sh
PHOTO_PATH="$1"
CAPTION="${2:-}"
curl -s -X POST "${TG_API}/sendPhoto" \
  -F "chat_id=${TG_CHAT_ID}" \
  -F "photo=@${PHOTO_PATH}" \
  -F "caption=${CAPTION}" \
  > /dev/null 2>&1
echo "photo_sent"
