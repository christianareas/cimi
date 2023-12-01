// Dependencies.
import { useState, useEffect } from "react"
import { fetchStripePaymentIntent } from "@/lib/stripe"
import { Elements } from "@stripe/react-stripe-js"
import { stripePromise } from "@/lib/stripe"
import { CheckoutForm } from "@/components/stripe/CheckoutForm"

// Check Out page.
export default function CheckOutPage() {
	// Set the initial state.
	const [clientSecret, setClientSecret] = useState("")

	// As soon as the page loads, fetch the Stripe client secret from the server.
	useEffect(() => {
		// Fetch the Stripe client secret.
		const fetchStripeClientSecret = async () => {
			try {
				// Fetch the Stripe payment intent.
				const data = await fetchStripePaymentIntent("/api/payment-intent", {
					// Todo: Update with the real body.
					items: [{
						id: "widget"
					}],
				})

				// Update the state.
				setClientSecret(data.clientSecret)
			} catch (error) {
				// Todo: Add better error handling.
				console.error(error)
				throw error				
			}
		}

		// Call the function.
		fetchStripeClientSecret()
	}, [])

	// Stripe Elements options.
	const stripeElementsOptions = {
		clientSecret,
	}

	// Render the page.
	return (
		<>
			{clientSecret && (
				<Elements stripe={stripePromise} options={stripeElementsOptions}>
					{/* <CheckoutForm /> */}
				</Elements>
			)}
		</>
	)
}
