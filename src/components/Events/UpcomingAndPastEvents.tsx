"use client"

// Dependencies.
import { useState, useEffect } from "react"
import { initialCampaignEvents } from "@/data/content/events/initialCampaignEvents"
import fetchData from "@/lib/ui/fetchData"
import * as Select from "@radix-ui/react-select"
import { ChevronDownIcon } from "@radix-ui/react-icons"

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
			{/* Event Selector */}
			<section className="mx-auto pb-20">
				<section className="flex flex-col items-center justify-center">
					<Select.Root
						value={selectedCampaignEvents.toString()}
						onValueChange={(value) =>
							setSelectedCampaignEventType(Number(value))
						}
					>
						<Select.Trigger
							className="flex rounded-lg border border-cimi-red-orange py-0 pr-2 pl-4"
							aria-label="Upcoming or Past Events"
						>
							<Select.Value>
								<h2 className="pt-2 pr-1 pb-1 font-ancho font-bold text-2xl text-cimi-red-orange">
									{
										upcomingAndPastCampaignEvents[selectedCampaignEventType]
											.eventsHeading
									}
								</h2>
							</Select.Value>
							<Select.Icon>
								<ChevronDownIcon className="mt-1 h-8 w-8 text-cimi-red-orange" />
							</Select.Icon>
						</Select.Trigger>
						<Select.Portal>
							<Select.Content className="">
								<Select.Viewport className="mx-auto flex flex-col items-center justify-center rounded-lg border border-cimi-red-orange bg-cimi-cream px-5 py-2">
									{upcomingAndPastCampaignEvents.map((group, index) => (
										<Select.Item
											key={group.eventsType}
											value={index.toString()}
										>
											<h2 className="pt-1 pr-2 font-ancho font-bold text-2xl text-cimi-red-orange">
												<Select.ItemText>{group.eventsHeading}</Select.ItemText>
											</h2>
										</Select.Item>
									))}
								</Select.Viewport>
							</Select.Content>
						</Select.Portal>
					</Select.Root>
				</section>

				{/* Events */}
				{selectedCampaignEvents.events.length === 0 ? (
					<p className="flex justify-center p-5 text-gray-500 text-xs italic">
						No {selectedCampaignEvents.eventsType.replace("-", " ")}.
					</p>
				) : (
					selectedCampaignEvents.events.map((campaignEvent) => (
						<article className="py-10" key={campaignEvent.campaignId}>
							<h3 className="font-ancho font-bold text-cimi-red-orange text-xl">
								{campaignEvent.eventTitle}
							</h3>
							<h4 className="font-ancho font-medium text-cimi-red-orange">
								{campaignEvent.eventStartAt
									? `${campaignEvent.eventStartAt} – `
									: null}
								{campaignEvent.eventEndAt}
							</h4>
							<section>{campaignEvent.eventDetails}</section>
						</article>
					))
				)}
			</section>
		</section>
	)
}
