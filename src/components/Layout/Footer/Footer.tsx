// Dependencies.
import getMarkdown from "@/lib/api/getMarkdown"
import ContentCard from "@/components/Shared/ContentCard"
import ColorfulBorder from "@/components/Layout/ColorfulBorder"
import ContactInformation from "@/components/Layout/Footer/ContactInformation"
import ContactForm from "@/components/Layout/Footer/ContactForm"
import NewsletterForm from "@/components/Layout/Footer/NewsletterForm"

// Component.
export default function Footer() {
	// Render.
	return (
		<footer>
			<section className="lg:flex">
				<ContentCard
					contentSrc="home/join-the-community.md"
					articleClassName="lg:flex-1 text-center"
					sectionClassName="lg:w-3/5 ml-auto"
					bgClassName="bg-cimi-pink"
					boldClassName="font-extrabold"
					buttonSrc="/images/home//buttons/join-cimi-black-pink.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
					buttonClassName="mx-auto"
				/>
				<ContentCard
					contentSrc="home/donate-to-the-community.md"
					articleClassName="lg:flex-1 text-center"
					sectionClassName="lg:w-3/5 mr-auto"
					bgClassName="bg-cimi-yellow"
					boldClassName="font-extrabold"
					buttonSrc="/images/home//buttons/give-to-cimi-black-yellow.svg"
					buttonAlt="CIMI"
					buttonLink="#todo"
					buttonClassName="mx-auto"
				/>
			</section>

			<ColorfulBorder />

			<section className="bg-cimi-purple px-10 py-20 text-cimi-cream">
				<section className="mx-auto flex max-w-xs flex-col items-center space-y-20 px-5 font-semibold text-xs lg:max-w-(--breakpoint-lg) lg:flex-row lg:space-x-20 lg:space-y-2">
					<ContactInformation className="lg:flex-1" />

					<ContactForm className="lg:flex-1" />

					<NewsletterForm className="lg:flex-1" />
				</section>
			</section>
		</footer>
	)
}
