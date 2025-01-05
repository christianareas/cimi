// Dependencies.
import { NextResponse } from "next/server"
import fetchGivebutterData from "@/lib/fetchGivebutterData"

// Types.
import type { NextRequest } from "next/server"

// GET request.
export async function GET(request: NextRequest) {
	try {
		const response = await fetchGivebutterData("/campaigns")
		const data = response.data

		return NextResponse.json({ data }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: "Couldn't fetch Givebutter data." },
			{ status: 500 },
		)
	}
}
