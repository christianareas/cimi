// Types.
interface TestimonialType {
	testimonialTabName: string
	testimonialImgSrc: string
	testimonialImgAlt: string
	testimonial: string
	testimonialSrc: string
}

// Testimonials.
export const testimonials: TestimonialType[] = [
	{
		testimonialTabName: "first-tab",
		testimonialImgSrc: "/images/home/testimonials/maria-perla.jpg",
		testimonialImgAlt: "Maria Perla",
		testimonial:
			"In these 3 years of being a member, I am part of a great community that helps girls learn how to code and be a better person.",
		testimonialSrc: "High school student",
	},
	{
		testimonialTabName: "second-tab",
		testimonialImgSrc: "/images/home/testimonials/rosario-fernanda.jpg",
		testimonialImgAlt: "Rosario Fernanda",
		testimonial:
			"During the pandemic, I was so grateful because CIMI never left us. It supported [my family] 100%. In short, CIMI is a blessing",
		testimonialSrc: "Mom",
	},
	{
		testimonialTabName: "third-tab",
		testimonialImgSrc: "/images/home/testimonials/walk-program.jpg",
		testimonialImgAlt: "Walk Program",
		testimonial:
			"Being a member for more than five years has been an opportunity for me because it has helped me physically, emotionally, and financially and has helped me manage stress. It has helped me learn about myself.",
		testimonialSrc: "Mom",
	},
	{
		testimonialTabName: "fourth-tab",
		testimonialImgSrc: "/images/home/testimonials/tania-tiara.jpg",
		testimonialImgAlt: "Tania Tiara",
		testimonial:
			"I am grateful for meeting my two best friends. I am grateful for the opportunities that I have been given, like learning how to code.",
		testimonialSrc: "High school student",
	},
]
