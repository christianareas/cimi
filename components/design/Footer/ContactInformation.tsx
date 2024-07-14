// Dependencies.
import Link from "next/link"
import Image from "next/image"

// Types.
interface ContactInformationProps {
	className?: string
}

// ContactInformation component.
export default function ContactInformation({
	className,
}: ContactInformationProps) {
	// Render.
	return (
		<article className={`space-y-2 ${className}`}>
			<Link href="/">
				<Image
					src="/images/cimi-footer.svg"
					alt="CIMI"
					width={165}
					height={57}
					className="w-auto"
				/>
			</Link>
			<a href="#todo">
				<Image
					src="/images/social-media/facebook.svg"
					alt="Facebook"
					width={20}
					height={20}
					className="w-auto pt-3"
				/>
			</a>
			<p className="font-ancho font-semibold text-xl">Connect with us!</p>
			<section className="space-y-1">
				<p>
					<a href="mailto:info@runningwithcimi.org">info@runningwithcimi.org</a>
				</p>
				<p>
					<a href="tel:+14088762767">+1 (408) 876-2767</a>
				</p>
				<p>CIMI, PO Box 1743, Los Gatos CA 95031-1743</p>
			</section>
		</article>
	)
}
