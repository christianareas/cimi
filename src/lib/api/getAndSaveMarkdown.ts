// Dependencies.
import fs from "node:fs/promises"
import path from "node:path"

// Types.
interface Markdown {
	[key: string]: string | Markdown
}

// Get Markdown.
export default async function getMarkdown(
	srcPath = "src/data/content",
): Promise<Markdown> {
	const absoluteSrcPath = path.join(process.cwd(), srcPath)
	const directoryContents = await fs.readdir(absoluteSrcPath)

	// Create the Markdown.
	const markdown: Markdown = {}
	for (const directoryItem of directoryContents) {
		const directoryItemPath = path.join(absoluteSrcPath, directoryItem)
		const directoryItemStats = await fs.stat(directoryItemPath)

		if (directoryItemStats.isDirectory()) {
			markdown[directoryItem] = await getMarkdown(
				path.join(srcPath, directoryItem),
			)
		} else if (directoryItem.endsWith(".md")) {
			markdown[directoryItem.replace(/\.md$/, "")] = await fs.readFile(
				directoryItemPath,
				"utf-8",
			)
		}
	}

	// Save the Markdown to a file.
	if (
		process.env.NODE_ENV === "development" ||
		process.env.VERCEL_ENV === "development"
	) {
		try {
			await fs.writeFile(
				path.join(process.cwd(), "src/data/content/markdown.ts"),
				`export const markdown = ${JSON.stringify(markdown, null, 2)}`,
				"utf8",
			)
		} catch (error) {
			console.error(error)
		}
	}

	return markdown
}
