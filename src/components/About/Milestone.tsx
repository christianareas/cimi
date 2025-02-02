// Dependencies.
import ColorfulDot from "@/components/About/ColorfulDot"
import Image from "next/image"

// Types.
export type CimiColors =
	| "cimi-cream"
	| "cimi-dark-cream"
	| "cimi-red-orange"
	| "cimi-yellow"
	| "cimi-green"
	| "cimi-blue"
	| "cimi-purple"
	| "cimi-pink"
	| "cimi-black"

type MilestoneProps = {
	colorfulDotColor: CimiColors
	imageSrc: string
	imageAlt: string
	imagePosition: string
	title: string
	year: string
	content: string
}

// Component.
export default function Milestone({
	colorfulDotColor,
	imageSrc,
	imageAlt,
	imagePosition,
	title,
	year,
	content,
}: MilestoneProps) {
	return (
		<article className="relative ml-20 pr-20 font-medium lg:mx-auto lg:flex lg:h-full lg:max-w-(--breakpoint-lg) lg:pr-0">
			{/* Image. */}
			<section className="lg:w-1/2">
				<section className="z-50 lg:hidden">
					<ColorfulDot cimiColor={colorfulDotColor} />
				</section>
				<section className="mt-[-0.95rem] border-cimi-blue border-l-4 pb-10 pl-10 lg:mt-0 lg:border-0 lg:pr-10 lg:pb-20 lg:pl-0">
					<section className="relative aspect-video">
						<Image
							src={imageSrc}
							alt={imageAlt}
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							className={`${imagePosition} absolute inset-0 rounded-lg object-cover`}
						/>
					</section>
				</section>
			</section>

			{/* Content. */}
			<section className="flex flex-col lg:w-1/2">
				<section className="z-50 hidden lg:block">
					<ColorfulDot cimiColor={colorfulDotColor} />
				</section>
				<section className="grow border-cimi-blue border-l-4 pb-20 pl-10 lg:mt-[-0.95rem]">
					<h3 className="font-ancho font-bold text-cimi-blue text-xl">
						{title}
					</h3>
					<h4 className="font-ancho font-medium text-cimi-blue">{year}</h4>
					<p className="pt-4">{content}</p>
				</section>
			</section>
		</article>
	)
}
