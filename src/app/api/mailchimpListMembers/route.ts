// Dependencies.
import crypto from "node:crypto"
import { NextResponse } from "next/server"
import fetchMailchimpData from "@/lib/api/fetchMailchimpData"

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

		// List ID.
		const listId = process.env.MAILCHIMP_LIST_ID
		if (!listId) {
			return NextResponse.json(
				{ error: "There’s no MAILCHIMP_LIST_ID environment variable." },
				{ status: 500 },
			)
		}

		// Email hash.
		const emailHash = crypto
			.createHash("md5")
			.update(email.trim().toLowerCase())
			.digest("hex")

		// Body.
		const body = {
			email_address: email,
			status_if_new: "subscribed",
			tags: [tag],
		}

		// Fetch.
		const { email_address: primaryEmail } = await fetchMailchimpData(
			"PUT",
			`/lists/${listId}/members/${emailHash}`,
			body,
		)

		// Return.
		return NextResponse.json({ primaryEmail }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: "Couldn't fetch Mailchimp data." },
			{ status: 500 },
		)
	}
}
