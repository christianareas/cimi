// Dependencies.
import { NextResponse } from "next/server"
import { stripe, getStripeCustomer, createStripeCustomer } from "@/lib/stripe"
import { prisma } from "@/lib/prisma"

// Types.
type PaymentIntentRequest = {
	amount: number
	currency: string
	receipt_email: string
	payment_method: string
	metadata: {
		firstName: string
		lastName: string
	}
}

// Create a payment intent.
export async function POST(request: Request) {
	try {
		// Destructure the request body.
		const { 
			amount,
			currency,
			receipt_email,
			payment_method,
			metadata: {
				firstName,
				lastName,
			},
		} = (await request.json()) as PaymentIntentRequest

		// Get the customer.
		let stripeCustomer = await getStripeCustomer(receipt_email)

		// If the customer doesn't exist, create them.
		if (!stripeCustomer) {
			stripeCustomer = await createStripeCustomer(receipt_email)
		}

		// Create a Stripe payment intent.
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency,
			customer: stripeCustomer?.id,
			receipt_email,
			payment_method,
			metadata: {
				firstName,
				lastName,
			},
		})

		// Todo: Add logic to store some of the paymentIntent data in a database.


		// Return the Stripe payment intent.
		return NextResponse.json({
			// Todo: Update to only return what's necessary.
			paymentIntent,
		})
	} catch (error: any) {
		// Return the error.
		return NextResponse.json({
			statusCode: 500,
			message: error.message,
		})
	}
}

