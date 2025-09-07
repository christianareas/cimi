"use client"

// Dependencies.
import * as Collapsible from "@radix-ui/react-collapsible"
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import { markdown } from "@/data/content/markdown"
import resolveContentSrcPath from "@/lib/ui/resolveContentSrcPath"

// Types.
interface FaqProps {
	faqsName: "join" | "member" | "volunteer" | "donor"
	textClassName:
		| "text-cimi-blue dark:text-cimi-blue-dark-mode" // cimi-blue
		| "text-cimi-green dark:text-cimi-green-dark-mode" // cimi-green
	borderClassName:
		| "border-cimi-blue shadow-[4px_4px_0] shadow-cimi-blue dark:border-cimi-blue-dark-mode dark:shadow-cimi-blue-dark-mode" // cimi-blue
		| "border-cimi-blue dark:border-cimi-blue-dark-mode" // cimi-blue
		| "border-cimi-green dark:border-cimi-green-dark-mode" // cimi-green
}

// Component.
export default function Faqs({
	faqsName,
	textClassName,
	borderClassName,
}: FaqProps) {
	// FAQs source.
	const faqsSrc = {
		join: [
			{ faqSrc: "join.faqs.1" },
			{ faqSrc: "join.faqs.2" },
			{ faqSrc: "join.faqs.3" },
			{ faqSrc: "join.faqs.4" },
			{ faqSrc: "join.faqs.5" },
			{ faqSrc: "join.faqs.6" },
			{ faqSrc: "join.faqs.7" },
			{ faqSrc: "join.faqs.8" },
		],
		member: [
			{ faqSrc: "join.member.faqs.1" },
			{ faqSrc: "join.member.faqs.2" },
			{ faqSrc: "join.member.faqs.3" },
			{ faqSrc: "join.member.faqs.4" },
			{ faqSrc: "join.member.faqs.5" },
		],
		volunteer: [
			{ faqSrc: "join.volunteer.faqs.1" },
			{ faqSrc: "join.volunteer.faqs.2" },
			{ faqSrc: "join.volunteer.faqs.3" },
			{ faqSrc: "join.volunteer.faqs.4" },
		],
		donor: [
			{ faqSrc: "donate.faqs.1" },
			{ faqSrc: "donate.faqs.2" },
			{ faqSrc: "donate.faqs.3" },
		],
	}

	const faqs = faqsSrc[faqsName] || []

	// Split the content.
	function splitContent(content: string) {
		const buttonTextRegex = /^(#{2,3} .+)/m
		const buttonTextMatch = content.match(buttonTextRegex)

		// If there’s button test, split the content.
		if (buttonTextMatch) {
			const buttonText = buttonTextMatch[1]
			const collapsibleContent = content.replace(buttonTextRegex, "").trim()
			return { buttonText, collapsibleContent }
		}

		// Otherwise, return the content.
		return { buttonText: "", content }
	}

	const splitContents = faqs.map(({ faqSrc }) => {
		const content = resolveContentSrcPath(markdown, faqSrc) ?? ""
		return { faqSrc, ...splitContent(content) }
	})

	// Set the initial state.
	const [openFaq, setOpenFaq] = useState<boolean[]>(
		new Array(splitContents.length).fill(false),
	)

	// Components.
	const components = {
		h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
			<h2 {...props}>{children}</h2>
		),
		h3: ({ children, ...props }: React.ComponentProps<"h3">) => (
			<h3 className="font-ancho font-bold text-lg" {...props}>
				{children}
			</h3>
		),
		p: ({ children, ...props }: React.ComponentProps<"p">) => (
			<p className="py-2" {...props}>
				{children}
			</p>
		),
		a: ({ children, ...props }: React.ComponentProps<"a">) => (
			<a className="underline" {...props}>
				{children}
			</a>
		),
		ul: ({ children, ...props }: React.ComponentProps<"ul">) => (
			<ul className="py-2" {...props}>
				{children}
			</ul>
		),
		li: ({ children, ...props }: React.ComponentProps<"li">) => (
			<li className="mx-4 list-disc" {...props}>
				{children}
			</li>
		),
		strong: ({ children, ...props }: React.ComponentProps<"strong">) => (
			<strong className="font-extrabold" {...props}>
				{children}
			</strong>
		),
	}

	// Render.
	return (
		<section className="mx-auto max-w-3xl px-10 pb-10 sm:px-20 sm:pb-20">
			{faqsName !== "join" && (
				<h2
					className={`pb-5 text-center font-ancho font-bold text-2xl ${textClassName}`}
				>
					{faqsName.charAt(0).toUpperCase() + faqsName.slice(1)} FAQs
				</h2>
			)}

			<article className="space-y-5 font-medium">
				{splitContents.map(
					({ faqSrc, buttonText, collapsibleContent }, index) => (
						<Collapsible.Root
							key={faqSrc}
							open={openFaq[index]}
							onOpenChange={(open) => {
								setOpenFaq((prev) => {
									const newState = [...prev]
									newState[index] = open
									return newState
								})
							}}
						>
							{/* Button. */}
							<Collapsible.Trigger asChild>
								<button
									type="button"
									className={`flex w-full items-center rounded-lg border-2 px-4 py-2 text-left ${textClassName} ${borderClassName}`}
								>
									<section className="flex-1">
										<ReactMarkdown
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											components={components}
										>
											{buttonText}
										</ReactMarkdown>
									</section>
									<section>
										{openFaq[index] ? (
											<ChevronUpIcon
												className="ml-2 h-6 w-6"
												aria-hidden="true"
											/>
										) : (
											<ChevronDownIcon
												className="ml-2 h-6 w-6"
												aria-hidden="true"
											/>
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
					),
				)}
			</article>
		</section>
	)
}
