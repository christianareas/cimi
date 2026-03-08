// Dependencies.
import "./globals.css"
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'});


// Metadata.
export const metadata = {
	title: "CIMI",
	description: "CIMI...",
}

// Layout.
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={cn("font-sans", roboto.variable)}>
			<body className="bg-cimi-cream font-montserrat font-regular text-sm">
				{children}
			</body>
		</html>
	)
}
