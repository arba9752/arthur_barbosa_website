import "@repo/tailwind-config/globals.css";

import type { Metadata } from "next";
import { ThemeScript } from "next-app-theme/theme-script";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Arthur's Website",
	description: "My Website",
	openGraph: {
		images: [
			{
				url: "https://supermemory.ai/og-image.png",
				width: 1200,
				height: 627,
				alt: "Supermemory - Your personal second brain.",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "https://supermemory.ai",
		creator: "https://supermemory.ai",
		title: "Supermemory - Your personal second brain.",
		description:
			"Bring saved information from all over the internet into one place where you can connect it, and ask AI about it",
		images: [
			{
				url: "https://supermemory.ai/og-image.png",
				width: 1200,
				height: 627,
				alt: "Supermemory - Your personal second brain.",
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
		<html lang="en">
			<head>
				<ThemeScript />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
