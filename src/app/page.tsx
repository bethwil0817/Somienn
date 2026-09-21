"use client";
import { useEffect, useState } from "react";
import React from "react";
import { App } from "../components/App";

export default function NextHomePage() {
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

	return <App />;
}
