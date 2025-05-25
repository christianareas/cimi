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
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
			/>

			{/* Become a Volunteer Today. */}
			<SignUpForm />

			{/* Volunteer FAQs. */}
			<Faqs
				faqsName="member"
				textClassName="text-cimi-blue"
				borderClassName="border-cimi-blue"
			/>
		</main>
	)
}
