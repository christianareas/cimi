// Dependencies.
import Image from "next/image";

// Logo component.
export default function Logo() {
	return (
		<div className="flex justify-center items-center m-10">
			<Image
				src="/images/cimi.svg"
				alt="CIMI"
				width={217}
				height={97}
				priority={true}
			/>
		</div>
	);
}
