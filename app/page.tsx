// Dependencies.
import Logo from "@/components/design/Logo"
import Menu from "@/components/design/Menu"

// Home page.
export default function Home() {
  // Render.
  return(
    <main>
			<Logo />
			<Menu />
			
			<h1 className="font-ancho font-bold text-xl">
				Mujeres apoyando mujeres
			</h1>
			<h2 className="font-ancho font-light text-lg">
				See us run the world
			</h2>
			<p className="font-montserrat font-regular text-sm">
				Our mission is to empower young women to become stronger mentally and physically, equip them with necessary technology skills to enter a changing workforce, and inspire the next generation of community leaders.
			</p>

    </main>
  )
}
