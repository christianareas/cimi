// Format the date to a human-readable format.
export default function formatDate(date: string, timeZone: string) {
	const isoDate = date.includes("T") ? date : `${date.replace(" ", "T")}Z`
	const parsedDate = new Date(isoDate)

	return parsedDate.toLocaleString("en-US", {
		timeZone,
		month: "short",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
		timeZoneName: "short",
	})
}
