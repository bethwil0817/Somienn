import wallpaper3 from "../images/wallpaper3.png";
import biopic from "../images/jandchome.png";
import quickLogo from "../images/quickbooks.png";
import graph from "../images/graph.png";

import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Reveal } from "./Reveal";

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
					className={`min-w-screen flex flex-col justify-center items-center min-h-[400px] text-center text-[#545454]`}
					style={{ fontFamily: "var(--font-amaranth)" }}
				>
					<Reveal>
						<div className="text-[95px] md:text-[110px] tracking-[-0.09em]">
							somienn
						</div>
					</Reveal>
					<Reveal delayVal={1}>
						<div className="text-[35px] md:text-[50px] italic">
							Bookeeping & Payroll
						</div>
					</Reveal>
				</div>
			</div>
			<div>
				<div
					style={{
						backgroundImage: `linear-gradient(to bottom, rgb(255,255,255,.7), rgba(255,255,255,.7) 90%), url(${graph.src})`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}
					className="text-center p-6 text-[#545454] flex flex-col justify-center items-center md:mt-5 mx-auto max-w-[1200px]"
				>
					<Reveal delayVal={1.5}>
						<div
							className="text-[30px] md:text-[40px] tracking-wide text-center text-[#545454] mt-0 md:mt-10"
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Welcome to Somienn: Your Partners in Growth
						</div>
					</Reveal>
					<Reveal delayVal={1.5}>
						<div
							className="text-base md:text-[20px] mt-10"
							style={{ fontFamily: "var(--font-open-sans)" }}
						>
							At <strong>Somienn</strong>, we believe that when a business owner
							has complete peace of mind over their finances, incredible growth
							happens. Our core philosophy is rooted in a genuine passion for
							lifting the administrative weight off your shoulders. We are here
							to give you the clear, accurate financial insights you need to
							confidently scale your company, maximize your profits, and rest
							easy knowing your tax liability is carefully minimized.
						</div>
					</Reveal>
					<Reveal>
						<div
							className="text-base md:text-[20px] mt-5"
							style={{ fontFamily: "var(--font-open-sans)" }}
						>
							We don't view ourselves as a distant, traditional agency. Instead,
							we act as a true, collaborative extension of your own team.
						</div>
					</Reveal>
					<div
						className="mt-10 max-w-[1000px] mx-auto"
						style={{ fontFamily: "var(--font-open-sans)" }}
					>
						<Reveal>
							<div className="text-[20px] md:text-[25px]">
								We approach our work with a simple, dedicated motto:
							</div>
						</Reveal>
						<Reveal>
							<div className="text-base md:text-[20px] mt-5 font-bold">
								<ul className="flex flex-col gap-3">
									<li>Professional bookkeeping</li>
									<li>Trusted partnerships</li>
									<li>Seamless payroll</li>
								</ul>
							</div>
						</Reveal>
					</div>
				</div>
				<div
					className="bg-[#545454] p-4 md:p-6 py-10 mt-20 md:m-8 md:rounded-[2rem]"
					style={{ fontFamily: "var(--font-open-sans)" }}
				>
					<div className="flex flex-col md:flex-row gap-10 max-w-[1200px] mx-auto">
						<div className="md:w-[50%]">
							<Reveal>
								<img
									className="rounded-lg shadow-lg object-contain"
									src={biopic.src}
									alt="Jeannye and Chris"
									loading="lazy"
								/>
							</Reveal>
						</div>

						<div className="md:w-[50%] text-[20px] text-white flex text-center justify-center items-center flex-col gap-3">
							<Reveal>
								<div
									className="font-bold text-[30px] lg:text-[35px] text-[#fed11f]"
									style={{ fontFamily: "var(--font-amaranth)" }}
								>
									Somienn is powered by the two of us:
								</div>
							</Reveal>
							<Reveal>
								<div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-center text-base lg:text-[20px]">
									<div className="text-white text-[25px] flex flex-col">
										<div>Jeannye</div>
										<div className="text-base lg:whitespace-nowrap text-[#fed11f]">
											Based in Michigan
										</div>
									</div>
									<div className="text-white md:text-[#fed11f]">&</div>
									<div className="text-white text-[25px] flex flex-col">
										<div>Chris</div>
										<div className="text-base whitespace-nowrap text-[#fed11f]">
											Based in Wisconsin
										</div>
									</div>
								</div>
							</Reveal>
							<Reveal>
								<div className="text-base lg:text-[20px] mt-5">
									Though we love our respective corners of the Midwest, we
									operate completely in the cloud to serve small business owners
									all across the United States.
								</div>
							</Reveal>
						</div>
					</div>
				</div>
				<div
					className="bg-white px-6 py-6 md:py-10 mt-0 md:mt-10 mb-5 mx-auto"
					style={{ fontFamily: "var(--font-open-sans)" }}
				>
					<Reveal>
						<div className="grid text-center md:text-left grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10  gap-4 lg:gap-8 text-base md:text-[20px] w-full mx-auto  max-w-[1200px]">
							<div className="text-center w-full lg:col-span-2">
								To deliver the smooth, modern experience you deserve,{" "}
								<strong>QuickBooks Online</strong> is at the heart of everything
								we do. We rely on its secure, real-time technology and seamless
								app integrations to ensure you always have an accurate snapshot
								of your financial health right at your fingertips.
							</div>
							<div className="w-full text-center mx-auto my-auto">
								<img
									className="w-full h-auto max-w-[300px] mx-auto hover:cursor-pointer"
									onClick={() => {
										window.open("https://quickbooks.intuit.com/accountants/");
									}}
									loading="lazy"
									src={quickLogo.src}
								/>
							</div>
						</div>
					</Reveal>
					<Reveal>
						<div className="flex pt-10 md:pt-20 px-6 flex-col border-t border-t-gray-300 text-center gap-8 mt-6 justify-center text-base md:text-[20px] w-full mx-auto items-center max-w-[1200px]">
							We pride ourselves on being accessible, warm, and highly
							efficient. By designing smart, streamlined systems for your
							business, we save you time and protect your bottom line. We want
							you to stop stressing over the spreadsheets and get back to what
							you love most—building your business and doing what you do best.
						</div>
					</Reveal>
					<Reveal>
						<div
							className="text-center my-5 flex justify-center max-w-[1200px] items-center mx-auto text-base md:text-[20px] font-bold"
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Let's build something great together! We would love to get to know
							you and hear all about your business goals. Click below to
							schedule a meeting for a relaxed, friendly chat. The coffee is on
							us!
						</div>
					</Reveal>
					<Reveal>
						<a
							className="p-4 whitespace-nowrap rounded-lg text-lg md:text-[20px] flex justify-center max-w-[150px] mx-auto text-center bg-[#fed11f] hover:bg-[#ffe993] text-[#545454]"
							href="https://calendly.com/hello-somienn"
							target="_blank"
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Meet With Us
						</a>
					</Reveal>
				</div>
			</div>
			<Footer />
		</div>
	);
};
