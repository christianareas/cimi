// Dependencies.
import Image from "next/image"
import { milestones } from "@/data/content/about/milestones"

// Component.
export default function Timeline() {
	return (
		<section className="pb-10 sm:pb-20">
			{milestones.map(
				({
					milestoneDotFillColor,
					milestoneImageSrc,
					milestoneImageAlt,
					milestoneImagePosition,
					milestoneTitle,
					milestoneYear,
					milestoneContent,
				}) => (
					<article
						key={milestoneImageSrc}
						className="relative ml-10 pr-10 font-medium sm:ml-20 sm:pr-20 lg:mx-auto lg:flex lg:h-full lg:max-w-(--breakpoint-lg) lg:pr-0"
					>
						{/* Image half. */}
						<section className="lg:w-1/2">
							{/* Colorful dot. */}
							<section className="z-50 lg:hidden">
								<section className="ml-[-0.375rem] h-4 bg-contain bg-left bg-no-repeat">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16"
									>
										<title>
											{`${milestoneDotFillColor.replace(/^fill-/, "")} dot`}
										</title>
										<circle
											cx="8"
											cy="8"
											r="8"
											className={milestoneDotFillColor}
										/>
									</svg>
								</section>
							</section>

							{/* Image. */}
							<section className="mt-[-0.95rem] border-cimi-blue border-l-4 pb-10 pl-10 sm:pb-20 lg:mt-0 lg:border-0 lg:pr-10 lg:pl-0">
								<section className="relative aspect-video">
									<Image
										src={milestoneImageSrc}
										alt={milestoneImageAlt}
										fill
										sizes="(max-width: 1024px) 100vw, 50vw"
										className={`absolute inset-0 rounded-lg object-cover ${milestoneImagePosition}`}
									/>
								</section>
							</section>
						</section>

						{/* Content half. */}
						<section className="flex flex-col lg:w-1/2">
							{/* Colorful dot. */}
							<section className="z-50 hidden lg:block">
								<section className="ml-[-0.375rem] h-4 bg-contain bg-left bg-no-repeat">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16"
									>
										<title>
											{`${milestoneDotFillColor.replace(/^fill-/, "")} dot`}
										</title>
										<circle
											cx="8"
											cy="8"
											r="8"
											className={milestoneDotFillColor}
										/>
									</svg>
								</section>
							</section>

							{/* Content. */}
							<section className="grow border-cimi-blue border-l-4 pb-10 pl-10 sm:pb-20 lg:mt-[-0.95rem]">
								<h3 className="font-ancho font-bold text-cimi-blue text-xl">
									{milestoneTitle}
								</h3>
								<h4 className="font-ancho font-medium text-cimi-blue">
									{milestoneYear}
								</h4>
								<p className="pt-4">{milestoneContent}</p>
							</section>
						</section>
					</article>
				),
			)}
		</section>
	)
}
