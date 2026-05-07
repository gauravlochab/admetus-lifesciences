#!/bin/bash
# Usage: ./compress-screenshot.sh <input-image-path>
# Outputs a compressed version at /tmp/compressed.jpg

INPUT="$1"

if [ -z "$INPUT" ]; then
  echo "Usage: $0 <path-to-image>"
  exit 1
fi

if [ ! -f "$INPUT" ]; then
  echo "File not found: $INPUT"
  exit 1
fi

ORIGINAL_SIZE=$(stat -f%z "$INPUT" 2>/dev/null || stat -c%s "$INPUT" 2>/dev/null)
echo "Original: $(echo "scale=1; $ORIGINAL_SIZE/1024" | bc)KB"

# Resize to max 800px width, convert to JPEG at 60% quality
sips -Z 800 -s format jpeg "$INPUT" --out /tmp/compressed.jpg 2>/dev/null

FINAL_SIZE=$(stat -f%z /tmp/compressed.jpg 2>/dev/null || stat -c%s /tmp/compressed.jpg 2>/dev/null)
echo "Compressed: $(echo "scale=1; $FINAL_SIZE/1024" | bc)KB"
echo "Saved to: /tmp/compressed.jpg"
