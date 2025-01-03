// Dependencies.
import Script from "next/script"

// Component.
export default function DonateContent() {
	// Render.
	return (
		<main>
			{/*
				******
				Donate
				******
			*/}
			<Script
				src="https://widgets.givebutter.com/latest.umd.cjs?acct=S9FZBTWfOHWHZ0Eo&p=other"
				strategy="lazyOnload"
			/>
			<form className="p-20">
				<givebutter-widget id="gGXoEp" />
			</form>
		</main>
	)
}
