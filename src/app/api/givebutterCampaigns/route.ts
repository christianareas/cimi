// Dependencies.
import { NextResponse } from "next/server"
import fetchGivebutterData from "@/lib/api/fetchGivebutterData"
import filterMapAndSaveCampaigns from "@/lib/api/filterMapAndSaveCampaigns"

// GET request.
export async function GET() {
	try {
		// Fetch.
		const response = await fetchGivebutterData("/campaigns")

		// Filter and map.
		const campaigns = await filterMapAndSaveCampaigns(response.data)

		// Return.
		return NextResponse.json({ campaigns }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: "Couldn't fetch Givebutter data." },
			{ status: 500 },
		)
	}
}
