"use client"

// Dependencies.
import { useState } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import TestimonialCard from "@/components/design/Home/TestimonialCard"

// Component.
export default function Testimonials() {
	// Set the initial state.
	const [currentTab, setCurrentTab] = useState("first-tab")

	// Tabs.
	const tabs = ["first-tab", "second-tab", "third-tab"]

	// Switch to the previous tab.
	function switchToPreviousTab() {
		const currentIndex = tabs.indexOf(currentTab)
		const previousIndex =
			currentIndex === 0 ? tabs.length - 1 : currentIndex - 1
		setCurrentTab(tabs[previousIndex])
	}

	// Switch to the next tab.
	function switchToNextTab() {
		const currentIndex = tabs.indexOf(currentTab)
		const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1
		setCurrentTab(tabs[nextIndex])
	}

	// Render.
	return (
		<section className="bg-cimi-red px-10 py-20 text-center font-normal lg:text-left">
			<section className="lg:mx-auto lg:max-w-screen-lg">
				<Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
					<Tabs.List className="hidden">
						<Tabs.Trigger value="first-tab" />
						<Tabs.Trigger value="second-tab" />
						<Tabs.Trigger value="third-tab" />
					</Tabs.List>
					<h2 className="pb-5 text-center font-ancho font-bold text-2xl text-cimi-cream">
						Testimonials of Members
					</h2>

					<section className="mx-auto grid grid-cols-[1fr,5fr,1fr] items-center py-2 text-cimi-cream">
						<button type="button" onClick={switchToPreviousTab}>
							<ChevronLeftIcon className="mr-3 ml-auto h-8 w-8 cursor-pointer text-cimi-cream md:mr-10 lg:mr-20" />
						</button>

						<Tabs.Content value="first-tab">
							<TestimonialCard
								imgSrc="/images/home/testimonials/maria-perla.jpg"
								imgAlt="Maria Perla"
								contentSrc="In these 3 years of being a member, I am part of a great community that helps girls learn how to code and be a better person."
								testimonialSrc="High school student"
							/>
						</Tabs.Content>

						<Tabs.Content value="second-tab">
							<p>Second tab.</p>
						</Tabs.Content>

						<Tabs.Content value="third-tab">
							<p>Third tab.</p>
						</Tabs.Content>

						<button type="button" onClick={switchToNextTab}>
							<ChevronRightIcon className="mr-auto ml-3 h-8 w-8 cursor-pointer text-cimi-cream md:ml-10 lg:ml-20" />
						</button>
					</section>
				</Tabs.Root>
			</section>
		</section>
	)
}
