// Dependencies.
import { Fragment } from "react"
import Header from "@/components/design/Header/Header"
import ColorfulBorder from "@/components/design/ColorfulBorder"
import Footer from "@/components/design/Footer/Footer"
import DummyMain from "@/components/design/DummyMain"

// Home page.
export default function Home() {
	// Render.
	return (
		<Fragment>
			<Header />

			<DummyMain />
			<DummyMain />
			<DummyMain />
			<DummyMain />
			<DummyMain />
			<DummyMain />
			<DummyMain />
			<DummyMain />
			<DummyMain />
			<DummyMain />

			<ColorfulBorder />
			<Footer />
		</Fragment>
	)
}
