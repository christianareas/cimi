// Dependencies.
import ColorfulBorder from "@/src/components/design/ColorfulBorder"
import Image from "next/image"

// Types.
type HeroProps = {
	imageSrc: string
	imageAlt: string
	imageClassName?: string
}

// Component.
export default function Hero({
	imageSrc,
	imageAlt,
	imageClassName,
}: HeroProps) {
	// Render.
	return (
		<section>
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
	)
}
