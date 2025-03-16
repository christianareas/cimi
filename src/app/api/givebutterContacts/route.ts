// Dependencies.
import { NextResponse } from "next/server"
import fetchGivebutterData from "@/lib/api/fetchGivebutterData"

// POST request.
export async function POST(request: Request) {
	try {
		// Email.
		const { email } = await request.json()
		if (!email) {
			return NextResponse.json({ error: "There’s no email." }, { status: 400 })
		}

		// Body.
		const body = {
			first_name: "-",
			last_name: "-",
			emails: [{ type: "personal", value: email }],
			tags: ["cimiNewsletterSubscriber"],
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
