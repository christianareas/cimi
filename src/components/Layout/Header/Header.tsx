// Dependencies.
import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/Layout/Header/Menu"
import ColorfulBorder from "@/components/Layout/ColorfulBorder"

// Types.
interface HeaderProps {
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
		<header className="fade">
			<section className="mx-auto mt-5 px-5 lg:max-w-5xl">
				{/* Logo. */}
				<section className="relative z-50 w-3/4">
					<Link href="/">
						<Image
							priority={true}
							src="/images/cimi.svg"
							alt="CIMI"
							width={217}
							height={97}
							className="w-auto"
						/>
					</Link>
				</section>

				{/* Menu. */}
				<Menu />
			</section>

			<section>
				{/* Donate button. */}
				<section className="relative z-50 mx-auto px-5 lg:max-w-5xl">
					<Link href="/donate">
						<Image
							src="/images/buttons/donate.svg"
							alt="Donate"
							width={175}
							height={84}
							className="ml-auto w-auto py-5"
						/>
					</Link>
				</section>

				{/* Hero. */}
				<section className="-mt-15">
					<ColorfulBorder />
					<section className="relative w-full pb-[56.25%] lg:pb-[28.13%]">
						<Image
							priority={true}
							src={imageSrc}
							alt={imageAlt}
							fill
							className={`absolute inset-0 rounded-lg object-cover ${imageClassName}`}
						/>
					</section>
					<ColorfulBorder />
				</section>
			</section>
		</header>
	)
}
