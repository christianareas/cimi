// Dependencies.
import { Fragment } from "react"
import Main from "@/components/About/Main"
import Footer from "@/components/Layout/Footer/Footer"
import Header from "@/components/Layout/Header/Header"

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
			<Main />
			<Footer />
		</Fragment>
	)
}
