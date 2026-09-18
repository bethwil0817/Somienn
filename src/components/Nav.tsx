import Link from "next/link";
import { useState } from "react";

export const Nav = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<div
			className="bg-[#545454] text-white p-4 sticky top-0"
			style={{ fontFamily: "var(--font-amaranth)" }}
		>
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="text-4xl text-[#fed11f] font-bold tracking-[-0.08em]">
						somienn
					</div>
					<div className="block md:hidden">
						<button
							id="mobile-menu-button"
							type="button"
							className="text-[#fed11f] w-auto bg-transparent focus:outline-none cursor-pointer justify-self-end"
							onClick={() => {
								setShowMobileMenu(!showMobileMenu);
							}}
						>
							<svg
								className="h-10 w-10"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
					<div className="hidden md:flex space-x-20 mr-20 text-[#fed11f] text-xl">
						<Link
							href="/"
							className="hover:text-white transition-all ease-in-out duration-300"
						>
							Home
						</Link>
						<Link
							href="/services"
							className="hover:text-white transition-all ease-in-out duration-300"
						>
							Services
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
				<div
					className={`border-t border-t-white flex flex-col p-2 space-y-2 bg-[#5454547c] text-[#fed11f] text-xl ${showMobileMenu ? "flex" : "hidden"} md:hidden`}
				>
					<Link
						href="/"
						className="hover:text-white transition-all ease-in-out duration-300"
					>
						Home
					</Link>
					<Link
						href="/services"
						className="hover:text-white transition-all ease-in-out duration-300"
					>
						Services
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
	);
};
