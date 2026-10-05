import type { Metadata } from "next";
import "../../styles/globals.css";
import { About } from "@/src/components/About";

export const metadata: Metadata = {
	metadataBase: new URL("https://someinn.com"),
	title: "Meet the Someinn Team | About Someinn",
	description:
		"Get to know Jeannye and Chris, the team behind Someinn, and our people-first approach to bookkeeping and payroll for small businesses.",
	alternates: {
		canonical: "/about",
	},
	openGraph: {
		type: "website",
		url: "/about",
		siteName: "Someinn",
		title: "Meet the Someinn Team | About Someinn",
		description:
			"Get to know Jeannye and Chris, the team behind Someinn, and our people-first approach to bookkeeping and payroll for small businesses.",
	},
	robots: {
		index: true, // Allow indexing
		follow: true, // Follow links
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function NextAboutPage() {
	return <About />;
}
