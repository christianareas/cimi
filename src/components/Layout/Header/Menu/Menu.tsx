"use client"

// Dependencies.
import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import MenuLinks from "@/components/Layout/Header/Menu/MenuLinks"
import links from "@/data/links"
import MenuContent from "@/components/Layout/Header/Menu/MenuContent"

// Component.
export default function Menu() {
	// Set initial state.
	const [isOpen, setIsOpen] = useState(false)

	// Render.
	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<nav className="-mt-20 flex items-center">
				<Dialog.Trigger asChild>
					<button
						type="button"
						className={`ml-auto rounded-t-lg px-5 pt-5 pb-10 ${!isOpen ? "bg-cimi-cream" : "bg-cimi-dark-cream sm:bg-cimi-blue sm:text-cimi-cream"}`}
						aria-label="Main Menu"
					>
						{isOpen ? (
							<Cross1Icon className="h-8 w-8" />
						) : (
							<HamburgerMenuIcon className="h-8 w-8 text-cimi-blue" />
						)}
					</button>
				</Dialog.Trigger>
			</nav>
			<Dialog.Content>
				<VisuallyHidden>
					<Dialog.Title>Main Menu</Dialog.Title>
					<Dialog.Description>
						Navigation links and the option to donate to or join CIMI.
					</Dialog.Description>
				</VisuallyHidden>
				<nav className="ml-auto flex max-w-(--breakpoint-lg) flex-col rounded-b-lg rounded-l-lg bg-cimi-dark-cream sm:flex-row">
					<section className="px-5 py-10 sm:w-1/2 sm:p-10">
						<MenuLinks links={links} />
					</section>
					<section className="rounded-lg bg-cimi-blue px-5 py-10 sm:w-1/2 sm:rounded-tr-none sm:p-10">
						<MenuContent />
					</section>
				</nav>
			</Dialog.Content>
		</Dialog.Root>
	)
}
