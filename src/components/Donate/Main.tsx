// Dependencies.
import DonateForm from "@/components/Donate/DonateForm"
import ContentCard from "@/components/Shared/ContentCard"
import Faqs from "@/components/Shared/Faqs"

// Component.
export default function Main() {
	// Render.
	return (
		<main className="fade">
			{/* Donation Form. */}
			<DonateForm />

			{/* Thank You. */}
			<ContentCard
				contentSrc="donate.thank-you"
				articleClassName="mx-auto"
				sectionClassName="max-w-xl"
				h2ClassName="text-center text-cimi-green"
				boldClassName="text-cimi-green"
			/>

			{/* Donor FAQs. */}
			<Faqs
				faqsName="donor"
				textClassName="text-cimi-green"
				borderClassName="border-cimi-green"
			/>
		</main>
	)
}
