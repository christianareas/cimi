// Dependencies.
import { Fragment } from "react"
import Header from "@/src/components/design/Header/Header"
import HomeContent from "@/src/components/design/Home/HomeContent"
import Footer from "@/src/components/design/Footer/Footer"

// Page.
export default function Home() {
	// Render.
	return (
		<Fragment>
			<Header
				imageSrc="/images/heroes/home.jpg"
				imageAlt="todo"
				imageClassName="object-[50%_80%]"
			/>
			<HomeContent />
			<Footer />
		</Fragment>
	)
}
