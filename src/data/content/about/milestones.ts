// Types.
interface Milestone {
	milestoneDotFillColor:
		| "fill-cimi-black"
		| "fill-cimi-blue"
		| "fill-cimi-cream"
		| "fill-cimi-dark-cream"
		| "fill-cimi-green"
		| "fill-cimi-pink"
		| "fill-cimi-purple"
		| "fill-cimi-red-orange"
		| "fill-cimi-yellow"
	milestoneImageSrc: string
	milestoneImageAlt: string
	milestoneImagePosition: string
	milestoneTitle: string
	milestoneYear: string
	milestoneContent: string
}

// Milestones.
export const milestones: Milestone[] = [
	{
		milestoneDotFillColor: "fill-cimi-pink",
		milestoneImageSrc: "/images/about/milestones/1.jpg",
		milestoneImageAlt: "todo",
		milestoneImagePosition: "object-[50%_35%]",
		milestoneTitle:
			"The first CIMI-sponsored race was held in 2013 in Nicaragua.",
		milestoneYear: "2013",
		milestoneContent:
			"Over 250 people participated—many of them women who were running for the first time. After completing her first 5k, one woman commented “I never thought I would be able to do something like this.”",
	},
	{
		milestoneDotFillColor: "fill-cimi-green",
		milestoneImageSrc: "/images/about/milestones/2.jpg",
		milestoneImageAlt: "todo",
		milestoneImagePosition: "object-bottom",
		milestoneTitle:
			"CIMI began a community support program called Adopt-a-Family.",
		milestoneYear: "YYYY",
		milestoneContent:
			"Donors are matched to a family they support during the holidays.",
	},
	{
		milestoneDotFillColor: "fill-cimi-yellow",
		milestoneImageSrc: "/images/about/milestones/3.jpg",
		milestoneImageAlt: "todo",
		milestoneImagePosition: "object-center",
		milestoneTitle:
			"In early 2017, the 5th annual CIMI Nicaragua 5k race took place.",
		milestoneYear: "2017",
		milestoneContent:
			"The event drew nearly 900 runners and 70% of them were women. Races also expanded in San Jose, in addition to educational opportunities.",
	},
	{
		milestoneDotFillColor: "fill-cimi-red-orange",
		milestoneImageSrc: "/images/about/milestones/4.jpg",
		milestoneImageAlt: "todo",
		milestoneImagePosition: "object-center",
		milestoneTitle:
			"CIMI started an initiative to provide technology to girls in need.",
		milestoneYear: "YYYY",
		milestoneContent:
			"In partnership with the Computer History Museum in Mountain View, California, CIMI created the Design_Code_Bootcamp at the Computer History Museum to provide girls in grades 6 through 8 with an opportunity to participate in engaging, hands-on STEAM (science, technology, engineering, arts, math) workshops.",
	},
	{
		milestoneDotFillColor: "fill-cimi-purple",
		milestoneImageSrc: "/images/about/milestones/5.jpg",
		milestoneImageAlt: "todo",
		milestoneImagePosition: "object-[50%_35%]",
		milestoneTitle:
			"CIMI sponsored 10 girls to participate in a Google Robotics workshop.",
		milestoneYear: "YYYY",
		milestoneContent:
			"Coming from underserved communities, these girls were able to participate in the Girl Powered VEX Robotics Workshop at the Google Event Center. They learned about designing, building, and programming robots in a sold-out event with 550 participants.",
	},
	{
		milestoneDotFillColor: "fill-cimi-blue",
		milestoneImageSrc: "/images/about/milestones/6.jpg",
		milestoneImageAlt: "todo",
		milestoneImagePosition: "object-center",
		milestoneTitle: "CIMI pivoted to virtual when COVID-19 hit.",
		milestoneYear: "2020",
		milestoneContent:
			"While COVID-19 paused large gatherings like races, CIMI continued their community-centered programs like gas card giveaways and school supply donations and focus on educational programs.",
	},
	{
		milestoneDotFillColor: "fill-cimi-pink",
		milestoneImageSrc: "/images/about/milestones/7.jpg",
		milestoneImageAlt: "todo",
		milestoneImagePosition: "object-center",
		milestoneTitle: "CIMI’s impact continues to grow.",
		milestoneYear: "YYYY",
		milestoneContent:
			"The organization now offers physical activities—like volleyball skills workshops, runs, and trail walks—which helps participants gain confidence, manage stress, and build healthy habits. CIMI also offers education programs like coding bootcamps, computer basics classes, robotics, and public speaking opportunities.",
	},
]
