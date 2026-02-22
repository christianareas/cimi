// Dependencies.
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import type { ButtonProps } from "@/components/Shared/Button"
import Button from "@/components/Shared/Button"
import { markdown } from "@/data/content/markdown"
import resolveContentSrcPath from "@/lib/ui/resolveContentSrcPath"

// Types.
interface ContentCardProps {
	contentSrc: string
	articleClassName?: string
	sectionClassName?: string
	bgClassName?: string
	h2ClassName?: string
	h3ClassName?: string
	fontClassName?: string
	boldClassName?: string
	buttonText?: ButtonProps["buttonText"]
	buttonColorClasses?: ButtonProps["buttonClassNames"]
	buttonLink?: ButtonProps["buttonLink"]
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
	buttonText,
	buttonColorClasses,
	buttonLink,
}: ContentCardProps) {
	// Get the content.
	const content = resolveContentSrcPath(markdown, contentSrc)

	// Set up the classes.
	const components = {
		h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
			<h2
				className={`pb-5 font-ancho font-bold text-2xl ${h2ClassName}`}
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
		ul: ({ children, ...props }: React.ComponentProps<"ul">) => (
			<ul className={"space-y-2 py-2"} {...props}>
				{children}
			</ul>
		),
		li: ({ children, ...props }: React.ComponentProps<"li">) => (
			<li className={"mx-3 list-disc"} {...props}>
				{children}
			</li>
		),
		strong: ({ children, ...props }: React.ComponentProps<"strong">) => (
			<strong className={`font-extrabold ${boldClassName}`} {...props}>
				{children}
			</strong>
		),
	}

	// Render.
	return (
		<article
			className={[
				"space-y-5 rounded-lg p-10 font-medium sm:p-20",
				articleClassName,
				bgClassName,
				fontClassName,
			]
				.filter(Boolean)
				.join(" ")}
		>
			<section
				className={["mx-auto", sectionClassName].filter(Boolean).join(" ")}
			>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw]}
					components={components}
				>
					{content}
				</ReactMarkdown>
			</section>
			{buttonText && buttonColorClasses && buttonLink && (
				<section
					className={["mx-auto", sectionClassName].filter(Boolean).join(" ")}
				>
					<Button
						buttonText={buttonText}
						buttonWidth="w-40"
						buttonClassNames={buttonColorClasses}
						buttonType="button"
						buttonLink={buttonLink}
					/>
				</section>
			)}
		</article>
	)
}
