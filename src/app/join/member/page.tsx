// Dependencies.
import { Fragment } from "react"
import Header from "@/components/Layout/Header/Header"
import MemberContent from "@/components/Join/Member/Member"
import Footer from "@/components/Layout/Footer/Footer"

// Page.
export default function About() {
	// Render.
	return (
		<Fragment>
			<Header
				imageSrc="/images/heroes/member.jpg"
				imageAlt="todo"
				imageClassName="object-[50%_85%]"
			/>
			<MemberContent />
			<Footer />
		</Fragment>
	)
}
