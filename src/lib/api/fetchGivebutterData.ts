// Fetch Givebutter data.
export default async function fetchGivebutterData(
	method: "GET" | "POST",
	endpoint: string,
	body?: object,
) {
	// Base URL.
	const baseUrl = "https://api.givebutter.com/v1"

	// API key.
	const apiKey = process.env.GIVEBUTTER_API_KEY
	if (!apiKey) {
		throw new Error(
			"Error: There’s no GIVEBUTTER_API_KEY environment variable.",
		)
	}

	// GET options.
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

	// GET (with pagination).
	if (method === "GET") {
		let currentPage = 1
		const data = []

		while (true) {
			const response = await fetchAndValidate(
				`${baseUrl}${endpoint}?page=${currentPage}`,
			)

			// Push the data.
			data.push(...response.data)

			// If there are no more pages, exit the loop.
			if (currentPage >= response.meta.last_page) break

			// Otherwise, loop through the next page.
			currentPage++
		}

		return { data }
	}

	// POST.
	if (method === "POST" && body) {
		// POST options.
		options = {
			...options,
			body: JSON.stringify(body),
		}

		return await fetchAndValidate(`${baseUrl}${endpoint}`)
	}
}
