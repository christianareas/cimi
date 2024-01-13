// Dependencies.
import { FC } from "react"

// Type.
type HeaderProps = {
	headerText: string,
}

// Header component.
export const Header: FC<HeaderProps> = ({
	headerText,
}) => {
	return (
		<>
			<h2
				className="text-2xl font-bold my-2"
			>
				{headerText}
			</h2>
		</>
	)
}
