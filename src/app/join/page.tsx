// Dependencies.
import { Fragment } from "react"
import Header from "@/components/Layout/Header/Header"
import JoinContent from "@/components/Join/Join"
import Footer from "@/components/Layout/Footer/Footer"

// Page.
export default function About() {
	// Render.
	return (
		<Fragment>
			<Header
				imageSrc="/images/heroes/join.jpg"
				imageAlt="todo"
				imageClassName="object-[50%_55%]"
			/>
			<JoinContent />
			<Footer />
		</Fragment>
	)
}
