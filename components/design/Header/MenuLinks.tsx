// Dependencies.
import Link from "next/link";

// Types.
type MenuLinksProps = {
	href: string;
	id: string;
	label: string;
	subLinks?: MenuLinksProps[];
	children?: React.ReactNode;
};

// MenuLinks component.
export default function MenuLinks({
	href,
	label,
	subLinks,
	children,
}: MenuLinksProps) {
	return (
		<li className="mx-3 my-3">
			<Link href={href}>{label || children}</Link>
			{subLinks && (
				<ul className="list-disc">
					{subLinks.map((subLink) => (
						<MenuLinks key={subLink.id} {...subLink} />
					))}
				</ul>
			)}
		</li>
	);
}
