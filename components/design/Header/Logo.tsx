// Dependencies.
import Link from "next/link"
import Image from "next/image"

// Component.
export default function Logo() {
	return (
		<Link href="/">
			<Image
				priority={true}
				src="/images/cimi.svg"
				alt="CIMI"
				width={217}
				height={97}
				className="w-auto"
			/>
		</Link>
	)
}
