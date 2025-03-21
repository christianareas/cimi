// Dependencies.
import ContentCard from "@/components/Shared/ContentCard"
import * as Dialog from "@radix-ui/react-dialog"
import Button from "@/components/Shared/Button"
import Faqs from "@/components/Shared/Faqs"

// Component.
export default function Main() {
	// Render.
	return (
		<main className="fade">
			{/* CIMI Members. */}
			<ContentCard
				contentSrc="join.member.cimi-members"
				articleClassName="lg:w-1/2 mx-auto text-center"
				h2ClassName="text-cimi-blue"
				fontClassName="font-medium"
			/>

			{/* Become a Volunteer Today. */}
			<article className="pb-10 text-center sm:pb-20">
				<h2 className="mx-auto w-60 pb-2 font-ancho font-bold text-2xl text-cimi-blue sm:pb-5">
					Become a Member Today
				</h2>

				{/* Sign up button and dialog. */}
				<Dialog.Root>
					{/* Sign up button. */}
					<Dialog.Trigger asChild>
						<Button
							buttonText="Sign Up"
							buttonWidth="w-40"
							buttonClassNames="border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-blue"
							buttonType="button"
						/>
					</Dialog.Trigger>

					{/* Dialog. */}
					<Dialog.Portal>
						<Dialog.Overlay className="fixed inset-0 flex items-center justify-center bg-black p-5 opacity-50 sm:p-10" />
						<Dialog.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 max-h-[90vh] w-[90vw] max-w-2xl rounded-lg bg-cimi-cream px-5 py-10 shadow-lg sm:px-10 sm:py-20">
							<Dialog.Title className="text-center font-ancho font-bold text-2xl text-cimi-blue">
								Become a Member Today
							</Dialog.Title>
							<p className="p-10 text-center">Hello, world.</p>
							<Dialog.Close asChild>
								<Button
									buttonText="Close"
									buttonWidth="w-40"
									buttonClassNames="border-cimi-blue bg-cimi-cream text-cimi-blue shadow-cimi-blue"
									buttonType="button"
								/>
							</Dialog.Close>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			</article>

			{/* Volunteer FAQs. */}
			<Faqs
				faqsName="member"
				textClassName="text-cimi-blue"
				borderClassName="border-cimi-blue"
			/>
		</main>
	)
}
