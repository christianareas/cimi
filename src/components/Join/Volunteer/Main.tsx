// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import Faqs from "@/components/Shared/Faqs"
import SignUpForm from "@/components/Shared/SignUpForm"

// Component.
export default function Main() {
	// Render.
	return (
		<main className="fade">
			{/* CIMI Volunteers. */}
			<ContentCard
				contentSrc="join.volunteer.cimi-volunteers"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-green dark:text-cimi-green-dark-mode"
				fontClassName="font-medium"
			/>

			{/* Become a Volunteer Today. */}
			<SignUpForm become="volunteer" />

			{/* Volunteer FAQs. */}
			<Faqs
				faqsName="volunteer"
				textClassName="text-cimi-green dark:text-cimi-green-dark-mode"
				borderClassName="border-cimi-green dark:border-cimi-green-dark-mode"
			/>
		</main>
	)
}
