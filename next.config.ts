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
}

export default nextConfig
