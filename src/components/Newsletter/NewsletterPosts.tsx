"use client"

// Dependencies.
import parse from "html-react-parser"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Button from "@/components/Shared/Button"
import { initialCampaigns } from "@/data/content/events/initialCampaigns"
import fetchData from "@/lib/ui/fetchData"

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
	const sortedCampaigns = [...campaigns]
		// Filter out campaigns in the future.
		.filter((c) => !c.campaignEndAt || new Date(c.campaignEndAt) <= new Date())

		// Sort.
		.sort((a, b) => {
			return (
				(b.campaignEndAt ? new Date(b.campaignEndAt).getTime() : 0) -
				(a.campaignEndAt ? new Date(a.campaignEndAt).getTime() : 0)
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
								<Link href={campaign.campaignUrl}>
									<h3 className="font-ancho font-bold text-cimi-purple text-xl">
										{campaign.campaignTitle}
									</h3>
								</Link>

								{campaign.campaignEndAt ? (
									<h4 className="font-ancho font-medium text-cimi-purple">
										{campaign.campaignEndAt}
									</h4>
								) : null}

								{campaign.campaignDescriptionSimplified ? (
									<section className="mt-4 mb-8 line-clamp-3 space-y-4 lg:line-clamp-5">
										{parse(campaign.campaignDescriptionSimplified)}
									</section>
								) : null}

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
