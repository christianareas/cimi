// Dependencies.
import Logo from "@/src/components/design/Header/Logo"
import Menu from "@/src/components/design/Header/Menu"
import Donate from "@/src/components/design/Header/Donate"
import Hero from "@/src/components/design/Header/Hero"

// Types.
type HeaderProps = {
	imageSrc: string
	imageAlt: string
	imageClassName?: string
}

// Component.
export default function Header({
	imageSrc,
	imageAlt,
	imageClassName,
}: HeaderProps) {
	// Render.
	return (
		<header>
			<section className="mx-auto max-w-screen-lg px-5 pt-5 font-ancho">
				<Logo />
				<Menu />
				<Donate />
			</section>
			<Hero
				imageSrc={imageSrc}
				imageAlt={imageAlt}
				imageClassName={imageClassName}
			/>
		</header>
	)
}
