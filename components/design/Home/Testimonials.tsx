// Dependencies.
import * as Tabs from "@radix-ui/react-tabs"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import Image from "next/image"

// Testimonials component.
export default function Testimonials() {
	// Render.
	return (
		<article className="bg-cimi-red px-10 py-20 text-center font-normal lg:text-left">
			<section className="lg:mx-auto lg:max-w-screen-lg">
				<h2 className="pb-5 text-center font-ancho font-bold text-2xl text-cimi-cream">
					Testimonials of Members
				</h2>
				<Tabs.Root defaultValue="tab-one">
					<Tabs.List className="hidden">
						<Tabs.Trigger value="tab-one" />
						<Tabs.Trigger value="tab-two" />
					</Tabs.List>
					<Tabs.Content value="tab-one">
						<article className="mx-auto grid grid-cols-[1fr,5fr,1fr] items-center py-2 text-cimi-cream">
							<ChevronLeftIcon className="mr-3 ml-auto h-8 w-8 cursor-pointer text-cimi-cream md:mr-10 lg:mr-20" />
							<section className="lg:grid lg:grid-cols-2 lg:gap-10">
								<section className="relative mb-5 w-full pb-[100%] lg:mb-0">
									<Image
										src="/images/home/testimonials/maria-perla.jpg"
										alt="Maria Perla"
										fill
										className="absolute inset-0 mx-auto mb-5 rounded-lg object-cover lg:mb-0"
									/>
								</section>
								<section className="">
									<p className="font-ancho text-2xl">“</p>
									<p>
										In these 3 years of being a member, I am part of a great
										community that helps girls learn how to code and be a better
										person.
									</p>
									<p className="pt-5 font-ancho text-2xl">”</p>
									<p className="font-bold text-xs">
										–High school-aged daughter
									</p>
								</section>
							</section>
							<ChevronRightIcon className="mr-auto ml-3 h-8 w-8 cursor-pointer text-cimi-cream md:ml-10 lg:ml-20" />
						</article>
					</Tabs.Content>
					<Tabs.Content value="tab-two">
						<p>Tab two.</p>
					</Tabs.Content>
				</Tabs.Root>{" "}
			</section>
		</article>
	)
}
