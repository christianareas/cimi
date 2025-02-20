"use client"

// Dependencies.
import { useState } from "react"
import fetchData from "@/lib/ui/fetchData"
import * as Form from "@radix-ui/react-form"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { colorsSchemes } from "@/data/colorSchemes"

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
	async function fetchDonationUrl() {
		// Prepare the donation amount.
		let donationAmount = 0
		if (presetDonationAmount === "other") {
			donationAmount = Number.parseFloat(otherDonationAmount) * 100
		} else {
			donationAmount = Number.parseInt(presetDonationAmount, 10)
		}

		const { url } = await fetchData({
			method: "POST",
			endpoint: "/api/stripeCheckoutSession",
			body: { donationAmount },
			cache: "no-cache",
		})

		window.location.assign(url)

		return donationAmount
	}

	// Render.
	return (
		<section className="mx-auto px-20 pt-20 lg:w-2/3 lg:max-w-4xl">
			<section className="rounded-lg border border-cimi-green p-5">
				<Form.Root>
					<h2 className="pb-5 text-center font-ancho font-bold text-2xl text-cimi-green">
						Choose a One Time Amount
					</h2>

					{/* Donation amounts. */}
					<Form.Field name="donation-amounts">
						<RadioGroup.Root
							className="flex flex-wrap justify-between space-y-5"
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
										className={`w-32 cursor-pointer rounded-lg border-2 px-4 py-3 text-center font-ancho font-medium text-xs shadow-[4px_4px_0] ${
											presetDonationAmount === amount.toString()
												? colorsSchemes["cimi-blue-dark"]
												: colorsSchemes["cimi-green-dark"]
										}`}
									>
										{formattedDonationAmount}
									</RadioGroup.Item>
								)
							})}

							{/* Other donation amount. */}
							<RadioGroup.Item value="other">
								<section className="flex">
									<section className="rounded-l-lg border border-cimi-green border-r-0 py-3 pr-1 pl-4 text-cimi-green">
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
											className="w-24 rounded-r-lg border border-cimi-green border-l-0 py-3 pr-4 pl-1"
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
					<section className="flex justify-end">
						<Form.Submit asChild>
							<button
								type="button"
								disabled={disableContinueButton(presetDonationAmount)}
								onClick={fetchDonationUrl}
								className={`w-32 cursor-pointer rounded-lg border-2 px-4 py-3 text-center font-ancho font-medium text-xs shadow-[4px_4px_0] ${
									disableContinueButton(presetDonationAmount)
										? colorsSchemes["neutral-light"]
										: colorsSchemes["cimi-green-dark"]
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
