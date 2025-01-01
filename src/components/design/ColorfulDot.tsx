// Dependencies.
import tailwindConfig from "@/tailwind.config"

// Types.
type CimiColor =
	| "cimi-cream"
	| "cimi-dark-cream"
	| "cimi-red"
	| "cimi-yellow"
	| "cimi-green"
	| "cimi-blue"
	| "cimi-purple"
	| "cimi-pink"
	| "cimi-black"

type ColorfulDotProps = {
	cimiColor: CimiColor
}

// Component.
export default function ColorfulDot({ cimiColor }: ColorfulDotProps) {
	// Colors.
	const tailwindThemeColors = tailwindConfig.theme?.extend?.colors as Record<
		CimiColor,
		string
	>
	const fillColor = tailwindThemeColors[cimiColor]

	// Render.
	return (
		<section
			style={{
				backgroundPosition: "left",
				backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
				height: "16px",
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill={fillColor}
			>
				<title>Colorful Dot</title>
				<circle cx="8" cy="8" r="8" />
			</svg>
		</section>
	)
}
