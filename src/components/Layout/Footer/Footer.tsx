// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import ColorfulBorder from "@/components/Layout/ColorfulBorder"
import Link from "next/link"
import Image from "next/image"
import * as Form from "@radix-ui/react-form"

// Component.
export default function Footer() {
	// Button text.
	const subscribeButton = "Sign Up"
	const contactButton = "Let's Chat!"

	// Render.
	return (
		<footer>
			{/*  */}
			<section className="lg:flex">
				{/* Join the Community. */}
				<ContentCard
					contentSrc="layout.footer.join-the-community"
					articleClassName="lg:flex-1 text-center"
					sectionClassName="lg:w-3/5 ml-auto"
					bgClassName="bg-cimi-pink"
					boldClassName="font-extrabold"
					buttonSrc="/images/home//buttons/join-cimi-black-pink.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
					buttonClassName="mx-auto"
				/>

				{/* Donate to the Community. */}
				<ContentCard
					contentSrc="layout.footer.donate-to-the-community"
					articleClassName="lg:flex-1 text-center"
					sectionClassName="lg:w-3/5 mr-auto"
					bgClassName="bg-cimi-yellow"
					boldClassName="font-extrabold"
					buttonSrc="/images/home//buttons/give-to-cimi-black-yellow.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
					buttonClassName="mx-auto"
				/>
			</section>

			<ColorfulBorder />

			{/*  */}
			<section className="bg-cimi-purple px-10 py-20 text-cimi-cream">
				<section className="mx-auto flex max-w-xs flex-col items-center space-y-20 px-5 font-semibold text-xs lg:max-w-(--breakpoint-lg) lg:flex-row lg:space-x-20 lg:space-y-2">
					{/* Contact information. */}
					<article className="space-y-2 lg:flex-1">
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
								className="w-auto pt-3"
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
					<article className="w-full space-y-2 lg:flex-1">
						<Form.Root className="space-y-2">
							<Form.Field name="email">
								<Form.Label>
									<p className="font-ancho font-bold text-2xl">
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
								<Form.Message match="valueMissing">
									<p className="px-2 pt-2 text-pink-200">Enter an email.</p>
								</Form.Message>
								<Form.Message className="FormMessage" match="typeMismatch">
									<p className="px-2 pt-2 text-pink-200">
										Enter a valid email.
									</p>
								</Form.Message>
							</Form.Field>
							<Form.Submit asChild>
								<section className="flex justify-end">
									<button type="submit" aria-label={subscribeButton}>
										<Image
											src="/images/buttons/sign-up.svg"
											alt={subscribeButton}
											width={163}
											height={47}
											className="w-auto"
										/>
									</button>
								</section>
							</Form.Submit>
						</Form.Root>
					</article>

					{/* Newsletter signup form. */}
					<article className="w-full space-y-2 lg:flex-1">
						<Form.Root className="space-y-2">
							<Form.Field name="message">
								<Form.Label>
									<p className="rounded-t-lg border border-cimi-cream p-2">
										TO: info@runningwithcimi.org
									</p>
								</Form.Label>
								<Form.Control asChild>
									<textarea
										id="contact"
										placeholder="Write us a message."
										className="h-16 w-full rounded-b-lg border border-cimi-cream border-t-0 bg-cimi-purple p-2"
										required
									/>
								</Form.Control>
								<Form.Message match="valueMissing">
									<p className="px-2 pt-2 text-pink-200">Enter a message.</p>
								</Form.Message>
							</Form.Field>
							<Form.Submit asChild>
								<section className="flex justify-end">
									<button type="submit" aria-label={contactButton}>
										<Image
											src="/images/buttons/lets-chat.svg"
											alt={contactButton}
											width={163}
											height={47}
											className="w-auto"
										/>
									</button>
								</section>
							</Form.Submit>
						</Form.Root>
					</article>
				</section>
			</section>
		</footer>
	)
}
