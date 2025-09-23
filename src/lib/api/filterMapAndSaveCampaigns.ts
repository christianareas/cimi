// Dependencies.
import { sql } from "drizzle-orm"
import { db } from "@/db"
import { campaign } from "@/db/schema"

// Types.
interface Campaign {
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

interface Event {
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

export interface FilteredAndMappedCampaign {
	campaignId: number
	campaignAccountId: string
	campaignType: string
	campaignTitle: string
	campaignSubtitle: string | null
	campaignCoverType: string | null
	campaignCoverSource: string | null
	campaignCoverUrl: string | null
	campaignCoverEmbedUrl: string | null
	campaignDescription: string | null
	campaignDescriptionSimplified: string | null
	campaignCode: string
	campaignSlug: string
	campaignUrl: string
	campaignCurrency: string
	campaignGoal: number | null
	campaignRaised: number
	campaignDonors: number
	campaignTimezone: string
	campaignCreatedAt: Date | null
	campaignUpdatedAt: Date | null
	campaignEndAt: Date | null
	eventId: number | null
	eventType: string | null
	eventTitle: string | null
	eventDetails: string | null
	eventDetailsSimplified: string | null
	eventPrivate: boolean | null
	eventTicketsRequired: boolean | null
	eventAddress: string | null
	eventAddressFormatted: string | null
	eventGooglePlaceId: string | null
	eventTimezone: string | null
	eventStartAt: Date | null
	eventEndAt: Date | null
	eventUpcoming: boolean | null
	eventLivestream: string | null
	eventLivestreamStartAt: string | null
	eventLivestreamEndAt: string | null
}

// Filter, map, and save campaign events.
export default async function filterMapAndSaveCampaigns(data: Campaign[]) {
	// Filter and map.
	const now = new Date()
	const campaigns: FilteredAndMappedCampaign[] = data
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
			campaignDescriptionSimplified: campaign.description
				? campaign.description
						.replace(/<[^>]*>/g, "")
						.replace(/&nbsp;/g, " ")
						.replace(/\n/g, " ")
						.replace(/\s\s+/g, " ")
						.trim()
				: null,
			campaignCode: campaign.code,
			campaignSlug: campaign.slug,
			campaignUrl: campaign.url,
			campaignCurrency: campaign.currency,
			campaignGoal: campaign.goal,
			campaignRaised: campaign.raised,
			campaignDonors: campaign.donors,
			campaignTimezone: campaign.timezone,
			campaignCreatedAt: campaign.created_at
				? new Date(campaign.created_at)
				: null,
			campaignUpdatedAt: campaign.updated_at
				? new Date(campaign.updated_at)
				: null,
			campaignEndAt: campaign.end_at ? new Date(campaign.end_at) : null,
			eventId: campaign.event_id,
			eventType: campaign.event?.type || null,
			eventTitle: campaign.event?.title || null,
			eventDetails: campaign.event?.details || null,
			eventDetailsSimplified: campaign.event?.details
				? campaign.event.details
						.replace(/<[^>]*>/g, "")
						.replace(/&nbsp;/g, " ")
						.replace(/\n/g, " ")
						.replace(/\s\s+/g, " ")
						.trim()
				: null,
			eventPrivate: campaign.event?.private ?? null,
			eventTicketsRequired: campaign.event?.tickets_required ?? null,
			eventAddress: campaign.event?.location_name || null,
			eventAddressFormatted: campaign.event?.address_formatted || null,
			eventGooglePlaceId: campaign.event?.google_place_id || null,
			eventTimezone: campaign.event?.timezone || null,
			eventStartAt: campaign.event?.start_at
				? new Date(campaign.event.start_at)
				: null,
			eventEndAt: campaign.event?.end_at
				? new Date(campaign.event.end_at)
				: null,
			eventUpcoming:
				campaign.event?.start_at != null
					? new Date(campaign.event.start_at) > now
					: null,
			eventLivestream: campaign.event?.livestream || null,
			eventLivestreamStartAt: campaign.event?.livestream_start_at || null,
			eventLivestreamEndAt: campaign.event?.livestream_end_at || null,
		}))

	if (campaigns.length === 0) return campaigns

	try {
		await db
			.insert(campaign)
			.values(
				campaigns.map((campaign) => ({
					campaignId: campaign.campaignId,
					campaignType: campaign.campaignType,
					campaignTimezone: campaign.campaignTimezone,
					campaignCreatedAt: campaign.campaignCreatedAt,
					campaignUpdatedAt: campaign.campaignUpdatedAt,
					campaignEndAt: campaign.campaignEndAt,
					campaignTitle: campaign.campaignTitle,
					campaignSubtitle: campaign.campaignSubtitle,
					campaignDescription: campaign.campaignDescription,

					eventId: campaign.eventId,
					eventType: campaign.eventType,
					eventTitle: campaign.eventTitle,
					eventDetails: campaign.eventDetails,
					eventTimezone: campaign.eventTimezone,
					eventStartAt: campaign.eventStartAt,
					eventEndAt: campaign.eventEndAt,

					rawJson: campaign,
				})),
			)
			.onConflictDoUpdate({
				target: campaign.campaignId,
				set: {
					campaignType: sql`excluded.campaign_type`,
					campaignTimezone: sql`excluded.campaign_timezone`,
					campaignCreatedAt: sql`excluded.campaign_created_at`,
					campaignUpdatedAt: sql`excluded.campaign_updated_at`,
					campaignEndAt: sql`excluded.campaign_end_at`,
					campaignTitle: sql`excluded.campaign_title`,
					campaignSubtitle: sql`excluded.campaign_subtitle`,
					campaignDescription: sql`excluded.campaign_description`,
					eventId: sql`excluded.event_id`,
					eventType: sql`excluded.event_type`,
					eventTitle: sql`excluded.event_title`,
					eventDetails: sql`excluded.event_details`,
					eventTimezone: sql`excluded.event_timezone`,
					eventStartAt: sql`excluded.event_start_at`,
					eventEndAt: sql`excluded.event_end_at`,
					rawJson: sql`excluded.raw_json`,
				},
			})
	} catch (error) {
		console.error(error)
	}

	return campaigns
}
