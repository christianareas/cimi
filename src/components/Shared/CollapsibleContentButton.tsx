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
type CollapsibleButtonProps = {
	buttonTextSrc: string
	collapsibleContentSrc: string
	colorScheme: string
	buttonTextClassName?: string
}

// Component.
export default function CollapsibleContentButton({
	buttonTextSrc,
	collapsibleContentSrc,
	colorScheme,
	buttonTextClassName,
}: CollapsibleButtonProps) {
	// Set initial state.
	const [open, setOpen] = useState(false)

	// Get the content.
	const buttonText = resolveContentSrcPath(markdown, buttonTextSrc)
	const collapsibleContent = resolveContentSrcPath(
		markdown,
		collapsibleContentSrc,
	)

	// Set up the classes.
	const components = {
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
		strong: ({ children, ...props }: React.ComponentProps<"strong">) => (
			<strong className={"font-extrabold"} {...props}>
				{children}
			</strong>
		),
	}

	// Render.
	return (
		<article className="mx-auto mb-5 flex justify-center font-medium lg:basis-1/2">
			<Collapsible.Root open={open} onOpenChange={setOpen}>
				<Collapsible.Trigger asChild>
					<button
						type="button"
						className={[
							`border-${colorScheme}`,
							`shadow-${colorScheme}`,
							`text-${colorScheme}`,
							"flex w-xs justify-between rounded-lg border-2 px-4 py-2 text-left shadow-[4px_4px_0] lg:min-h-24 lg:w-[350px]",
						]
							.filter(Boolean)
							.join(" ")}
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

				<Collapsible.Content className="w-xs px-5 pt-5">
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
