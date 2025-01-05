// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import UpcomingAndPastEvents from "@/components/Events/UpcomingAndPastEvents"

// Component.
export default function EventsContent() {
	// Render.
	return (
		<main>
			{/*
				*****************
				What’s Happening?
				*****************
			*/}
			<ContentCard
				contentSrc="events/intro.md"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-red-orange"
				fontClassName="font-medium"
				boldClassName="font-extrabold"
			/>

			{/*
				************************
				Upcoming and Past Events
				************************
			*/}
			<UpcomingAndPastEvents />
		</main>
	)
}
