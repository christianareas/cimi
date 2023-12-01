// Dependencies.
import { Stripe } from "@stripe/stripe-js"

// Types.
type PaymentIntentResponse = {
	clientSecret: string
}

// Fetch the Stripe payment intent from the server.
export async function fetchStripePaymentIntent(
	endpoint: string,
	body: any,
): Promise<PaymentIntentResponse> {
	try {
		// Fetch the Stripe payment intent.
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})

		// If the response is not okay, throw an error.
		if (!response.ok) {
			throw new Error(`HTTP error, status: ${response.status}`)
		}

		// Return the Stripe payment intent.
		return await response.json()
	} catch (error) {
		// Todo: Add better error handling.
		console.error(error)
		throw error
	}
}

// Get the Stripe payment status from Stripe.
export async function getStripePaymentStatus(
	stripe: Stripe | null,
	clientSecret: string,
	setMessage: (message: string) => void,
): Promise<void> {
	// If there’s no Stripe object, return.
	if (!stripe) return

	try {
		// Get the Stripe payment intent.
		const paymentIntentResponse = await stripe.retrievePaymentIntent(clientSecret)
		
		// If there’s no payment intent status, return.
		if (!paymentIntentResponse.paymentIntent) return

		// Get the payment intent status and set the appropriate message.
		if (paymentIntentResponse.paymentIntent.status) {
			switch (paymentIntentResponse.paymentIntent.status) {
				// Todo: Add better messages.
				case "succeeded":
					setMessage("Payment succeeded!")
					break
				case "processing":
					setMessage("Your payment is processing.")
					break
				case "requires_payment_method":
					setMessage("Your payment was not successful, please try again.")
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