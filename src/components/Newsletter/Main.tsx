// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import NewsletterPosts from "@/components/Newsletter/NewsletterPosts"

// Component.
export default function Main() {
	// Render.
	return (
		<main className="fade">
			{/* CIMI’s Activities. */}
			<ContentCard
				contentSrc="newsletter.intro"
				articleClassName="mx-auto text-center lg:w-1/2"
				h2ClassName="text-cimi-purple"
			/>

			{/* Newsletter Posts */}
			<NewsletterPosts />
		</main>
	)
}
