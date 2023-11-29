// Dependencies.
import { useState, useEffect } from "react"
import { fetchStripePaymentIntent } from "@/lib/stripe"
import { Elements } from "@stripe/react-stripe-js"
import { stripePromise } from "@/lib/stripe"
import { CheckoutForm } from "@/components/CheckoutForm"

// Check Out page.
export default function CheckOutPage() {
	// Set the initial client secret state.
	const [clientSecret, setClientSecret] = useState("")

	// Create a Stripe payment intent through the server as soon as the page loads.
	useEffect(() => {
		// Create a Stripe payment intent.
		const createStripePaymentIntent = async () => {
			try {
				const data = await fetchStripePaymentIntent("/api/payment-intent", {
					items: [{
						id: "widget"
					}],
				})
				setClientSecret(data.clientSecret)
			} catch (error) {
				// Todo: Add better error handling.
				console.error(error)
				throw error				
			}
		}

		// Call the function.
		createStripePaymentIntent()
	}, [])

	// Stripe Elements options.
	const stripeElementsOptions = {
		clientSecret,
		theme: "stripe",
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
