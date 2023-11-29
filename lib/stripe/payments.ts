// Types.
type PaymentIntentResponse = {
	clientSecret: string
}

// Create a Stripe payment intent through the server.
export async function fetchStripePaymentIntent(
	endpoint: string,
	body: any,
): Promise<PaymentIntentResponse> {
	try {
		// Fetch the Stripe payment intent from the server.
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

		// Otherwise, return the response.
		return await response.json()
	} catch (error) {
		// Todo: Add better error handling.
		console.error(error)
		throw error
	}
}