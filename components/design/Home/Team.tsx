// Dependencies.
import Image from "next/image"

// Team component.
export default function Team() {
	// Render.
	return (
		<article className="space-y-3 rounded-lg p-20 text-center font-normal">
			<h2 className="pb-3 font-ancho font-bold text-2xl text-cimi-blue">
				Our Team
			</h2>

			<section className="grid grid-cols-2 gap-5 uppercase lg:mx-auto lg:max-w-screen-lg lg:grid-cols-4">
				<article>
					<section className="relative w-full pb-[100%]">
						<Image
							src="/images/home/team/aracely-areas.jpg"
							alt="Aracely Areas"
							fill
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<h3 className="font-black">Aracely Areas</h3>
					<h4 className="font-semibold">President</h4>
				</article>

				<article>
					<section className="relative w-full pb-[100%]">
						<Image
							src="/images/home/team/ivonne-figueroa.jpg"
							alt="Ivonne Figueroa"
							fill
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<h3 className="font-black">Ivonne Figueroa</h3>
					<h4 className="font-semibold">Vice President</h4>
				</article>

				<article>
					<section className="relative w-full pb-[100%]">
						<Image
							src="/images/home/team/kamille-matias.jpg"
							alt="Kamille Matias"
							fill
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<h3 className="font-black">Kamille Matias</h3>
					<h4 className="font-semibold">Secretary</h4>
				</article>

				<article>
					<section className="relative w-full pb-[100%]">
						<Image
							src="/images/home/team/maya-bergstrom.jpg"
							alt="Maya Bergstrom"
							fill
							className="absolute inset-0 rounded-lg object-cover object-top"
						/>
					</section>
					<h3 className="font-black">Maya Bergstrom</h3>
					<h4 className="font-semibold">Treasurer</h4>
				</article>
			</section>
		</article>
	)
}
