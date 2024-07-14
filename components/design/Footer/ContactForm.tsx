// Dependencies.
import * as Form from "@radix-ui/react-form"
import Image from "next/image"

// ContactForm component.
export default function ContactForm() {
	// Render.
	return (
		<article className="lg:flex-1 space-y-2">
			<Form.Root className="space-y-2">
				<Form.Field name="message">
					<Form.Label>
						<p className="border border-cimi-cream rounded-t-lg p-2">
							TO: info@runningwithcimi.org
						</p>
					</Form.Label>
					<Form.Message match="valueMissing">
						<p className="p-2 border border-t-0 text-red-400">
							Enter a message.
						</p>
					</Form.Message>
					<Form.Control asChild>
						<textarea
							placeholder="Write us a message."
							className="bg-cimi-purple border border-t-0 border-cimi-cream w-full h-24 rounded-b-lg p-2"
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
