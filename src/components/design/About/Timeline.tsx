// Dependencies.
import Image from "next/image"

// Component.
export default function Timeline() {
	return (
		<section className="pb-20">
			<article className="mx-auto ml-20 pr-20 font-medium">
				<section className="lg:flex lg:space-x-10">
					<section className="border-cimi-blue border-l-8 pb-20 pl-10 lg:flex-1 lg:border-l-0 lg:pl-0">
						<div className="relative w-full pb-[56.25%]">
							<Image
								src="/images/about/milestones/1.jpg"
								alt="todo"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="absolute inset-0 rounded-lg object-cover object-[50%_35%]"
							/>
						</div>
					</section>

					<section className="border-cimi-blue border-l-8 pb-28 pl-10 lg:flex-1">
						<h3 className="pb-5 font-ancho font-bold text-cimi-blue text-xl">
							The first CIMI-sponsored race was held in 2013 in Nicaragua.
						</h3>
						<p>
							Over 250 people participated—many of them women who were running
							for the first time. After completing her first 5k, one woman
							commented “I never thought I would be able to do something like
							this.”
						</p>
					</section>
				</section>
			</article>
		</section>
	)
}
