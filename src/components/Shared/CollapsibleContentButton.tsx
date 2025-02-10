"use client"

// Dependencies.
import resolveContentSrcPath from "@/lib/ui/resolveContentSrcPath"
import { colorsSchemes } from "@/data/colorSchemes"
import { markdown } from "@/data/content/markdown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { useState } from "react"
import * as Collapsible from "@radix-ui/react-collapsible"
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"

// Types.
type CollapsibleButtonProps = {
	dimensions: "w-xs lg:w-[350px]" | "w-xs lg:w-xl"
	buttonTextSrc: string
	buttonDimensions: "w-xs lg:min-h-24 lg:w-[350px]" | "w-xs lg:w-xl"
	buttonClassName: "shadow-[4px_4px_0]" | "font-ancho"
	collapsibleContentSrc: string
	colorScheme: "cimi-blue" | "cimi-green"
}

// Component.
export default function CollapsibleContentButton({
	dimensions,
	buttonTextSrc,
	buttonDimensions,
	buttonClassName,
	collapsibleContentSrc,
	colorScheme,
}: CollapsibleButtonProps) {
	// Set initial state.
	const [open, setOpen] = useState(false)

	// Content.
	const buttonText = resolveContentSrcPath(markdown, buttonTextSrc)
	const collapsibleContent = resolveContentSrcPath(
		markdown,
		collapsibleContentSrc,
	)

	// Color schemes.
	const colorClasses = colorsSchemes[colorScheme]

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
		<article
			className={`mx-auto mb-5 flex justify-center font-medium lg:basis-1/2 ${dimensions}`}
		>
			<Collapsible.Root open={open} onOpenChange={setOpen}>
				<Collapsible.Trigger asChild>
					<button
						type="button"
						className={`flex items-center justify-between rounded-lg border-2 px-4 py-2 text-left ${buttonDimensions} ${buttonClassName} ${colorClasses}`}
					>
						<section>
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								rehypePlugins={[rehypeRaw]}
								components={components}
							>
								{buttonText}
							</ReactMarkdown>
						</section>
						<section>
							{open ? (
								<ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
							) : (
								<ChevronDownIcon className="ml-2 h-6 w-6" aria-hidden="true" />
							)}
						</section>
					</button>
				</Collapsible.Trigger>

				<Collapsible.Content className="px-5 pt-2">
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
