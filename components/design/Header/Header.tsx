// Dependencies.
import Logo from "@/components/design/Header/Logo"
import Menu from "@/components/design/Header/Menu"

// Header component.
export default function Header() {
	// Render.
	return (
		<header className="mx-auto max-w-screen-lg p-5 font-ancho">
			<Logo />
			<Menu />
		</header>
	)
}
