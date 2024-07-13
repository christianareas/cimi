// Dependencies.
import ContactInformation from "@/components/design/Footer/ContactInformation"
import ContactForm from "@/components/design/Footer/ContactForm"
import NewsletterForm from "@/components/design/Footer/NewsletterForm"

// Footer component.
export default function Footer() {
	// Render.
	return (
		<footer className="bg-cimi-purple text-cimi-cream p-10">
			<section className="max-w-screen-lg mx-auto">
				<ContactInformation />
				<ContactForm />
				<NewsletterForm />
			</section>
		</footer>
	)
}
