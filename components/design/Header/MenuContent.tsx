// Dependencies.
import Image from "next/image"

// MenuContent component.
export default function MenuContent() {
	// Render.
	return (
		<ul className="mx-4 list-none space-y-6 font-bold text-2xl text-cimi-cream">
			<li>
				<p>Donate to the Community</p>
				<button type="button">
					<Image
						src="/images/buttons/give-to-cimi.svg"
						alt="Give to CIMI"
						width={163}
						height={47}
						className="mt-2 w-auto"
					/>
				</button>
			</li>
			<li>
				<p>Join the Community</p>
				<button type="button">
					<Image
						src="/images/buttons/join-cimi.svg"
						alt="Join CIMI"
						width={163}
						height={47}
						className="mt-2 w-auto"
					/>
				</button>
			</li>
		</ul>
	)
}
