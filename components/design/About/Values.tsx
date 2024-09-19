// Dependencies.
import Image from "next/image"

// Component.
export default function Values() {
	// Render.
	return (
		<article className="space-y-3 rounded-lg px-20 text-center font-normal">
			<h2 className="pb-3 font-ancho font-bold text-2xl text-cimi-blue">
				Our Values
			</h2>

			<section className="grid grid-cols-2 gap-5 uppercase lg:mx-auto lg:max-w-screen-lg lg:grid-cols-4">
				<article>
					<section className="relative w-full pb-[100%]">
						<Image
							src="/images/about/values/education-as-a-key-to-success.svg"
							alt="Education as a key to success"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<h3 className="font-semibold">Education as a key to success</h3>
				</article>

				<article>
					<section className="relative w-full pb-[100%]">
						<Image
							src="/images/about/values/exercise-for-empowerment.svg"
							alt="Exercise for empowerment"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<h3 className="font-semibold">Exercise for empowerment</h3>
				</article>

				<article>
					<section className="relative w-full pb-[100%]">
						<Image
							src="/images/about/values/family-inclusive-activities.svg"
							alt="Family-inclusive activities"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<h3 className="font-semibold">Family-inclusive activities</h3>
				</article>

				<article>
					<section className="relative w-full pb-[100%]">
						<Image
							src="/images/about/values/community-focused-outreach.svg"
							alt="Community-focused outreach"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover object-top"
						/>
					</section>
					<h3 className="font-semibold">Community-focused outreach</h3>
				</article>
			</section>
		</article>
	)
}
