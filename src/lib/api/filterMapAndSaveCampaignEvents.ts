// Dependencies.
import path from "node:path"
import fs from "node:fs/promises"

// Types.
type CampaignEvent = {
	id: number
	code: string
	account_id: string
	event_id: number | null
	type: string
	title: string
	subtitle: string | null
	description: string | null
	slug: string
	url: string
	goal: number | null
	raised: number
	donors: number
	currency: string
	cover: { url: string; type: string; source: string; embed_url: string } | null
	status: string
	timezone: string
	end_at: string | null
	event?: {
		title: string
		type: string
		location_name: string | null
		address_formatted: string | null
		google_place_id: string | null
		start_at: string | null
		end_at: string | null
		timezone: string
		details: string | null
		private: boolean
		tickets_required: boolean
		livestream: string | null
		livestream_start_at: string | null
		livestream_end_at: string | null
	}
	created_at: string
	updated_at: string
}

// Filter, map, and save campaign events.
export default function filterMapAndSaveCampaignEvents(data: CampaignEvent[]) {
	// Filter and map.
	const now = new Date()
	const campaignEvents = data
		.filter(
			(campaignEvent) =>
				campaignEvent.type === "event" && campaignEvent.status === "active",
		)
		.map((campaignEvent) => ({
			campaignId: campaignEvent.id,
			campaignTitle: campaignEvent.title,
			campaignSubtitle: campaignEvent.subtitle,
			campaignCoverType: campaignEvent.cover?.type || null,
			campaignCoverSource: campaignEvent.cover?.source || null,
			campaignCoverUrl: campaignEvent.cover?.url || null,
			campaignCoverEmbedUrl: campaignEvent.cover?.embed_url || null,
			campaignDescription: campaignEvent.description,
			campaignSlug: campaignEvent.slug,
			campaignUrl: campaignEvent.url,
			campaignCurrency: campaignEvent.currency,
			campaignGoal: campaignEvent.goal,
			campaignRaised: campaignEvent.raised,
			campaignDonors: campaignEvent.donors,
			campaignTimezone: campaignEvent.timezone,
			campaignCreatedAt: campaignEvent.created_at,
			campaignUpdatedAt: campaignEvent.updated_at,
			campaignEndAt: campaignEvent.end_at,
			eventId: campaignEvent.event_id,
			eventType: campaignEvent.event?.type || null,
			eventTitle: campaignEvent.event?.title || null,
			eventDetails: campaignEvent.event?.details || null,
			eventPrivate: campaignEvent.event?.private || null,
			eventTicketsRequired: campaignEvent.event?.tickets_required || null,
			eventAddress: campaignEvent.event?.location_name || null,
			eventAddressFormatted: campaignEvent.event?.address_formatted || null,
			eventGooglePlaceId: campaignEvent.event?.google_place_id || null,
			eventTimezone: campaignEvent.event?.timezone || null,
			eventStartAt: campaignEvent.event?.start_at || null,
			eventEndAt: campaignEvent.event?.end_at || null,
			eventUpcoming: campaignEvent.event?.end_at
				? new Date(campaignEvent.event.end_at) > now
				: false,
			eventLivestream: campaignEvent.event?.livestream || null,
			eventLivestreamStartAt: campaignEvent.event?.livestream_start_at || null,
			eventLivestreamEndAt: campaignEvent.event?.livestream_end_at || null,
		}))

	// Save.
	if (
		process.env.NODE_ENV === "development" ||
		process.env.VERCEL_ENV === "development"
	) {
		try {
			fs.writeFile(
				path.join(process.cwd(), "/src/data/content/events/campaignEvents.ts"),
				`export const campaignEvents = ${JSON.stringify(campaignEvents, null, 2)}`,
				"utf8",
			)
		} catch (error) {
			console.error(error)
		}
	}

	return campaignEvents
}
