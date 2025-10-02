import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/api/:path*",
				destination: "http://localhost:8000/:path*",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [new URL("https://i.scdn.co/image/*")],
	},
};

export default nextConfig;
