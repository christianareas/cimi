// Dependencies.
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import { useState, useEffect } from "react"
import { getStripePaymentStatus } from "@/lib/stripe/payments"

// Checkout Form component.
export const CheckoutForm = () => {
	// Get the Stripe objects.
	const stripe = useStripe()
	const elements = useElements()

	// Set the initial state.
	const [message, setMessage] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(false)

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



}
