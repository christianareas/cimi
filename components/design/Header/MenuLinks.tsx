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

// Component.
export default function MenuLinks({ links, isNested = false }: MenuLinksProps) {
	// Render.
	return (
		<ul
			className={`font-normal ${!isNested ? "list-none space-y-6" : "list-disc space-y-0"}`}
		>
			{links.map((link) => (
				<li key={link.id} className="mx-4 my-2">
					<Link href={link.href}>{link.label}</Link>
					{link.subLinks && <MenuLinks links={link.subLinks} isNested={true} />}
				</li>
			))}
		</ul>
	)
}
