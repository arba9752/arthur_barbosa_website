import "@repo/tailwind-config/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@repo/ui/lib/utils";
import { Toaster } from "@repo/ui/shadcn/toaster";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
	title: "Arthur Barbosa",
	description:
		"Arthur Barbosa's personal site",
	openGraph: {
		images: [
			{
				url: "https://ibb.co/7JkB4LT",
				width: 1200,
				height: 627,
				alt: "Arthur Barbosa",
			},
		],
	},

};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
			<head>
				{/* Cloudflare web analytics */}
				<script
					defer
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon='{"token": "16d76ebb82c74d9983b71d09ab6617bc"}'
				></script>
			</head>
			{/* TODO: when lightmode support is added, remove the 'dark' class from the body tag */}
			<body
				className={cn(
					`${inter.className} dark`,
					GeistMono.variable,
					GeistSans.variable,
				)}
			>
				{children}
				<Toaster />
			</body>
		</html>
	);
}