"use client"

// Dependencies.
import { useState } from "react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import { createStripePaymentIntent } from "@/lib/stripe/server"

// Donate component.
export const DonateForm = () => {
	// Stripe and Elements instances.
	const stripe = useStripe()
	const elements = useElements()

	// Set the initial state.
	const [donationAmount, setDonationAmount] = useState<number>(0)

	// Donation amount options.
	const donationAmountOptions = [
		1000,		// $10.00
		10000,	// $100.00
		100000,	// $1,000.00
	]

	// Format the donation amount.
	const formatDonationAmount = (amount: number) => {
		// Currencies (hard-coded for now).
		const currency = "USD"

		// Format.
		if (currency === "USD") {
			return `$${(amount / 100).toFixed(2)}`
		}
	}

	// Select a donation amount.
	const selectDonationAmount = (amount: number) => {
		// Set the donation amount.
		setDonationAmount(amount)
	}

	// Render the component.
	return (
		<form
			action={createStripePaymentIntent}
			method="POST"
		>
			{/* Display donation amount options. */}
			<section>
				{donationAmountOptions.map((amount, index) => (
					<button
						key={index}
						type="button"
						onClick={() => selectDonationAmount(amount)}
					>
						{formatDonationAmount(amount)}
					</button>
				))}
			</section>

			{/* Prepare the donation amount for the form submission. */}
			<input
				type="hidden"
				name="donationAmount"
				value={donationAmount}
			/>

			{/* Display the Stripe payment element. */}
			<PaymentElement />

			<button
				type="submit"
			>
				Donate
			</button>
		</form>
	)
}
