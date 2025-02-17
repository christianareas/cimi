"use client"

// Dependencies.
import { useState } from "react"
import * as Form from "@radix-ui/react-form"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { colorsSchemes } from "@/data/colorSchemes"

// Component.
export default function DonateForm() {
	// Set initial state.
	const [selectedDonationAmount, setSelectedDonationAmount] = useState("")
	const [otherDonationAmount, setOtherDonationAmount] = useState("")

	// Preset donation amounts (in cents).
	const presetDonationAmounts = [5000, 10000, 25000, 50000]

	// Render.
	return (
		<section className="mx-auto px-20 pt-20 lg:w-2/3 lg:max-w-4xl">
			<section className="rounded-lg border border-cimi-green p-5">
				<Form.Root>
					<h2 className="pb-5 text-center font-ancho font-bold text-2xl text-cimi-green">
						Choose a One Time Amount
					</h2>

					<Form.Field name="donation-amounts">
						<RadioGroup.Root
							className="flex flex-wrap justify-center space-x-5 space-y-5"
							value={selectedDonationAmount}
							onValueChange={setSelectedDonationAmount}
						>
							{/*
								Preset donation amounts.
							*/}
							{presetDonationAmounts.map((amount) => {
								const formattedDonationAmount = `$${(amount / 100).toFixed(0)}`
								return (
									<RadioGroup.Item
										key={amount}
										value={amount.toString()}
										className={`w-20 cursor-pointer rounded-lg border-2 px-4 py-3 text-center font-ancho font-medium text-xs shadow-[4px_4px_0] ${
											selectedDonationAmount === amount.toString()
												? colorsSchemes["cimi-blue-dark"]
												: colorsSchemes["cimi-green-dark"]
										}`}
									>
										{formattedDonationAmount}
									</RadioGroup.Item>
								)
							})}

							{/*
								Other donation amount.
							*/}
							<RadioGroup.Item value="other">
								<section className="flex">
									<section className="rounded-l-lg border border-cimi-green border-r-0 py-3 pr-1 pl-4 text-cimi-green">
										$
									</section>
									<Form.Control asChild>
										<input
											id="other-donation-amount"
											type="text"
											required={selectedDonationAmount === "other"}
											inputMode="numeric"
											placeholder="Other"
											value={otherDonationAmount}
											onFocus={() => setSelectedDonationAmount("other")}
											onChange={(event) =>
												setOtherDonationAmount(event.target.value)
											}
											className="w-24 rounded-r-lg border border-cimi-green border-l-0 py-3 pr-4 pl-1"
										/>
									</Form.Control>
								</section>
							</RadioGroup.Item>
						</RadioGroup.Root>
						<section className="text-center">
							<Form.Message
								name="donation-amounts"
								match={(value) => {
									const numberValue = Number.parseFloat(value)
									return !Number.isNaN(numberValue) && numberValue < 1.0
								}}
								className="text-red-500 text-xs italic"
							>
								Enter an amount greater than 1.00.
							</Form.Message>
							<Form.Message
								name="donation-amounts"
								match={(value) => {
									if (!value.includes(".")) return false
									const decimals = value.split(".")[1]
									return decimals.length > 2
								}}
								className="text-red-500 text-xs italic"
							>
								Enter an amount with no more than 2 decimal places (for example,
								100.00).
							</Form.Message>{" "}
							<Form.Message
								name="donation-amounts"
								match={(value) => {
									const numberValue = Number.parseFloat(value)
									return Number.isNaN(numberValue)
								}}
								className="text-red-500 text-xs italic"
							>
								Enter a dollar amount (for example, 50.00).
							</Form.Message>
						</section>
					</Form.Field>
					<Form.Submit asChild>
						<button
							type="button"
							className={`w-40 cursor-pointer rounded-lg border-2 px-4 py-3 text-center font-ancho font-medium text-xs shadow-[4px_4px_0] ${colorsSchemes["cimi-green-dark"]}`}
						>
							Continue
						</button>
					</Form.Submit>
				</Form.Root>
			</section>
		</section>
	)
}
