// Dependencies.
import { Fragment } from "react"
import Header from "@/components/Layout/Header/Header"
import Main from "@/components/Join/Volunteer/Main"
import Footer from "@/components/Layout/Footer/Footer"

// Page.
export default function About() {
	// Render.
	return (
		<Fragment>
			<Header
				imageSrc="/images/heroes/volunteer.jpg"
				imageAlt="todo"
				imageClassName="object-[50%_35%]"
			/>
			<Main />
			<Footer />
		</Fragment>
	)
}
