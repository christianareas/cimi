// Dependencies.
import ContentCard from "@/components/design/ContentCard"

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
				******
				Events
				******
			*/}
			{/* 
				- Upcoming Events || Past Events
				- Upcoming Events
					- Event -> Event page
				- Past Events
					- Event -> Event page
			 */}
		</main>
	)
}
