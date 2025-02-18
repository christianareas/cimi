// Define the site’s base URL.
export default function defineSiteBaseUrl() {
	const nodeEnvironment = process.env.NODE_ENV
	const vercelEnvironment = process.env.VERCEL_ENV

	let siteBaseUrl = ""
	if (
		nodeEnvironment === "development" ||
		vercelEnvironment === "development"
	) {
		siteBaseUrl = `http://localhost:${process.env.PORT || 3000}`
	} else if (
		vercelEnvironment === "preview" ||
		vercelEnvironment === "production"
	) {
		siteBaseUrl = `https://${process.env.VERCEL_URL}`
	} else {
		console.log(`Node environment: ${nodeEnvironment}`)
		console.log(`Vercel environment: ${vercelEnvironment}`)
		console.error("Your environment isn’t supported.")
	}

	return siteBaseUrl
}
