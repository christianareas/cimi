// Dependencies.
import { Fragment } from "react"
import Header from "@/components/design/Header/Header"
import HomeContent from "@/components/design/Home/HomeContent"
import Footer from "@/components/design/Footer/Footer"

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
