// Dependencies.
import Logo from "@/components/design/Header/Logo"
import Menu from "@/components/design/Header/Menu"
import Hero from "@/components/design/Header/Hero"

// Header component.
export default function Header() {
	// Render.
	return (
		<header>
			<section className="mx-auto max-w-screen-lg p-5 font-ancho">
				<Logo />
				<Menu />
			</section>
			<Hero src="/images/heroes/home.png" />
		</header>
	)
}
