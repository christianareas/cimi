// Dependencies.
import Image from "next/image"

// NewsletterForm component.
export default function NewsletterForm() {
	// Render.
	return (
		<article className="space-y-2">
			<p className="font-ancho font-bold text-2xl">
				Sign up for the CIMI newsletter
			</p>
			<Image
				src={"/images/buttons/sign-up.svg"}
				alt={"Sign Up"}
				width={163}
				height={47}
				className="w-auto"
			/>
		</article>
	)
}
