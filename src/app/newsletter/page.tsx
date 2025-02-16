// Dependencies.
import { Fragment } from "react"
import Header from "@/components/Layout/Header/Header"
import Main from "@/components/Newsletter/Main"
import Footer from "@/components/Layout/Footer/Footer"

// Page.
export default function Newsletter() {
	// Render.
	return (
		<Fragment>
			<Header
				imageSrc="/images/heroes/newsletter.jpg"
				imageAlt="todo"
				imageClassName="object-[50%_45%]"
			/>
			<Main />
			<Footer />
		</Fragment>
	)
}
