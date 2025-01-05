// Fetch data.
export default async function fetchData(endpoint: string) {
	let baseUrl = ""
	if (process.env.NODE_ENV === "development") {
		baseUrl = `http://localhost:${process.env.PORT}`
	} else if (process.env.NODE_ENV === "production") {
		baseUrl = `https://${process.env.VERCEL_URL}`
	}

	try {
		const response = await fetch(`${baseUrl}${endpoint}`)

		// If the response is not OK, throw an error.
		if (!response.ok) {
			throw new Error(
				`${baseUrl}${endpoint} ${response.status} ${response.statusText}`,
			)
		}

		return await response.json()
	} catch (error) {
		console.error(error)
		return { data: [] }
	}
}
