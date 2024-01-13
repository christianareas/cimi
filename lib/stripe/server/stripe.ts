// Dependencies.
import Stripe from "stripe"

// Stripe secret key.
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

// If the Stripe secret key is undefined, throw an error.
if (!stripeSecretKey) {
    throw new Error("STRIPE_SECRET_KEY is undefined.")
}

// Create a new Stripe instance.
export const stripe = new Stripe(stripeSecretKey)
