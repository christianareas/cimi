// Dependencies.
import Image from "next/image"

// ContactForm component.
export default function ContactForm() {
	// Render.
	return (
		<article className="space-y-2">
			<Image
				src={"/images/buttons/lets-chat.svg"}
				alt={"Let's Chat!"}
				width={163}
				height={47}
				className="w-auto"
			/>
		</article>
	)
}
