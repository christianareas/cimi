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
			<Header />
			<AboutContent />
			<Footer />
		</Fragment>
	)
}
