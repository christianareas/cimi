// Dependencies.
import { ChangeEvent, FC } from "react"

// Type.
type PasswordFieldProps = {
	value: string,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

// Password Field component.
export const PasswordField: FC<PasswordFieldProps> = ({
	value,
	onChange,
}) => {
	return (
		<>
			<label htmlFor="password" />
			<input
				required
				type="password"
				id="password"
				name="password"
				placeholder="Password"
				value={value}
				onChange={onChange}
				className="border border-gray-300 my-2 p-2 rounded"
			/>
		</>
	)
}
