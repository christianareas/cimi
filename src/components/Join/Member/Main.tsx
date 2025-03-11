// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import Button from "@/components/Shared/Button"
import Faqs from "@/components/Shared/Faqs"

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
			<article className="pb-10 text-center sm:pb-20">
				<h2 className="mx-auto w-60 pb-2 font-ancho font-bold text-2xl text-cimi-blue sm:pb-5">
					Become a Member Today
				</h2>
				<Button
					buttonText="Sign Up"
					buttonLink=""
					buttonWidth="w-40"
					buttonClassNames="border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-blue"
					buttonType="button"
				/>
			</article>

			{/* Volunteer FAQs. */}
			<Faqs
				faqsName="member"
				textClassName="text-cimi-blue"
				borderClassName="border-cimi-blue"
			/>
		</main>
	)
}
