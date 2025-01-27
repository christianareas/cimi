// Dependencies.
import { markdown } from "@/data/content/markdown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import Link from "next/link"
import Image from "next/image"

// Types.
import type { Markdown } from "@/lib/api/getAndSaveMarkdown"

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

// Helpers.
function resolveContentSrcPath(
	object: Markdown,
	path: string,
): string | undefined {
	const keys = path.split(".")
	let current: Markdown | string | undefined = object
	for (const key of keys) {
		if (typeof current === "object" && current !== null && key in current) {
			current = current[key]
		} else {
			return undefined
		}
	}
	return typeof current === "string" ? current : undefined
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
	// Get the content.
	const content = resolveContentSrcPath(markdown, contentSrc)

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
					{content}
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
