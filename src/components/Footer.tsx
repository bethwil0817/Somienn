import Link from "next/link";
import badge from "../images/badge.png";
import badge3 from "../images/badge3.png";
import badgeGold from "../images/badgegold.png";
import workforceBadge from "../images/workforcebadge.png";
import phone from "../images/phonetran.png";
import email from "../images/emailtran.png";
import clock from "../images/clock.png";

export const Footer = () => {
	return (
		<div className="bg-[#fed11f] p-2">
			<div className="bg-[#545454] p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-lg">
				<div className="grid grid-cols-1 grid-cols-2 place-items-center align-middle h-full relative w-full my-auto gap-1 md:border-r md:border-r-[#fed11f]">
					<img
						src={badgeGold.src}
						loading="lazy"
						className="w-auto h-auto max-w-[80px] sm:max-w-[100px] md:max-h-none"
					/>
					<img
						src={workforceBadge.src}
						loading="lazy"
						className="w-auto h-auto max-w-[80px] sm:max-w-[100px] md:max-h-none"
					/>
					<img
						src={badge3.src}
						loading="lazy"
						className="w-auto h-auto max-w-[95px] sm:max-w-[120px] md:max-h-none"
					/>
					<img
						src={badge.src}
						loading="lazy"
						className="w-auto h-auto max-w-[95px] sm:max-w-[120px] md:max-h-none"
					/>
				</div>
				<div className="block lg:hidden p-4 place-items-center">
					<div>
						<div
							className={`flex flex-col w-full relative justify-center items-center text-center text-[#fed11f]`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							<div className="text-[70px] tracking-[-0.09em] -mb-6">
								somienn
							</div>
							<div className="text-[20px] italic">Bookkeeping & Payroll</div>
						</div>
						<div
							className="mt-4 flex flex-col gap-2 items-center text-[#fed11f] justify-center text-sm"
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							<div className="flex gap-2">
								<img
									className="w-full h-auto max-w-[20px]"
									src={phone.src}
								/>
								<div>(906) 450-2980</div>
							</div>
							<div className="flex gap-2">
								<img
									className="w-full h-auto max-w-[30px]"
									src={email.src}
								/>
								<div>hello@somienn.com</div>
							</div>
							<div className="flex items-center gap-2">
								<img
									className="w-full h-auto max-w-[20px]"
									src={clock.src}
								/>
								<div>Mon-Fri 9AM-3PM</div>
							</div>
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
						<div className="text-[70px] tracking-[-0.09em] -mb-5">somienn</div>
						<div className="text-[18px] italic">Bookkeeping & Payroll</div>
						<div className="mt-4 flex flex-col gap-2 items-center justify-center">
							<div className="flex gap-2">
								<img
									className="w-full h-auto max-w-[20px]"
									src={phone.src}
								/>
								<div>(906) 450-2980</div>
							</div>
							<div className="flex gap-2">
								<img
									className="w-full h-auto max-w-[30px]"
									src={email.src}
								/>
								<div>hello@somienn.com</div>
							</div>
							<div className="flex items-center gap-2">
								<img
									className="w-full h-auto max-w-[20px]"
									src={clock.src}
								/>
								<div>Mon-Fri 9AM-3PM</div>
							</div>
						</div>
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
