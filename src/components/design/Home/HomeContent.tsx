// Dependencies.
import ContentCard from "@/components/design/ContentCard"
import Image from "next/image"
import Team from "@/components/design/Home/Team"
import Testimonials from "@/components/design/Home/Testimonials"

// Component.
export default function HomeContent() {
	// Render.
	return (
		<main>
			{/* CIMI'S MISSION */}
			<ContentCard
				contentSrc="home/intro.md"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
				boldClassName="font-extrabold"
			/>

			{/* ABOUT CIMI */}
			<section className="lg:flex">
				<article className="relative w-full pb-[56.25%] lg:w-1/2 lg:pb-[28.13%]">
					<Image
						src="/images/home/about.jpg"
						alt="About CIMI"
						fill
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="absolute inset-0 rounded-lg object-cover object-bottom"
					/>
				</article>
				<ContentCard
					contentSrc="home/about-cimi.md"
					articleClassName="lg:w-1/2 text-center lg:text-left"
					sectionClassName="lg:w-3/5 mr-auto"
					bgClassName="bg-cimi-blue"
					fontClassName="text-cimi-cream"
					boldClassName="font-extrabold"
					buttonSrc="/images/home/buttons/read-our-story.svg"
					buttonAlt="CIMI"
					buttonLink="about"
					buttonClassName="mx-auto lg:mx-0"
				/>
			</section>

			{/* UPCOMING EVENTS */}
			<section className="lg:flex">
				<ContentCard
					contentSrc="home/upcoming-events.md"
					articleClassName="lg:w-1/2 text-center lg:text-left"
					sectionClassName="lg:w-3/5 ml-auto"
					bgClassName="bg-cimi-yellow"
					boldClassName="font-extrabold"
					buttonSrc="/images/home//buttons/learn-more-black-yellow.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
					buttonClassName="mx-auto lg:mx-0"
				/>
				<article className="relative w-full pb-[56.25%] lg:w-1/2 lg:pb-[28.13%]">
					<Image
						src="/images/home/upcoming-events.jpg"
						alt="About CIMI"
						fill
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="absolute inset-0 rounded-lg object-cover object-top"
					/>
				</article>
			</section>

			{/* BECOME A MEMBER AND DONATE TO CIMI */}
			<section className="lg:flex">
				<ContentCard
					contentSrc="home/become-a-member.md"
					articleClassName="lg:flex-1 text-center"
					sectionClassName="lg:w-3/5 ml-auto"
					bgClassName="bg-cimi-green"
					fontClassName="text-cimi-cream"
					boldClassName="font-extrabold"
					buttonSrc="/images/home//buttons/join-cimi-cream-green.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
					buttonClassName="mx-auto"
				/>
				<ContentCard
					contentSrc="home/donate-to-cimi.md"
					articleClassName="lg:flex-1 text-center"
					sectionClassName="lg:w-3/5 mr-auto"
					bgClassName="bg-cimi-pink"
					boldClassName="font-extrabold"
					buttonSrc="/images/home//buttons/join-cimi-black-pink.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
					buttonClassName="mx-auto"
				/>
			</section>

			{/* OUR TEAM */}
			<Team />

			{/* TESTIMONIALS OF MEMBERS */}
			<Testimonials />
		</main>
	)
}
