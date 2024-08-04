// Dependencies.
import fs from "node:fs"
import path from "node:path"

// Get Markdown.
export default function getMarkdown(slug: string): string {
	// Get the file path.
	const filePath = path.join(process.cwd(), "data/content", `${slug}.md`)

	// Read the file.
	const markdown = fs.readFileSync(filePath, "utf-8")

	return markdown
}
