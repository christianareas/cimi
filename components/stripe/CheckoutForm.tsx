// Dependencies.
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import { useState, useEffect, FormEvent } from "react"

// Checkout Form component.
export const CheckoutForm = () => {
	// Stripe and Elements instances.
	const stripe = useStripe()
	const elements = useElements()

	// Set the initial state.
	const [message, setMessage] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	// Get the Stripe payment intent status from Stripe.
	useEffect(() => {
		// Get the Stripe payment intent status.
		const getStripePaymentIntentStatus = async () => {
			// Get the client secret from the URL.
			const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret")

			// If there is no client secret or Stripe instance, return.
			if (!clientSecret || !stripe) return

			try {
				// Get the Stripe payment intent.
				const paymentIntentResponse = await stripe.retrievePaymentIntent(clientSecret)
				
				// If there’s no payment intent, return.
				if (!paymentIntentResponse.paymentIntent) return
		
				// Get the payment intent status and set the appropriate message.
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
			} catch (error) {
				// Todo: Add better error handling.
				console.error(error)
				throw error
			}
		}
		
		// Call the function.
		getStripePaymentIntentStatus()
	}, [stripe])

	// Handle the form.
	const handleFormSubmit = async (event: FormEvent) => {
		event.preventDefault()

		// If there’s no Stripe or Elements instance, return.
		if (!stripe || !elements) return
		
		// Set the loading state.
		setLoading(true)

		// Confirm the payment.
		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Todo: Update with the real URL.
				return_url: "http://localhost:3000/",
			},
		})

		// If there’s an error, return it.
		// Todo: Add better error handling.
		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(error.message || "Something went wrong.")
		} else {
			setMessage("Something went wrong.")
		}

		// Reset the loading state.
		setLoading(false)
	}

	// Payment Element options.
	const paymentElementOptions = {
	}

	// Render the component.
	// Todo: Style and refactor.
	return (
		<form onSubmit={handleFormSubmit}>
			<PaymentElement
				options={paymentElementOptions}
			/>
			
			<button
				type="submit"
				disabled={loading || !stripe || !elements}
			>
				{loading ? "Loading..." : "Donate"}
			</button>
			
			{message && <p>{message}</p>}
		</form>
	)
}
