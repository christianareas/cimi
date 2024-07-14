// Dependencies.
import Image from "next/image"

// Logo component.
export default function Logo() {
	return (
		<Image
			priority={true}
			src="/images/cimi.svg"
			alt="CIMI"
			width={217}
			height={97}
			className="w-auto"
		/>
	)
}
