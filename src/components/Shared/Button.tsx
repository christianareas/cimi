// Dependencies.
import Link from "next/link"

// Types.
export interface ButtonProps {
	buttonText: string
	buttonWidth: "w-40" | "w-20"
	buttonColorClasses:
		| "border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-cream" // cimi-cream-blue
		| "border-cimi-green bg-cimi-cream text-cimi-green shadow-cimi-cream" // cimi-cream-green
		| "border-cimi-purple bg-cimi-cream text-cimi-purple shadow-cimi-cream" // cimi-cream-purple
		| "border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-blue" // cimi-blue-light
		| "border-cimi-cream bg-cimi-blue text-cimi-cream shadow-cimi-blue" // cimi-blue-dark
		| "border-cimi-green bg-cimi-cream text-cimi-green shadow-cimi-green" // cimi-green-light
		| "border-cimi-cream bg-cimi-green text-cimi-cream shadow-cimi-green" // cimi-green-dark
		| "border-cimi-purple bg-cimi-cream text-cimi-purple shadow-cimi-purple" // cimi-purple-light
		| "border-cimi-cream bg-cimi-purple text-cimi-cream shadow-cimi-purple" // cimi-purple-dark
		| "border-cimi-red-orange bg-cimi-cream text-cimi-red-orange shadow-cimi-red-orange" // cimi-red-orange-light
		| "border-cimi-cream bg-cimi-red-orange text-cimi-cream shadow-cimi-red-orange" // cimi-red-orange-dark
		| "border-cimi-pink bg-black text-cimi-cream shadow-black" // cimi-black-pink
		| "border-cimi-yellow bg-black text-cimi-cream shadow-black" // cimi-black-yellow
		| "border-neutral-500 bg-cimi-cream text-neutral-500 shadow-neutral-500" // neutral-light
		| "border-cimi-cream bg-neutral-500 text-cimi-cream shadow-neutral-500" // neutral-dark
	buttonType: "button" | "submit"
	buttonLink?: string
	buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>
}

// Component.
export default function Button({
	buttonText,
	buttonWidth,
	buttonColorClasses,
	buttonType,
	buttonLink,
	buttonOnClick,
}: ButtonProps) {
	// Button.
	const button = (
		<button
			type={buttonType}
			onClick={buttonOnClick}
			className={`cursor-pointer rounded-lg border-2 px-2 py-3 text-center font-ancho font-normal text-xs shadow-[4px_4px_0] ${buttonWidth} ${buttonColorClasses}`}
		>
			{buttonText}
		</button>
	)
	// Render.
	return buttonLink ? <Link href={buttonLink}>{button}</Link> : button
}
