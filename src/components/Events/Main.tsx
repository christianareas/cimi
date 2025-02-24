// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import UpcomingAndPastEvents from "@/components/Events/UpcomingAndPastEvents"

// Component.
export default function Main() {
	// Render.
	return (
		<main>
			{/* What’s Happening? */}
			<ContentCard
				contentSrc="events.intro"
				articleClassName="mx-auto text-center lg:w-1/2"
				h2ClassName="text-cimi-red-orange"
			/>

			{/* Upcoming and Past Events */}
			<UpcomingAndPastEvents />
		</main>
	)
}
