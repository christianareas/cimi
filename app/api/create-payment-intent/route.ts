// Dependencies.
import { NextResponse } from "next/server"
import { stripe, getCustomer, createCustomer } from "@/lib/stripe"
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

		// Create a payment intent.
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency,
			receipt_email,
			payment_method,
			metadata: {
				firstName,
				lastName,
			},
		})

		// Todo: Add logic to store some of the paymentIntent data in a database.

		// Return the payment intent.
		return NextResponse.json({
			// Todo: Update to only return what's necessary.
			paymentIntent,
		})
	} catch (error: any) {
		// Return the error.
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: error.message,
			}),
			{ status: 500 },
		)
	}
}

