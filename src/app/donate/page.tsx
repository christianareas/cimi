// Dependencies.
import { Fragment } from "react"
import Header from "@/components/design/Header/Header"
import DonateContent from "@/components/design/Donate/DonateContent"
import Footer from "@/components/design/Footer/Footer"

// Page.
export default function Donate() {
	// Render.
	return (
		<Fragment>
			<Header
				imageSrc="/images/heroes/about.jpg"
				imageAlt="todo"
				imageClassName="object-[50%_55%]"
			/>
			<DonateContent />
			<Footer />
		</Fragment>
	)
}
