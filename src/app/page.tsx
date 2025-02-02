// Dependencies.
import { Fragment } from "react"
import Header from "@/components/Layout/Header/Header"
import HomeContent from "@/components/Home/Home"
import Footer from "@/components/Layout/Footer/Footer"

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
