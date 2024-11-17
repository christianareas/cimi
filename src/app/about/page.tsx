// Dependencies.
import { Fragment } from "react"
import Header from "@/src/components/design/Header/Header"
import AboutContent from "@/src/components/design/About/AboutContent"
import Footer from "@/src/components/design/Footer/Footer"

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
