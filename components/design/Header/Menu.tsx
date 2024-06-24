"use client";

// Dependencies.
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import MenuLinks from "@/components/design/Header/MenuLinks";
import links from "@/data/links";
import MenuContent from "@/components/design/Header/MenuContent";

// Menu component.
export default function Menu() {
	// Set initial state.
	const [isOpen, setIsOpen] = useState(false);

	// Render.
	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<nav className="flex items-center">
				<Dialog.Trigger asChild>
					<button
						type="button"
						className={`rounded-t-lg m-0 p-2 ml-auto ${isOpen ? "bg-cimi-dark-cream" : "bg-cimi-cream"}`}
					>
						{isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
					</button>
				</Dialog.Trigger>
			</nav>
			<Dialog.Content>
				<VisuallyHidden>
					<Dialog.Title>Menu</Dialog.Title>
					<Dialog.Description>Todo</Dialog.Description>
				</VisuallyHidden>
				<nav className="font-ancho bg-cimi-dark-cream rounded-l-lg rounded-b-lg ">
					<section className="flex flex-col items-center rounded-b-lg py-6">
						<MenuLinks links={links} />
					</section>
					<section className="flex flex-col items-center rounded-lg p-6 space-y-5 bg-cimi-blue">
						<MenuContent />
					</section>
				</nav>
			</Dialog.Content>
		</Dialog.Root>
	);
}
