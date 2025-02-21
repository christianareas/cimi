// Types.
interface FetchDataTypes {
	method: "GET" | "POST"
	endpoint: string
	body?: { donationAmount: number }
	cache: "cache" | "no-cache"
}

// Fetch data.
export default async function fetchData({
	method,
	endpoint,
	body,
	cache,
}: FetchDataTypes) {
	// Fetch options.
	const options: RequestInit = {
		method,
		cache: cache === "cache" ? "force-cache" : "no-store",
		headers: {
			"Content-Type": "application/json",
		},
	}

	if (method === "POST") {
		options.body = JSON.stringify(body)
	}

	try {
		const response = await fetch(`${endpoint}`, options)

		// If the response is not OK, throw an error.
		if (!response.ok) {
			throw new Error(`${endpoint} ${response.status} ${response.statusText}`)
		}

		return await response.json()
	} catch (error) {
		console.error(error)
	}
}
