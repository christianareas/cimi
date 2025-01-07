// Dependencies.
import fetchData from "@/lib/ui/fetchData"
import { use } from "react"

// Types.
type CampaignEvent = {
	campaignId: number
	campaignUrl: string
	campaignCoverType: string
	campaignCoverSource: string
	campaignCoverUrl: string
	campaignCoverEmbedUrl: string
	eventTitle: string
	eventDetails: string
	eventTimezone: string
	eventStartAt: string
	eventEndAt: string
	eventUpcoming: boolean
	eventPrivate: boolean
	eventAddress: string
	eventAddressFormatted: string
}

// Component.
export default function UpcomingAndPastEvents() {
	const { campaignEvents } = use(fetchData("/api/givebutterEvents", "cache"))
	const upcomingAndPastCampaignEvents = [
		{
			id: "upcoming-events",
			heading: "Upcoming Events",
			events: campaignEvents.filter(
				(campaignEvent: CampaignEvent) => campaignEvent.eventUpcoming,
			),
		},
		{
			id: "past-events",
			heading: "Past Events",
			events: campaignEvents.filter(
				(campaignEvent: CampaignEvent) => !campaignEvent.eventUpcoming,
			),
		},
	]

	// Render.
	return (
		<section>
			{upcomingAndPastCampaignEvents.map((upcomingAndPastCampaignEvent) => (
				<article key={upcomingAndPastCampaignEvent.id} className="px-20">
					<h2 className="pb-2">{upcomingAndPastCampaignEvent.heading}</h2>
					{upcomingAndPastCampaignEvent.events.map(
						(campaignEvent: CampaignEvent) => (
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
						),
					)}
				</article>
			))}
		</section>
	)
}
