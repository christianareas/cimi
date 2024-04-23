"use client"

// Dependencies.
import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import Link from "next/link"

// Menu component.
export default function Menu() {
	// Set initial state.
	const [isOpen, setIsOpen] = useState(false)

	// Render.
	return (
		<Dialog.Root
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<Dialog.Trigger asChild>
				<button>
					{isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
				</button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Title></Dialog.Title>
				<Dialog.Description></Dialog.Description>
				<nav className="font-montserrat font-regular text-sm">
					<Link
						className="block p-2 text-blue-500 hover:text-blue-700"
						href="/home"
					>
						Home
					</Link>
					<Link
						className="block p-2 text-blue-500 hover:text-blue-700"
						href="/about"
					>
						About
					</Link>
					<Link
						className="block p-2 text-blue-500 hover:text-blue-700"
						href="/contact"
					>
						Contact
					</Link>
				</nav>
			</Dialog.Content>
		</Dialog.Root>
	)
}
