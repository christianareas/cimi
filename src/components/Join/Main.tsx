// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import CollapsibleContentButton from "@/components/Shared/CollapsibleContentButton"

// Component.
export default function Main() {
	// Render.
	return (
		<main className="fade">
			{/*
			*************
			GET INVOLVED!
			*************
			*/}
			<ContentCard
				contentSrc="join.get-involved"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
			/>

			{/*
			*******
			BUTTONS
			*******
			*/}
			<section className="pb-20 lg:mx-auto lg:flex lg:max-w-5xl lg:flex-wrap lg:justify-between">
				<section>
					<CollapsibleContentButton
						dimensions="w-xs lg:w-[350px]"
						buttonTextSrc="join.buttons.1-button-text"
						buttonDimensions="w-xs lg:min-h-24 lg:w-[350px]"
						buttonClassName="shadow-[4px_4px_0]"
						collapsibleContentSrc="join.buttons.1-collapsible-content"
						colorScheme="cimi-blue-light"
					/>
					<CollapsibleContentButton
						dimensions="w-xs lg:w-[350px]"
						buttonTextSrc="join.buttons.2-button-text"
						buttonDimensions="w-xs lg:min-h-24 lg:w-[350px]"
						buttonClassName="shadow-[4px_4px_0]"
						collapsibleContentSrc="join.buttons.2-collapsible-content"
						colorScheme="cimi-blue-light"
					/>
					<CollapsibleContentButton
						dimensions="w-xs lg:w-[350px]"
						buttonTextSrc="join.buttons.3-button-text"
						buttonDimensions="w-xs lg:min-h-24 lg:w-[350px]"
						buttonClassName="shadow-[4px_4px_0]"
						collapsibleContentSrc="join.buttons.3-collapsible-content"
						colorScheme="cimi-blue-light"
					/>
					<CollapsibleContentButton
						dimensions="w-xs lg:w-[350px]"
						buttonTextSrc="join.buttons.4-button-text"
						buttonDimensions="w-xs lg:min-h-24 lg:w-[350px]"
						buttonClassName="shadow-[4px_4px_0]"
						collapsibleContentSrc="join.buttons.4-collapsible-content"
						colorScheme="cimi-blue-light"
					/>
				</section>
				<section>
					<CollapsibleContentButton
						dimensions="w-xs lg:w-[350px]"
						buttonTextSrc="join.buttons.5-button-text"
						buttonDimensions="w-xs lg:min-h-24 lg:w-[350px]"
						buttonClassName="shadow-[4px_4px_0]"
						collapsibleContentSrc="join.buttons.5-collapsible-content"
						colorScheme="cimi-blue-light"
					/>
					<CollapsibleContentButton
						dimensions="w-xs lg:w-[350px]"
						buttonTextSrc="join.buttons.6-button-text"
						buttonDimensions="w-xs lg:min-h-24 lg:w-[350px]"
						buttonClassName="shadow-[4px_4px_0]"
						collapsibleContentSrc="join.buttons.6-collapsible-content"
						colorScheme="cimi-blue-light"
					/>
					<CollapsibleContentButton
						dimensions="w-xs lg:w-[350px]"
						buttonTextSrc="join.buttons.7-button-text"
						buttonDimensions="w-xs lg:min-h-24 lg:w-[350px]"
						buttonClassName="shadow-[4px_4px_0]"
						collapsibleContentSrc="join.buttons.7-collapsible-content"
						colorScheme="cimi-blue-light"
					/>
					<CollapsibleContentButton
						dimensions="w-xs lg:w-[350px]"
						buttonTextSrc="join.buttons.8-button-text"
						buttonDimensions="w-xs lg:min-h-24 lg:w-[350px]"
						buttonClassName="shadow-[4px_4px_0]"
						collapsibleContentSrc="join.buttons.8-collapsible-content"
						colorScheme="cimi-blue-light"
					/>
				</section>
			</section>
		</main>
	)
}
