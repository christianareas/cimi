// Dependencies.
import ColorfulBorder from "@/components/design/ColorfulBorder"
import Image from "next/image"

// Types.
type HeroProps = {
	src: string
	alt: string
	width: number
	height: number
}

// Hero component.
export default function Hero({ src, alt, width, height }: HeroProps) {
	// Render.
	return (
		<section>
			<ColorfulBorder />
			<Image
				priority={true}
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="mx-auto w-auto"
			/>
			<ColorfulBorder />
		</section>
	)
}
