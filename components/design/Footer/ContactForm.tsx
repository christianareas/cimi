// Dependencies.
import * as Form from "@radix-ui/react-form"
import Image from "next/image"

// Types.
interface ContactFormProps {
	className?: string
}

// ContactForm component.
export default function ContactForm({ className }: ContactFormProps) {
	// Button text.
	const contactButton = "Let's Chat!"

	// Render.
	return (
		<article className={`space-y-2 ${className}`}>
			<Form.Root className="space-y-2">
				<Form.Field name="message">
					<Form.Label>
						<p className="rounded-t-lg border border-cimi-cream p-2">
							TO: info@runningwithcimi.org
						</p>
					</Form.Label>
					<Form.Control asChild>
						<textarea
							placeholder="Write us a message."
							className="h-16 w-full rounded-b-lg border border-cimi-cream border-t-0 bg-cimi-purple p-2"
							required
						/>
					</Form.Control>
					<Form.Message match="valueMissing">
						<p className="px-2 pt-2 text-red-300">Enter a message.</p>
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
	)
}
