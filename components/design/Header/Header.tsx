// Dependencies.
import Logo from "@/components/design/Header/Logo"
import Menu from "@/components/design/Header/Menu"
import ColorfulBorder from "@/components/design/ColorfulBorder"
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
			<ColorfulBorder />
			<Hero src="/images/heroes/home.png" />
			<ColorfulBorder />
		</header>
	)
}
