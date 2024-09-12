// Dependencies.
import Image from "next/image"

// Types.
type TestimonialCardProps = {
	imgSrc: string
	imgAlt: string
	contentSrc: string
	testimonialSrc: string
}

// Component.
export default function TestimonialCard({
	imgSrc,
	imgAlt,
	contentSrc,
	testimonialSrc,
}: TestimonialCardProps) {
	// Render.
	return (
		<article className="lg:grid lg:grid-cols-2 lg:gap-10">
			<section className="relative mb-5 w-full pb-[100%] lg:mb-0">
				<Image
					src={imgSrc}
					alt={imgAlt}
					fill
					className="absolute inset-0 mx-auto mb-5 rounded-lg object-cover lg:mb-0"
				/>
			</section>
			<section>
				<p className="font-ancho text-3xl">“</p>
				<p>{contentSrc}</p>
				<p className="pt-5 font-ancho text-3xl">”</p>
				<p className="font-bold text-xs">&ndash;{testimonialSrc}</p>
			</section>
		</article>
	)
}
