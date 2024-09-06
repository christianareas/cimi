// Dependencies.
import * as Tabs from "@radix-ui/react-tabs"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import Image from "next/image"

// Testimonials component.
export default function Testimonials() {
	// Render.
	return (
		<article className="space-y-3 bg-cimi-red p-20 text-center font-normal">
			<h2 className="font-ancho font-bold text-2xl text-cimi-cream">
				Testimonials of Members
			</h2>
			<Tabs.Root defaultValue="tab-one">
				<Tabs.List>
					<Tabs.Trigger value="tab-one" />
					<Tabs.Trigger value="tab-two" />
				</Tabs.List>
				<Tabs.Content value="tab-one">
					<article className="mx-auto grid grid-cols-4 items-center text-left text-cimi-cream">
						<ChevronLeftIcon className="ml-auto h-8 w-8 cursor-pointer text-cimi-cream" />
						<section className="px-10">
							<Image
								src="/images/home/testimonials/maria-perla.jpg"
								alt="Maria Perla"
								width="800"
								height="800"
								className="ml-auto rounded-lg"
							/>
						</section>
						<section className="px-10">
							<p className="font-ancho text-2xl">“</p>
							<p>
								Being a member for more than five years has been an opportunity
								for me because it has helped me physically, emotionally, and
								financially and has helped me manage stress. It has helped me
								learn about myself.
							</p>
							<p className="font-ancho text-2xl">”</p>
							<p className="font-bold text-xs">–Mom</p>
						</section>
						<ChevronRightIcon className="mr-auto h-8 w-8 cursor-pointer text-cimi-cream" />
					</article>
				</Tabs.Content>
				<Tabs.Content value="tab-two">
					<p>Tab two.</p>
				</Tabs.Content>
			</Tabs.Root>{" "}
		</article>
	)
}
