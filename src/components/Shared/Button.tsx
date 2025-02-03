// Dependencies.
import Link from "next/link"

// Types.
type ButtonProps = {
	buttonText: string
	colorScheme: "cimi-blue" | "cimi-green"
}

// Component.
export default function Button({ buttonText, colorScheme }: ButtonProps) {
	// Colors.
	const colorsSchemes = {
		"cimi-blue": "border-cimi-blue shadow-cimi-blue text-cimi-blue",
		"cimi-green": "border-cimi-green shadow-cimi-green text-cimi-green",
	}
	const colorClasses = colorsSchemes[colorScheme]

	// Render.
	return (
		<Link href="#todo">
			<button
				type="button"
				className={[
					`${colorClasses}`,
					"mt-5 w-40 cursor-pointer rounded-xl border-2 px-4 py-3 text-center font-ancho font-medium text-xs shadow-[4px_4px_0]",
				]
					.filter(Boolean)
					.join(" ")}
			>
				{buttonText}
			</button>
		</Link>
	)
}
