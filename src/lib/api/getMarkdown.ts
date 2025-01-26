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
		return pathOrFileName
			.replace(/\.md$/, "")
			.split("-")
			.map((word, index) =>
				index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
			)
			.join("")
	}

	// If the source is a file.
	if (absoluteSrcStats.isFile()) {
		throw new Error("Files aren’t supported. Use a directory.")
	}

	// If the source is a directory.
	if (absoluteSrcStats.isDirectory()) {
		const directoryName = formatName(path.basename(absoluteSrcPath))
		const directoryContents = fs.readdirSync(absoluteSrcPath)

		const markdownObject: Markdown = { [directoryName]: {} }

		for (const directoryItem of directoryContents) {
			const directoryItemPath = path.join(absoluteSrcPath, directoryItem)
			const directoryItemStats = fs.statSync(directoryItemPath)

			if (directoryItemStats.isDirectory()) {
				const nestedMarkdownObject = getMarkdown(path.join(src, directoryItem))
				if (typeof markdownObject[directoryName] === "object") {
					Object.assign(markdownObject[directoryName], nestedMarkdownObject)
				}
			} else if (directoryItem.endsWith(".md")) {
				const fileName = formatName(directoryItem)
				const fileContents = fs.readFileSync(directoryItemPath, "utf-8")
				if (typeof markdownObject[directoryName] === "object") {
					markdownObject[directoryName][fileName] = fileContents
				}
			}
		}

		return markdownObject
	}
}
