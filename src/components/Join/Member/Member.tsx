// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import Button from "@/components/Shared/Button"
import CollapsibleContentButton from "@/components/Shared/CollapsibleContentButton"

// Component.
export default function MemberContent() {
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
				<Button buttonText="Sign Up" colorScheme="cimi-blue" />
			</article>

			{/*
			***********
			MEMBER FAQS
			***********
			*/}
			<section className="mx-auto p-20 text-center font-ancho text-cimi-blue lg:w-1/2">
				<h2 className="font-bold text-2xl ">Member FAQs</h2>

				<CollapsibleContentButton
					buttonTextSrc="join.member.buttons.1-button-text"
					collapsibleContentSrc="join.member.buttons.1-collapsible-content"
					colorScheme="cimi-blue"
				/>
			</section>
		</main>
	)
}
