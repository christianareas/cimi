// Dependencies.
import Image from "next/image"

// MenuContent component.
export default function MenuContent() {
	// Render.
	return (
		<ul className="text-cimi-cream font-bold text-2xl space-y-4 list-none">
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
