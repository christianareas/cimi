"use client"

// Dependencies.
import { useState, FormEvent, ChangeEvent } from "react"
import { signIn } from "next-auth/react"

// Sign Up component.
export const SignUp = () => {
	// Set the initial states.
	let [loading, setLoading] = useState(false)
	let [ formValues, setFormValues ] = useState({
		email: "",
		password: "",
	})

	// Handle a form submit.
	const onSubmit = async (event: FormEvent) => {
		// Prevent default.
		event.preventDefault()
		
		// Set the loading state.
		setLoading(true)

		try {
			// Call.
			const response = await fetch("/api/sign-up", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formValues),
			})

			// Reset the loading state.
			setLoading(false)

			// If the response is not okay, return an error.
			if (!response.ok) {
				alert((await response.json()).message)
				return
			}

			// Sign in the user and redirect them to the homepage.
			signIn(
				undefined,
				{ callbackUrl: "/" },
			)
		} catch (error: any) {
			// Reset the loading state.
			setLoading(false)

			// Return an error.
			console.error(error)
			alert(error.message)
		}

		// Handle a form change.
		const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
			// Get the name and value from the event.
			const { name, value } = event.target

			// Set the form values.
			setFormValues({
				...formValues,
				[name]: value,
			})
		}

		// Render the component.
		return (
			<form
				onSubmit={onSubmit}
				style={{  }}
			>

				{/* Email */}
				<label htmlFor="email">
					Email
				</label>
				<input
					required
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					value={formValues.email}
					onChange={handleFormChange}
					style={{  }}
				/>

				{/* Password */}
				<label htmlFor="password">
					Password
				</label>
				<input
					required
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					value={formValues.password}
					onChange={handleFormChange}
					style={{  }}
				/>

				{/* Submit */}
				<button
					type="submit"
					disabled={loading}
					style={{  }}
				>
					{loading ? "Loading..." : "Sign Up"}
				</button>
			</form>
		)
	}
}
