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
		<li>
			<Link
				href={href}
				className="block p-2 text-blue-500 hover:text-blue-700"
			>
				{label || children}
			</Link>
			{subLinks && (
				<ul>
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
