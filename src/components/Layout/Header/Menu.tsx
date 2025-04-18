"use client"

// Dependencies.
import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { links, nestedLinks } from "@/data/links"
import Link from "next/link"
import Button from "@/components/Shared/Button"

// Component.
export default function Menu() {
	// Set initial state.
	const [open, setOpen] = useState(false)

	// Render.
	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			{/* Menu button. */}
			<Dialog.Trigger className="-mt-24 flex items-center" asChild>
				<nav>
					<button
						type="button"
						className={`ml-auto rounded-t-lg px-5 pt-5 pb-14 ${!open ? "bg-cimi-cream" : "fade bg-cimi-dark-cream sm:bg-cimi-blue sm:text-cimi-cream"}`}
						aria-label="Main Menu"
					>
						{open ? (
							<Cross1Icon className="h-8 w-8" />
						) : (
							<HamburgerMenuIcon className="h-8 w-8 text-cimi-blue" />
						)}
					</button>
				</nav>
			</Dialog.Trigger>

			{/* Menu links and calls to action. */}
			<Dialog.Content className="fade">
				<VisuallyHidden>
					<Dialog.Title>Menu</Dialog.Title>
					<Dialog.Description>
						Menu links and calls to action.
					</Dialog.Description>
				</VisuallyHidden>
				<nav className="flex flex-col rounded-b-lg rounded-l-lg bg-cimi-dark-cream font-ancho sm:flex-row">
					<section className="p-10 sm:w-1/2 md:p-20">
						{/* Menu links */}
						<ul className="flex list-none flex-col space-y-5 font-normal">
							{links.map((link) => (
								<li key={link.linkId}>
									<Link href={link.linkHref}>{link.linkName}</Link>
									{/* Nested menu links. */}
									{link.linkId === "join" && (
										<ul className="list-disc font-normal">
											{nestedLinks.map((nestedLink) => (
												<li key={nestedLink.linkId} className="ml-4">
													<Link href={nestedLink.linkHref}>
														{nestedLink.linkName}
													</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					</section>

					{/* Menu calls to action. */}
					<section className="rounded-lg bg-cimi-blue p-10 sm:w-1/2 sm:rounded-tr-none md:p-20">
						<ul className="flex list-none flex-col space-y-10">
							<li>
								<h2 className="font-bold text-2xl text-cimi-cream">
									Donate to the Community
								</h2>
								<Button
									buttonText="Give to CIMI"
									buttonLink="/donate"
									buttonWidth="w-40"
									buttonClassNames="border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-cream"
									buttonType="button"
								/>
							</li>
							<li>
								<h2 className="font-bold text-2xl text-cimi-cream">
									Join the Community
								</h2>
								<Button
									buttonText="Join CIMI"
									buttonLink="/join"
									buttonWidth="w-40"
									buttonClassNames="border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-cream"
									buttonType="button"
								/>
							</li>
						</ul>
					</section>
				</nav>
			</Dialog.Content>
		</Dialog.Root>
	)
}
