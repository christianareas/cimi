// Dependencies.
import { FC } from "react"

// Type.
type SubmitButtonProps = {
	loading: boolean,
	buttonText: string,
}

// Submit Button component.
export const SubmitButton: FC<SubmitButtonProps> = ({
	loading,
	buttonText,
}) => {
	return (
		<>
			<button
				type="submit"
				disabled={loading}
				className="bg-blue-500 text-white my-2 p-2 rounded disabled:opacity-50"
			>
				{loading ? "Loading..." : buttonText}
			</button>
		</>
	)
}
