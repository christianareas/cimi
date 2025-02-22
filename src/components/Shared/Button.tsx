// Dependencies.
import { colorsSchemes } from "@/data/colorSchemes"
import Link from "next/link"

// Types.
interface ButtonProps {
	buttonText: string
	buttonLink: string
	buttonWidth: "w-40" | "w-20"
	colorScheme:
		| "neutral-light"
		| "neutral-dark"
		| "cimi-cream-blue"
		| "cimi-cream-green"
		| "cimi-cream-purple"
		| "cimi-blue-light"
		| "cimi-blue-dark"
		| "cimi-green-light"
		| "cimi-green-dark"
		| "cimi-purple-dark"
		| "cimi-purple-light"
		| "cimi-red-orange-light"
		| "cimi-red-orange-dark"
}

// Component.
export default function Button({
	buttonText,
	buttonLink,
	buttonWidth,
	colorScheme,
}: ButtonProps) {
	// Color classes.
	const colorClasses = colorsSchemes[colorScheme]

	// Render.
	return (
		<Link href={buttonLink}>
			<button
				type="button"
				className={`mt-5 cursor-pointer rounded-lg border-2 px-4 py-3 text-center font-ancho font-medium text-xs shadow-[4px_4px_0] ${buttonWidth} ${colorClasses}`}
			>
				{buttonText}
			</button>
		</Link>
	)
}
