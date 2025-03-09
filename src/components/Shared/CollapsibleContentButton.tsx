"use client"

// Dependencies.
import resolveContentSrcPath from "@/lib/ui/resolveContentSrcPath"
import { markdown } from "@/data/content/markdown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { useState } from "react"
import * as Collapsible from "@radix-ui/react-collapsible"
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"

// Types.
interface CollapsibleButtonProps {
	buttonTextSrc: string
	buttonDimensions: "" | ""
	buttonClassNames:
		| "border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-blue shadow-[4px_4px_0]" // cimi-blue-light
		| "border-cimi-green bg-cimi-cream text-cimi-green shadow-cimi-green" // cimi-green-light
	collapsibleContentSrc: string
}

// Component.
export default function CollapsibleContentButton({
	buttonTextSrc,
	buttonDimensions,
	buttonClassNames,
	collapsibleContentSrc,
}: CollapsibleButtonProps) {
	// Set initial state.
	const [open, setOpen] = useState(false)

	// Content.
	const buttonText = resolveContentSrcPath(markdown, buttonTextSrc)
	const collapsibleContent = resolveContentSrcPath(
		markdown,
		collapsibleContentSrc,
	)

	// Markdown classes.
	const components = {
		h4: ({ children, ...props }: React.ComponentProps<"h4">) => (
			<h4 className={"font-extrabold text-cimi-blue"} {...props}>
				{children}
			</h4>
		),
		p: ({ children, ...props }: React.ComponentProps<"p">) => (
			<p className={"py-2"} {...props}>
				{children}
			</p>
		),
		a: ({ children, ...props }: React.ComponentProps<"a">) => (
			<a className={"underline"} {...props}>
				{children}
			</a>
		),
		ul: ({ children, ...props }: React.ComponentProps<"ul">) => (
			<ul className={"py-2"} {...props}>
				{children}
			</ul>
		),
		li: ({ children, ...props }: React.ComponentProps<"li">) => (
			<li className={"mx-4 list-disc"} {...props}>
				{children}
			</li>
		),
		strong: ({ children, ...props }: React.ComponentProps<"strong">) => (
			<strong className={"font-extrabold"} {...props}>
				{children}
			</strong>
		),
	}

	// Render.
	return (
		<article className="font-medium">
			<Collapsible.Root open={open} onOpenChange={setOpen}>
				{/* Button. */}
				<Collapsible.Trigger asChild>
					<button
						type="button"
						className={`flex items-center rounded-lg border-2 px-4 py-2 text-left ${buttonDimensions} ${buttonClassNames}`}
					>
						{/* Button text. */}
						<section>
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								rehypePlugins={[rehypeRaw]}
								components={components}
							>
								{buttonText}
							</ReactMarkdown>
						</section>
						{/* Button icon. */}
						<section>
							{open ? (
								<ChevronUpIcon className="ml-2 h-6 w-6" aria-hidden="true" />
							) : (
								<ChevronDownIcon className="ml-2 h-6 w-6" aria-hidden="true" />
							)}
						</section>
					</button>
				</Collapsible.Trigger>

				{/* Collapsible content. */}
				<Collapsible.Content className="fade px-5 pt-2">
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeRaw]}
						components={components}
					>
						{collapsibleContent}
					</ReactMarkdown>
				</Collapsible.Content>
			</Collapsible.Root>
		</article>
	)
}
