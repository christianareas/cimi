// Types.
type LinkType = {
	href: string;
	id: string;
	label: string;
	subLinks?: LinkType[];
};

const links: LinkType[] = [
	{ href: "#", id: "about", label: "About" },
	{ href: "#", id: "events", label: "Events" },
	{ href: "#", id: "donor-info", label: "Donor Info" },
	{
		href: "#",
		id: "join",
		label: "Join",
		subLinks: [
			{ href: "#", id: "be-a-member", label: "Be a Member" },
			{ href: "#", id: "be-a-volunteer", label: "Be a Volunteer" },
		],
	},
	{ href: "#", id: "newsletter", label: "Newsletter" },
	{ href: "#", id: "contact", label: "Contact" },
];

export default links;
