// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import Button from "@/components/Shared/Button"
import CollapsibleContentButton from "@/components/Shared/CollapsibleContentButton"

// Component.
export default function VolunteerContent() {
	// Render.
	return (
		<main>
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
				boldClassName="font-extrabold"
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
				<Button buttonText="Sign Up" colorScheme="cimi-green" />
			</article>

			{/*
			**************
			VOLUNTEER FAQS
			**************
			*/}
			<section className="mx-auto p-20 text-center font-ancho text-cimi-green lg:w-1/2">
				<h2 className="font-bold text-2xl ">Volunteer FAQs</h2>
			</section>
		</main>
	)
}
