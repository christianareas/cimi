// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import Faqs from "@/components/Shared/Faqs"

// Component.
export default function Main() {
	return (
		<main className="fade">
			{/* Get Involved! */}
			<ContentCard
				contentSrc="join.get-involved"
				articleClassName="mx-auto text-center lg:w-1/2"
				h2ClassName="text-cimi-blue"
			/>

			{/* Join FAQs. */}
			<Faqs
				faqsName="join"
				textClassName="text-cimi-blue"
				borderClassName="border-cimi-blue shadow-[4px_4px_0] shadow-cimi-blue"
			/>
		</main>
	)
}
