// Fetch Givebutter data.
export default async function fetchGivebutterData(endpoint: string) {
	const apiKey = process.env.GIVEBUTTER_API_KEY

	// If there’s no API key, return an error.
	if (!apiKey) {
		throw new Error(
			"Error: There’s no GIVEBUTTER_API_KEY environment variable.",
		)
	}

	try {
		const baseUrl = "https://api.givebutter.com/v1"
		const response = await fetch(`${baseUrl}${endpoint}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
		})

		// If the response is not okay, return an error.
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
