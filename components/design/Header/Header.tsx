// Dependencies.
import Logo from "@/components/design/Header/Logo"
import Menu from "@/components/design/Header/Menu"
import Donate from "@/components/design/Header/Donate"
import Hero from "@/components/design/Header/Hero"

// Header component.
export default function Header() {
	// Render.
	return (
		<header>
			<section className="mx-auto max-w-screen-lg px-5 pt-5 font-ancho">
				<Logo />
				<Menu />
				<Donate />
			</section>
			<Hero src="/images/heroes/home.png" alt="todo" />
		</header>
	)
}
