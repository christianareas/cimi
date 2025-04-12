// Get the posts array.
const wixPosts = pm.collectionVariables.get("wixPosts")

// Initialize the campaigns array.
let givebutterCampaigns = []

// If the posts array exists, save it as the campaigns array.
if (wixPosts) {
	try {
		givebutterCampaigns = JSON.parse(wixPosts)
	} catch (error) {
		console.error(error)
	}
}

// Create the index.
const index = Number.parseInt(
	pm.collectionVariables.get("campaignIndex") || "0",
	10,
)

// Iterate over the campaigns array.
if (index < givebutterCampaigns.length) {
	const currentCampaign = givebutterCampaigns[index]
	pm.collectionVariables.set("currentCampaign", JSON.stringify(currentCampaign))
	pm.collectionVariables.set("campaignIndex", index + 1)
} else {
	console.log("Fin.")
}
