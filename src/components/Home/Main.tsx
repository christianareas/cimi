// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import Image from "next/image"
import Team from "@/components/Home/Team"
import Testimonials from "@/components/Home/Testimonials"

// Component.
export default function Main() {
	// Render.
	return (
		<main>
			{/* CIMI'S MISSION */}
			<ContentCard
				contentSrc="home.intro"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
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
					contentSrc="home.about-cimi"
					articleClassName="lg:w-1/2 text-center lg:text-left"
					sectionClassName="lg:w-3/5 mr-auto"
					bgClassName="bg-cimi-blue"
					fontClassName="text-cimi-cream"
					buttonText="Read Our Story"
					buttonLink="/about"
					buttonColorClasses="border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-cream"
				/>
			</section>

			{/* UPCOMING EVENTS */}
			<section className="lg:flex">
				<ContentCard
					contentSrc="home.upcoming-events"
					articleClassName="lg:w-1/2 text-center lg:text-left"
					sectionClassName="lg:w-3/5 ml-auto"
					bgClassName="bg-cimi-yellow"
					buttonText="Learn More"
					buttonLink="/events"
					buttonColorClasses="border-cimi-yellow bg-black text-cimi-cream shadow-black"
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
					contentSrc="home.become-a-member"
					articleClassName="lg:flex-1 text-center"
					sectionClassName="lg:w-3/5 ml-auto"
					bgClassName="bg-cimi-green"
					fontClassName="text-cimi-cream"
					buttonText="Join CIMI"
					buttonLink="/join"
					buttonColorClasses="border-cimi-green bg-cimi-cream text-cimi-green shadow-cimi-cream"
				/>
				<ContentCard
					contentSrc="home.donate-to-cimi"
					articleClassName="lg:flex-1 text-center"
					sectionClassName="lg:w-3/5 mr-auto"
					bgClassName="bg-cimi-pink"
					buttonText="Give to CIMI"
					buttonLink="/donate"
					buttonColorClasses="border-cimi-pink bg-black text-cimi-cream shadow-black"
				/>
			</section>

			{/* OUR TEAM */}
			<Team />

			{/* TESTIMONIALS OF MEMBERS */}
			<Testimonials />
		</main>
	)
}
