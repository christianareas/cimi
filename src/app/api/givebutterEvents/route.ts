// Dependencies.
import { NextResponse } from "next/server"
import fetchGivebutterData from "@/lib/fetchGivebutterData"
import filterAndMapCampaignEvents from "@/lib/filterAndMapCampaignEvents"

// Types.
import type { NextRequest } from "next/server"

// GET request.
export async function GET(request: NextRequest) {
	try {
		// Fetch.
		const response = await fetchGivebutterData("/campaigns")
		const data = response.data

		// Filter and map.
		const campaignEvents = filterAndMapCampaignEvents(data)

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
