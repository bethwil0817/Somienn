"use client";
import { useEffect, useState } from "react";
import { About } from "@/src/components/About";

export default function NextAboutPage() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<div
				style={{
					minHeight: "100vh",
					width: "100%",
					background:
						"linear-gradient(45deg, rgb(255,255,255), rgb(255,255,255)",
				}}
			/>
		);
	}

	return <About />;
}
