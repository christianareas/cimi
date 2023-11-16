// Dependencies.
import { Stripe } from "stripe"

// If the Stripe secret key is not defined, throw an error.
if (!process.env.STRIPE_SECRET_KEY) {
	throw new Error("STRIPE_SECRET_KEY is not defined.")
} 

// Create a new instance of the Stripe client.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

