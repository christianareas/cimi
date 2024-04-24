"use client"

// Dependencies.
import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import MenuLink from "@/components/design/MenuLink"

// Menu component.
export default function Menu() {
	// Set initial state.
	const [isOpen, setIsOpen] = useState(false)

	// Links.
	const links = [
		{ href: "#", label: "About" },
		{ href: "#", label: "Events" },
		{ href: "#", label: "Donor Info" },
		{ href: "#", label: "Join", subLinks: [
			{ href: "#", label: "Be a Member" },
			{ href: "#", label: "Be a Volunteer" }
		]},
		{ href: "#", label: "Newsletter" },
		{ href: "#", label: "Contact" },
	]

	// Render links.
	// function renderLinks(links) {}

	// Render.
	return (
		<Dialog.Root
			open={isOpen}
			onOpenChange={setIsOpen}
		>

			<Dialog.Trigger asChild>
				<button>
					{
						isOpen ?
						<Cross1Icon /> :
						<HamburgerMenuIcon />
					}
				</button>
			</Dialog.Trigger>

			<Dialog.Content>
				<nav className="font-ancho font-light text-sm">

				</nav>
			</Dialog.Content>

		</Dialog.Root>
	)
}
