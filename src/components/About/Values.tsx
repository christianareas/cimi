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

			<section className="grid grid-cols-2 gap-10 uppercase lg:mx-auto lg:max-w-(--breakpoint-md) lg:grid-cols-4">
				<article className="flex flex-col items-center">
					<section className="relative h-[164px] w-[164px]">
						<Image
							src="/images/about/values/education-as-a-key-to-success.svg"
							alt="Education as a key to success"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<h3 className="max-w-[164px] pt-2 font-semibold">
						Education as a key to success
					</h3>
				</article>

				<article className="flex flex-col items-center">
					<section className="relative h-[164px] w-[164px]">
						<Image
							src="/images/about/values/exercise-for-empowerment.svg"
							alt="Exercise for empowerment"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<h3 className="max-w-[164px] pt-2 font-semibold">
						Exercise for empowerment
					</h3>
				</article>

				<article className="flex flex-col items-center">
					<section className="relative h-[164px] w-[164px]">
						<Image
							src="/images/about/values/family-inclusive-activities.svg"
							alt="Family-inclusive activities"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<h3 className="max-w-[164px] pt-2 font-semibold">
						Family-inclusive activities
					</h3>
				</article>

				<article className="flex flex-col items-center">
					<section className="relative h-[164px] w-[164px]">
						<Image
							src="/images/about/values/community-focused-outreach.svg"
							alt="Community-focused outreach"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover object-top"
						/>
					</section>
					<h3 className="max-w-[164px] pt-2 font-semibold">
						Community-focused outreach
					</h3>
				</article>
			</section>
		</article>
	)
}
