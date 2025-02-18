// Fetch Givebutter data.
export default async function fetchGivebutterData(endpoint: string) {
	// Base URL.
	const baseUrl = "https://api.givebutter.com/v1"

	// API key.
	const apiKey = process.env.GIVEBUTTER_API_KEY
	if (!apiKey) {
		throw new Error(
			"Error: There’s no GIVEBUTTER_API_KEY environment variable.",
		)
	}

	try {
		// Set up the loop.
		let currentPage = 1
		const data = []

		while (true) {
			// Fetch the data.
			const response = await fetch(
				`${baseUrl}${endpoint}?page=${currentPage}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${apiKey}`,
						"Content-Type": "application/json",
					},
				},
			)

			// If the response is not okay, return an error.
			if (!response.ok) {
				throw new Error(
					`${baseUrl}${endpoint} ${response.status} ${response.statusText}`,
				)
			}

			// Parse the response.
			const responseBody = await response.json()

			// Push the data.
			data.push(...responseBody.data)

			// If there are no more pages, exit the loop.
			if (currentPage >= responseBody.meta.last_page) break

			// Otherwise, loop through the next page.
			currentPage++
		}

		return { data }
	} catch (error) {
		console.error(error)
		return { data: [] }
	}
}
