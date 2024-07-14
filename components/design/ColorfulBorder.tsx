// ColorfulBorder component.
export default function ColorfulBorder() {
	// Render.
	return (
		<section className="flex w-full flex-col">
			<section
				className="h-4 bg-center bg-repeat-x"
				style={{ backgroundImage: "url(/images/colorful-border.svg)" }}
			/>
		</section>
	)
}
