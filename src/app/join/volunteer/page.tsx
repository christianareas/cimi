// Dependencies.
import { Fragment } from "react"
import Header from "@/components/Layout/Header/Header"
import VolunteerContent from "@/components/Join/Volunteer/Volunteer"
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
			<VolunteerContent />
			<Footer />
		</Fragment>
	)
}
