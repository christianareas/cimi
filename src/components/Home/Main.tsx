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
			{/* CIMI's Mission. */}
			<ContentCard
				contentSrc="home.intro"
				articleClassName="mx-auto text-center lg:w-1/2"
				h2ClassName="text-cimi-blue"
			/>

			{/* About CIMI */}
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
					articleClassName="text-center lg:w-1/2 lg:text-left"
					sectionClassName="lg:mr-auto lg:ml-0 lg:w-3/4"
					bgClassName="bg-cimi-blue"
					fontClassName="text-cimi-cream"
					buttonText="Read Our Story"
					buttonLink="/about"
					buttonColorClasses="border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-cream"
				/>
			</section>

			{/* Upcoming Events. */}
			<section className="lg:flex">
				<ContentCard
					contentSrc="home.upcoming-events"
					articleClassName="text-center lg:w-1/2 lg:text-left"
					sectionClassName="lg:mr-0 lg:ml-auto lg:w-3/4"
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

			{/* Become a Member and Donate to CIMI. */}
			<section className="lg:flex">
				<ContentCard
					contentSrc="home.become-a-member"
					articleClassName="text-center lg:w-1/2"
					sectionClassName="lg:mr-0 lg:ml-auto lg:w-3/4"
					bgClassName="bg-cimi-green"
					fontClassName="text-cimi-cream"
					buttonText="Join CIMI"
					buttonLink="/join"
					buttonColorClasses="border-cimi-green bg-cimi-cream text-cimi-green shadow-cimi-cream"
				/>
				<ContentCard
					contentSrc="home.donate-to-cimi"
					articleClassName="text-center lg:w-1/2"
					sectionClassName="lg:mr-auto lg:ml-0 lg:w-3/4"
					bgClassName="bg-cimi-pink"
					buttonText="Give to CIMI"
					buttonLink="/donate"
					buttonColorClasses="border-cimi-pink bg-black text-cimi-cream shadow-black"
				/>
			</section>

			{/* Our Team. */}
			<Team />

			{/* Testimonials of Members. */}
			<Testimonials />
		</main>
	)
}
