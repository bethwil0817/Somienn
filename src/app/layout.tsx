import type { Metadata } from "next";
import "../styles/globals.css";
import { Amaranth, Open_Sans } from "next/font/google";

const amaranthFont = Amaranth({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-amaranth",
});

const openSansFont = Open_Sans({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-open-sans",
});

export const metadata: Metadata = {
	title: "Music Social App",
	description: "Built with Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${amaranthFont.variable} ${openSansFont.variable}`}
		>
			<body>
				{/* Next.js renders the CatchAllSPA page contents inside here */}
				{children}
			</body>
		</html>
	);
}
