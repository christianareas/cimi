// Dependencies.
import Link from "next/link"
import Image from "next/image"

// Component.
export default function Donate() {
	// Render.
	return (
		<Link href="#todo">
			<Image
				src="/images/buttons/donate.svg"
				alt="Donate"
				width={175}
				height={84}
				className="ml-auto w-auto py-5"
			/>
		</Link>
	)
}
