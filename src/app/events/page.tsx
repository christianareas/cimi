// Dependencies.
import { Fragment } from "react"
import Header from "@/components/Layout/Header/Header"
import EventsContent from "@/components/Events/Events"
import Footer from "@/components/Layout/Footer/Footer"

// Page.
export default function Events() {
	// Render.
	return (
		<Fragment>
			<Header
				imageSrc="/images/heroes/events.jpg"
				imageAlt="todo"
				imageClassName="object-[50%_55%]"
			/>
			<EventsContent />
			<Footer />
		</Fragment>
	)
}
