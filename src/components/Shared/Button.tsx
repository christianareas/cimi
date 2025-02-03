// Dependencies.
import Link from "next/link"

// Types.
type ButtonProps = {
	buttonText: string
	colorScheme: string
}

// Component.
export default function Button({ buttonText, colorScheme }: ButtonProps) {
	// Render.
	return (
		<Link href="#todo">
			<button
				type="button"
				className={[
					`border-${colorScheme}`,
					`shadow-${colorScheme}`,
					`text-${colorScheme}`,
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
