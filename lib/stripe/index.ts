// Stripe client.
export { stripe } from "./stripe"

// Stripe promise.
export { stripePromise } from "./stripePromise"

// Stripe customer.
export {
	getAndUpdateStripeCustomer,
	postStripeCustomer,
} from "./customers"

// Stripe payment intent.
export {
	fetchStripePaymentIntent,
} from "./payments"
