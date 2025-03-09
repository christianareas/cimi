// Dependencies.
import { teamMembersFull } from "@/data/content/about/teamMembers"
import Image from "next/image"

// Component.
export default function Team() {
	return (
		<article className="space-y-3 p-10 text-center font-normal sm:p-20">
			<h2 className="pb-3 font-ancho font-bold text-2xl text-cimi-blue">
				Meet the Team
			</h2>

			<section className="space-y-20 uppercase lg:mx-auto lg:max-w-2xl lg:text-left">
				{teamMembersFull.map((teamMember) => (
					<article
						key={teamMember.teamMemberName}
						className="flex flex-col items-center lg:flex-row lg:items-start"
					>
						{/* Image section */}
						<section className="relative h-[200px] w-[200px] lg:basis-auto">
							<Image
								src={teamMember.teamMemberImage}
								alt={teamMember.teamMemberName}
								fill
								sizes="(max-width: 1024px) 50vw, 25vw"
								className="absolute inset-0 rounded-lg object-cover"
							/>
						</section>

						{/* Content section */}
						<section className="pt-3 lg:basis-2/3 lg:pt-0 lg:pl-10">
							<h3 className="font-ancho font-bold text-cimi-blue text-xl">
								{teamMember.teamMemberName}
							</h3>
							<h4 className="font-semibold">{teamMember.teamMemberRole}</h4>
							<p className="pt-3 font-medium text-sm normal-case">
								{teamMember.teamMemberBio}
							</p>
						</section>
					</article>
				))}
			</section>
		</article>
	)
}
