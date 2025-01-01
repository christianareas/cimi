// Component.
export default function ColorfulBorder() {
	// Render.
	return (
		<section className="flex w-full flex-col">
			<section
				className=""
				style={{
					backgroundImage: "url(/images/colorful-border.svg)",
					backgroundPosition: "center",
					backgroundRepeat: "repeat-x",
					backgroundSize: "contain",
					height: "10px",
				}}
			/>
		</section>
	)
}
