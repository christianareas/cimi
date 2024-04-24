// Dependencies.
import { ReactNode } from "react"
import Link from "next/link"

// Types.
type MenuLinksProps = {
	href: string
	label: string
	subLinks?: MenuLinksProps[]
	children?: ReactNode
}

// MenuLinks component.
export default function MenuLinks({
	href,
	label,
	subLinks,
	children,
}: MenuLinksProps) {
	return (
		<li className="mx-3 my-3">
			<Link href={href}>
				{label || children}
			</Link>
			{subLinks && (
				<ul className="list-disc">
					{subLinks.map((subLink, index) => (
						<MenuLinks
							key={index}
							{...subLink}
						/>
					))}
				</ul>
			)}
		</li>
	)
}
