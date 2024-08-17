// Dependencies.
import ColorfulBorder from "@/components/design/ColorfulBorder"
import Image from "next/image"

// Types.
type HeroProps = {
	src: string
	alt: string
}

// Hero component.
export default function Hero({ src, alt }: HeroProps) {
	// Render.
	return (
		<section>
			<ColorfulBorder />
			<section className="relative w-full pb-[28.13%]">
				<Image
					priority={true}
					src={src}
					alt={alt}
					fill
					className="absolute inset-0 rounded-lg object-cover object-bottom"
				/>
			</section>
			<ColorfulBorder />
		</section>
	)
}
