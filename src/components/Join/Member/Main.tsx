// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import Faqs from "@/components/Shared/Faqs"
import SignUpForm from "@/components/Shared/SignUpForm"

// Component.
export default function Main() {
	// Render.
	return (
		<main className="fade">
			{/* CIMI Members. */}
			<ContentCard
				contentSrc="join.member.cimi-members"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-blue dark:text-cimi-blue-dark-mode"
				fontClassName="font-medium"
			/>

			{/* Become a Member Today. */}
			<SignUpForm become="member" />

			{/* Volunteer FAQs. */}
			<Faqs
				faqsName="member"
				textClassName="text-cimi-blue dark:text-cimi-blue-dark-mode"
				borderClassName="border-cimi-blue dark:border-cimi-blue-dark-mode"
			/>
		</main>
	)
}
