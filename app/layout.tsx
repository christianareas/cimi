// Dependencies.
import "./globals.css"
import { NextAuthProviders } from "./providers"

// Metadata.
export const metadata = {
  title: "Next App",
  description: "Next.js app with NextAuth.js",
}

// Layout.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cimi-cream">
        <NextAuthProviders>
          {children}
        </NextAuthProviders>
      </body>
    </html>
  )
}
