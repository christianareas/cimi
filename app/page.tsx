// Dependencies.
import Header from "@/components/design/Header/Header"

// Home page.
export default function Home() {
	// Render.
	return (
		<main className="max-w-screen-xl mx-auto font-montserrat font-regular text-sm p-5">
			<Header />

			<h1 className="font-ancho font-bold text-xl">Mujeres apoyando mujeres</h1>
			<h2 className="font-ancho font-light text-lg">See us run the world</h2>

			<p>
				Our mission is to empower young women to become stronger mentally and
				physically, equip them with necessary technology skills to enter a
				changing workforce, and inspire the next generation of community
				leaders.
			</p>
		</main>
	)
}
