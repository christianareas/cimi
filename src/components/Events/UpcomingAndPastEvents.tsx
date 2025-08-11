"use client"

// Dependencies.
import { ChevronDownIcon } from "@radix-ui/react-icons"
import * as Select from "@radix-ui/react-select"
import parse from "html-react-parser"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Button from "@/components/Shared/Button"
import { initialCampaigns } from "@/data/content/events/initialCampaigns"
import fetchData from "@/lib/ui/fetchData"

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
		<section className="px-10 pb-10 sm:px-20 sm:pb-20">
			{/* Event selector and options. */}
			<section className="flex justify-center pb-10 sm:pb-20">
				<Select.Root
					value={selectedEvents.toString()}
					onValueChange={(value) => setSelectedEventType(Number(value))}
				>
					{/* Selector. */}
					<Select.Trigger
						className="flex w-xs items-center justify-between rounded-lg border border-cimi-red-orange bg-cimi-cream px-4 pt-1 pb-2 font-ancho font-bold text-cimi-red-orange text-lg sm:w-sm sm:text-2xl"
						aria-label="Upcoming or Past Events"
					>
						<Select.Value>
							<h2 className="pt-2">
								{upcomingAndPastEvents[selectedEventType].eventsHeading}
							</h2>
						</Select.Value>
						<Select.Icon>
							<ChevronDownIcon className="h-6 w-6 text-cimi-red-orange sm:h-8 sm:w-8" />
						</Select.Icon>
					</Select.Trigger>

					{/* Options. */}
					<Select.Portal>
						<Select.Content className="-top-5 absolute right-0 left-0 mx-auto">
							<Select.Viewport className="rounded-lg border border-cimi-red-orange bg-cimi-cream px-4 py-2 font-ancho font-bold text-cimi-red-orange text-lg sm:text-2xl">
								{upcomingAndPastEvents.map((event, index) => (
									<Select.Item key={event.eventsType} value={index.toString()}>
										<Select.ItemText>
											<h2 className="pt-2">{event.eventsHeading}</h2>
										</Select.ItemText>
									</Select.Item>
								))}
							</Select.Viewport>
						</Select.Content>
					</Select.Portal>
				</Select.Root>
			</section>

			{/* Events */}
			<section className="space-y-10 sm:space-y-20">
				{selectedEvents.events.length === 0 ? (
					<p className="flex justify-center p-5 text-gray-500 text-xs italic">
						No {selectedEvents.eventsType.replace("-", " ")}.
					</p>
				) : (
					selectedEvents.events.map((campaign) => (
						<article
							className="fade font-medium lg:mx-auto lg:flex lg:max-w-(--breakpoint-lg)"
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
								<Link href={campaign.campaignUrl}>
									<h3 className="font-ancho font-bold text-cimi-red-orange text-xl">
										{campaign.eventTitle}
									</h3>
								</Link>

								{campaign.eventStartAt ? (
									<h4 className="font-ancho font-medium text-cimi-red-orange">
										{campaign.eventEndAt
											? `${campaign.eventStartAt.replace(/\s*[A-Z]{2,4}$/, "")} – ${campaign.eventEndAt}`
											: campaign.eventStartAt}
									</h4>
								) : null}

								<section className="mt-4 mb-8 line-clamp-3 space-y-4 lg:line-clamp-5">
									{campaign.eventDetailsSimplified
										? parse(campaign.eventDetailsSimplified)
										: null}
								</section>

								<Button
									buttonText="Learn More"
									buttonLink={campaign.campaignUrl}
									buttonWidth="w-40"
									buttonClassNames="border-cimi-cream bg-cimi-red-orange text-cimi-cream shadow-cimi-red-orange"
									buttonType="button"
								/>
							</section>
						</article>
					))
				)}
			</section>
		</section>
	)
}
