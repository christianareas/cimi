// Dependencies.
import UpcomingAndPastEvents from "@/components/Events/UpcomingAndPastEvents"
import ContentCard from "@/components/Shared/ContentCard"

// Component.
export default function Main() {
	// Render.
	return (
		<main className="fade">
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
