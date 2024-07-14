"use client"

// Dependencies.
import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import MenuLinks from "@/components/design/Header/MenuLinks"
import links from "@/data/links"
import MenuContent from "@/components/design/Header/MenuContent"

// Menu component.
export default function Menu() {
	// Set initial state.
	const [isOpen, setIsOpen] = useState(false)

	// Render.
	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<nav className="flex items-center">
				<Dialog.Trigger asChild>
					<button
						type="button"
						className={`rounded-t-lg p-5 ml-auto ${!isOpen ? "bg-cimi-cream" : "bg-cimi-dark-cream sm:text-cimi-cream sm:bg-cimi-blue"}`}
					>
						{isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
					</button>
				</Dialog.Trigger>
			</nav>
			<Dialog.Content>
				<VisuallyHidden>
					<Dialog.Title>The Site’s Main Navigation Menu</Dialog.Title>
					<Dialog.Description>
						Navigation links and the option to donate to or join CIMI.
					</Dialog.Description>
				</VisuallyHidden>
				<nav className="max-w-screen-lg ml-auto flex flex-col sm:flex-row rounded-l-lg rounded-b-lg bg-cimi-dark-cream">
					<section className="sm:w-1/2 py-10 px-5 sm:p-10">
						<MenuLinks links={links} />
					</section>
					<section className="bg-cimi-blue rounded-lg sm:rounded-tr-none sm:w-1/2 py-10 px-5 sm:p-10">
						<MenuContent />
					</section>
				</nav>
			</Dialog.Content>
		</Dialog.Root>
	)
}
