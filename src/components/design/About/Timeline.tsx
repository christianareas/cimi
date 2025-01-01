// Dependencies.
import ColorfulDot from "@/components/design/ColorfulDot"
import Image from "next/image"

// Component.
export default function Timeline() {
	return (
		<article className="relative ml-20 pr-20 pb-20 font-medium">
			<ColorfulDot cimiColor="cimi-pink" />
			<section className="ml-1.5 border-cimi-blue border-l-4 pb-20 pl-10">
				<section className="relative w-full pb-[56.25%]">
					<Image
						src="/images/about/milestones/1.jpg"
						alt="todo"
						fill
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="absolute inset-0 rounded-lg object-cover object-[50%_35%]"
					/>
				</section>
			</section>

			<ColorfulDot cimiColor="cimi-green" />
			<section className="ml-1.5 border-cimi-blue border-l-4 pb-28 pl-10">
				<h3 className="pb-5 font-ancho font-bold text-cimi-blue text-xl">
					The first CIMI-sponsored race was held in 2013 in Nicaragua.
				</h3>
				<p>
					Over 250 people participated—many of them women who were running for
					the first time. After completing her first 5k, one woman commented “I
					never thought I would be able to do something like this.”
				</p>
			</section>
		</article>
	)
}
