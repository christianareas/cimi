// Dependencies.
import MarkdownCard from "@/components/design/MarkdownCard"
import Image from "next/image"
import Team from "@/components/design/Home/Team"
import Testimonials from "@/components/design/Home/Testimonials"

// HomeContent component.
export default function HomeContent() {
	// Render.
	return (
		<main>
			<MarkdownCard
				src="home/mission.md"
				articleClassName="lg:w-1/2 mx-auto"
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
				boldClassName="font-extrabold"
			/>

			<section className="lg:flex">
				<article className="relative w-full pb-[100%] lg:w-1/2 lg:pb-[50%]">
					<Image
						src="/images/home/about.jpg"
						alt="About CIMI"
						fill
						className="absolute inset-0 rounded-lg object-cover object-center"
					/>
				</article>
				<MarkdownCard
					src="home/about-cimi.md"
					articleClassName="lg:w-1/2"
					sectionClassName="lg:w-3/5 mr-auto"
					bgClassName="bg-cimi-blue"
					fontClassName="text-cimi-cream"
					boldClassName="font-extrabold"
					buttonSrc="/images/home/buttons/read-our-story.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
				/>
			</section>

			<section className="lg:flex">
				<MarkdownCard
					src="home/upcoming-events.md"
					articleClassName="lg:w-1/2"
					sectionClassName="lg:w-3/5 ml-auto"
					bgClassName="bg-cimi-yellow"
					boldClassName="font-extrabold"
					buttonSrc="/images/home//buttons/learn-more-black-yellow.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
				/>
				<article className="relative w-full pb-[100%] lg:w-1/2 lg:pb-[50%]">
					<Image
						src="/images/home/upcoming-events.jpg"
						alt="About CIMI"
						fill
						className="absolute inset-0 rounded-lg object-cover object-center"
					/>
				</article>
			</section>

			<section className="lg:flex">
				<MarkdownCard
					src="home/become-a-member.md"
					articleClassName="lg:flex-1"
					sectionClassName="lg:w-3/5 ml-auto"
					bgClassName="bg-cimi-green"
					fontClassName="text-cimi-cream"
					boldClassName="font-extrabold"
					buttonSrc="/images/home//buttons/join-cimi-cream-green.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
				/>
				<MarkdownCard
					src="home/donate-to-cimi.md"
					articleClassName="lg:flex-1"
					sectionClassName="lg:w-3/5 mr-auto"
					bgClassName="bg-cimi-pink"
					boldClassName="font-extrabold"
					buttonSrc="/images/home//buttons/join-cimi-black-pink.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
				/>
			</section>

			<Team />

			<Testimonials />
		</main>
	)
}
