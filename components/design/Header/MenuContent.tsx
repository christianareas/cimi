// Dependencies.
import Image from "next/image";

// MenuContent component.
export default function MenuContent() {
	// Render.
	return (
		<>
			<p className="text-cimi-cream font-bold text-2xl">
				Donate to the Community
			</p>
			<button type="button">
				<Image
					src="/images/give-to-cimi.svg"
					alt="Give to CIMI"
					width={163}
					height={47}
				/>
			</button>
			<p className="text-cimi-cream font-bold text-2xl">Join the Community</p>
			<button type="button">
				<Image
					src="/images/join-cimi.svg"
					alt="Join CIMI"
					width={163}
					height={47}
				/>
			</button>
		</>
	);
}
