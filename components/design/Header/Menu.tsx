"use client";

// Dependencies.
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import MenuLinks from "@/components/design/Header/MenuLinks";
import Image from "next/image";

// Menu component.
export default function Menu() {
	// Set initial state.
	const [isOpen, setIsOpen] = useState(false);

	// Links.
	const links = [
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
						<ul className="font-light text-sm space-y-5">
							{links.map((link) => (
								<MenuLinks key={link.id} {...link} />
							))}
						</ul>
					</section>
					<section className="flex flex-col items-center bg-cimi-blue rounded-lg p-6 space-y-5">
						<p className="text-cimi-cream font-bold text-2xl">
							Donate to the Community
						</p>
						<button type="button">
							<Image
								src="/images/give-to-cimi.svg"
								alt="Give to CIMI"
								width={163}
								height={47}
							/>
						</button>
						<p className="text-cimi-cream font-bold text-2xl">
							Join the Community
						</p>
						<button type="button">
							<Image
								src="/images/join-cimi.svg"
								alt="Join CIMI"
								width={163}
								height={47}
							/>
						</button>
					</section>
				</nav>
			</Dialog.Content>
		</Dialog.Root>
	);
}
