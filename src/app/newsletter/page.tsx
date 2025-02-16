// Dependencies.
import { Fragment } from "react"
import Header from "@/components/Layout/Header/Header"
import NewsletterContent from "@/components/Newsletter/Newsletter"
import Footer from "@/components/Layout/Footer/Footer"

// Page.
export default function Newsletter() {
	// Render.
	return (
		<Fragment>
			<Header
				imageSrc="/images/heroes/newsletter.jpg"
				imageAlt="todo"
				imageClassName="object-[50%_45%]"
			/>
			<NewsletterContent />
			<Footer />
		</Fragment>
	)
}
