// Dependencies.
import * as Tabs from "@radix-ui/react-tabs"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import TestimonialCard from "@/components/design/Home/TestimonialCard"

// Component.
export default function Testimonials() {
	// Render.
	return (
		<section className="bg-cimi-red px-10 py-20 text-center font-normal lg:text-left">
			<section className="lg:mx-auto lg:max-w-screen-lg">
				<Tabs.Root defaultValue="one">
					<Tabs.List className="hidden">
						<Tabs.Trigger value="one" />
						<Tabs.Trigger value="two" />
					</Tabs.List>
					<h2 className="pb-5 text-center font-ancho font-bold text-2xl text-cimi-cream">
						Testimonials of Members
					</h2>

					<section className="mx-auto grid grid-cols-[1fr,5fr,1fr] items-center py-2 text-cimi-cream">
						<ChevronLeftIcon className="mr-3 ml-auto h-8 w-8 cursor-pointer text-cimi-cream md:mr-10 lg:mr-20" />

						<Tabs.Content value="one">
							<TestimonialCard />
						</Tabs.Content>

						<Tabs.Content value="two">
							<TestimonialCard />
						</Tabs.Content>
						<ChevronRightIcon className="mr-auto ml-3 h-8 w-8 cursor-pointer text-cimi-cream md:ml-10 lg:ml-20" />
					</section>
				</Tabs.Root>{" "}
			</section>
		</section>
	)
}
