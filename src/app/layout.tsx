// Dependencies.
import "./globals.css"

// Metadata.
export const metadata = {
	title: "CIMI",
	description: "Carrera Internacional de la Mujer Iniciativa ",
}

// Layout.
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="bg-cimi-cream font-montserrat font-regular text-cimi-black text-sm dark:bg-cimi-cream-dark-mode dark:text-cimi-cream-dark-mode-light">
				{children}
			</body>
		</html>
	)
}
