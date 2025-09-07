"use client"

// Dependencies.
import * as Dialog from "@radix-ui/react-dialog"
import * as Form from "@radix-ui/react-form"
import { useState } from "react"
import fetchData from "@/lib/ui/fetchData"

// Types.
interface SignUpFormProps {
	become: "member" | "volunteer"
}

// Component.
export default function SignUpForm({ become }: SignUpFormProps) {
	// Set the initial state.
	const [open, setOpen] = useState(false)
	const [signUpSuccess, setSignUpSuccess] = useState()

	//
	const memberVolunteer = {
		member: {
			heading: "Become a Member Today",
			tag: "cimiMember",
			borderColor: "border-cimi-blue dark:border-cimi-blue-dark-mode",
			textColor: "text-cimi-blue dark:text-cimi-blue-dark-mode",
			shadowColor: "shadow-cimi-blue dark:shadow-cimi-blue-dark-mode",
		},
		volunteer: {
			heading: "Become a Volunteer Today",
			tag: "cimiVolunteer",
			borderColor: "border-cimi-green dark:border-cimi-green-dark-mode",
			textColor: "text-cimi-green dark:text-cimi-green-dark-mode",
			shadowColor: "shadow-cimi-green dark:shadow-cimi-green-dark-mode",
		},
	}[become]

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
			<h2
				className={`mx-auto w-60 pb-2 font-ancho font-bold text-2xl sm:pb-5 ${memberVolunteer.textColor}`}
			>
				{memberVolunteer.heading}
			</h2>

			{/* Sign up button and dialog. */}
			<Dialog.Root
				open={open}
				onOpenChange={(open) => {
					if (!open) setSignUpSuccess(undefined)
					setOpen(open)
				}}
			>
				{/* Sign up button. */}
				<Dialog.Trigger asChild>
					<button
						type="button"
						className={`w-40 cursor-pointer rounded-lg border-2 bg-cimi-cream px-2 py-3 text-center font-ancho font-normal text-xs shadow-[4px_4px_0] dark:bg-cimi-cream-dark-mode-light ${memberVolunteer.borderColor} ${memberVolunteer.textColor} ${memberVolunteer.shadowColor}`}
					>
						Sign Up
					</button>
				</Dialog.Trigger>

				{/* Dialog. */}
				<Dialog.Portal>
					<Dialog.Overlay className="fixed inset-0 flex items-center justify-center bg-black p-5 opacity-50 sm:p-10" />
					<Dialog.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 max-h-[90vh] w-[90vw] max-w-2xl rounded-lg bg-cimi-cream px-5 py-10 shadow-lg sm:px-10 sm:py-20 dark:bg-cimi-cream-dark-mode">
						<Dialog.Title
							className={`pb-5 text-center font-ancho font-bold text-2xl ${memberVolunteer.textColor}`}
						>
							{memberVolunteer.heading}
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
										memberVolunteer.tag,
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
										className={`w-full rounded-lg border p-2 ${memberVolunteer.borderColor}`}
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
										className={`w-full rounded-lg border p-2 ${memberVolunteer.borderColor}`}
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
										className={`w-full rounded-lg border p-2 ${memberVolunteer.borderColor}`}
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
										className={`w-40 cursor-pointer rounded-lg border-2 bg-cimi-cream px-2 py-3 text-center font-ancho font-normal text-xs shadow-[4px_4px_0] dark:bg-cimi-cream-dark-mode-light ${memberVolunteer.borderColor} ${memberVolunteer.textColor} ${memberVolunteer.shadowColor}`}
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
