import Link from "next/link";

export const Nav = () => {
	return (
		<div
			className="bg-[#545454] text-white p-4"
			style={{ fontFamily: "var(--font-amaranth)" }}
		>
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="text-xl text-[#fed11f] font-bold">Someinn</div>
					<div className="flex space-x-20 mr-20 text-[#fed11f] text-xl">
						<Link
							href="/"
							className="hover:text-white transition-all ease-in-out duration-300"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="hover:text-white transition-all ease-in-out duration-300"
						>
							About
						</Link>
						<Link
							href="/contact"
							className="hover:text-white transition-all ease-in-out duration-300"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
