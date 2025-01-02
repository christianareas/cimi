// Dependencies.
import Milestone from "@/components/design/About/Milestone"

// Component.
export default function Timeline() {
	return (
		<section className="pb-20">
			<Milestone
				colorfulDotColor="cimi-pink"
				imageSrc="/images/about/milestones/1.jpg"
				imageAlt="todo"
				imagePosition="object-[50%_35%]"
				title="The first CIMI-sponsored race was held in 2013 in Nicaragua."
				content="Over 250 people participated—many of them women who were running for the first time. After completing her first 5k, one woman commented “I never thought I would be able to do something like this.”"
			/>

			<Milestone
				colorfulDotColor="cimi-green"
				imageSrc="/images/about/milestones/2.jpg"
				imageAlt="todo"
				imagePosition="object-bottom"
				title="CIMI began a community support program called Adopt-a-Family."
				content="Donors are matched to a family they support during the holidays."
			/>

			<Milestone
				colorfulDotColor="cimi-yellow"
				imageSrc="/images/about/milestones/3.jpg"
				imageAlt="todo"
				imagePosition="object-center"
				title="In early 2017, the 5th annual CIMI Nicaragua 5k race took place."
				content="The event drew nearly 900 runners and 70% of them were women. Races also expanded in San Jose, in addition to educational opportunities."
			/>

			<Milestone
				colorfulDotColor="cimi-red-orange"
				imageSrc="/images/about/milestones/4.jpg"
				imageAlt="todo"
				imagePosition="object-center"
				title="CIMI started an initiative to provide technology to girls in need."
				content="In partnership with the Computer History Museum in Mountain View, California, CIMI created the Design_Code_Bootcamp at the Computer History Museum to provide girls in grades 6 through 8 with an opportunity to participate in engaging, hands-on STEAM (science, technology, engineering, arts, math) workshops."
			/>

			<Milestone
				colorfulDotColor="cimi-purple"
				imageSrc="/images/about/milestones/5.jpg"
				imageAlt="todo"
				imagePosition="object-[50%_35%]"
				title="CIMI sponsored 10 girls to participate in a Google Robotics workshop."
				content="Coming from underserved communities, these girls were able to participate in the Girl Powered VEX Robotics Workshop at the Google Event Center. They learned about designing, building, and programming robots in a sold-out event with 550 participants."
			/>

			<Milestone
				colorfulDotColor="cimi-blue"
				imageSrc="/images/about/milestones/6.jpg"
				imageAlt="todo"
				imagePosition="object-center"
				title="CIMI pivoted to virtual when COVID-19 hit."
				content="While COVID-19 paused large gatherings like races, CIMI   continued their community-centered programs like gas card giveaways and school supply donations and focus on educational programs."
			/>

			<Milestone
				colorfulDotColor="cimi-pink"
				imageSrc="/images/about/milestones/7.jpg"
				imageAlt="todo"
				imagePosition="object-center"
				title="CIMI’s impact continues to grow."
				content="The organization now offers physical activities—like volleyball skills workshops, runs, and trail walks—which helps participants gain confidence, manage stress, and build healthy habits. CIMI also offers education programs like coding bootcamps, computer basics classes, robotics, and public speaking opportunities."
			/>
		</section>
	)
}
