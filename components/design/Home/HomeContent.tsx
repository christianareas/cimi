// Dependencies.
import MarkdownCard from "@/components/design/MarkdownCard"
import Image from "next/image"

// HomeContent component.
export default function HomeContent() {
	// Render.
	return (
		<main>
			<MarkdownCard
				file="home/mission.md"
				h2ClassName="font-ancho font-bold text-2xl text-cimi-blue"
				fontClassName="font-medium"
				boldClassName="font-extrabold"
			/>

			<section className="lg:flex">
				<article className="lg:flex-1">
					<Image
						src="/images/home/about.jpg"
						alt="About CIMI"
						width={4032}
						height={3024}
						className="rounded-lg"
					/>
				</article>

				<MarkdownCard
					file="home/about-cimi.md"
					bgClassName="bg-cimi-blue"
					h2ClassName="font-ancho font-bold text-2xl"
					fontClassName="text-cimi-cream"
					boldClassName="font-extrabold"
					buttonSrc="/images/home/read-our-story.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
				/>
			</section>

			<section className="lg:flex">
				<MarkdownCard
					file="home/upcoming-events.md"
					bgClassName="bg-cimi-yellow"
					h2ClassName="font-ancho font-bold text-2xl"
					boldClassName="font-extrabold"
					buttonSrc="/images/home/learn-more-black-yellow.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
				/>

				<article className="lg:flex-1">
					<Image
						src="/images/home/upcoming-events.jpg"
						alt="About CIMI"
						width={2048}
						height={1536}
						className="rounded-lg"
					/>
				</article>
			</section>

			<section className="lg:flex">
				<MarkdownCard
					file="home/become-a-member.md"
					bgClassName="bg-cimi-green"
					h2ClassName="font-ancho font-bold text-2xl"
					fontClassName="text-cimi-cream"
					boldClassName="font-extrabold"
					buttonSrc="/images/home/join-cimi-cream-green.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
				/>

				<MarkdownCard
					file="home/donate-to-cimi.md"
					bgClassName="bg-cimi-pink"
					h2ClassName="font-ancho font-bold text-2xl"
					boldClassName="font-extrabold"
					buttonSrc="/images/home/join-cimi-black-pink.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
				/>
			</section>

			<article className="space-y-3 rounded-lg p-20 text-center font-normal">
				<h2 className="font-ancho font-bold text-2xl text-cimi-blue">
					Our Team
				</h2>
			</article>

			<article className="space-y-3 rounded-lg bg-cimi-red p-20 text-center font-normal">
				<h2 className="font-ancho font-bold text-2xl text-cimi-cream">
					Testimonials
				</h2>
			</article>
		</main>
	)
}
