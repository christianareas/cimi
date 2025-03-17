"use client"

// Dependencies.
import { useState } from "react"
import fetchData from "@/lib/ui/fetchData"
import ContentCard from "@/components/Shared/ContentCard"
import ColorfulBorder from "@/components/Layout/ColorfulBorder"
import Link from "next/link"
import Image from "next/image"
import * as Form from "@radix-ui/react-form"
import Button from "@/components/Shared/Button"

// Component.
export default function Footer() {
	// Set the initial state.
	const [newsletterSubscriptionSuccess, setNewsletterSubscriptionSuccess] =
		useState()

	// Subscribe to the newsletter.
	async function subscribeToNewsletter(email: string, tag: string) {
		// Fetch the donation URL.
		const { primaryEmail } = await fetchData({
			method: "POST",
			endpoint: "/api/givebutterContacts",
			body: { email, tag },
			cache: "no-cache",
		})

		return primaryEmail
	}

	// Render.
	return (
		<footer className="fade">
			{/* Join and donate cards. */}
			<section className="lg:flex">
				{/* Join the Community. */}
				<ContentCard
					contentSrc="layout.footer.join-the-community"
					articleClassName="text-center lg:flex-1"
					sectionClassName="lg:w-3/4 lg:ml-auto lg:mr-0"
					bgClassName="bg-cimi-pink"
					buttonText="Join CIMI"
					buttonLink="/join"
					buttonColorClasses="border-cimi-pink bg-black text-cimi-cream shadow-black"
				/>

				{/* Donate to the Community. */}
				<ContentCard
					contentSrc="layout.footer.donate-to-the-community"
					articleClassName="text-center lg:flex-1"
					sectionClassName="lg:w-3/4 lg:ml-0 lg:mr-auto"
					bgClassName="bg-cimi-yellow"
					buttonText="Give to CIMI"
					buttonLink="/donate"
					buttonColorClasses="border-cimi-yellow bg-black text-cimi-cream shadow-black"
				/>
			</section>

			<ColorfulBorder />

			{/* Purple section. */}
			<section className="bg-cimi-purple p-10 text-cimi-cream sm:p-20">
				<section className="mx-auto flex flex-col items-center space-y-20 font-semibold text-xs lg:max-w-5xl lg:flex-row lg:items-start lg:space-x-20 lg:space-y-0">
					{/* Contact information. */}
					<article className="w-full max-w-md lg:flex-1">
						{/* Logo. */}
						<Link href="/">
							<Image
								src="/images/cimi-footer.svg"
								alt="CIMI"
								width={165}
								height={57}
							/>
						</Link>

						{/* Social media. */}
						<Link href="https://www.facebook.com/RunCIMI/">
							<Image
								src="/images/social-media/facebook.svg"
								alt="Facebook"
								width={20}
								height={20}
								className="w-auto pt-3 pb-2"
							/>
						</Link>

						{/* Email, phone number, and address. */}
						<p className="font-ancho font-semibold text-xl">Connect with us!</p>
						<section className="space-y-1">
							<p>
								<a href="mailto:info@runningwithcimi.org">
									info@runningwithcimi.org
								</a>
							</p>
							<p>
								<a href="tel:+14088762767">+1 (408) 876-2767</a>
							</p>
							<p>CIMI, PO Box 1743, Los Gatos CA 95031-1743</p>
						</section>
					</article>

					{/* Contact form. */}
					<article className="w-full max-w-md lg:flex-1">
						<Form.Root className="space-y-2">
							<section>
								<p className="rounded-t-lg border-cimi-cream border-x border-t p-2">
									TO: info@runningwithcimi.org
								</p>

								{/* From email. */}
								<Form.Field name="from">
									<section>
										{/* Input. */}
										<Form.Control asChild>
											<input
												type="email"
												placeholder="Enter your email."
												className="w-full border border-cimi-cream border-b-0 p-2"
												required
											/>
										</Form.Control>

										{/* Error messages. */}
										<Form.Message match="valueMissing">
											<p className="border border-x-cimi-cream border-t-pink-400 border-b-0 p-2 text-pink-400">
												Enter your email address.
											</p>
										</Form.Message>
										<Form.Message match="typeMismatch">
											<p className="border border-x-cimi-cream border-t-pink-400 border-b-0 p-2 text-pink-400">
												Enter a valid email.
											</p>
										</Form.Message>
									</section>
								</Form.Field>

								{/* Email message. */}
								<Form.Field name="message">
									{/* Input. */}
									<Form.Control asChild>
										<textarea
											id="contact"
											placeholder="Write us a message."
											className="h-16 w-full rounded-b-lg border border-cimi-cream bg-cimi-purple p-2"
											required
										/>
									</Form.Control>

									{/* Error messages. */}
									<Form.Message match="valueMissing">
										<p className="px-2 pt-2 text-pink-400">
											Enter your message.
										</p>
									</Form.Message>
								</Form.Field>
							</section>

							{/* Submit. */}
							<Form.Submit asChild>
								<section className="flex justify-end">
									<Button
										buttonText="Let's Chat!"
										buttonWidth="w-40"
										buttonClassNames="border-cimi-purple bg-cimi-cream text-cimi-purple shadow-cimi-cream"
										buttonType="submit"
									/>
								</section>
							</Form.Submit>
						</Form.Root>
					</article>

					{/* Newsletter form. */}
					<article className="w-full max-w-md lg:flex-1">
						<Form.Root
							onSubmit={async (event) => {
								event.preventDefault()
								const form = event.currentTarget

								// Get the email.
								const formData = new FormData(event.currentTarget)
								const email = formData.get("email") as string

								try {
									// Subscribe to the newsletter.
									const savedEmail = await subscribeToNewsletter(
										email,
										"cimiNewsletterSubscriber",
									)

									// Update the success state.
									setNewsletterSubscriptionSuccess(savedEmail)

									// Reset the form.
									form.reset()
								} catch (error) {
									console.error(error)
								}
							}}
							className="space-y-2"
						>
							<Form.Field name="email">
								{/* Label and input. */}
								<Form.Label>
									<p className="text-left font-ancho font-bold text-2xl lg:text-right">
										Sign up for the CIMI newsletter
									</p>
								</Form.Label>
								<Form.Control asChild>
									<input
										type="email"
										placeholder="Enter your email."
										className="w-full border-cimi-cream border-b bg-cimi-purple p-2"
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
								{newsletterSubscriptionSuccess && (
									<p className="px-2 pt-2 text-green-400">
										You subscribed {newsletterSubscriptionSuccess}. Thank you!
									</p>
								)}
							</Form.Field>

							{/* Submit. */}
							<Form.Submit asChild>
								<section className="flex justify-end">
									<Button
										buttonText="Sign Up"
										buttonWidth="w-40"
										buttonClassNames="border-cimi-purple bg-cimi-cream text-cimi-purple shadow-cimi-cream"
										buttonType="submit"
									/>
								</section>
							</Form.Submit>
						</Form.Root>
					</article>
				</section>
			</section>
		</footer>
	)
}
