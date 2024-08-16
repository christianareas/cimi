// Dependencies.
import { use } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import Link from "next/link"
import Image from "next/image"

// Types.
type MarkdownCardProps = {
	file: string
	bgClassName?: string
	h2ClassName?: string
	fontClassName?: string
	boldClassName?: string
	buttonSrc?: string
	buttonAlt?: string
	buttonLink?: string
}

// MarkdownCard component.
export default function MarkdownCard({
	file,
	bgClassName,
	h2ClassName,
	fontClassName,
	boldClassName,
	buttonSrc,
	buttonAlt,
	buttonLink,
}: MarkdownCardProps) {
	// Fetch the Markdown content.
	async function fetchMarkdown(file: string) {
		// Fetch.
		const baseUrl = process.env.NEXT_PUBLIC_API_URL
		const response = await fetch(`${baseUrl}/api/markdown?file=${file}`, {
			cache: "no-store",
		})

		// If the response is not OK, throw an error.
		if (!response.ok) {
			throw new Error("Couldn’t fetch the Markdown content.")
		}

		// Return the Markdown content.
		const { markdown } = await response.json()
		return markdown
	}

	// Use the Markdown content.
	const markdown = use(fetchMarkdown(file))

	// Set up the classes.
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
		<article
			className={[
				bgClassName,
				fontClassName,
				"space-y-3 rounded-lg p-20 text-center lg:flex-1",
			]
				.filter(Boolean)
				// biome-ignore lint/nursery/useSortedClasses: False positive.
				.join(" ")}
		>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
				components={components}
			>
				{markdown}
			</ReactMarkdown>
			{buttonSrc && buttonAlt && buttonLink && (
				<Link href={buttonLink}>
					<Image
						src={buttonSrc}
						alt={buttonAlt}
						width={163}
						height={47}
						className="mx-auto w-auto pt-5"
					/>
				</Link>
			)}
		</article>
	)
}
