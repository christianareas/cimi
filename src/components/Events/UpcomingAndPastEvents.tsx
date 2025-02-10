"use client"

// Dependencies.
import { useState, useEffect } from "react"
import { initialCampaignEvents } from "@/data/content/events/initialCampaignEvents"
import fetchData from "@/lib/ui/fetchData"
import * as Select from "@radix-ui/react-select"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import Image from "next/image"

// Component.
export default function UpcomingAndPastEvents() {
	// Set the initial state.
	const [campaignEvents, setCampaignEvents] = useState(initialCampaignEvents)
	const [selectedCampaignEventType, setSelectedCampaignEventType] = useState(0)

	// Fetch the latest campaign events.
	useEffect(() => {
		async function fetchCampaignEvents() {
			try {
				const response = await fetchData("/api/givebutterEvents", "no-cache")
				const latestCampaignEvents = response.campaignEvents
				setCampaignEvents(latestCampaignEvents)
			} catch (error) {
				console.error(error)
			}
		}
		fetchCampaignEvents()
	}, [])

	// Prepare the upcoming and past events.
	const upcomingAndPastCampaignEvents = [
		{
			eventsType: "upcoming-events",
			eventsHeading: "Upcoming Events",
			events: campaignEvents.filter(
				(campaignEvent) => campaignEvent.eventUpcoming,
			),
		},
		{
			eventsType: "past-events",
			eventsHeading: "Past Events",
			events: campaignEvents.filter(
				(campaignEvent) => !campaignEvent.eventUpcoming,
			),
		},
	]

	// Get the selected events.
	const selectedCampaignEvents =
		upcomingAndPastCampaignEvents[selectedCampaignEventType]

	// Render.
	return (
		<section className="px-20">
			{/*
				**************
				Event Selector
				**************
			*/}
			<section className="mx-auto pb-20">
				<section className="flex justify-center">
					<Select.Root
						value={selectedCampaignEvents.toString()}
						onValueChange={(value) =>
							setSelectedCampaignEventType(Number(value))
						}
					>
						<Select.Trigger
							className="flex w-96 justify-between rounded-lg border border-cimi-red-orange py-1 pr-3 pl-4 font-ancho font-bold text-2xl text-cimi-red-orange"
							aria-label="Upcoming or Past Events"
						>
							<Select.Value>
								<h2 className="pt-1">
									{
										upcomingAndPastCampaignEvents[selectedCampaignEventType]
											.eventsHeading
									}
								</h2>
							</Select.Value>
							<Select.Icon>
								<ChevronDownIcon className="h-8 w-8 text-cimi-red-orange" />
							</Select.Icon>
						</Select.Trigger>
						<Select.Portal>
							<Select.Content>
								<Select.Viewport className="rounded-lg border border-cimi-red-orange bg-cimi-cream px-4 py-2 font-ancho font-bold text-2xl text-cimi-red-orange">
									{upcomingAndPastCampaignEvents.map((campaignEvent, index) => (
										<Select.Item
											key={campaignEvent.eventsType}
											value={index.toString()}
										>
											<h2 className="pt-1">
												<Select.ItemText>
													{campaignEvent.eventsHeading}
												</Select.ItemText>
											</h2>
										</Select.Item>
									))}
								</Select.Viewport>
							</Select.Content>
						</Select.Portal>
					</Select.Root>
				</section>

				{/*
					******
					Events
					******
				*/}
				{selectedCampaignEvents.events.length === 0 ? (
					<p className="flex justify-center p-5 text-gray-500 text-xs italic">
						No {selectedCampaignEvents.eventsType.replace("-", " ")}.
					</p>
				) : (
					selectedCampaignEvents.events.map((campaignEvent) => (
						<article
							className="py-10 font-medium lg:mx-auto lg:flex lg:max-w-(--breakpoint-lg)"
							key={campaignEvent.campaignId}
						>
							<section className="pb-10 lg:w-1/2 lg:pr-10">
								{campaignEvent.campaignCoverType === "image" &&
								campaignEvent.campaignCoverUrl ? (
									<section className="relative aspect-video">
										<Image
											src={campaignEvent.campaignCoverUrl}
											alt="Learn More"
											fill
											className="rounded-lg object-cover"
										/>
									</section>
								) : null}
							</section>

							<section className="lg:w-1/2 lg:pl-10">
								<h3 className="font-ancho font-bold text-cimi-red-orange text-xl">
									{campaignEvent.eventTitle}
								</h3>

								{campaignEvent.eventStartAt ? (
									<h4 className="font-ancho font-medium text-cimi-red-orange">
										{campaignEvent.eventEndAt
											? `${campaignEvent.eventStartAt.replace(/\s*[A-Z]{2,4}$/, "")} – ${campaignEvent.eventEndAt}`
											: campaignEvent.eventStartAt}
									</h4>
								) : null}

								<section className="pt-4 pb-10">
									{campaignEvent.eventDetails}
								</section>

								<Link href={campaignEvent.campaignUrl}>
									<Image
										src="/images/buttons/learn-more.svg"
										alt="Learn More"
										width={163}
										height={47}
									/>
								</Link>
							</section>
						</article>
					))
				)}
			</section>
		</section>
	)
}
