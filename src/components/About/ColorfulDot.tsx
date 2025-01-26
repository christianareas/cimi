// Dependencies.
import type { CimiColors } from "@/components/About/Milestone"

// Types.
type ColorfulDotProps = {
	cimiColor: CimiColors
}

// Component.
export default function ColorfulDot({ cimiColor }: ColorfulDotProps) {
	// Render.
	return (
		<section
			className="ml-[-0.375rem]"
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
			>
				<title>{`${cimiColor} dot`}</title>
				<circle cx="8" cy="8" r="8" className={`fill-${cimiColor}`} />
			</svg>
		</section>
	)
}
