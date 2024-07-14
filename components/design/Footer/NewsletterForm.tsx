// Dependencies.
import * as Form from "@radix-ui/react-form"
import Image from "next/image"

// NewsletterForm component.
export default function NewsletterForm() {
	// Render.
	return (
		<article className="lg:flex-1 space-y-2">
			<Form.Root className="space-y-2">
				<Form.Field name="email">
					<Form.Label>
						<p className="font-ancho font-bold text-2xl">
							Sign up for the CIMI newsletter
						</p>
					</Form.Label>
					<Form.Message match="valueMissing">
						<p className="py-2 text-red-400">Enter an email.</p>
					</Form.Message>
					<Form.Control asChild>
						<input
							type="email"
							placeholder="Enter your email."
							className="bg-cimi-purple border-b border-cimi-cream w-full py-2"
							required
						/>
					</Form.Control>
				</Form.Field>
				<Form.Submit asChild>
					<section className="flex justify-end">
						<button type="submit">
							<Image
								src="/images/buttons/sign-up.svg"
								alt="Sign Up"
								width={163}
								height={47}
								className="w-auto"
							/>
						</button>
					</section>
				</Form.Submit>
			</Form.Root>
		</article>
	)
}
