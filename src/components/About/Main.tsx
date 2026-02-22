// Dependencies.
import Image from "next/image"
import Team from "@/components/About/Team"
import Timeline from "@/components/About/Timeline"
import Values from "@/components/About/Values"
import ContentCard from "@/components/Shared/ContentCard"

// Component.
export default function Main() {
	// Render.
	return (
		<main className="fade">
			{/* CIMI’s Mission */}
			<ContentCard
				contentSrc="about.intro"
				articleClassName="mx-auto text-center lg:w-1/2"
				h2ClassName="text-cimi-blue"
			/>

			{/* Our Values */}
			<Values />

			{/* History of CIMI */}
			<ContentCard
				contentSrc="about.history-of-cimi"
				articleClassName="mx-auto text-center lg:w-1/2"
				h2ClassName="text-cimi-blue"
			/>

			{/* Timeline */}
			<Timeline />

			{/* Who Is CIMI Made Of? */}
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
					contentSrc="about.who-is-cimi-made-of"
					articleClassName="text-center lg:w-1/2 lg:text-left"
					sectionClassName="lg:mr-auto lg:ml-0 lg:w-3/4"
					bgClassName="bg-cimi-blue"
					fontClassName="text-cimi-cream"
				/>
			</article>

			{/* Meet the Team */}
			<Team />
		</main>
	)
}
