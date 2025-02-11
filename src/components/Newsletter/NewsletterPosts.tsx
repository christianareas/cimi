"use client"

// Dependencies.
import { useState, useEffect } from "react"
import { initialCampaigns } from "@/data/content/events/initialCampaigns"
import fetchData from "@/lib/ui/fetchData"
import Link from "next/link"
import Image from "next/image"

// Component.
export default function NewsletterPosts() {
	// Set the initial state.
	const [campaigns, setCampaigns] = useState(initialCampaigns)

	// Fetch the latest campaigns.
	useEffect(() => {
		async function fetchCampaigns() {
			try {
				const response = await fetchData("/api/givebutterCampaigns", "no-cache")
				const latestCampaigns = response.campaigns
				setCampaigns(latestCampaigns)
			} catch (error) {
				console.error(error)
			}
		}
		fetchCampaigns()
	}, [])

	// Render.
	return (
		<section className="px-20">
			{/*
					****************
					Newsletter Posts
					****************
				*/}
			{campaigns.length === 0 ? (
				<p className="flex justify-center p-5 text-gray-500 text-xs italic">
					No newsletter posts.
				</p>
			) : (
				campaigns.map((campaignEvent) => (
					<article
						className="py-10 font-medium lg:mx-auto lg:flex lg:max-w-(--breakpoint-lg)"
						key={campaignEvent.campaignId}
					>
						<section className="pb-10 lg:w-1/2 lg:pr-10">
							{campaignEvent.campaignCoverType === "image" &&
							campaignEvent.campaignCoverUrl ? (
								<section className="relative aspect-video">
									<Image
										src={campaignEvent.campaignCoverUrl}
										alt="Learn More"
										fill
										className="rounded-lg object-cover"
									/>
								</section>
							) : null}
						</section>

						<section className="lg:w-1/2 lg:pl-10">
							<h3 className="font-ancho font-bold text-cimi-red-orange text-xl">
								{campaignEvent.eventTitle}
							</h3>

							{campaignEvent.eventStartAt ? (
								<h4 className="font-ancho font-medium text-cimi-red-orange">
									{campaignEvent.eventEndAt
										? `${campaignEvent.eventStartAt.replace(/\s*[A-Z]{2,4}$/, "")} – ${campaignEvent.eventEndAt}`
										: campaignEvent.eventStartAt}
								</h4>
							) : null}

							<section className="pt-4 pb-10">
								{campaignEvent.eventDetails}
							</section>

							<Link href={campaignEvent.campaignUrl}>
								<Image
									src="/images/buttons/learn-more.svg"
									alt="Learn More"
									width={163}
									height={47}
								/>
							</Link>
						</section>
					</article>
				))
			)}
		</section>
	)
}
