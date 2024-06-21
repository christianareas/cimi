"use client"

// Dependencies.
import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import MenuLinks from "@/components/design/Header/MenuLinks"

// Menu component.
export default function Menu() {
	// Set initial state.
	const [isOpen, setIsOpen] = useState(false)

	// Menu button background.
	const menuButtonBg =
		isOpen ?
		"bg-cimi-dark-cream" :
		"bg-cimi-cream"

		// Links.
	const links = [
		{ href: "#", label: "About" },
		{ href: "#", label: "Events" },
		{ href: "#", label: "Donor Info" },
		{ href: "#", label: "Join", subLinks: [
			{ href: "#", label: "Be a Member" },
			{ href: "#", label: "Be a Volunteer" },
		]},
		{ href: "#", label: "Newsletter" },
		{ href: "#", label: "Contact" },
	]

	// Render.
	return (
		<Dialog.Root
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<nav className="flex items-center">
				<Dialog.Trigger asChild>
					<button className={`rounded-t-lg m-0 p-2 ml-auto ${menuButtonBg}`}>
						{
							isOpen ?
							<Cross1Icon /> :
							<HamburgerMenuIcon />
						}
					</button>
				</Dialog.Trigger>
			</nav>
			<Dialog.Content>
				<nav className="flex items-center justify-center min-h-full bg-cimi-dark-cream rounded-b-lg mt-0">
					<ul className="font-ancho font-light text-sm">
							{links.map((link, index) => (
								<MenuLinks key={index} {...link} />
							))}
					</ul>
				</nav>
			</Dialog.Content>

		</Dialog.Root>
	)
}
