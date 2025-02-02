// Fetch data.
export default async function fetchData(
	endpoint: string,
	cache: "cache" | "no-cache" = "no-cache",
) {
	// Environments.
	const nodeEnvironment = process.env.NODE_ENV
	const vercelEnvironment = process.env.VERCEL_ENV

	// Base URL.
	let baseUrl = ""
	if (
		nodeEnvironment === "development" ||
		vercelEnvironment === "development"
	) {
		baseUrl = `http://localhost:${process.env.PORT || 3000}`
	} else if (
		vercelEnvironment === "preview" ||
		vercelEnvironment === "production"
	) {
		baseUrl = `https://${process.env.VERCEL_URL}`
	} else {
		console.log(`Node environment: ${nodeEnvironment}`)
		console.log(`Vercel environment: ${vercelEnvironment}`)
		console.error("Your environment isn’t supported.")
	}

	try {
		const response = await fetch(`${baseUrl}${endpoint}`, {
			cache: cache === "cache" ? "force-cache" : "no-store",
		})

		// If the response is not OK, throw an error.
		if (!response.ok) {
			throw new Error(
				`${baseUrl}${endpoint} ${response.status} ${response.statusText}`,
			)
		}

		return await response.json()
	} catch (error) {
		console.error(error)
	}
}
