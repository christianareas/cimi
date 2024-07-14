// Dependencies.
import * as Form from "@radix-ui/react-form"
import Image from "next/image"

// Types.
interface NewsletterFormProps {
	className?: string
}

// NewsletterForm component.
export default function NewsletterForm({ className }: NewsletterFormProps) {
	// Button text.
	const subscribeButton = "Sign Up"

	// Render.
	return (
		<article className={`space-y-2 ${className}`}>
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
						<p className="px-2 pt-2 text-red-600">Enter an email.</p>
					</Form.Message>
					<Form.Message className="FormMessage" match="typeMismatch">
						<p className="px-2 pt-2 text-red-600">Enter a valid email.</p>
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
	)
}
