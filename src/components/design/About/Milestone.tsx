// Dependencies.
import ColorfulDot from "@/components/design/ColorfulDot"
import Image from "next/image"

// Types.
export type CimiColors =
	| "cimi-cream"
	| "cimi-dark-cream"
	| "cimi-red"
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
	content: string
}

// Component.
export default function Milestone({
	colorfulDotColor,
	imageSrc,
	imageAlt,
	imagePosition,
	title,
	content,
}: MilestoneProps) {
	return (
		<article className="relative ml-20 pr-20 font-medium lg:mx-auto lg:flex lg:h-full lg:max-w-screen-lg lg:pr-0">
			{/* Image. */}
			<section className="lg:w-1/2 ">
				<section className="z-50 lg:hidden">
					<ColorfulDot cimiColor={colorfulDotColor} />
				</section>
				<section className="mt-[-0.75rem] border-cimi-blue border-l-4 pb-10 pl-10 lg:mt-0 lg:border-0 lg:pr-10 lg:pb-20 lg:pl-0">
					<section className="relative w-full pb-[56.25%]">
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
				<section className="flex-grow border-cimi-blue border-l-4 pb-20 pl-10 lg:mt-[-0.75rem]">
					<h3 className="pb-5 font-ancho font-bold text-cimi-blue text-xl">
						{title}
					</h3>
					<p>{content}</p>
				</section>
			</section>
		</article>
	)
}
