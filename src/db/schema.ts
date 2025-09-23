// Dependencies.
import { integer, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import type { FilteredAndMappedCampaign } from "@/lib/api/filterMapAndSaveCampaigns"

// Givebutter campaign.
export const campaign = pgTable("campaign", {
	// Campaign.
	campaignId: integer("campaign_id").primaryKey(),
	campaignType: text("campaign_type"),
	campaignTimezone: text("campaign_timezone"),
	campaignCreatedAt: timestamp("campaign_created_at", { withTimezone: true }),
	campaignUpdatedAt: timestamp("campaign_updated_at", { withTimezone: true }),
	campaignEndAt: timestamp("campaign_end_at", { withTimezone: true }),
	campaignTitle: text("campaign_title"),
	campaignSubtitle: text("campaign_subtitle"),
	campaignDescription: text("campaign_description"),

	// Event.
	eventId: integer("event_id"),
	eventType: text("event_type"),
	eventTitle: text("event_title"),
	eventDetails: text("event_details"),
	eventTimezone: text("event_timezone"),
	eventStartAt: timestamp("event_start_at", { withTimezone: true }),
	eventEndAt: timestamp("event_end_at", { withTimezone: true }),

	// Raw JSON.
	rawJson: jsonb("raw_json").$type<FilteredAndMappedCampaign>(),
})
