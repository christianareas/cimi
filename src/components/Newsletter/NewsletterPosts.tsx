"use client"

// Dependencies.
import { useState, useEffect } from "react"
import { initialCampaigns } from "@/data/content/events/initialCampaigns"
import fetchData from "@/lib/ui/fetchData"
import Link from "next/link"
import Image from "next/image"
import parse from "html-react-parser"
import Button from "@/components/Shared/Button"

// Component.
export default function NewsletterPosts() {
	// Set the initial state.
	const [campaigns, setCampaigns] = useState(initialCampaigns)

	// Fetch the latest campaigns.
	useEffect(() => {
		async function fetchCampaigns() {
			try {
				const response = await fetchData({
					method: "GET",
					endpoint: "/api/givebutterCampaigns",
					cache: "no-cache",
				})
				const latestCampaigns = response.campaigns
				setCampaigns(latestCampaigns)
			} catch (error) {
				console.error(error)
			}
		}
		fetchCampaigns()
	}, [])

	// Sort campaigns.
	const sortedCampaigns = [...campaigns].sort((a, b) => {
		return (
			new Date(b.campaignEndAt).getTime() - new Date(a.campaignEndAt).getTime()
		)
	})

	// Render.
	return (
		<section className="px-10 pb-10 sm:px-20 sm:pb-20">
			<section className="space-y-10 sm:space-y-20">
				{/* Newsletter Posts. */}
				{campaigns.length === 0 ? (
					<p className="flex justify-center p-5 text-gray-500 text-xs italic">
						No newsletter posts.
					</p>
				) : (
					sortedCampaigns.map((campaign) => (
						<article
							className="font-medium lg:mx-auto lg:flex lg:max-w-(--breakpoint-lg)"
							key={campaign.campaignId}
						>
							<section className="pb-10 lg:w-1/2 lg:pr-10">
								{campaign.campaignCoverType === "image" &&
								campaign.campaignCoverUrl ? (
									<section className="relative aspect-video">
										<Link href={campaign.campaignUrl}>
											<Image
												src={campaign.campaignCoverUrl}
												alt="Learn More"
												fill
												className="rounded-lg object-cover"
											/>
										</Link>
									</section>
								) : null}
							</section>

							<section className="lg:w-1/2 lg:pl-10">
								<h3 className="font-ancho font-bold text-cimi-purple text-xl">
									{campaign.campaignTitle}
								</h3>

								{campaign.campaignEndAt ? (
									<h4 className="font-ancho font-medium text-cimi-purple">
										{campaign.campaignEndAt}
									</h4>
								) : null}

								<section className="pt-4 pb-10">
									{parse(campaign.campaignDescription)}
								</section>

								<Button
									buttonText="Learn More"
									buttonLink={campaign.campaignUrl}
									buttonWidth="w-40"
									buttonClassNames="border-cimi-cream bg-cimi-purple text-cimi-cream shadow-cimi-purple"
									buttonType="button"
								/>
							</section>
						</article>
					))
				)}
			</section>
		</section>
	)
}
