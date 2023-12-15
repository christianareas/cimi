"use client"

// Dependencies.
import { useState, FormEvent, ChangeEvent } from "react"
import { signIn } from "next-auth/react"
import { Header } from "@/app/_components/auth/Header"
import { EmailField } from "@/app/_components/auth/EmailField"
import { PasswordField } from "@/app/_components/auth/PasswordField"
import { SubmitButton } from "@/app/_components/auth/SubmitButton"

// Sign-In Form component.
export const SignInForm = () => {
	// Set the initial states.
	let [loading, setLoading] = useState(false)
	let [formValues, setFormValues] = useState({
		email: "",
		password: "",
	})

	// Handle form submit.
	const handleFormSubmit = async (event: FormEvent) => {
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

			// If there’s an error, return it.
			if (response?.error) {
				alert(response?.error)
				return
			}
			
		} catch (error: any) {
			// Reset the loading state.
			setLoading(false)

			// Return an error.
			console.error(error)
			alert(error.message)
		}
	}

	// Handle form change.
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
				headerText="Sign In"
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
				buttonText="Sign In"
			/>
		</form>
	)
}
