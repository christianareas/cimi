import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "givebutter.s3.amazonaws.com",
				port: "",
				search: "",
			},
		],
	},
	outputFileTracingExcludes: {
		"/api/**": [".next/cache/webpack/**"],
	},
}

export default nextConfig
