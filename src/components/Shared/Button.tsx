// Dependencies.
import Link from "next/link"

// Types.
export interface ButtonProps {
	buttonText: string
	buttonWidth: "w-40" | "w-20"
	buttonTheme: // CIMI Cream.
		| "cimi-cream-blue"
		| "cimi-cream-green"
		| "cimi-cream-purple"
		| "cimi-cream-red-orange"
		| "cimi-cream-pink"
		| "cimi-cream-yellow"
		// CIMI Colors.
		| "cimi-blue"
		| "cimi-green"
		| "cimi-purple"
		| "cimi-red-orange"
		| "cimi-pink"
		| "cimi-yellow"
		// CIMI Black.
		| "cimi-black-blue"
		| "cimi-black-green"
		| "cimi-black-purple"
		| "cimi-black-red-orange"
		| "cimi-black-pink"
		| "cimi-black-yellow"
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
				buttonTheme === "cimi-cream-red-orange"
					? "border-cimi-red-orange bg-cimi-cream text-cimi-red-orange shadow-cimi-cream dark:border-cimi-red-orange-dark-mode dark:bg-cimi-cream-dark-mode-light dark:text-cimi-red-orange-dark-mode dark:shadow-cimi-cream-dark-mode-light"
					: null
			} ${
				buttonTheme === "cimi-cream-pink"
					? "border-cimi-pink bg-cimi-cream text-cimi-pink shadow-cimi-cream dark:border-cimi-pink-dark-mode dark:bg-cimi-cream-dark-mode-light dark:text-cimi-pink-dark-mode dark:shadow-cimi-cream-dark-mode-light"
					: null
			} ${
				buttonTheme === "cimi-cream-yellow"
					? "border-cimi-yellow bg-cimi-cream text-cimi-yellow shadow-cimi-cream dark:border-cimi-yellow-dark-mode dark:bg-cimi-cream-dark-mode-light dark:text-cimi-yellow-dark-mode dark:shadow-cimi-cream-dark-mode-light"
					: null
			} ${
				// CIMI Blue.
				buttonTheme === "cimi-blue"
					? "border-cimi-cream bg-cimi-blue text-cimi-cream shadow-cimi-blue dark:border-cimi-cream-dark-mode dark:bg-cimi-blue-dark-mode dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-blue-dark-mode-light"
					: null
			} ${
				// CIMI Green.
				buttonTheme === "cimi-green"
					? "border-cimi-cream bg-cimi-green text-cimi-cream shadow-cimi-green dark:border-cimi-cream-dark-mode dark:bg-cimi-green-dark-mode dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-green-dark-mode-light"
					: null
			} ${
				// CIMI Purple.
				buttonTheme === "cimi-purple"
					? "border-cimi-cream bg-cimi-purple text-cimi-cream shadow-cimi-purple dark:border-cimi-cream-dark-mode dark:bg-cimi-purple-dark-mode-light dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-purple-dark-mode-light"
					: null
			} ${
				// CIMI Red-Orange.
				buttonTheme === "cimi-red-orange"
					? "border-cimi-cream bg-cimi-red-orange text-cimi-cream shadow-cimi-red-orange dark:border-cimi-cream-dark-mode dark:bg-cimi-red-orange-dark-mode dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-red-orange-dark-mode"
					: null
			}${
				// CIMI Pink.
				buttonTheme === "cimi-pink"
					? "border-cimi-cream bg-cimi-pink text-cimi-cream shadow-cimi-pink dark:border-cimi-cream-dark-mode dark:bg-cimi-pink-dark-mode dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-pink-dark-mode"
					: null
			} ${
				// CIMI Yellow.
				buttonTheme === "cimi-yellow"
					? "border-cimi-cream bg-cimi-yellow text-cimi-cream shadow-cimi-yellow dark:border-cimi-cream-dark-mode dark:bg-cimi-yellow-dark-mode dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-yellow-dark-mode"
					: null
			} ${
				// CIMI Black.
				buttonTheme === "cimi-black-blue"
					? "border-cimi-blue bg-cimi-black text-cimi-cream shadow-cimi-black dark:border-cimi-blue-dark-mode dark:bg-cimi-black-dark-mode-light dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-black-dark-mode-light"
					: null
			} ${
				buttonTheme === "cimi-black-green"
					? "border-cimi-green bg-cimi-black text-cimi-cream shadow-cimi-black dark:border-cimi-green-dark-mode dark:bg-cimi-black-dark-mode-light dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-black-dark-mode-light"
					: null
			} ${
				buttonTheme === "cimi-black-purple"
					? "border-cimi-purple bg-cimi-black text-cimi-cream shadow-cimi-black dark:border-cimi-purple-dark-mode dark:bg-cimi-black-dark-mode-light dark:text-cimi-cream-dark-mode-light dark:shadow-cimi-black-dark-mode-light"
					: null
			} ${
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
