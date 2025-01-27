// Dependencies.
import fs from "node:fs/promises"
import path from "node:path"

// Types.
interface Markdown {
	[key: string]: string | Markdown
}

// Get Markdown.
export default async function getMarkdown(
	src: string,
): Promise<Markdown | string> {
	// Source path and stats.
	const absoluteSrcPath = path.join(process.cwd(), "src/data/content", src)
	const absoluteSrcStats = await fs.stat(absoluteSrcPath)

	// Format the directory or file name.
	function formatName(pathOrFileName: string) {
		return pathOrFileName.replace(/\.md$/, "")
	}

	// If the source is a file.
	if (absoluteSrcStats.isFile()) {
		return await fs.readFile(absoluteSrcPath, "utf-8")
	}

	// If the source is a directory.
	const directoryContents = await fs.readdir(absoluteSrcPath)

	const markdown: Markdown = {}

	for (const directoryItem of directoryContents) {
		const directoryItemPath = path.join(absoluteSrcPath, directoryItem)
		const directoryItemStats = await fs.stat(directoryItemPath)

		if (directoryItemStats.isDirectory()) {
			markdown[formatName(directoryItem)] = await getMarkdown(
				path.join(src, directoryItem),
			)
		} else if (directoryItem.endsWith(".md")) {
			markdown[formatName(directoryItem)] = await fs.readFile(
				directoryItemPath,
				"utf-8",
			)
		}
	}

	// Save.
	if (
		process.env.NODE_ENV === "development" ||
		process.env.VERCEL_ENV === "development"
	) {
		try {
			await fs.writeFile(
				path.join(process.cwd(), "/src/data/content/markdown.ts"),
				`export const markdown = ${JSON.stringify(markdown, null, 2)}`,
				"utf8",
			)
		} catch (error) {
			console.error(error)
		}
	}

	return markdown
}
