// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import NewsletterPosts from "@/components/Newsletter/NewsletterPosts"

// Component.
export default function Main() {
	// Render.
	return (
		<main>
			{/*
				*****************
				CIMI’s Activities
				*****************
			*/}
			<ContentCard
				contentSrc="newsletter.intro"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-purple"
				fontClassName="font-medium"
			/>

			{/*
				****************
				Newsletter Posts
				****************
			*/}
			<NewsletterPosts />
		</main>
	)
}
