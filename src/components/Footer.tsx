import Link from "next/link";
import badge from "../images/badge.png";
import badge2 from "../images/badge2.png";
import badge3 from "../images/badge3.png";

export const Footer = () => {
	return (
		<div className="bg-[#fed11f] p-2">
			<div className="bg-[#545454] p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg">
				<div className="grid grid-cols-1 grid-cols-3 place-items-center align-middle h-full relative w-full my-auto gap-4 md:border-r md:border-r-[#fed11f]">
					<img
						src={badge2.src}
						loading="lazy"
						className="w-auto h-auto max-h-[150px] md:max-h-none"
					/>
					<img
						src={badge3.src}
						loading="lazy"
						className="w-auto h-auto max-h-[150px] md:max-h-none"
					/>
					<img
						src={badge.src}
						loading="lazy"
						className="w-auto h-auto max-h-[150px] md:max-h-none"
					/>
				</div>
				<div className="block lg:hidden p-4 place-items-center">
					<div>
						<div
							className={`flex flex-col w-full relative justify-center items-center text-center text-[#fed11f]`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							<div className="text-[70px] tracking-[-0.09em]">somienn</div>
							<div className="text-[20px] italic">Bookeeping & Payroll</div>
						</div>
					</div>
					<div
						className="flex text-center gap-4 pt-4"
						style={{ fontFamily: "var(--font-amaranth)" }}
					>
						<Link
							className="text-base md:text-[20px] text-[#fed11f] hover:text-[#ffe993]"
							href="/"
						>
							Home
						</Link>
						<div className="text-white">|</div>
						<Link
							className="text-base md:text-[20px] text-[#fed11f] hover:text-[#ffe993]"
							href="/services"
						>
							Services
						</Link>
						<div className="text-white">|</div>
						<Link
							className="text-base md:text-[20px] text-[#fed11f] hover:text-[#ffe993]"
							href="/about"
						>
							About
						</Link>
						<div className="text-white">|</div>
						<Link
							className="text-base md:text-[20px] text-[#fed11f] hover:text-[#ffe993]"
							href="/contact"
						>
							Contact
						</Link>
					</div>
				</div>
				<div className="border-r place-items-center border-r-[#fed11f] h-full hidden lg:block">
					<div
						className={`flex flex-col w-full relative justify-center items-center text-center text-[#fed11f]`}
						style={{ fontFamily: "var(--font-amaranth)" }}
					>
						<div className="text-[70px] tracking-[-0.09em]">somienn</div>
						<div className="text-[20px] italic">Bookeeping & Payroll</div>
					</div>
				</div>
				<div
					className="flex-col text-center mx-auto gap-4 hidden lg:flex justify-center items-center"
					style={{ fontFamily: "var(--font-amaranth)" }}
				>
					<Link
						className="text-[20px] text-[#fed11f] hover:text-[#ffe993]"
						href="/"
					>
						Home
					</Link>
					<Link
						className="text-[20px] text-[#fed11f] hover:text-[#ffe993]"
						href="/services"
					>
						Services
					</Link>
					<Link
						className="text-[20px] text-[#fed11f] hover:text-[#ffe993]"
						href="/about"
					>
						About
					</Link>
					<Link
						className="text-[20px] text-[#fed11f] hover:text-[#ffe993]"
						href="/contact"
					>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};
