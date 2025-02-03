// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import CollapsibleContentButton from "@/components/Shared/CollapsibleContentButton"

// Component.
export default function JoinContent() {
	// Render.
	return (
		<main>
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
				boldClassName="font-extrabold"
			/>

			{/*
			*******
			BUTTONS
			*******
			*/}
			<section className="pb-20 lg:mx-auto lg:flex lg:max-w-(--breakpoint-md) lg:flex-wrap lg:justify-between">
				<section>
					<CollapsibleContentButton
						buttonTextSrc="join.buttons.1-button-text"
						collapsibleContentSrc="join.buttons.1-collapsible-content"
						colorScheme="cimi-blue"
					/>
					<CollapsibleContentButton
						buttonTextSrc="join.buttons.2-button-text"
						collapsibleContentSrc="join.buttons.2-collapsible-content"
						colorScheme="cimi-blue"
					/>
					<CollapsibleContentButton
						buttonTextSrc="join.buttons.3-button-text"
						collapsibleContentSrc="join.buttons.3-collapsible-content"
						colorScheme="cimi-blue"
					/>
					<CollapsibleContentButton
						buttonTextSrc="join.buttons.4-button-text"
						collapsibleContentSrc="join.buttons.4-collapsible-content"
						colorScheme="cimi-blue"
					/>
				</section>
				<section>
					<CollapsibleContentButton
						buttonTextSrc="join.buttons.5-button-text"
						collapsibleContentSrc="join.buttons.5-collapsible-content"
						colorScheme="cimi-blue"
					/>
					<CollapsibleContentButton
						buttonTextSrc="join.buttons.6-button-text"
						collapsibleContentSrc="join.buttons.6-collapsible-content"
						colorScheme="cimi-blue"
					/>
					<CollapsibleContentButton
						buttonTextSrc="join.buttons.7-button-text"
						collapsibleContentSrc="join.buttons.7-collapsible-content"
						colorScheme="cimi-blue"
					/>
					<CollapsibleContentButton
						buttonTextSrc="join.buttons.8-button-text"
						collapsibleContentSrc="join.buttons.8-collapsible-content"
						colorScheme="cimi-blue"
					/>
				</section>
			</section>
		</main>
	)
}
