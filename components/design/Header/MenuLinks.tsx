// Dependencies.
import Link from "next/link"

// Types.
type LinkType = {
	href: string
	id: string
	label: string
	subLinks?: LinkType[]
}

type MenuLinksProps = {
	links: LinkType[]
	isNested?: boolean
}

// MenuLinks component.
export default function MenuLinks({ links, isNested = false }: MenuLinksProps) {
	// Render.
	return (
		<ul className={isNested ? "list-disc" : "font-light text-sm space-y-6"}>
			{links.map((link) => (
				<li key={link.id} className="mx-3 my-3">
					<Link href={link.href}>{link.label}</Link>
					{link.subLinks && <MenuLinks links={link.subLinks} isNested={true} />}
				</li>
			))}
		</ul>
	)
}
