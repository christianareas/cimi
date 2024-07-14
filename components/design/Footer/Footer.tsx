// Dependencies.
import ColorfulBorder from "@/components/design/ColorfulBorder"
import ContactInformation from "@/components/design/Footer/ContactInformation"
import ContactForm from "@/components/design/Footer/ContactForm"
import NewsletterForm from "@/components/design/Footer/NewsletterForm"

// Footer component.
export default function Footer() {
	// Render.
	return (
		<section>
			<ColorfulBorder />
			<footer className="bg-cimi-purple px-10 py-20 text-cimi-cream">
				<section className="mx-auto flex max-w-screen-lg flex-col space-y-20 px-5 font-semibold text-xs md:flex-row md:space-x-20 md:space-y-0 ">
					<ContactInformation className="md:flex-1" />
					<ContactForm className="md:flex-1" />
					<NewsletterForm className="md:flex-1" />
				</section>
			</footer>
		</section>
	)
}
