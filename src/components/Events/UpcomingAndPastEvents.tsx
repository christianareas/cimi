"use client"

// Dependencies.
import { useState, useEffect } from "react"
import { initialCampaigns } from "@/data/content/events/initialCampaigns"
import fetchData from "@/lib/ui/fetchData"
import * as Select from "@radix-ui/react-select"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/Shared/Button"

// Component.
export default function UpcomingAndPastEvents() {
	// Set the initial state.
	const [campaigns, setCampaigns] = useState(initialCampaigns)
	const [selectedEventType, setSelectedEventType] = useState(0)

	// Fetch the latest campaigns.
	useEffect(() => {
		async function fetchCampaigns() {
			try {
				const response = await fetchData({
					method: "GET",
					endpoint: "/api/givebutterCampaigns",
					cache: "no-cache",
				})
				const latestCampaigns = response.campaigns
				setCampaigns(latestCampaigns)
			} catch (error) {
				console.error(error)
			}
		}
		fetchCampaigns()
	}, [])

	// Prepare the upcoming and past events.
	const upcomingAndPastEvents = [
		{
			eventsType: "upcoming-events",
			eventsHeading: "Upcoming Events",
			events: campaigns
				.filter(
					(campaign) =>
						campaign.campaignType === "event" && campaign.eventUpcoming,
				)
				.sort((a, b) => {
					if (!a.eventStartAt && !b.eventStartAt) return 0
					if (!a.eventStartAt) return 1
					if (!b.eventStartAt) return -1
					return (
						new Date(a.eventStartAt).getTime() -
						new Date(b.eventStartAt).getTime()
					)
				}),
		},
		{
			eventsType: "past-events",
			eventsHeading: "Past Events",
			events: campaigns
				.filter(
					(campaign) =>
						campaign.campaignType === "event" && !campaign.eventUpcoming,
				)
				.sort((a, b) => {
					if (!a.eventStartAt && !b.eventStartAt) return 0
					if (!a.eventStartAt) return 1
					if (!b.eventStartAt) return -1
					return (
						new Date(b.eventStartAt).getTime() -
						new Date(a.eventStartAt).getTime()
					)
				}),
		},
	]

	// Get the selected events.
	const selectedEvents = upcomingAndPastEvents[selectedEventType]

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
						value={selectedEvents.toString()}
						onValueChange={(value) => setSelectedEventType(Number(value))}
					>
						<Select.Trigger
							className="flex w-96 justify-between rounded-lg border border-cimi-red-orange py-1 pr-3 pl-4 font-ancho font-bold text-2xl text-cimi-red-orange"
							aria-label="Upcoming or Past Events"
						>
							<Select.Value>
								<h2 className="pt-1">
									{upcomingAndPastEvents[selectedEventType].eventsHeading}
								</h2>
							</Select.Value>
							<Select.Icon>
								<ChevronDownIcon className="h-8 w-8 text-cimi-red-orange" />
							</Select.Icon>
						</Select.Trigger>
						<Select.Portal>
							<Select.Content>
								<Select.Viewport className="rounded-lg border border-cimi-red-orange bg-cimi-cream px-4 py-2 font-ancho font-bold text-2xl text-cimi-red-orange">
									{upcomingAndPastEvents.map((event, index) => (
										<Select.Item
											key={event.eventsType}
											value={index.toString()}
										>
											<h2 className="pt-1">
												<Select.ItemText>{event.eventsHeading}</Select.ItemText>
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
				{selectedEvents.events.length === 0 ? (
					<p className="flex justify-center p-5 text-gray-500 text-xs italic">
						No {selectedEvents.eventsType.replace("-", " ")}.
					</p>
				) : (
					selectedEvents.events.map((campaign) => (
						<article
							className="py-10 font-medium lg:mx-auto lg:flex lg:max-w-(--breakpoint-lg)"
							key={campaign.campaignId}
						>
							<section className="pb-10 lg:w-1/2 lg:pr-10">
								{campaign.campaignCoverType === "image" &&
								campaign.campaignCoverUrl ? (
									<section className="relative aspect-video">
										<Link href={campaign.campaignUrl}>
											<Image
												src={campaign.campaignCoverUrl}
												alt="Learn More"
												fill
												className="rounded-lg object-cover"
											/>
										</Link>
									</section>
								) : null}
							</section>

							<section className="lg:w-1/2 lg:pl-10">
								<h3 className="font-ancho font-bold text-cimi-red-orange text-xl">
									{campaign.eventTitle}
								</h3>

								{campaign.eventStartAt ? (
									<h4 className="font-ancho font-medium text-cimi-red-orange">
										{campaign.eventEndAt
											? `${campaign.eventStartAt.replace(/\s*[A-Z]{2,4}$/, "")} – ${campaign.eventEndAt}`
											: campaign.eventStartAt}
									</h4>
								) : null}

								<section className="pt-4 pb-10">
									{campaign.eventDetails}
								</section>

								<Button
									buttonText="Learn More"
									buttonLink={campaign.campaignUrl}
									buttonWidth="w-40"
									buttonColorScheme="cimi-red-orange-dark"
								/>
							</section>
						</article>
					))
				)}
			</section>
		</section>
	)
}
