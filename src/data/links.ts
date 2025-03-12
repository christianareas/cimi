// Types.
interface LinksType {
	linkId: string
	linkHref: string
	linkName: string
}

// Links.
export const links: LinksType[] = [
	{
		linkId: "home",
		linkHref: "/",
		linkName: "Home",
	},
	{
		linkId: "about",
		linkHref: "/about",
		linkName: "About",
	},
	{
		linkId: "events",
		linkHref: "/events",
		linkName: "Events",
	},
	{
		linkId: "donate",
		linkHref: "/donate",
		linkName: "Donate",
	},
	{
		linkId: "join",
		linkHref: "/join",
		linkName: "Join",
	},
	{
		linkId: "newsletter",
		linkHref: "/newsletter",
		linkName: "Newsletter",
	},
	{
		linkId: "contact",
		linkHref: "#contact",
		linkName: "Contact",
	},
]

export const nestedLinks: LinksType[] = [
	{
		linkId: "member",
		linkHref: "/join/member",
		linkName: "Be a Member",
	},
	{
		linkId: "volunteer",
		linkHref: "/join/volunteer",
		linkName: "Be a Volunteer",
	},
]
