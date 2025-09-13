// Fetch Givebutter data.
export default async function fetchGivebutterData(
	method: "PUT",
	endpoint: string,
	body: object,
) {
	// Base URL.
	const baseUrl = "https://us1.api.mailchimp.com/3.0"

	// API key.
	const apiKey = process.env.MAILCHIMP_API_KEY
	if (!apiKey) {
		throw new Error("Error: There’s no MAILCHIMP_API_KEY environment variable.")
	}

	// Options.
	let options: RequestInit = {
		method,
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
		},
	}

	// Fetch and validate.
	async function fetchAndValidate(url: string) {
		try {
			// Fetch.
			const response = await fetch(url, options)

			// If the response is not okay, return an error.
			if (!response.ok) {
				throw new Error(`${url} ${response.status} ${response.statusText}`)
			}

			// Otherwise, return the response.
			return await response.json()
		} catch (error) {
			console.error(error)
			return { data: [] }
		}
	}

	// PUT.
	if (method === "PUT" && body) {
		// PUT options.
		options = {
			...options,
			body: JSON.stringify(body),
		}

		return await fetchAndValidate(`${baseUrl}${endpoint}`)
	}
}
