// Dependencies.
import { teamMembers } from "@/data/content/home/teamMembers"
import Image from "next/image"

// Component.
export default function Team() {
	// Render.
	return (
		<article className="space-y-3 rounded-lg p-10 text-center font-normal sm:p-20">
			<h2 className="pb-3 font-ancho font-bold text-2xl text-cimi-blue">
				Our Team
			</h2>

			<section className="grid grid-cols-2 gap-5 uppercase sm:gap-10 md:grid-cols-4 lg:mx-auto lg:max-w-2xl">
				{teamMembers.map(
					({ teamMemberName, teamMemberRole, teamMemberImage }) => (
						<article key={teamMemberName}>
							<section className="relative w-full pb-[100%]">
								<Image
									src={teamMemberImage}
									alt={teamMemberName}
									fill
									sizes="(max-width: 1024px) 50vw, 25vw"
									className="absolute inset-0 rounded-lg object-cover"
								/>
							</section>
							<h3 className="font-black">{teamMemberName}</h3>
							<h4 className="font-semibold">{teamMemberRole}</h4>
						</article>
					),
				)}
			</section>
		</article>
	)
}
