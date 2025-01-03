// Dependencies.
import { Fragment } from "react"
import Header from "@/components/Layout/Header/Header"
import AboutContent from "@/components/About/About"
import Footer from "@/components/Layout/Footer/Footer"

// Page.
export default function About() {
	// Render.
	return (
		<Fragment>
			<Header
				imageSrc="/images/heroes/about.jpg"
				imageAlt="todo"
				imageClassName="object-[50%_55%]"
			/>
			<AboutContent />
			<Footer />
		</Fragment>
	)
}
