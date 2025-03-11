// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import Button from "@/components/Shared/Button"
import Faqs from "@/components/Shared/Faqs"

// Component.
export default function Main() {
	// Render.
	return (
		<main className="fade">
			{/* CIMI Volunteers. */}
			<ContentCard
				contentSrc="join.volunteer.cimi-volunteers"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-green"
				fontClassName="font-medium"
			/>

			{/* Become a Volunteer Today. */}
			<article className="pb-10 text-center sm:pb-20">
				<h2 className="mx-auto w-80 pb-2 font-ancho font-bold text-2xl text-cimi-green sm:pb-5">
					Become a Volunteer Today
				</h2>
				<Button
					buttonText="Sign Up"
					buttonLink=""
					buttonWidth="w-40"
					buttonClassNames="border-cimi-green bg-cimi-cream text-cimi-green shadow-cimi-green"
					buttonType="button"
				/>
			</article>

			{/* Volunteer FAQs. */}
			<Faqs
				faqsName="volunteer"
				textClassName="text-cimi-green"
				borderClassName="border-cimi-green"
			/>
		</main>
	)
}
