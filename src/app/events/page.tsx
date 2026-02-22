// Dependencies.
import { Fragment } from "react"
import Main from "@/components/Events/Main"
import Footer from "@/components/Layout/Footer/Footer"
import Header from "@/components/Layout/Header/Header"

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
			<Main />
			<Footer />
		</Fragment>
	)
}
