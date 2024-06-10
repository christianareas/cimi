"use server"

// Create Stripe payment intent.
export const createStripePaymentIntent = async (formData: FormData) => {
	try {
		// Get the donation amount.
		const donationAmount = formData.get("donationAmount")

		// Todo. **

	} catch (error) {
		// Todo: Add better error handling.
		console.error(error)
		throw error
	}
}

// Validate the donation amount.
export const validateDonationAmount = (amount: number) => {
	// Donation amount limits.
	const minimumAmount = 50 // $0.50
	const predefinedAmounts = [
		1000, // $10
		10000, // $100
		100000, // $1,000
	]

	// Format the predefined amounts.
	const formattedPredefinedAmounts = predefinedAmounts.map((amount) => (amount)).join(", ")

	// If the amount is less than the minimum amount, throw an error.
	if (amount < minimumAmount && !predefinedAmounts.includes(amount)) {
		throw new Error(`The amount must be greater than ${minimumAmount} or one of the predefined amounts (${formattedPredefinedAmounts}).`)
	}
}
