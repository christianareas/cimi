// Dependencies.
import { use } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

// Types.
type MarkdownProps = {
	slug: string
}

// Content component.
export default function Markdown({ slug }: MarkdownProps) {
	// Fetch the Markdown content.
	async function fetchMarkdown(slug: string) {
		// Fetch.
		const baseUrl = process.env.NEXT_PUBLIC_API_URL
		const response = await fetch(`${baseUrl}/api/markdown?slug=${slug}`)

		// If the response is not OK, throw an error.
		if (!response.ok) {
			throw new Error("Couldn’t fetch the Markdown content.")
		}

		// Return the Markdown content.
		const { markdown } = await response.json()
		return markdown
	}

	// Use the Markdown content.
	const markdown = use(fetchMarkdown(slug))

	// Render.
	return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
}
