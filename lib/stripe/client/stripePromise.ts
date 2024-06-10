// Dependencies.
import { loadStripe } from "@stripe/stripe-js"

// Stripe publishable key.
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

// If the Stripe publishable key is not defined, throw an error.
if (!stripePublishableKey) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is undefined.")
}

// Create a Stripe promise.
export const stripePromise = loadStripe(stripePublishableKey)
