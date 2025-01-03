// Dependencies.
import { Fragment } from "react"
import Header from "@/components/design/Header/Header"
import AboutContent from "@/components/design/About/AboutContent"
import Footer from "@/components/design/Footer/Footer"

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
