// Dependencies.
import { teamMembers } from "@/data/content/home/teamMembers"

// Types.
interface TeamMemberBiosType {
	teamMemberName: string
	teamMemberBio: string
}

interface TeamMemberAboutType {
	teamMemberName: string
	teamMemberRole: string
	teamMemberImage: string
	teamMemberBio: string
}

// Team members bios.
const teamMemberBios: TeamMemberBiosType[] = [
	{
		teamMemberName: "Aracely Areas",
		teamMemberBio:
			"Aracely Areas is the founder and president of CIMI, responsible for strategic direction and leadership. She works as a quality assurance engineer in a Fortune 500 company. Aracely brings personal perspective to CIMI’s mission as a woman who found strength through education and running. Aracely has a black belt in Taekwondo, has run 38 marathons, and is a certified Chi-Running Master Instructor.",
	},
	{
		teamMemberName: "Ivonne Figueroa",
		teamMemberBio:
			"Ivonne Figueroa is a UX Researcher and holds a doctorate in Human Factors and Applied Psychology. As a first-generation college graduate the stories of CIMI’s youth resonate with Ivonne’s own experiences. She believes education is the most powerful equalizer and is also a long time runner. Ivonne values CIMI’s mission of helping participants to be stronger physically and mentally.",
	},
	{
		teamMemberName: "Kamille Matias",
		teamMemberBio:
			"Kamille Shan is a Technical Project Manager in Silicon Valley. She believes in the importance of fitness to everyone’s lives. Kamille is also passionate about encouraging youth to be interested in STEM. Outside of work, Kamille loves to bake and share the calories.",
	},
	{
		teamMemberName: "Maya Bergstrom",
		teamMemberBio:
			"Maya Bergstrom is a quality assurance engineer in Silicon Valley. She is passionate about children’s causes, including youth sports, and improving equity in education, as well as animal welfare causes. In her spare time, Maya enjoys walking, hiking, and helping community cats.",
	},
]

// Team members about.
export const teamMembersAbout: TeamMemberAboutType[] = teamMembers.map(
	(teamMember) => {
		const teamMemberBio = teamMemberBios.find(
			(teamMemberBio) =>
				teamMemberBio.teamMemberName === teamMember.teamMemberName,
		)
		return {
			...teamMember,
			teamMemberBio: teamMemberBio ? teamMemberBio.teamMemberBio : "",
		}
	},
)
