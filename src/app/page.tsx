// Dependencies.
import { Fragment } from "react"
import Main from "@/components/Home/Main"
import Footer from "@/components/Layout/Footer/Footer"
import Header from "@/components/Layout/Header/Header"

// Page.
export default function Home() {
	// Render.
	return (
		<Fragment>
			<Header
				imageSrc="/images/heroes/home.jpg"
				imageAlt="Home"
				imageClassName="object-[50%_80%]"
			/>
			<Main />
			<Footer />
		</Fragment>
	)
}
