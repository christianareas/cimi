// Dependencies.
import { stripe } from "../stripe"

// Get a customer.
export async function getStripeCustomer(email: string) {
	const stripeCustomers = await stripe.customers.list({
		email,
		limit: 1,
	})

	return stripeCustomers.data[0]
}

// Create a customer.
export async function createStripeCustomer(email: string) {
	const stripeCustomer = await stripe.customers.create({
		email,
	})

	return stripeCustomer
}
