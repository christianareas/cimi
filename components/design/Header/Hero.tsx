// Dependencies.
import Image from "next/image"

// Types.
type HeroProps = {
	src: string
}

// Hero component.
export default function Hero({ src }: HeroProps) {
	// Render.
	return (
		<Image
			priority={true}
			src={src}
			alt="todo"
			width={1440}
			height={534}
			className="w-auto"
		/>
	)
}
