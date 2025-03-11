// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
// import CollapsibleContentButton from "@/components/Shared/CollapsibleContentButton"

// Buttons.
const buttons = [
	{
		buttonTextSrc: "join.buttons.1-button-text",
		collapsibleContentSrc: "join.buttons.1-collapsible-content",
	},
	{
		buttonTextSrc: "join.buttons.2-button-text",
		collapsibleContentSrc: "join.buttons.2-collapsible-content",
	},
	{
		buttonTextSrc: "join.buttons.3-button-text",
		collapsibleContentSrc: "join.buttons.3-collapsible-content",
	},
	{
		buttonTextSrc: "join.buttons.4-button-text",
		collapsibleContentSrc: "join.buttons.4-collapsible-content",
	},
	{
		buttonTextSrc: "join.buttons.5-button-text",
		collapsibleContentSrc: "join.buttons.5-collapsible-content",
	},
	{
		buttonTextSrc: "join.buttons.6-button-text",
		collapsibleContentSrc: "join.buttons.6-collapsible-content",
	},
	{
		buttonTextSrc: "join.buttons.7-button-text",
		collapsibleContentSrc: "join.buttons.7-collapsible-content",
	},
	{
		buttonTextSrc: "join.buttons.8-button-text",
		collapsibleContentSrc: "join.buttons.8-collapsible-content",
	},
]

// Component.
export default function Main() {
	return (
		<main className="fade">
			{/* Get Involved! */}
			<ContentCard
				contentSrc="join.get-involved"
				articleClassName="mx-auto text-center lg:w-1/2"
				h2ClassName="text-cimi-blue"
			/>

			{/* Buttons. */}
			{/* <section className="mx-auto grid max-w-3xl grid-cols-1 gap-5 px-10 pt-10 pb-20">
				{buttons.map((button) => (
					<CollapsibleContentButton
						key={button.buttonTextSrc}
						buttonTextSrc={button.buttonTextSrc}
						buttonDimensions=""
						buttonClassNames="border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-blue shadow-[4px_4px_0]"
						collapsibleContentSrc={button.collapsibleContentSrc}
					/>
				))}
			</section> */}
		</main>
	)
}
