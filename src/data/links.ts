// Types.
type LinkType = {
	href: string
	id: string
	label: string
	subLinks?: LinkType[]
}

const links: LinkType[] = [
	{ href: "about", id: "about", label: "About" },
	{ href: "#todo", id: "events", label: "Events" },
	{ href: "#todo", id: "donor-info", label: "Donor Info" },
	{
		href: "#todo",
		id: "join",
		label: "Join",
		subLinks: [
			{ href: "#todo", id: "be-a-member", label: "Be a Member" },
			{ href: "#todo", id: "be-a-volunteer", label: "Be a Volunteer" },
		],
	},
	{ href: "#todo", id: "newsletter", label: "Newsletter" },
	{ href: "#todo", id: "contact", label: "Contact" },
]

export default links
