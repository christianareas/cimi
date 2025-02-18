// Dependencies.
import defineSiteBaseUrl from "@/util/defineSiteBaseUrl"

// Fetch data.
export default async function fetchData(
	endpoint: string,
	cache: "cache" | "no-cache" = "no-cache",
) {
	const siteBaseUrl = defineSiteBaseUrl()

	try {
		const response = await fetch(`${siteBaseUrl}${endpoint}`, {
			cache: cache === "cache" ? "force-cache" : "no-store",
		})

		// If the response is not OK, throw an error.
		if (!response.ok) {
			throw new Error(
				`${siteBaseUrl}${endpoint} ${response.status} ${response.statusText}`,
			)
		}

		return await response.json()
	} catch (error) {
		console.error(error)
	}
}
