// Dependencies.
import ContactInformation from "@/components/design/Footer/ContactInformation"
import ContactForm from "@/components/design/Footer/ContactForm"
import NewsletterForm from "@/components/design/Footer/NewsletterForm"

// Footer component.
export default function Footer() {
	// Render.
	return (
		<footer className="bg-cimi-purple p-10 text-cimi-cream">
			<section className="mx-auto flex max-w-screen-lg flex-col space-y-20 px-5 font-semibold text-xs lg:flex-row lg:space-x-20 lg:space-y-0">
				<ContactInformation />
				<ContactForm />
				<NewsletterForm />
			</section>
		</footer>
	)
}
