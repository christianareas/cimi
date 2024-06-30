// Dependencies.
import Image from "next/image"

// MenuContent component.
export default function MenuContent() {
	// Render.
	return (
		<ul className="list-none text-cimi-cream font-bold text-2xl mx-4 space-y-6">
			<li>
				<p>Donate to the Community</p>
				<button type="button" className="mt-2">
					<Image
						src="/images/give-to-cimi.svg"
						alt="Give to CIMI"
						width={163}
						height={47}
					/>
				</button>
			</li>
			<li>
				<p>Join the Community</p>
				<button type="button" className="mt-2">
					<Image
						src="/images/join-cimi.svg"
						alt="Join CIMI"
						width={163}
						height={47}
					/>
				</button>
			</li>
		</ul>
	)
}
