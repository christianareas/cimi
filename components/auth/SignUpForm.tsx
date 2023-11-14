"use client"

// Dependencies.
import { useState, FormEvent, ChangeEvent } from "react"
import { signIn } from "next-auth/react"
import { Header } from "./Header"
import { EmailField } from "./EmailField"
import { PasswordField } from "./PasswordField"
import { SubmitButton } from "./SubmitButton"

// Sign-Up Form component.
export const SignUpForm = () => {
	// Set the initial states.
	let [loading, setLoading] = useState(false)
	let [ formValues, setFormValues ] = useState({
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
			// Call the API.
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
			signIn(undefined, {
				redirect: true,
				callbackUrl: "/",
			})
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
			className="flex flex-col"
		>
			<Header
				headerText="Sign Up"
			/>

			<EmailField
				value={formValues.email}
				onChange={handleFormChange}
			/>

			<PasswordField
				value={formValues.password}
				onChange={handleFormChange}
			/>

			<SubmitButton
				loading={loading}
				buttonText="Sign Up"
			/>

		</form>
	)	
}
