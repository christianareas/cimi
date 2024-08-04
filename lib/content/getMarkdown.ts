// Dependencies.
import fs from "node:fs"
import path from "node:path"

// Get Markdown.
export default function getMarkdown(markdownSlug: string): string {
	// Get the file path.
	const markdownFilePath = path.join(
		process.cwd(),
		"data/content",
		`${markdownSlug}.md`,
	)

	// Read the file.
	const markdownContent = fs.readFileSync(markdownFilePath, "utf-8")

	return markdownContent
}
