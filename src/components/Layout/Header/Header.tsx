// Dependencies.
import Logo from "@/components/Layout/Header/Logo"
import Menu from "@/components/Layout/Header/Menu/Menu"
import Donate from "@/components/Layout/Header/Donate"
import Hero from "@/components/Layout/Header/Hero"

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
			<section className="mx-auto max-w-(--breakpoint-lg) px-5 pt-5 font-ancho">
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
