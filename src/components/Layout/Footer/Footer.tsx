// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import ColorfulBorder from "@/components/Layout/ColorfulBorder"
import Link from "next/link"
import Image from "next/image"
import * as Form from "@radix-ui/react-form"
import Button from "@/components/Shared/Button"

// Component.
export default function Footer() {
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
				<section className="mx-auto flex flex-col items-center space-y-10 font-semibold text-xs lg:max-w-5xl lg:flex-row lg:items-start lg:space-x-20 lg:space-y-0">
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
									<Button
										buttonText="Let's Chat!"
										buttonWidth="w-40"
										buttonClassNames="border-cimi-purple bg-cimi-cream text-cimi-purple shadow-cimi-cream"
										buttonType="submit"
										// buttonOnClick=
									/>
								</section>
							</Form.Submit>
						</Form.Root>
					</article>

					{/* Newsletter form. */}
					<article className="w-full max-w-md lg:flex-1">
						<Form.Root className="space-y-2">
							<Form.Field name="email">
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
									<Button
										buttonText="Sign Up"
										buttonWidth="w-40"
										buttonClassNames="border-cimi-purple bg-cimi-cream text-cimi-purple shadow-cimi-cream"
										buttonType="submit"
										// buttonOnClick=
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
