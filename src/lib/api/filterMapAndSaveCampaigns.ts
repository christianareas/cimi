// Dependencies.
import formatDate from "@/util/formatDate"
import fs from "node:fs/promises"
import path from "node:path"

// Types.
type Campaign = {
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
	event?: Event
	created_at: string
	updated_at: string
}

type Event = {
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

// Filter, map, and save campaign events.
export default async function filterMapAndSaveCampaigns(data: Campaign[]) {
	// Filter and map.
	const now = new Date()
	const campaigns = data
		.filter(
			(campaign) =>
				campaign.status === "active" &&
				["event", "fundraise"].includes(campaign.type) &&
				campaign.end_at !== null,
		)
		.map((campaign) => ({
			campaignId: campaign.id,
			campaignAccountId: campaign.account_id,
			campaignType: campaign.type === "fundraise" ? "page" : campaign.type,
			campaignTitle: campaign.title,
			campaignSubtitle: campaign.subtitle,
			campaignCoverType: campaign.cover?.type || null,
			campaignCoverSource: campaign.cover?.source || null,
			campaignCoverUrl: campaign.cover?.url || null,
			campaignCoverEmbedUrl: campaign.cover?.embed_url || null,
			campaignDescription: campaign.description,
			campaignCode: campaign.code,
			campaignSlug: campaign.slug,
			campaignUrl: campaign.url,
			campaignCurrency: campaign.currency,
			campaignGoal: campaign.goal,
			campaignRaised: campaign.raised,
			campaignDonors: campaign.donors,
			campaignTimezone: campaign.timezone,
			campaignCreatedAt: campaign.created_at
				? formatDate(campaign.created_at, campaign.timezone)
				: null,
			campaignUpdatedAt: campaign.updated_at
				? formatDate(campaign.updated_at, campaign.timezone)
				: null,
			campaignEndAt: campaign.end_at
				? formatDate(campaign.end_at, campaign.timezone)
				: null,
			eventId: campaign.event_id,
			eventType: campaign.event?.type || null,
			eventTitle: campaign.event?.title || null,
			eventDetails: campaign.event?.details || null,
			eventPrivate: campaign.event?.private || null,
			eventTicketsRequired: campaign.event?.tickets_required || null,
			eventAddress: campaign.event?.location_name || null,
			eventAddressFormatted: campaign.event?.address_formatted || null,
			eventGooglePlaceId: campaign.event?.google_place_id || null,
			eventTimezone: campaign.event?.timezone || null,
			eventStartAt: campaign.event?.start_at
				? formatDate(campaign.event?.start_at, campaign.event?.timezone)
				: null,
			eventEndAt: campaign.event?.end_at
				? formatDate(campaign.event?.end_at, campaign.event?.timezone)
				: null,
			eventUpcoming:
				campaign.event?.start_at != null
					? new Date(campaign.event.start_at) > now
					: null,
			eventLivestream: campaign.event?.livestream || null,
			eventLivestreamStartAt: campaign.event?.livestream_start_at || null,
			eventLivestreamEndAt: campaign.event?.livestream_end_at || null,
		}))

	// Save.
	if (
		process.env.NODE_ENV === "development" ||
		process.env.VERCEL_ENV === "development"
	) {
		try {
			await fs.writeFile(
				path.join(
					process.cwd(),
					"/src/data/content/events/initialCampaigns.ts",
				),
				`export const initialCampaigns = ${JSON.stringify(campaigns, null, 2)}`,
				"utf8",
			)
		} catch (error) {
			console.error(error)
		}
	}

	return campaigns
}
