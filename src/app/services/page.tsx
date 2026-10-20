import "../../styles/globals.css";
import { Services } from "../../components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://somienn.com"),
	title: {
		default: "Bookkeeping & Payroll Services | Somienn",
		template: "%s | Somienn",
	},
	description:
		"Somienn provides remote bookkeeping and payroll services for small businesses across the U.S. Services include day-to-day bookkeeping, account reconciliations, invoicing and bill management, sales tax, inventory and job costing, contractor 1099 filings, and catch-up bookkeeping. Our payroll services include payroll processing, tax filings, and employee onboarding. We also offer financial consulting and support to help small business owners make informed decisions about their finances.",
	openGraph: {
		type: "website",
		url: "/services",
		siteName: "Somienn",
		title: "Sominn | Bookkeeping & Payroll Services",
		description:
			"Somienn provides remote bookkeeping and payroll services for small businesses across the U.S. Services include day-to-day bookkeeping, account reconciliations, invoicing and bill management, sales tax, inventory and job costing, contractor 1099 filings, and catch-up bookkeeping.",
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

export default function NextServicesPage() {
	return <Services />;
}
