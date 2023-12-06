// Dependencies.
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import { useState, useEffect, FormEvent } from "react"
import { getStripePaymentStatus } from "@/lib/stripe/payments"

// Checkout Form component.
export const CheckoutForm = () => {
	// Stripe and Elements instances.
	const stripe = useStripe()
	const elements = useElements()

	// Set the initial state.
	const [message, setMessage] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	// Get the Stripe payment status from Stripe.
	useEffect(() => {
		// Get the client secret from the URL.
		const clientSecret = new URLSearchParams(window.location.search)
			.get("payment_intent_client_secret")
		
		// If there is no client secret, return.
		if (!clientSecret) return

		// Get the Stripe payment status.
		getStripePaymentStatus(
			stripe,
			clientSecret,
			setMessage,
		)
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
				return_url: "http://localhost:3000",
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
