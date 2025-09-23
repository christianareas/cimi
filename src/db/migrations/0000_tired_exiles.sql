CREATE TABLE "campaign" (
	"campaign_id" integer PRIMARY KEY NOT NULL,
	"campaign_type" text,
	"campaign_timezone" text,
	"campaign_created_at" timestamp with time zone,
	"campaign_updated_at" timestamp with time zone,
	"campaign_end_at" timestamp with time zone,
	"campaign_title" text,
	"campaign_subtitle" text,
	"campaign_description" text,
	"event_id" integer,
	"event_type" text,
	"event_title" text,
	"event_details" text,
	"event_timezone" text,
	"event_start_at" timestamp with time zone,
	"event_end_at" timestamp with time zone,
	"raw_json" jsonb
);
