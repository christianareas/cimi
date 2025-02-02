// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"

// Component.
export default function JoinContent() {
	// Render.
	return (
		<main>
			{/*
			**************
			GET INVOLVED!
			**************
			*/}
			<ContentCard
				contentSrc="join.get-involved"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
				boldClassName="font-extrabold"
			/>
		</main>
	)
}
