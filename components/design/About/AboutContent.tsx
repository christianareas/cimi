// Dependencies.
import ContentCard from "@/components/design/ContentCard"
import Values from "@/components/design/About/Values"
import Image from "next/image"
import Timeline from "@/components/design/About/Timeline"

// Component.
export default function AboutContent() {
	// Render.
	return (
		<main>
			{/* CIMI'S MISSION */}
			<ContentCard
				contentSrc="about/mission.md"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
				boldClassName="font-extrabold"
			/>

			{/* CIMI VALUES */}
			<Values />

			{/* HISTORY OF CIMI */}
			<ContentCard
				contentSrc="about/history-of-cimi.md"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
				boldClassName="font-extrabold"
			/>

			{/* CIMI TIMELINE */}
			<Timeline />

			{/* WHO IS CIMI MADE OF */}
			<article className="lg:flex">
				<section className="relative w-full pb-[56.25%] lg:w-1/2 lg:pb-[28.13%]">
					<Image
						src="/images/about/who-is-cimi-made-of.png"
						alt="A fun picture of the CIMI board"
						fill
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="absolute inset-0 rounded-lg object-cover object-bottom"
					/>
				</section>
				<ContentCard
					contentSrc="about/who-is-cimi-made-of.md"
					articleClassName="lg:w-1/2 text-center lg:text-left"
					sectionClassName="lg:w-3/5 mr-auto"
					bgClassName="bg-cimi-blue"
					fontClassName="text-cimi-cream"
					boldClassName="font-extrabold"
				/>
			</article>

			{/* MEET THE TEAM */}
		</main>
	)
}
