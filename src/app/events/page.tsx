// Dependencies.
import { Fragment } from "react"
import Header from "@/components/design/Header/Header"
import EventsContent from "@/components/design/Events/EventsContent"
import Footer from "@/components/design/Footer/Footer"

// Page.
export default function About() {
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
