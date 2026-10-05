import "../styles/globals.css";
import { App } from "../components/App";
import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://someinn.com"),
	title: {
		default: "Bookkeeping & Payroll Services | Someinn",
		template: "%s | Someinn",
	},
	description:
		"Someinn is a bookkeeping and payroll services company that provides expert financial solutions for small businesses. Our team of experienced professionals helps you manage your finances, streamline your operations, and ensure compliance with tax regulations. We offer personalized services tailored to your business needs, including bookkeeping, payroll processing, tax preparation, and financial consulting. With Someinn, you can focus on growing your business while we take care of the numbers.",
	openGraph: {
		type: "website",
		url: "/",
		siteName: "Someinn",
		title: "Sominn | Bookkeeping & Payroll Services",
		description:
			"Someinn is a bookkeeping and payroll services company that provides expert financial solutions for small businesses. Our team of experienced professionals helps you manage your finances, streamline your operations, and ensure compliance with tax regulations.",
	},
	keywords: [
		"bookkeeping",
		"payroll",
		"financial services",
		"small business",
		"tax compliance",
		"financial consulting",
		"support",
		"accounting",
		"financial management",
		"business growth",
	],
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

export default function NextHomePage() {
	return <App />;
}
