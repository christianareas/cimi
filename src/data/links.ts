// Types.
interface LinksType {
	linkHref: string
	linkId: string
	linkName: string
}

// Links.
export const links: LinksType[] = [
	{
		linkHref: "/",
		linkId: "home",
		linkName: "Home",
	},
	{
		linkHref: "/about",
		linkId: "about",
		linkName: "About",
	},
	{
		linkHref: "/events",
		linkId: "events",
		linkName: "Events",
	},
	{
		linkHref: "/donate",
		linkId: "donate",
		linkName: "Donate",
	},
	{
		linkHref: "/join",
		linkId: "join",
		linkName: "Join",
	},
	{
		linkHref: "/newsletter",
		linkId: "newsletter",
		linkName: "Newsletter",
	},
	{
		linkHref: "#contact",
		linkId: "contact",
		linkName: "Contact",
	},
]

export const nestedLinks: LinksType[] = [
	{
		linkHref: "/join/member",
		linkId: "member",
		linkName: "Be a Member",
	},
	{
		linkHref: "/join/volunteer",
		linkId: "volunteer",
		linkName: "Be a Volunteer",
	},
]
