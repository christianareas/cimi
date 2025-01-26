// Dependencies.
import fs from "node:fs"
import path from "node:path"

// Types.
interface Markdown {
	[key: string]: string | Markdown
}

// Get Markdown.
export default function getMarkdown(src: string) {
	// Source path and stats.
	const absoluteSrcPath = path.join(process.cwd(), "src/data/content", src)
	const absoluteSrcStats = fs.statSync(absoluteSrcPath)

	// Format the directory or file name.
	function formatName(pathOrFileName: string) {
		return pathOrFileName.replace(/\.md$/, "")
	}

	// If the source is a file.
	if (absoluteSrcStats.isFile()) {
		return fs.readFileSync(absoluteSrcPath, "utf-8")
	}

	// If the source is a directory.
	const directoryContents = fs.readdirSync(absoluteSrcPath)

	const markdownObject: Markdown = {}

	for (const directoryItem of directoryContents) {
		const directoryItemPath = path.join(absoluteSrcPath, directoryItem)
		const directoryItemStats = fs.statSync(directoryItemPath)

		if (directoryItemStats.isDirectory()) {
			markdownObject[formatName(directoryItem)] = getMarkdown(
				path.join(src, directoryItem),
			)
		} else if (directoryItem.endsWith(".md")) {
			markdownObject[formatName(directoryItem)] = fs.readFileSync(
				directoryItemPath,
				"utf-8",
			)
		}
	}

	return markdownObject
}
