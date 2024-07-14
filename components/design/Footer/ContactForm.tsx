// Dependencies.
import * as Form from "@radix-ui/react-form"
import Image from "next/image"

// ContactForm component.
export default function ContactForm() {
	// Render.
	return (
		<article className="space-y-2 lg:flex-1">
			<Form.Root className="space-y-2">
				<Form.Field name="message">
					<Form.Label>
						<p className="rounded-t-lg border border-cimi-cream p-2">
							TO: info@runningwithcimi.org
						</p>
					</Form.Label>
					<Form.Message match="valueMissing">
						<p className="border border-t-0 p-2 text-red-400">
							Enter a message.
						</p>
					</Form.Message>
					<Form.Control asChild>
						<textarea
							placeholder="Write us a message."
							className="h-24 w-full rounded-b-lg border border-cimi-cream border-t-0 bg-cimi-purple p-2"
							required
						/>
					</Form.Control>
				</Form.Field>
				<Form.Submit asChild>
					<section className="flex justify-end">
						<button type="submit">
							<Image
								src="/images/buttons/lets-chat.svg"
								alt="Let's Chat!"
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
