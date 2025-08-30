// Dependencies.

import Image from "next/image"
import Team from "@/components/Home/Team"
import Testimonials from "@/components/Home/Testimonials"
import ContentCard from "@/components/Shared/ContentCard"

// Component.
export default function Main() {
	// Render.
	return (
		<main className="fade">
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
					bgClassName="bg-cimi-blue dark:bg-cimi-blue-dark-mode"
					fontClassName="text-cimi-cream"
					buttonText="Read Our Story"
					buttonLink="/about"
					buttonColorClasses="border-cimi-blue dark:border-cimi-blue-dark-mode bg-cimi-cream text-cimi-blue dark:text-cimi-blue-dark-mode shadow-cimi-cream"
				/>
			</section>

			{/* Upcoming Events. */}
			<section className="lg:flex">
				<ContentCard
					contentSrc="home.upcoming-events"
					articleClassName="text-cimi-black dark:text-cimi-black text-center lg:w-1/2 lg:text-left"
					sectionClassName="lg:mr-0 lg:ml-auto lg:w-3/4"
					bgClassName="bg-cimi-yellow dark:bg-cimi-yellow-dark-mode"
					buttonText="Learn More"
					buttonLink="/events"
					buttonColorClasses="border-cimi-yellow dark:border-cimi-yellow-dark-mode bg-cimi-black text-cimi-cream shadow-cimi-black"
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
					bgClassName="bg-cimi-green dark:bg-cimi-green-dark-mode"
					fontClassName="text-cimi-cream"
					buttonText="Join CIMI"
					buttonLink="/join"
					buttonColorClasses="border-cimi-green dark:border-cimi-green-dark-mode bg-cimi-cream text-cimi-green dark:text-cimi-green-dark-mode shadow-cimi-cream"
				/>
				<ContentCard
					contentSrc="home.donate-to-cimi"
					articleClassName="text-cimi-black dark:text-cimi-black text-center lg:w-1/2"
					sectionClassName="lg:mr-auto lg:ml-0 lg:w-3/4"
					bgClassName="bg-cimi-pink dark:bg-cimi-pink-dark-mode"
					buttonText="Give to CIMI"
					buttonLink="/donate"
					buttonColorClasses="border-cimi-pink dark:border-cimi-pink-dark-mode bg-cimi-black text-cimi-cream shadow-cimi-black"
				/>
			</section>

			{/* Our Team. */}
			<Team />

			{/* Testimonials of Members. */}
			<Testimonials />
		</main>
	)
}
