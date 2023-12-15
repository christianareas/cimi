// Todo: Use import instead of require and add error handling.

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY

// if (!stripeSecretKey) {
// 	throw new Error("STRIPE_SECRET_KEY is undefined.")
// }

export const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
