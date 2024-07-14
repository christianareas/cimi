// Dependencies.
import Image from "next/image"

// MenuContent component.
export default function MenuContent() {
	// Button text.
	const giveButton = "Give to CIMI"
	const joinButton = "Join CIMI"

	// Render.
	return (
		<ul className="mx-4 list-none space-y-6 font-bold text-2xl text-cimi-cream">
			<li>
				<p>Donate to the Community</p>
				<button type="button" aria-label={giveButton}>
					<Image
						src="/images/buttons/give-to-cimi.svg"
						alt={giveButton}
						width={163}
						height={47}
						className="mt-2 w-auto"
					/>
				</button>
			</li>
			<li>
				<p>Join the Community</p>
				<button type="button" aria-label={joinButton}>
					<Image
						src="/images/buttons/join-cimi.svg"
						alt={joinButton}
						width={163}
						height={47}
						className="mt-2 w-auto"
					/>
				</button>
			</li>
		</ul>
	)
}
