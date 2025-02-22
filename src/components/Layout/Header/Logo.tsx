// Dependencies.
import Link from "next/link"
import Image from "next/image"

// Component.
export default function Logo() {
	return (
		<section className="relative z-50 w-3/4">
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
		</section>
	)
}
