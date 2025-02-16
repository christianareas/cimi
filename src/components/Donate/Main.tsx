// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import CollapsibleContentButton from "@/components/Shared/CollapsibleContentButton"

// Component.
export default function Main() {
	// Render.
	return (
		<main>
			{/*
			*************
			DONATION FORM
			*************
			*/}
			<ContentCard
				contentSrc="events.intro"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-green"
				fontClassName="font-medium"
				boldClassName="font-extrabold"
			/>

			{/*
			*********
			THANK YOU
			*********
			*/}

			{/*
			**********
			DONOR FAQS
			**********
			*/}
			<section className="mx-auto p-20 lg:w-full">
				<h2 className="pb-5 text-center font-ancho font-bold text-2xl text-cimi-green">
					Donor FAQs
				</h2>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="donate.buttons.1-button-text"
					buttonDimensions="w-xs lg:w-xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="donate.buttons.1-collapsible-content"
					colorScheme="cimi-green"
				/>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="donate.buttons.2-button-text"
					buttonDimensions="w-xs lg:w-xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="donate.buttons.2-collapsible-content"
					colorScheme="cimi-green"
				/>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="donate.buttons.3-button-text"
					buttonDimensions="w-xs lg:w-xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="donate.buttons.3-collapsible-content"
					colorScheme="cimi-green"
				/>
			</section>
		</main>
	)
}
