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
	cover: { url: string; type: string; source: string } | null
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

// Filter and map campaign events.
export default function filterAndMapCampaignEvents(data: CampaignEvent[]) {
	return data
		.filter((campaignEvent) => campaignEvent.type === "event")
		.map((campaignEvent) => ({
			campaignId: campaignEvent.id,
			campaignStatus: campaignEvent.status,
			campaignTitle: campaignEvent.title,
			campaignSubtitle: campaignEvent.subtitle,
			campaignCoverUrl: campaignEvent.cover?.url,
			campaignCoverType: campaignEvent.cover?.type,
			campaignCoverSource: campaignEvent.cover?.source,
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
			eventType: campaignEvent.event?.type,
			eventTitle: campaignEvent.event?.title,
			eventDetails: campaignEvent.event?.details,
			eventPrivate: campaignEvent.event?.private,
			eventTicketsRequired: campaignEvent.event?.tickets_required,
			eventAddress: campaignEvent.event?.location_name,
			eventAddressFormatted: campaignEvent.event?.address_formatted,
			eventGooglePlaceId: campaignEvent.event?.google_place_id,
			eventTimezone: campaignEvent.event?.timezone,
			eventStartAt: campaignEvent.event?.start_at,
			eventEndAt: campaignEvent.event?.end_at,
			eventLivestream: campaignEvent.event?.livestream,
			eventLivestreamStartAt: campaignEvent.event?.livestream_start_at,
			eventLivestreamEndAt: campaignEvent.event?.livestream_end_at,
		}))
}
