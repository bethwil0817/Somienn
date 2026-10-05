import type { Metadata } from "next";
import "../../styles/globals.css";
import { Contact } from "../../components/Contact";

export const metadata: Metadata = {
	metadataBase: new URL("https://someinn.com"),
	title: "Contact Someinn | Bookkeeping & Payroll Support",
	description:
		"Contact Someinn to schedule a free consultation or ask a bookkeeping or payroll question. Our team serves small businesses remotely across the U.S.",
	alternates: {
		canonical: "/contact",
	},
	openGraph: {
		type: "website",
		url: "/contact",
		siteName: "Someinn",
		title: "Contact Someinn | Bookkeeping & Payroll Support",
		description:
			"Contact Someinn to schedule a free consultation or ask a bookkeeping or payroll question. Our team serves small businesses remotely across the U.S.",
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

export default function NextContactPage() {
	return <Contact />;
}
