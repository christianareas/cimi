// Dependencies.
import { NextResponse } from "next/server"
import fetchGivebutterData from "@/lib/api/fetchGivebutterData"
import filterMapAndSaveCampaignEvents from "@/lib/api/filterMapAndSaveCampaignEvents"

// GET request.
export async function GET() {
	try {
		// Fetch.
		const response = await fetchGivebutterData("/campaigns")

		// Filter and map.
		const campaignEvents = await filterMapAndSaveCampaignEvents(response.data)

		// Return.
		return NextResponse.json({ campaignEvents }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: "Couldn't fetch Givebutter data." },
			{ status: 500 },
		)
	}
}
