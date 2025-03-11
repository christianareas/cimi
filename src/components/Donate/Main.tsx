// Dependencies.
import DonateForm from "@/components/Donate/DonateForm"
import ContentCard from "@/components/Shared/ContentCard"
import DonorFaqs from "@/components/Donate/DonateFaqs"

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

			{/* Donor FAQs */}
			<DonorFaqs />
		</main>
	)
}
