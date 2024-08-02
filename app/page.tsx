// Dependencies.
import { Fragment } from "react"
import Header from "@/components/design/Header/Header"
import HomeContent from "@/components/design/Home/HomeContent"
import Footer from "@/components/design/Footer/Footer"

// Home page.
export default function Home() {
	// Render.
	return (
		<Fragment>
			<Header />
			<HomeContent />
			<Footer />
		</Fragment>
	)
}
