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
			<nav className="flex items-center pr-6">
				<Dialog.Trigger asChild>
					<button
						type="button"
						className={`rounded-t-lg m-0 p-2 ml-auto ${isOpen ? "bg-cimi-dark-cream sm:text-cimi-cream sm:bg-cimi-blue" : "bg-cimi-cream"}`}
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
				<nav className="font-ancho bg-cimi-dark-cream rounded-l-lg rounded-b-lg mx-6">
					<section className="flex flex-col sm:flex-row rounded-b-lg">
						<section className="sm:w-1/2 p-9">
							<MenuLinks links={links} />
						</section>
						<section className="sm:w-1/2 rounded-lg p-9 bg-cimi-blue sm:rounded-tr-none">
							<MenuContent />
						</section>
					</section>
				</nav>
			</Dialog.Content>
		</Dialog.Root>
	)
}
