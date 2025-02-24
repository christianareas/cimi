// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import Button from "@/components/Shared/Button"
import CollapsibleContentButton from "@/components/Shared/CollapsibleContentButton"

// Component.
export default function Main() {
	// Render.
	return (
		<main className="fade">
			{/*
			***************
			CIMI VOLUNTEERS
			***************
			*/}
			<ContentCard
				contentSrc="join.volunteer.cimi-volunteers"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-green"
				fontClassName="font-medium"
			/>

			{/*
			************************
			BECOME A VOLUNTEER TODAY
			************************
			*/}
			<article className="mx-auto w-80 text-center">
				<h2 className="font-ancho font-bold text-2xl text-cimi-green ">
					Become a Volunteer Today
				</h2>
				<Button
					buttonText="Sign Up"
					buttonLink=""
					buttonWidth="w-40"
					buttonColorClasses="border-cimi-green bg-cimi-cream text-cimi-green shadow-cimi-green"
					buttonType="button"
				/>
			</article>

			{/*
			**************
			VOLUNTEER FAQS
			**************
			*/}
			<section className="mx-auto p-20 lg:w-full">
				<h2 className="pb-5 text-center font-ancho font-bold text-2xl text-cimi-green">
					Volunteer FAQs
				</h2>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="join.volunteer.buttons.1-button-text"
					buttonDimensions="w-xs lg:w-2xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="join.volunteer.buttons.1-collapsible-content"
					colorScheme="cimi-green-light"
				/>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="join.volunteer.buttons.2-button-text"
					buttonDimensions="w-xs lg:w-2xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="join.volunteer.buttons.2-collapsible-content"
					colorScheme="cimi-green-light"
				/>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="join.volunteer.buttons.3-button-text"
					buttonDimensions="w-xs lg:w-2xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="join.volunteer.buttons.3-collapsible-content"
					colorScheme="cimi-green-light"
				/>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="join.volunteer.buttons.4-button-text"
					buttonDimensions="w-xs lg:w-2xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="join.volunteer.buttons.4-collapsible-content"
					colorScheme="cimi-green-light"
				/>
			</section>
		</main>
	)
}
