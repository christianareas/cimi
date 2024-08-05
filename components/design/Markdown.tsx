// Dependencies.
import { use } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

// Types.
type MarkdownProps = {
	slug: string
	h2ClassName?: string
	boldClassName?: string
}

// Content component.
export default function Markdown({
	slug,
	h2ClassName,
	boldClassName,
}: MarkdownProps) {
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

	// Set up
	const components = {
		h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
			<h2 className={h2ClassName} {...props}>
				{children}
			</h2>
		),
		strong: ({ children, ...props }: React.ComponentProps<"strong">) => (
			<strong className={boldClassName} {...props}>
				{children}
			</strong>
		),
	}

	// Render.
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeRaw]}
			components={components}
		>
			{markdown}
		</ReactMarkdown>
	)
}
