"use client"

// Dependencies.
import { useState, useEffect } from "react"
// import { fetchStripePaymentIntent } from "@/app/_lib/stripe/server"
import { Elements } from "@stripe/react-stripe-js"
import { stripePromise } from "@/app/_lib/stripe/client"
import { CheckoutForm } from "@/app/_components/stripe/CheckoutForm"

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
				const response = await fetch("/api/payment-intent", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						items: [{ id: "widget" }],
					}),
				})

				// If the response is not okay, throw an error.
				if (!response.ok) {
					throw new Error(`HTTP error, status: ${response.status}`)
				}

				// Get the response data.
				const data = await response.json()

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
					<CheckoutForm />
				</Elements>
			)}
		</>
	)
}
