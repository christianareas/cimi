// Dependencies.
import Image from "next/image"

// Types.

// Component.
export default function TestimonialCard() {
	// Render.
	return (
		<article className="lg:grid lg:grid-cols-2 lg:gap-10">
			<section className="relative mb-5 w-full pb-[100%] lg:mb-0">
				<Image
					src="/images/home/testimonials/maria-perla.jpg"
					alt="Maria Perla"
					fill
					className="absolute inset-0 mx-auto mb-5 rounded-lg object-cover lg:mb-0"
				/>
			</section>
			<section className="">
				<p className="font-ancho text-2xl">“</p>
				<p>
					In these 3 years of being a member, I am part of a great community
					that helps girls learn how to code and be a better person.
				</p>
				<p className="pt-5 font-ancho text-2xl">”</p>
				<p className="font-bold text-xs">&ndash;High school-aged daughter</p>
			</section>
		</article>
	)
}
