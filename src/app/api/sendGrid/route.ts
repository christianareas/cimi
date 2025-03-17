// Dependencies.
import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// POST request.
export async function POST(request: Request) {
	try {
		// API key.
		const apiKey = process.env.SENDGRID_API_KEY
		if (!apiKey) {
			throw new Error(
				"Error: There’s no SENDGRID_API_KEY environment variable.",
			)
		}

		// Initialize SendGrid.
		sgMail.setApiKey(apiKey)

		// Prepare the email.
		const { toEmail, fromEmail, subject, message } = await request.json()
		const emailMessage = {
			to: toEmail,
			from: toEmail,
			replyTo: fromEmail,
			subject,
			text: message,
		}

		// Send the email.
		await sgMail.send(emailMessage)

		return NextResponse.json({ fromEmail }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: "Couldn't send SendGrid email." },
			{ status: 500 },
		)
	}
}
