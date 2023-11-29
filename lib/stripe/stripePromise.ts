// Dependencies.
import { loadStripe } from "@stripe/stripe-js"

// If the Stripe publishable key is not defined, throw an error.
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is undefined.")
}

// Create a Stripe promise.
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
