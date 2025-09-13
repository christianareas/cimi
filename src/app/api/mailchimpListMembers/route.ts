// Dependencies.
import { NextResponse } from "next/server"
import fetchMailChimpData from "@/lib/api/fetchMailChimpData"

// PUT request.
export async function PUT(request: Request) {
	try {
		// Email and tag.
		const { email, tag } = await request.json()
		if (!email) {
			return NextResponse.json({ error: "There’s no email." }, { status: 400 })
		}
		if (!tag) {
			return NextResponse.json({ error: "There’s no tag." }, { status: 400 })
		}

		// Body.
		const body = {
			email_address: email,
			status_if_new: "subscribed",
			tags: [tag],
		}

		// Fetch.
		const { email_address: primaryEmail } = await fetchMailChimpData(
			"PUT",
			`/lists/${"3a6523440d"}/members/${"e8086ba5f17beae11a5ec6b9a9315b9f"}`,
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
