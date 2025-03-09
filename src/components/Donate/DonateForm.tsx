"use client"

// Dependencies.
import { useState } from "react"
import fetchData from "@/lib/ui/fetchData"
import * as Form from "@radix-ui/react-form"
import * as RadioGroup from "@radix-ui/react-radio-group"

// Component.
export default function DonateForm() {
	// Set initial state.
	const [presetDonationAmount, setPresetDonationAmount] = useState("")
	const [otherDonationAmount, setOtherDonationAmount] = useState("")

	// Preset donation amounts (in cents).
	const presetDonationAmounts = [1000, 2500, 5000, 10000, 25000, 50000, 100000]

	// Validate other donation amount.
	function validateOtherDonationAmount(otherDonationAmount: string) {
		const validationErrors = {
			noDonationAmount: false,
			notANumber: false,
			tooLow: false,
			tooManyDecimals: false,
		}

		if (!otherDonationAmount || otherDonationAmount === "") {
			validationErrors.noDonationAmount = true
		}

		const otherDonationAmountNumber = Number.parseFloat(otherDonationAmount)
		if (Number.isNaN(otherDonationAmountNumber)) {
			validationErrors.notANumber = true
		}
		if (
			otherDonationAmount.includes(".") &&
			otherDonationAmount.split(".")[1].length > 2
		) {
			validationErrors.tooManyDecimals = true
		}
		if (otherDonationAmountNumber < 1.0) {
			validationErrors.tooLow = true
		}

		return validationErrors
	}

	// Disable continue button.
	function disableContinueButton(presetDonationAmount: string) {
		return (
			presetDonationAmount === "" ||
			(presetDonationAmount === "other" &&
				Object.values(validateOtherDonationAmount(otherDonationAmount)).some(
					Boolean,
				))
		)
	}

	// Fetch the donation URL.
	async function checkOutDonor() {
		// Prepare the donation amount.
		let donationAmount = 0
		if (presetDonationAmount === "other") {
			donationAmount = Number.parseFloat(otherDonationAmount) * 100
		} else {
			donationAmount = Number.parseInt(presetDonationAmount, 10)
		}

		// Fetch the donation URL.
		const { url } = await fetchData({
			method: "POST",
			endpoint: "/api/stripeCheckoutSession",
			body: { donationAmount },
			cache: "no-cache",
		})

		// Navigate the donor to the checkout URL.
		window.location.assign(url)
	}

	// Render.
	return (
		<section className="mx-auto max-w-3xl p-10 sm:px-20 sm:pt-20 sm:pb-0">
			<section className="rounded-lg border border-cimi-green p-5">
				<Form.Root>
					<h2 className="pb-5 text-center font-ancho font-bold text-2xl text-cimi-green">
						Choose a One Time Amount
					</h2>

					{/* Donation amounts. */}
					<Form.Field name="donation-amounts">
						<RadioGroup.Root
							className="grid grid-cols-2 place-items-center gap-5 sm:grid-cols-4"
							value={presetDonationAmount}
							onValueChange={setPresetDonationAmount}
						>
							{/* Preset donation amounts. */}
							{presetDonationAmounts.map((amount) => {
								const formattedDonationAmount = `$${(amount / 100).toFixed(0)}`
								return (
									<RadioGroup.Item
										key={amount}
										value={amount.toString()}
										className={`w-28 cursor-pointer rounded-lg border-2 px-4 py-3 text-center font-ancho font-medium text-xs shadow-[4px_4px_0] ${
											presetDonationAmount === amount.toString()
												? "border-cimi-cream bg-cimi-blue text-cimi-cream shadow-cimi-blue"
												: "border-cimi-cream bg-cimi-green text-cimi-cream shadow-cimi-green"
										}`}
									>
										{formattedDonationAmount}
									</RadioGroup.Item>
								)
							})}

							{/* Other donation amount. */}
							<RadioGroup.Item value="other">
								<section className="flex">
									<section className="rounded-l-lg border-2 border-cimi-green border-r-0 py-3 pr-1 pl-4 font-medium text-cimi-green text-xs">
										$
									</section>
									<Form.Control asChild>
										<input
											id="other-donation-amount"
											type="text"
											required={presetDonationAmount === "other"}
											inputMode="numeric"
											placeholder="Other"
											value={otherDonationAmount}
											onFocus={() => setPresetDonationAmount("other")}
											onChange={(event) =>
												setOtherDonationAmount(event.target.value)
											}
											className="w-20 rounded-r-lg border-2 border-cimi-green border-l-0 py-3 pr-4 pl-1"
										/>
									</Form.Control>
								</section>
							</RadioGroup.Item>
						</RadioGroup.Root>

						{/* Validation and error messages. */}
						<section className="text-center">
							{/* Donation amount isn't a number. */}
							<Form.Message
								name="donation-amounts"
								match={(value) => validateOtherDonationAmount(value).notANumber}
							>
								<p className="pb-3 text-red-500 text-xs italic">
									Enter a dollar amount (for example, 7.00).
								</p>
							</Form.Message>

							{/* Donation amount has more than two decimal places. */}
							<Form.Message
								name="donation-amounts"
								match={(value) =>
									validateOtherDonationAmount(value).tooManyDecimals
								}
							>
								<p className="pb-3 text-red-500 text-xs italic">
									Enter an amount with no more than two decimal places (for
									example, 7.00).
								</p>
							</Form.Message>

							{/* Donation amount is less than 1.00. */}
							<Form.Message
								name="donation-amounts"
								match={(value) => validateOtherDonationAmount(value).tooLow}
							>
								<p className="pb-3 text-red-500 text-xs italic">
									Enter an amount greater than 1.00.
								</p>
							</Form.Message>
						</section>
					</Form.Field>

					{/* Submit button. */}
					<section className="grid grid-cols-2 place-items-center gap-5 sm:grid-cols-4">
						<section>&nbsp;</section>
						<section className="hidden sm:inline">&nbsp;</section>
						<section className="hidden sm:inline">&nbsp;</section>
						<Form.Submit asChild>
							<button
								type="button"
								disabled={disableContinueButton(presetDonationAmount)}
								onClick={checkOutDonor}
								className={`mt-5 w-28 cursor-pointer rounded-lg border-2 px-4 py-3 text-center font-ancho font-medium text-xs shadow-[4px_4px_0] ${
									disableContinueButton(presetDonationAmount)
										? "border-neutral-500 bg-cimi-cream text-neutral-500 shadow-neutral-500"
										: "border-cimi-cream bg-cimi-green text-cimi-cream shadow-cimi-green"
								}`}
							>
								Continue
							</button>
						</Form.Submit>
					</section>
				</Form.Root>
			</section>
		</section>
	)
}
