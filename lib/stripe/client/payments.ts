// Dependencies.
import { Stripe } from "@stripe/stripe-js"

// Get the Stripe payment status from Stripe.
export async function getStripePaymentStatus(
	stripe: Stripe | null,
	clientSecret: string,
	setMessage: (message: string) => void,
): Promise<void> {
	// If there’s no Stripe instance, return.
	if (!stripe) return

	try {
		// Get the Stripe payment intent.
		const paymentIntentResponse = await stripe.retrievePaymentIntent(clientSecret)
		
		// If there’s no payment intent status, return.
		if (!paymentIntentResponse.paymentIntent) return

		// Get the payment intent status and set the appropriate message.
		if (paymentIntentResponse.paymentIntent.status) {
			switch (paymentIntentResponse.paymentIntent.status) {
				// Todo: Add more statuses and better messages.
				case "succeeded":
					setMessage("Your payment succeeded.")
					break
				case "processing":
					setMessage("Your payment’s processing.")
					break
				case "requires_payment_method":
					setMessage("You must provide a payment method.")
					break
				default:
					setMessage("Something went wrong.")
					break
			}
		}
	} catch (error) {
		// Todo: Add better error handling.
		console.error(error)
		throw error
	}
}
