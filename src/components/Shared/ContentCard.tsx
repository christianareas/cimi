// Dependencies.
import { use } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import Link from "next/link"
import Image from "next/image"

// Types.
type ContentCardProps = {
	contentSrc: string
	articleClassName?: string
	sectionClassName?: string
	bgClassName?: string
	h2ClassName?: string
	h3ClassName?: string
	fontClassName?: string
	boldClassName?: string
	buttonLink?: string
	buttonSrc?: string
	buttonAlt?: string
	buttonClassName?: string
}

// Component.
export default function ContentCard({
	contentSrc,
	articleClassName,
	sectionClassName,
	bgClassName,
	h2ClassName,
	h3ClassName,
	fontClassName,
	boldClassName,
	buttonLink,
	buttonSrc,
	buttonAlt,
	buttonClassName,
}: ContentCardProps) {
	// Fetch the Markdown content.
	async function fetchMarkdown(src: string) {
		// Base URL.
		let baseUrl = ""
		if (process.env.NODE_ENV === "development") {
			baseUrl = `http://localhost:${process.env.PORT}`
		} else if (process.env.NODE_ENV === "production") {
			baseUrl = `https://${process.env.VERCEL_URL}`
		}

		// Fetch.
		const response = await fetch(`${baseUrl}/api/markdown?src=${src}`, {
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
	const markdown = use(fetchMarkdown(contentSrc))

	// Set up the classes.
	const components = {
		h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
			<h2
				className={`pb-3 font-ancho font-bold text-2xl ${h2ClassName}`}
				{...props}
			>
				{children}
			</h2>
		),
		h3: ({ children, ...props }: React.ComponentProps<"h3">) => (
			<h3 className={`font-ancho font-bold text-xl ${h3ClassName}`} {...props}>
				{children}
			</h3>
		),
		p: ({ children, ...props }: React.ComponentProps<"p">) => (
			<p className={"py-2"} {...props}>
				{children}
			</p>
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
				articleClassName,
				bgClassName,
				fontClassName,
				"rounded-lg p-20",
			]
				.filter(Boolean)
				.join(" ")}
		>
			<section className={sectionClassName}>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw]}
					components={components}
				>
					{markdown}
				</ReactMarkdown>
			</section>
			{buttonLink && buttonSrc && buttonAlt && (
				<section className={sectionClassName}>
					<Link href={buttonLink}>
						<Image
							src={buttonSrc}
							alt={buttonAlt}
							width={163}
							height={47}
							className={[buttonClassName, "w-auto pt-5 pb-2"]
								.filter(Boolean)
								.join(" ")}
						/>
					</Link>
				</section>
			)}
		</article>
	)
}
