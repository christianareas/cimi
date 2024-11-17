// Dependencies.
import Logo from "@/components/design/Header/Logo"
import Menu from "@/components/design/Header/Menu"
import Donate from "@/components/design/Header/Donate"
import Hero from "@/components/design/Header/Hero"

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
