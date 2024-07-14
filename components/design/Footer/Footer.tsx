// Dependencies.
import ContactInformation from "@/components/design/Footer/ContactInformation"
import ContactForm from "@/components/design/Footer/ContactForm"
import NewsletterForm from "@/components/design/Footer/NewsletterForm"

// Footer component.
export default function Footer() {
	// Render.
	return (
		<footer className="bg-cimi-purple text-cimi-cream p-10">
			<section className="flex flex-col lg:flex-row max-w-screen-lg mx-auto font-semibold text-xs space-y-20 lg:space-y-0 lg:space-x-20 px-5">
				<ContactInformation />
				<ContactForm />
				<NewsletterForm />
			</section>
		</footer>
	)
}
