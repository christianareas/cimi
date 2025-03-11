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
interface FaqProps {
	faqsName: "member" | "volunteer" | "donor"
	textClassName:
		| "text-cimi-blue" // cimi-blue
		| "text-cimi-green" // cimi-green
	borderClassName:
		| "border-cimi-blue" // cimi-blue
		| "border-cimi-green" // cimi-green
}

// Component.
export default function Faqs({
	faqsName,
	textClassName,
	borderClassName,
}: FaqProps) {
	// FAQs source.
	const faqsSrc = {
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
		const buttonTextRegex = /^(### .+)/m
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
		h3: ({ children, ...props }: React.ComponentProps<"h3">) => (
			<h3 className="font-bold" {...props}>
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
			<h2
				className={`pb-5 text-center font-ancho font-bold text-2xl ${textClassName}`}
			>
				{faqsName.charAt(0).toUpperCase() + faqsName.slice(1)} FAQs
			</h2>

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
									className={`flex w-full items-center rounded-lg border-2 px-4 py-2 text-left font-ancho font-bold text-lg ${textClassName} ${borderClassName}`}
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
