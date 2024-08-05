// Dependencies.
import Markdown from "@/components/design/Markdown"

// HomeContent component.
export default function HomeContent() {
	// Render.
	return (
		<main className="mx-auto max-w-screen-md">
			<article className="space-y-3 p-20 text-center font-medium text-base">
				<Markdown
					slug="home/mission"
					h2ClassName="font-ancho font-bold text-2xl text-cimi-blue"
					boldClassName="font-extrabold"
				/>
			</article>
		</main>
	)
}
