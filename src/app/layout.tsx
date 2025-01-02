// Dependencies.
import "./globals.css"

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
		<html lang="en">
			<body className="bg-cimi-cream font-montserrat font-regular text-sm">
				{children}
			</body>
		</html>
	)
}
