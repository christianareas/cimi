// Dependencies.
import { ChangeEvent, FC } from "react"

// Type.
type EmailFieldProps = {
	value: string,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

// Email Field component.
export const EmailField: FC<EmailFieldProps> = ({
	value,
	onChange,
}) => {
	return (
		<>
			<label htmlFor="email" />
			<input
				required
				type="email"
				id="email"
				name="email"
				placeholder="Email"
				value={value}
				onChange={onChange}
				className="border border-gray-300 my-2 p-2 rounded"
			/>
		</>
	)
}
