// Dependencies.
import Stripe from "stripe"
import { NextResponse } from "next/server"
import defineSiteBaseUrl from "@/util/defineSiteBaseUrl"

// POST request.
export async function POST(request: Request) {
	try {
		// Stripe API key.
		const apiKey = process.env.STRIPE_API_KEY
		if (!apiKey) {
			throw new Error("Error: There’s no STRIPE_API_KEY environment variable.")
		}

		// Stripe.
		const stripe = new Stripe(apiKey)

		// Donation amount.
		const { donationAmount } = await request.json()
		if (!donationAmount) {
			return NextResponse.json(
				{ error: "There’s no donationAmount." },
				{ status: 400 },
			)
		}

		// Site base URL.
		const siteBaseUrl = defineSiteBaseUrl()

		// Stripe checkout session.
		const stripeCheckoutSession = await stripe.checkout.sessions.create({
			line_items: [
				{
					price_data: {
						product_data: { name: "Donation" },
						currency: "usd",
						unit_amount: donationAmount,
					},
					quantity: 1,
				},
			],
			mode: "payment",
			success_url: `${siteBaseUrl}/donate`,
			cancel_url: `${siteBaseUrl}/donate`,
		})

		// Return.
		return NextResponse.json(
			{ url: stripeCheckoutSession.url },
			{ status: 200 },
		)
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: "Couldn't create a Stripe checkout session." },
			{ status: 500 },
		)
	}
}
