// Types.
type LinkType = {
	href: string
	id: string
	label: string
	subLinks?: LinkType[]
}

const links: LinkType[] = [
	{ href: "/about", id: "about", label: "About" },
	{ href: "/events", id: "events", label: "Events" },
	{ href: "#todo", id: "donor-info", label: "Donor Info" },
	{
		href: "/join",
		id: "join",
		label: "Join",
		subLinks: [
			{ href: "/join/member", id: "member", label: "Be a Member" },
			{ href: "/join/volunteer", id: "volunteer", label: "Be a Volunteer" },
		],
	},
	{ href: "/newsletter", id: "newsletter", label: "Newsletter" },
	{ href: "#todo", id: "contact", label: "Contact" },
]

export default links
