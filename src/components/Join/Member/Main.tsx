// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import Button from "@/components/Shared/Button"
import CollapsibleContentButton from "@/components/Shared/CollapsibleContentButton"

// Component.
export default function Main() {
	// Render.
	return (
		<main>
			{/*
			************
			CIMI MEMBERS
			************
			*/}
			<ContentCard
				contentSrc="join.member.cimi-members"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
				boldClassName="font-extrabold"
			/>

			{/*
			*********************
			BECOME A MEMBER TODAY
			*********************
			*/}
			<article className="mx-auto w-60 text-center">
				<h2 className="font-ancho font-bold text-2xl text-cimi-blue ">
					Become a Member Today
				</h2>
				<Button
					buttonText="Sign Up"
					buttonLink=""
					buttonWidth="w-40"
					colorScheme="cimi-blue"
				/>
			</article>

			{/*
			***********
			MEMBER FAQS
			***********
			*/}
			<section className="mx-auto p-20 lg:w-full">
				<h2 className="pb-5 text-center font-ancho font-bold text-2xl text-cimi-blue">
					Member FAQs
				</h2>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="join.member.buttons.1-button-text"
					buttonDimensions="w-xs lg:w-2xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="join.member.buttons.1-collapsible-content"
					colorScheme="cimi-blue"
				/>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="join.member.buttons.2-button-text"
					buttonDimensions="w-xs lg:w-2xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="join.member.buttons.2-collapsible-content"
					colorScheme="cimi-blue"
				/>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="join.member.buttons.3-button-text"
					buttonDimensions="w-xs lg:w-2xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="join.member.buttons.3-collapsible-content"
					colorScheme="cimi-blue"
				/>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="join.member.buttons.4-button-text"
					buttonDimensions="w-xs lg:w-2xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="join.member.buttons.4-collapsible-content"
					colorScheme="cimi-blue"
				/>

				<CollapsibleContentButton
					dimensions="w-xs lg:w-xl"
					buttonTextSrc="join.member.buttons.5-button-text"
					buttonDimensions="w-xs lg:w-2xl"
					buttonClassName="font-ancho font-bold text-lg"
					collapsibleContentSrc="join.member.buttons.5-collapsible-content"
					colorScheme="cimi-blue"
				/>
			</section>
		</main>
	)
}
