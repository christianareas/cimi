// Dependencies.
import Image from "next/image"

// Logo component.
export default function Logo() {
	return (
		<Image
			className="mt-5"
			src="/images/cimi.svg"
			alt="CIMI"
			width={217}
			height={97}
			priority={true}
		/>
	)
}
