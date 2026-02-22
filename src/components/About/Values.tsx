// Dependencies.
import Image from "next/image"
import { values } from "@/data/content/about/values"

// Component.
export default function Values() {
	// Render.
	return (
		<article className="space-y-3 rounded-lg px-10 text-center font-normal sm:px-20">
			<h2 className="pb-3 font-ancho font-bold text-2xl text-cimi-blue">
				Our Values
			</h2>

			<section className="grid grid-cols-2 gap-5 uppercase sm:gap-10 md:grid-cols-4 lg:mx-auto lg:max-w-2xl">
				{values.map((value) => (
					<article
						key={value.valueHeading}
						className="flex flex-col items-center"
					>
						<section className="relative w-full pb-[100%]">
							<Image
								src={value.valueImage}
								alt={value.valueHeading}
								fill
								sizes="(max-width: 1024px) 50vw, 25vw"
								className="absolute inset-0 rounded-lg object-cover"
							/>
						</section>
						<h3 className="max-w-[164px] pt-2 font-semibold">
							{value.valueHeading}
						</h3>
					</article>
				))}
			</section>
		</article>
	)
}
