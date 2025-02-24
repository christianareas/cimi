"use client"

// Dependencies.
import { useState, useEffect } from "react"
import { testimonials } from "@/data/content/home/testimonials"
import * as Tabs from "@radix-ui/react-tabs"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import Image from "next/image"

// Component.
export default function Testimonials() {
	// Set the initial state.
	const [currentTab, setCurrentTab] = useState(
		testimonials[0].testimonialTabName,
	)

	// Switch to the next or previous tab.
	function switchTab(direction: number) {
		// Current tab index.
		const currentTabIndex = testimonials.findIndex(
			({ testimonialTabName }) => testimonialTabName === currentTab,
		)
		// Next or previous tab index.
		const nextOrPreviousTabIndex =
			(currentTabIndex + direction + testimonials.length) % testimonials.length

		setCurrentTab(testimonials[nextOrPreviousTabIndex].testimonialTabName)
	}

	// Automatically switch to the next tab.
	useEffect(() => {
		const tabSwitchInterval = setInterval(() => {
			setCurrentTab((previousTab) => {
				// Current tab index.
				const currentTabIndex = testimonials.findIndex(
					({ testimonialTabName }) => testimonialTabName === previousTab,
				)
				// Next tab index.
				const nextTabIndex =
					currentTabIndex === testimonials.length - 1 ? 0 : currentTabIndex + 1

				return testimonials[nextTabIndex].testimonialTabName
			})
		}, 5000)

		// Reset.
		return () => clearInterval(tabSwitchInterval)
	}, [])

	// Get the current testimonial.
	const currentTestimonial = testimonials.find(
		({ testimonialTabName }) => testimonialTabName === currentTab,
	)

	// Render.
	return (
		<section className="bg-cimi-red-orange px-5 py-10 text-center font-normal sm:px-10 sm:py-20 lg:text-left">
			<section className="lg:mx-auto lg:max-w-5xl">
				<Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
					<Tabs.List className="hidden">
						{testimonials.map(({ testimonialTabName }) => (
							<Tabs.Trigger
								key={testimonialTabName}
								value={testimonialTabName}
							/>
						))}
					</Tabs.List>

					{/* Heading. */}
					<h2 className="pb-5 text-center font-ancho font-bold text-2xl text-cimi-cream">
						Testimonials of Members
					</h2>

					<section className="mx-auto grid grid-cols-[1fr_5fr_1fr] items-center py-2 text-cimi-cream">
						{/* Previous tab */}
						<button type="button" onClick={() => switchTab(-1)}>
							<ChevronLeftIcon className="mr-3 ml-auto h-8 w-8 cursor-pointer text-cimi-cream md:mr-10 lg:mr-20" />
						</button>

						{/* Testimonial. */}
						{currentTestimonial && (
							<article
								key={currentTab}
								className="fade lg:grid lg:grid-cols-2 lg:gap-10"
							>
								<section className="relative mb-5 w-full pb-[100%] lg:mb-0">
									<Image
										src={currentTestimonial.testimonialImgSrc}
										alt={currentTestimonial.testimonialImgAlt}
										fill
										sizes="(max-width: 1024px) 100vw, 50vw"
										className="absolute inset-0 mx-auto mb-5 rounded-lg object-cover lg:mb-0"
									/>
								</section>

								<section>
									<p className="font-ancho text-3xl">“</p>
									<p>{currentTestimonial.testimonial}</p>
									<p className="pt-5 font-ancho text-3xl">”</p>
									<p className="font-bold text-xs">
										&ndash;{currentTestimonial.testimonialSrc}
									</p>
								</section>
							</article>
						)}

						{/* Next tab */}
						<button type="button" onClick={() => switchTab(1)}>
							<ChevronRightIcon className="mr-auto ml-3 h-8 w-8 cursor-pointer text-cimi-cream md:ml-10 lg:ml-20" />
						</button>
					</section>
				</Tabs.Root>
			</section>
		</section>
	)
}
