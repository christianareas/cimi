"use client"

// Dependencies.
import fetchData from "@/lib/ui/fetchData"
import * as Dialog from "@radix-ui/react-dialog"
import * as Form from "@radix-ui/react-form"
import { useState } from "react"

// Component.
export default function SignUpForm() {
	// Set the initial state.
	const [signUpSuccess, setSignUpSuccess] = useState()

	// Sign up.
	async function signUp(
		firstName: string,
		lastName: string,
		email: string,
		tag: string,
	) {
		const { primaryEmail } = await fetchData({
			method: "POST",
			endpoint: "/api/givebutterContacts",
			body: { firstName, lastName, email, tag },
			cache: "no-cache",
		})

		return primaryEmail
	}

	// Render.
	return (
		<article className="pb-10 text-center sm:pb-20">
			<h2 className="mx-auto w-60 pb-2 font-ancho font-bold text-2xl text-cimi-blue sm:pb-5">
				Become a Member Today
			</h2>

			{/* Sign up button and dialog. */}
			<Dialog.Root>
				{/* Sign up button. */}
				<Dialog.Trigger asChild>
					<button
						type="button"
						className="w-40 cursor-pointer rounded-lg border-2 border-cimi-blue bg-cimi-cream px-2 py-3 text-center font-ancho font-normal text-cimi-blue text-xs shadow-[4px_4px_0] shadow-cimi-blue"
					>
						Sign Up
					</button>
				</Dialog.Trigger>

				{/* Dialog. */}
				<Dialog.Portal>
					<Dialog.Overlay className="fixed inset-0 flex items-center justify-center bg-black p-5 opacity-50 sm:p-10" />
					<Dialog.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 max-h-[90vh] w-[90vw] max-w-2xl rounded-lg bg-cimi-cream px-5 py-10 shadow-lg sm:px-10 sm:py-20">
						<Dialog.Title className="pb-5 text-center font-ancho font-bold text-2xl text-cimi-blue">
							Become a Member Today
						</Dialog.Title>
						<Form.Root
							className="space-y-5"
							onSubmit={async (event) => {
								event.preventDefault()
								const form = event.currentTarget

								// Get the email.
								const formData = new FormData(event.currentTarget)
								const email = formData.get("email") as string
								const firstName = formData.get("firstName") as string
								const lastName = formData.get("lastName") as string

								try {
									// Subscribe to the newsletter.
									const savedEmail = await signUp(
										firstName,
										lastName,
										email,
										"cimiMember",
									)

									// Update the success state.
									setSignUpSuccess(savedEmail)

									// Reset the form.
									form.reset()
								} catch (error) {
									console.error(error)
								}
							}}
						>
							{/* First name. */}
							<Form.Field name="firstName">
								{/* Input. */}
								<Form.Control asChild>
									<input
										type="text"
										placeholder="Enter your first name."
										className="w-full rounded-lg border border-cimi-blue p-2"
										required
									/>
								</Form.Control>

								{/* Error messages. */}
								<Form.Message match="valueMissing">
									<p className="px-2 pt-2 text-pink-400">
										Enter your first name.
									</p>
								</Form.Message>
							</Form.Field>

							{/* Last name. */}
							<Form.Field name="lastName">
								{/* Input. */}
								<Form.Control asChild>
									<input
										type="text"
										placeholder="Enter your last name."
										className="w-full rounded-lg border border-cimi-blue p-2"
										required
									/>
								</Form.Control>

								{/* Error messages. */}
								<Form.Message match="valueMissing">
									<p className="px-2 pt-2 text-pink-400">
										Enter your last name.
									</p>
								</Form.Message>
							</Form.Field>

							{/* Email. */}
							<Form.Field name="email">
								{/* Input. */}
								<Form.Control asChild>
									<input
										type="email"
										placeholder="Enter your email."
										className="w-full rounded-lg border border-cimi-blue p-2"
										required
									/>
								</Form.Control>

								{/* Error messages. */}
								<Form.Message match="valueMissing">
									<p className="px-2 pt-2 text-pink-400">
										Enter your email address.
									</p>
								</Form.Message>
								<Form.Message match="typeMismatch">
									<p className="px-2 pt-2 text-pink-400">
										Enter a valid email.
									</p>
								</Form.Message>

								{/* Success message. */}
								{signUpSuccess && (
									<p className="px-2 pt-2 text-green-400">
										You signed up {signUpSuccess}. Thank you!
									</p>
								)}
							</Form.Field>

							{/* Submit. */}
							<Form.Submit asChild>
								<section className="flex justify-end">
									<button
										type="submit"
										className="w-40 cursor-pointer rounded-lg border-2 border-cimi-blue bg-cimi-cream px-2 py-3 text-center font-ancho font-normal text-cimi-blue text-xs shadow-[4px_4px_0] shadow-cimi-blue"
									>
										Sign Up
									</button>
								</section>
							</Form.Submit>
						</Form.Root>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</article>
	)
}
