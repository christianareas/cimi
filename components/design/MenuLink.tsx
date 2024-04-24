// Dependencies.
import Link from "next/link"
import { ReactNode } from "react"

// Types.
type MenuLinkProps = {
	href: string
	children: ReactNode
}

// MenuLink component.
export default function MenuLink({
	href,
	children
}: MenuLinkProps) {
  return (
    <Link
			href={href}
			className="block p-2 text-blue-500 hover:text-blue-700"
		>
      {children}
    </Link>
  )
}
