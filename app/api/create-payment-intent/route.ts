// Dependencies.
import { NextRequest, NextResponse } from "next/server"
import { stripe, getAndUpdateStripeCustomer, postStripeCustomer } from "@/lib/stripe"
import { updateDonor, insertDonor } from "@/lib/prisma"

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

// Create a Stripe payment intent.
export async function POST(
	request: NextRequest,
	response: NextResponse,
) {
	try {
		// Destructure the request body.
		const { 
			amount,
			currency,
			payment_method,
			receipt_email,
			metadata: {
				firstName,
				lastName,
			},
		} = (await request.json()) as PaymentIntentRequest

		// Get and update the Stripe customer in Stripe.
		let stripeCustomer = await getAndUpdateStripeCustomer(
			receipt_email,
			firstName,
			lastName,
		)

		// If the Stripe customer exists, update them in the database.
		if (stripeCustomer) {
			await updateDonor(
				stripeCustomer.customerId,
				stripeCustomer.customerEmail,
				stripeCustomer.customerFirstName,
				stripeCustomer.customerLastName,
			)
		}

		// If the Stripe customer doesn't exist, create them in Stripe and the database.
		if (!stripeCustomer) {
			// Post the Stripe customer in Stripe.
			stripeCustomer = await postStripeCustomer(
				receipt_email,
				firstName,
				lastName,
			)

			// Insert the donor in the database.
			await insertDonor(
				stripeCustomer.customerId,
				stripeCustomer.customerEmail,
				stripeCustomer.customerFirstName,
				stripeCustomer.customerLastName,
			)
		}

		// Create a Stripe payment intent.
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency,
			payment_method,
			receipt_email,
			confirm: true,
			customer: stripeCustomer.customerId,
			metadata: {
				firstName,
				lastName,
			},
		})

		// If the payment intent is successful, store the Stripe customer and payment intent.
		if (paymentIntent.status === "succeeded") {
			// Store the Stripe donation.
			
		}

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

