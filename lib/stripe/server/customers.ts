// Dependencies.
import { stripe } from "."

// Types.
type CustomerResponse = {
	customerId: string
	customerEmail: string
	customerFirstName: string
	customerLastName: string
}

// Get and update the Stripe customer in Stripe.
export async function getAndUpdateStripeCustomer(
	email: string,
	firstName: string,
	lastName: string,
): Promise<CustomerResponse | null> {
	// Get the existing Stripe customer.
	const stripeCustomers = await stripe.customers.list({
		email,
		limit: 1,
	})
	let stripeCustomer = stripeCustomers.data[0]

	// If the Stripe customer exists, update them.
	if (stripeCustomer) {
		// Update the Stripe customer.
		stripeCustomer = await stripe.customers.update(
			stripeCustomer.id,
			{
				metadata: {
					firstName,
					lastName,
				},
			},
		)

		// Return the updated Stripe customer.
		return {
			customerId: stripeCustomer.id,
			customerEmail: stripeCustomer.email as string,
			customerFirstName: stripeCustomer.metadata.firstName,
			customerLastName: stripeCustomer.metadata.lastName,
		}
	}

	// If the Stripe customer doesn't exist, return null.
	return null
}

// Post the Stripe customer in Stripe.
export async function postStripeCustomer(
	email: string,
	firstName: string,
	lastName: string,
): Promise<CustomerResponse> {
	// Post the new Stripe customer.
	const stripeCustomer = await stripe.customers.create({
		email,
		metadata: {
			firstName,
			lastName,
		},
	})

	// Return the new Stripe customer.
	return {
		customerId: stripeCustomer.id,
		customerEmail: stripeCustomer.email as string,
		customerFirstName: stripeCustomer.metadata.firstName,
		customerLastName: stripeCustomer.metadata.lastName,
	}
}
