// Dependencies.

// Todo: Refactor. Note: An if statement for the secret key causes issues. It shows as undefined even though it's defined.

console.log("Stripe secret:", process.env.STRIPE_SECRET_KEY) // **

export const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
