"use client"

// Dependencies.
import { useState, useEffect } from "react"
import { initialCampaignEvents } from "@/data/content/events/initialCampaignEvents"
import fetchData from "@/lib/ui/fetchData"

// Component.
export default function UpcomingAndPastEvents() {
	// Set the initial state.
	const [campaignEvents, setCampaignEvents] = useState(initialCampaignEvents)

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

	// Render.
	return (
		<section>
			{upcomingAndPastCampaignEvents.map((upcomingOrPastCampaignEvents) => (
				<article
					key={upcomingOrPastCampaignEvents.eventsType}
					className="px-20"
				>
					<h2 className="pb-2">{upcomingOrPastCampaignEvents.eventsHeading}</h2>
					{upcomingOrPastCampaignEvents.events.map((campaignEvent) => (
						<section className="pb-10" key={campaignEvent.campaignId}>
							<h3>{campaignEvent.eventTitle}</h3>
							<p>
								<a href={campaignEvent.campaignUrl}>
									{campaignEvent.campaignUrl}
								</a>
							</p>
							<p>
								<strong>eventPrivate:</strong>{" "}
								{campaignEvent.eventPrivate ? "Yes" : "No"}
							</p>
							<p>
								<strong>eventAddress:</strong>{" "}
								{campaignEvent.eventPrivate
									? "Private"
									: campaignEvent.eventAddress}
							</p>
							<p>
								<strong>eventAddressFormatted:</strong>{" "}
								{campaignEvent.eventPrivate
									? "Private"
									: campaignEvent.eventAddressFormatted}
							</p>
						</section>
					))}
				</article>
			))}
		</section>
	)
}
