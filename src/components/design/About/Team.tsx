// Dependencies.
import Image from "next/image"

// Component.
export default function Team() {
	return (
		<article className="space-y-3 p-20 text-center font-normal">
			<h2 className="pb-3 font-ancho font-bold text-2xl text-cimi-blue">
				Meet the Team
			</h2>

			<section className="uppercase lg:mx-auto lg:max-w-screen-md lg:text-left">
				<article className="flex flex-col items-center pb-10 lg:flex-row lg:items-start">
					<section className="relative h-[200px] w-[200px] lg:basis-auto">
						<Image
							src="/images/home/team/aracely-areas.jpg"
							alt="Aracely Areas"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<section className="pt-3 lg:basis-2/3 lg:pt-[100px] lg:pl-10">
						<h3 className="font-ancho font-bold text-cimi-blue text-xl">
							Aracely Areas
						</h3>
						<h4 className="font-semibold">President</h4>
						<p className="pt-3 font-medium text-sm normal-case">
							Aracely Areas is the founder and president of CIMI, responsible
							for strategic direction and leadership. She works as a quality
							assurance engineer in a Fortune 500 company. Aracely brings
							personal perspective to CIMI’s mission as a woman who found
							strength through education and running. Aracely has a black belt
							in Taekwondo, has run 38 marathons, and is a certified Chi-Running
							Master Instructor.
						</p>
					</section>
				</article>

				<article className="flex flex-col items-center pb-10 lg:flex-row lg:items-start">
					<section className="relative h-[200px] w-[200px] lg:basis-auto">
						<Image
							src="/images/home/team/ivonne-figueroa.jpg"
							alt="Ivonne Figueroa"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<section className="pt-3 lg:basis-2/3 lg:pt-[100px] lg:pl-10">
						<h3 className="font-ancho font-bold text-cimi-blue text-xl">
							Ivonne Figueroa
						</h3>
						<h4 className="font-semibold">Vice President</h4>
						<p className="pt-3 font-medium text-sm normal-case">
							Ivonne Figueroa is a UX Researcher and holds a doctorate in Human
							Factors and Applied Psychology. As a first-generation college
							graduate the stories of CIMI's youth resonate with Ivonne’s own
							experiences. She believes education is the most powerful equalizer
							and is also a long time runner. Ivonne values CIMI’s mission of
							helping participants to be stronger physically and mentally.
						</p>
					</section>
				</article>

				<article className="flex flex-col items-center pb-10 lg:flex-row lg:items-start">
					<section className="relative h-[200px] w-[200px] lg:basis-auto">
						<Image
							src="/images/home/team/kamille-matias.jpg"
							alt="Kamille Matias"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover"
						/>
					</section>
					<section className="pt-3 lg:basis-2/3 lg:pt-[100px] lg:pl-10">
						<h3 className="font-ancho font-bold text-cimi-blue text-xl">
							Kamille Matias
						</h3>
						<h4 className="font-semibold">Secretary</h4>
						<p className="pt-3 font-medium text-sm normal-case">
							Kamille Shan is a Technical Project Manager in Silicon Valley. She
							believes in the importance of fitness to everyone's lives. Kamille
							is also passionate about encouraging youth to be interested in
							STEM. Outside of work, Kamille loves to bake and share the
							calories.
						</p>
					</section>
				</article>

				<article className="flex flex-col items-center pb-10 lg:flex-row lg:items-start">
					<section className="relative h-[200px] w-[200px] lg:basis-auto">
						<Image
							src="/images/home/team/maya-bergstrom.jpg"
							alt="Maya Bergstrom"
							fill
							sizes="(max-width: 1024px) 50vw, 25vw"
							className="absolute inset-0 rounded-lg object-cover object-top"
						/>
					</section>
					<section className="pt-3 lg:basis-2/3 lg:pt-[100px] lg:pl-10">
						<h3 className="font-ancho font-bold text-cimi-blue text-xl">
							Maya Bergstrom
						</h3>
						<h4 className="font-semibold">Treasurer</h4>
						<p className="pt-3 font-medium text-sm normal-case">
							Maya Bergstrom is a quality assurance engineer in Silicon Valley.
							She is passionate about children’s causes, including youth sports,
							and improving equity in education, as well as animal welfare
							causes. In her spare time, Maya enjoys walking, hiking, and
							helping community cats.
						</p>
					</section>
				</article>
			</section>
		</article>
	)
}
