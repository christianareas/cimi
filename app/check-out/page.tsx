"use client"

// Dependencies.
import { useState, useEffect } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { stripePromise } from "@/lib/stripe/client"
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
				const response = await fetch("/api/payment-intent", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"amount": 50,
						"currency": "usd",
						"receipt_email": "two@test.com",
						"payment_method": "pm_card_visa",
						"metadata": {
							"firstName": "Christian",
							"lastName": "Areas"
						},
						"return_url": "http://localhost:3000/"					
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
