"use client"

// Dependencies.
import { useState, FormEvent, ChangeEvent } from "react"
import { signIn } from "next-auth/react"

// Sign In component.
export const SignIn = () => {
	// Set the initial states.
	let [loading, setLoading] = useState(false)
	let [formValues, setFormValues] = useState({
		email: "",
		password: "",
	})

	// Handle a form submit.
	const handleFormSubmit = async (event: FormEvent) => {
		// Don’t redirect the user on submit.
		event.preventDefault()
		
		// Set the loading state.
		setLoading(true)

		try {
			// Sign in the user.
			const response = await signIn("credentials", {
				email: formValues.email,
				password: formValues.password,
				redirect: true,
				callbackUrl: "/",
			})

			// Reset the loading state.
			setLoading(false)

			// Error handling (to-do).
			
		} catch (error: any) {
			// Reset the loading state.
			setLoading(false)

			// Return an error.
			console.error(error)
			alert(error.message)
		}
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
			onSubmit={handleFormSubmit}
			style={{  }}
		>
			{/* Header */}
			<h2>Sign In</h2>

			{/* Email */}
			<label htmlFor="email" />
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
			<label htmlFor="password" />
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
				{loading ? "Loading..." : "Sign In"}
			</button>
		</form>
	)
}
