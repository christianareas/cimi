// Dependencies.
import { NextResponse } from "next/server"
import fetchGivebutterData from "@/lib/api/fetchGivebutterData"

// POST request.
export async function POST(request: Request) {
	try {
		// First name, last name, email and tag.
		const { firstName, lastName, email, tag } = await request.json()
		if (!email) {
			return NextResponse.json({ error: "There’s no email." }, { status: 400 })
		}
		if (!tag) {
			return NextResponse.json({ error: "There’s no tag." }, { status: 400 })
		}

		// Body.
		const body = {
			first_name: firstName || "-",
			last_name: lastName || "-",
			emails: [{ type: "personal", value: email }],
			tags: [tag],
		}

		// Fetch.
		const { primary_email: primaryEmail } = await fetchGivebutterData(
			"POST",
			"/contacts",
			body,
		)

		// Return.
		return NextResponse.json({ primaryEmail }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: "Couldn't fetch Givebutter data." },
			{ status: 500 },
		)
	}
}
