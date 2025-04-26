#!/usr/bin/env bash
set -euo pipefail

# Source JSON file and directory to save to.
SOURCE_JSON=wixPosts.json
IMAGES_DIRECTORY=wixImages

# make sure our top-level folder exists
mkdir -p "$IMAGES_DIRECTORY"

# Count the number of posts.
count=$(jq length "$SOURCE_JSON")

# Download all the images.
for i in $(seq 0 $((count - 1))); do
	# Prepare a safe title.
	title=$(jq -r ".[$i].title" "$SOURCE_JSON")
	title=$(printf '%s' "$title" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
	safe_title=$(printf '%s' "$title" |
		sed -E 's#[/:]# - #g; s/[[:space:]]+/ /g; s/^ //; s/ $//')

	# Create a subfolder.
	mkdir -p "$IMAGES_DIRECTORY/$safe_title"

	# Download the cover image.
	cover=$(jq -r ".[$i].coverUrl" "$SOURCE_JSON")
	ext="${cover##*.}"
	wget -q "$cover" -O "$IMAGES_DIRECTORY/$safe_title/${safe_title}.${ext}"

	# Download all the other images.
	jq -r ".[$i].description" "$SOURCE_JSON" |
		grep -oE '<img[^>]*src="[^"]+"' |
		sed -E 's/.*src="([^"]+)".*/\1/' |
		nl -w1 -s$'\t' |
		while IFS=$'\t' read -r num url; do
			ext2="${url##*.}"
			wget -q "$url" -O "$IMAGES_DIRECTORY/$safe_title/${num}.${ext2}"
		done
done
