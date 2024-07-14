// Dependencies.
import Logo from "@/components/design/Header/Logo"
import Menu from "@/components/design/Header/Menu"

// Header component.
export default function Header() {
	// Render.
	return (
		<header className="font-ancho max-w-screen-lg mx-auto p-5">
			<Logo />
			<Menu />
		</header>
	)
}
