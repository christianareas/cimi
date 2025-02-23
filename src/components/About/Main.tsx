// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import Image from "next/image"
import Values from "@/components/About/Values"
import Timeline from "@/components/About/Timeline"
import Team from "@/components/About/Team"

// Component.
export default function Main() {
	// Render.
	return (
		<main>
			{/*
				**************
				CIMI’s Mission
				**************
			*/}
			<ContentCard
				contentSrc="about.intro"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
			/>

			{/*
				**********
				Our Values
				**********
			*/}
			<Values />

			{/*
				***************
				History of CIMI
				***************
			*/}
			<ContentCard
				contentSrc="about.history-of-cimi"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
			/>

			{/*
				********
				Timeline
				********
			*/}
			<Timeline />

			{/*
				********************
				Who Is CIMI Made Of?
				********************
			*/}
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
					articleClassName="lg:w-1/2 text-center lg:text-left"
					sectionClassName="lg:w-3/5 mr-auto"
					bgClassName="bg-cimi-blue"
					fontClassName="text-cimi-cream"
				/>
			</article>

			{/*
				*************
				Meet the Team
				*************
			*/}
			<Team />
		</main>
	)
}
