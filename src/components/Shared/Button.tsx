// Dependencies.
import { colorsSchemes } from "@/data/colorSchemes"
import Link from "next/link"

// Types.
type ButtonProps = {
	buttonText: string
	buttonLink: string
	colorScheme:
		| "cimi-blue"
		| "cimi-green"
		| "cimi-purple-light"
		| "cimi-purple-dark"
}

// Component.
export default function Button({
	buttonText,
	buttonLink,
	colorScheme,
}: ButtonProps) {
	// Color classes.
	const colorClasses = colorsSchemes[colorScheme]

	// Render.
	return (
		<Link href={buttonLink}>
			<button
				type="button"
				className={`mt-5 w-40 cursor-pointer rounded-lg border-2 px-4 py-3 text-center font-ancho font-medium text-xs shadow-[4px_4px_0] ${colorClasses}`}
			>
				{buttonText}
			</button>
		</Link>
	)
}
