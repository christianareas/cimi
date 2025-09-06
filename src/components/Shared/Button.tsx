// Dependencies.
import Link from "next/link"

// Types.
export interface ButtonProps {
	buttonText: string
	buttonWidth: "w-40" | "w-20"
	buttonTheme:
		| "cimi-cream-blue"
		| "cimi-cream-green"
		| "cimi-cream-purple"
		| "cimi-purple-dark"
		| "cimi-red-orange-dark"
		| "cimi-black-pink"
		| "cimi-black-yellow"
	buttonClassNames?:
		| "border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-blue" // cimi-blue-light
		| "border-cimi-cream bg-cimi-blue text-cimi-cream shadow-cimi-blue" // cimi-blue-dark
		| "border-cimi-green bg-cimi-cream text-cimi-green shadow-cimi-green" // cimi-green-light
		| "border-cimi-cream bg-cimi-green text-cimi-cream shadow-cimi-green" // cimi-green-dark
		| "border-cimi-purple bg-cimi-cream text-cimi-purple shadow-cimi-purple" // cimi-purple-light
		| "border-cimi-cream bg-cimi-purple text-cimi-cream shadow-cimi-purple" // cimi-purple-dark
		| "border-cimi-red-orange bg-cimi-cream text-cimi-red-orange shadow-cimi-red-orange" // cimi-red-orange-light
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
	buttonTheme,
	buttonType,
	buttonLink,
	buttonOnClick,
}: ButtonProps) {
	// Button.
	const button = (
		<button
			type={buttonType}
			onClick={buttonOnClick}
			className={`cursor-pointer rounded-lg border-2 px-2 py-3 text-center font-ancho font-normal text-xs shadow-[4px_4px_0] ${buttonWidth} ${
				// CIMI Cream.
				buttonTheme === "cimi-cream-blue"
					? "border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-cream dark:border-cimi-blue-dark-mode dark:bg-cimi-cream-dark-mode-light dark:text-cimi-blue-dark-mode dark:shadow-cimi-cream-dark-mode-light"
					: null
			} ${
				buttonTheme === "cimi-cream-green"
					? "border-cimi-green bg-cimi-cream text-cimi-green shadow-cimi-cream dark:border-cimi-green-dark-mode dark:bg-cimi-cream-dark-mode-light dark:text-cimi-green-dark-mode dark:shadow-cimi-cream-dark-mode-light"
					: null
			} ${
				buttonTheme === "cimi-cream-purple"
					? "border-cimi-purple bg-cimi-cream text-cimi-purple shadow-cimi-cream dark:border-cimi-purple-dark-mode dark:bg-cimi-cream-dark-mode-light dark:text-cimi-purple-dark-mode dark:shadow-cimi-cream-dark-mode-light"
					: null
			} ${
				// CIMI Purple.
				buttonTheme === "cimi-purple-dark"
					? "border-cimi-cream bg-cimi-purple text-cimi-cream shadow-cimi-purple dark:border-cimi-cream-dark-mode dark:bg-cimi-purple-dark-mode-light dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-purple-dark-mode-light"
					: null
			} ${
				// CIMI Red-Orange.
				buttonTheme === "cimi-red-orange-dark"
					? "border-cimi-cream bg-cimi-red-orange text-cimi-cream shadow-cimi-red-orange dark:border-cimi-cream-dark-mode dark:bg-cimi-red-orange-dark-mode dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-red-orange-dark-mode"
					: null
			}${
				// CIMI Black.
				buttonTheme === "cimi-black-pink"
					? "border-cimi-pink bg-cimi-black text-cimi-cream shadow-cimi-black dark:border-cimi-pink-dark-mode dark:bg-cimi-black-dark-mode-light dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-black-dark-mode-light"
					: null
			} ${
				buttonTheme === "cimi-black-yellow"
					? "border-cimi-yellow bg-cimi-black text-cimi-cream shadow-cimi-black dark:border-cimi-yellow-dark-mode dark:bg-cimi-black-dark-mode-light dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-black-dark-mode-light"
					: null
			}`}
		>
			{buttonText}
		</button>
	)
	// Render.
	return buttonLink ? <Link href={buttonLink}>{button}</Link> : button
}
