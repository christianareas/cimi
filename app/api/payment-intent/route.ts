// Dependencies.
import { NextRequest, NextResponse } from "next/server"
import { stripe, getAndUpdateStripeCustomer, postStripeCustomer } from "@/lib/stripe"
import { updateDonor, insertDonor, insertDonation } from "@/lib/prisma"

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

		// Validate the amount.
		// Todo: Validate other amounts and the currencies.
		if (amount < 50) {
			throw new Error("Amount must be greater than 0.50.")
		}

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
			customer: stripeCustomer.customerId,
			receipt_email,
			confirm: true,
		})

		// If customer ID is missing, throw an error.
		if (!paymentIntent.customer) {
			throw new Error("Stripe customer ID is missing.")
		}

		// If the payment intent is successful, insert the donation in the database. Otherwise, throw an error.
		if (paymentIntent.status === "succeeded") {
			// Insert the donation in the database.
			await insertDonation(
				paymentIntent.id,
				paymentIntent.amount,
				paymentIntent.currency,
				paymentIntent.status,
				paymentIntent.customer as string,
			)
		// Todo: Handle each type of payment intent status.
		} else if ((paymentIntent.status as string) !== "succeeded") {
			throw new Error("Stripe payment intent didn’t succeed.")
		}

		// Return the Stripe payment intent.
		return NextResponse.json({
			statusCode: 200,
			body: {
				client_secret: paymentIntent.client_secret,
				// Todo: Potentially return other payment intent data, if necessary for the client.
			},
		})

	} catch (error: any) {
		// Return the error.
		return NextResponse.json({
			statusCode: 500,
			message: error.message,
		})
	}
}
