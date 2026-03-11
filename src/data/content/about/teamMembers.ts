// Dependencies.
import { teamMembers } from "@/data/content/home/teamMembers"

// Types.
interface TeamMemberBiosType {
	teamMemberName: string
	teamMemberBio: string
}

interface TeamMemberFullType {
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
			"Aracely is the founder and president of CIMI, responsible for strategic direction and leadership. She works as a quality assurance engineer in a Fortune 500 company. Aracely brings personal perspective to CIMI’s mission as a woman who found strength through education and running. Aracely has a black belt in Taekwondo, has run 38 marathons, and is a certified Chi-Running Master Instructor.",
	},
	// {
	// 	teamMemberName: "Ivonne Figueroa",
	// 	teamMemberBio:
	// 		"Ivonne Figueroa is a UX Researcher and holds a doctorate in Human Factors and Applied Psychology. As a first-generation college graduate the stories of CIMI’s youth resonate with Ivonne’s own experiences. She believes education is the most powerful equalizer and is also a long time runner. Ivonne values CIMI’s mission of helping participants to be stronger physically and mentally.",
	// },
	{
		teamMemberName: "Kamille Matias",
		teamMemberBio:
			"Kamille is a Technical Project Manager in Silicon Valley. She believes in the importance of fitness to everyone’s lives. Kamille is also passionate about encouraging youth to be interested in STEM. Outside of work, Kamille loves to bake and share the calories.",
	},
	{
		teamMemberName: "Maya Bergstrom",
		teamMemberBio:
			"Maya is a quality assurance engineer in Silicon Valley. She is passionate about children’s causes, including youth sports, and improving equity in education, as well as animal welfare causes. In her spare time, Maya enjoys walking, hiking, and helping community cats.",
	},
	{
		teamMemberName: "Andy Macferran",
		teamMemberBio:
			"Andy served for 20 years as the Apple’s Director of Contact Technologies Engineering team delivering innovative ways for Apple to provide industry-leading customer support. He has supported the CIMI organization since its inception, but now looks forward to applying his skills to provide a more direct leadership role to the CIMI. Andy has lived with his wife, Marci, in the Willow Glen area of San Jose for the past 30 years where they raised their three sons. Andy grew up in Lancaster County, Pennsylvania and earned a degree in Electrical Engineering from Virginia Tech.",
	},
	{
		teamMemberName: "Sherry Heinz",
		teamMemberBio:
			"Sherry is a Software Engineering Manager who leads teams in building innovative and reliable technology solutions. With a strong background in problem-solving and team development, she brings a strategic and collaborative perspective to the board. She recently joined the organization and is motivated by a deep commitment to investing in the community and strengthening opportunities that make a meaningful difference.",
	},
	{
		teamMemberName: "Mike Hanna",
		teamMemberBio:
			"Mike has been in tech for over 25 years in a variety of roles, most recently as a developer and tester.  Outside of work Mike likes to hike, go to the beach, and play drums. Recently joining the CIMI organization, Mike hopes to help the communities we serve thrive and succeed in a challenging environment, by developing skills and wisdom that can be replicated across geographies and generations.",
	},
	{
		teamMemberName: "Christian Areas",
		teamMemberBio:
			"Christian is a Technical Writer who writes docs for developers and knows how to code. He believes in building community and giving back. When he's not working, he's running or building mechanical keyboards.",
	},
]

// Team members full.
export const teamMembersFull: TeamMemberFullType[] = teamMembers.map(
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
