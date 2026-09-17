import Link from "next/link";
import wallpaper3 from "../images/wallpaper3.png";
import biopic from "../images/jandchome.png";
import arrow from "../images/upandup.png";
import graph from "../images/graph.png";
import { Nav } from "./Nav";

export const App = () => {
	const yellow = "#fed11f";
	const gray = "#545454";

	return (
		<div>
			<Nav />
			<div
				className="w-full h-full"
				style={{
					backgroundImage: `linear-gradient(to bottom, rgb(255,255,255,.01), rgba(255,255,255,.9) 90%), url(${wallpaper3.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div
					className={`min-w-screen flex flex-col justify-center items-center min-h-[500px] text-center text-[#545454]`}
					style={{ fontFamily: "var(--font-amaranth)" }}
				>
					<div className="text-[100px]">Someinn</div>
					<div className="text-[50px] italic">Bookeeping & Payroll</div>
				</div>
			</div>
			<div>
				{/* <img
					src={arrow.src}
					alt="Arrow"
					className="w-full h-auto max-w-[400px] mx-auto"
				/> */}
				<div
					style={{
						backgroundImage: `linear-gradient(to bottom, rgb(255,255,255,.7), rgba(255,255,255,.7) 90%), url(${graph.src})`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}
					className="text-center text-[#545454] flex flex-col justify-center items-center mt-5 mx-auto max-w-[1000px]"
				>
					<div
						className="text-[40px] tracking-wide text-center text-[#545454] mt-10"
						style={{ fontFamily: "var(--font-amaranth)" }}
					>
						Welcome to Somienn: Your Partners in Growth
					</div>
					<div
						className="text-[20px] mt-10"
						style={{ fontFamily: "var(--font-open-sans)" }}
					>
						At <strong>Somienn</strong>, we believe that when a business owner
						has complete peace of mind over their finances, incredible growth
						happens. Our core philosophy is rooted in a genuine passion for
						lifting the administrative weight off your shoulders. We are here to
						give you the clear, accurate financial insights you need to
						confidently scale your company, maximize your profits, and rest easy
						knowing your tax liability is carefully minimized.
					</div>
					<div
						className="text-[20px] mt-5"
						style={{ fontFamily: "var(--font-open-sans)" }}
					>
						We don't view ourselves as a distant, traditional agency. Instead,
						we act as a true, collaborative extension of your own team.
					</div>
					<div
						className="mt-10 max-w-[1000px] mx-auto"
						style={{ fontFamily: "var(--font-open-sans)" }}
					>
						<div className="text-[25px]">
							We approach our work with a simple, dedicated motto:
						</div>
						<div className="text-[20px] mt-5 font-bold">
							<ul className="flex flex-col gap-3">
								<li>Professional bookkeeping</li>
								<li>Trusted partnerships</li>
								<li>Seamless payroll</li>
							</ul>
						</div>
					</div>
				</div>
				<div
					className="bg-[#545454] p-6 mt-20"
					style={{ fontFamily: "var(--font-open-sans)" }}
				>
					<div className="grid grid-cols-2 gap-10 max-w-[1200px] mx-auto">
						<div>
							<img
								className="rounded-lg shadow-lg"
								src={biopic.src}
								alt="Jeannye and Chris"
							/>
						</div>

						<div className="text-[20px] text-white flex text-center justify-center items-center flex-col gap-3">
							<div
								className="font-bold text-[35px] text-[#fed11f]"
								style={{ fontFamily: "var(--font-amaranth)" }}
							>
								Somienn is powered by the two of us:
							</div>
							<div className="flex gap-5 text-[20px]">
								<div className="text-white text-[25px] flex flex-col">
									<div>Jeannye</div>
									<div className="text-base text-[#fed11f]">
										Based in Michigan
									</div>
								</div>
								<div className="text-[#fed11f]">&</div>
								<div className="text-white text-[25px] flex flex-col">
									<div>Chris</div>
									<div className="text-base text-[#fed11f]">
										Based in Wisconsin
									</div>
								</div>
							</div>
							<div className="text-[20px] mt-5">
								Though we love our respective corners of the Midwest, we operate
								completely in the cloud to serve small business owners all
								across the United States.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
