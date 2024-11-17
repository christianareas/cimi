// Dependencies.
import Image from "next/image"

// Component.
export default function Timeline() {
	return (
		<section className="pb-20">
			<article className="mx-auto ml-20 space-y-5 border-cimi-blue border-l-8 pr-20 pb-20 pl-10 font-medium lg:w-1/2">
				<section className="relative w-full pb-[56.25%] lg:w-1/2 lg:pb-[28.13%]">
					<Image
						src="/images/about/milestones/1.jpg"
						alt="todo"
						fill
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="absolute inset-0 rounded-lg object-cover object-[50%_35%]"
					/>
				</section>
				<h3 className="font-ancho font-bold text-cimi-blue text-xl">
					The first CIMI-sponsored race was held in 2013 in Nicaragua.
				</h3>
				<p>
					Over 250 people participated—many of them women who were running for
					the first time. After completing her first 5k, one woman commented “I
					never thought I would be able to do something like this.”
				</p>
			</article>

			<article className="mx-auto ml-20 space-y-10 border-cimi-blue border-l-8 pr-20 pb-20 pl-10 font-medium lg:w-1/2">
				<section className="relative w-full pb-[56.25%] lg:w-1/2 lg:pb-[28.13%]">
					<Image
						src="/images/about/milestones/1.jpg"
						alt="todo"
						fill
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="absolute inset-0 rounded-lg object-cover object-[50%_35%]"
					/>
				</section>
				<h3 className="font-ancho font-bold text-cimi-blue text-xl">
					The first CIMI-sponsored race was held in 2013 in Nicaragua.
				</h3>
				<p>
					Over 250 people participated—many of them women who were running for
					the first time. After completing her first 5k, one woman commented “I
					never thought I would be able to do something like this.”
				</p>
			</article>
		</section>
	)
}
