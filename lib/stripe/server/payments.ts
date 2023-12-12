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
		const response = await fetch(
			endpoint,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			},
		)

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
