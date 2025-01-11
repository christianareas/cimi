"use client"

// Dependencies.
import { useState, useEffect } from "react"
import { campaignEvents as initialCampaignEvents } from "@/data/content/events/campaignEvents"
import fetchData from "@/lib/ui/fetchData"

// Component.
export default function UpcomingAndPastEvents() {
	// Set the initial state.
	const [campaignEvents, setCampaignEvents] = useState(initialCampaignEvents)

	// Fetch the latest campaign events.
	useEffect(() => {
		async function fetchCampaignEvents() {
			const response = await fetchData(
				"/api/givebutterEvents",
				"no-cache",
			)
			const freshCampaignEvents = response.campaignEvents
			setCampaignEvents(freshCampaignEvents)
		}
		fetchCampaignEvents()
	}, [])

	// Prepare the upcoming and past events.
	const upcomingAndPastCampaignEvents = [
		{
			id: "upcoming-events",
			heading: "Upcoming Events",
			events: campaignEvents.filter(
				(campaignEvent) => campaignEvent.eventUpcoming,
			),
		},
		{
			id: "past-events",
			heading: "Past Events",
			events: campaignEvents.filter(
				(campaignEvent) => !campaignEvent.eventUpcoming,
			),
		},
	]

	// Render.
	return (
		<section>
			{upcomingAndPastCampaignEvents.map((upcomingAndPastCampaignEvent) => (
				<article key={upcomingAndPastCampaignEvent.id} className="px-20">
					<h2 className="pb-2">{upcomingAndPastCampaignEvent.heading}</h2>
					{upcomingAndPastCampaignEvent.events.map((campaignEvent) => (
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
