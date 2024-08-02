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
				<section className="mx-auto flex max-w-xs flex-col items-center space-y-20 px-5 font-semibold text-xs lg:max-w-screen-lg lg:flex-row lg:space-x-20 lg:space-y-2">
					<ContactInformation className="lg:flex-1" />
					<ContactForm className="lg:flex-1" />
					<NewsletterForm className="lg:flex-1" />
				</section>
			</footer>
		</section>
	)
}
