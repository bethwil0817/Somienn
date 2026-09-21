import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { useState, type ReactNode } from "react";
import chris from "../images/chriscrop.jpg";
import jeannye from "../images/jeannyecrop.jpg";
import chrisM from "../images/chris.jpg";
import jM from "../images/jeannye.jpg";

type member = {
	heading: string;
	paren: string;
	paragraphs: ReactNode[];
	image: string;
	imageMobile: string;
}[];

export const About = () => {
	const [selectedMember, setSelectedMember] = useState("Jeannye");

	const memberData: member = [
		{
			heading: "Meet Jeannye: Your Co-Pilot in Business",
			paren: "(and Biggest Cheerleader!)",
			paragraphs: [
				<div>
					If you think bookkeeping is just about staring at cold, rigid
					spreadsheets all day, think again!
				</div>,
				<div>
					Hi, I’m <strong>Jeannye</strong>, and I believe that every balance
					sheet has a heartbeat. To me, good bookkeeping isn't just about
					balancing the ledger—it’s about{" "}
					<strong>
						trust, open communication, and truly understanding the passion and
						people behind the business
					</strong>
					.
				</div>,
				<div>
					I absolutely love working with people from all walks of life. Learning
					about your unique journey, hearing your stories, and discovering what
					keeps your business moving day-to-day is honestly the most fulfilling
					part of my job. I believe every single business has its own unique
					rhythm, and your financial support should reflect exactly that.
				</div>,
				<div>
					My real passion lies in connecting with people and helping them
					discover the beauty of a stress-free life so they can live it fully
					and meaningfully. When your business records are beautifully
					organized, up-to-date, and easy to understand, you can stop guessing
					and start making confident, informed decisions.
				</div>,
				<div>
					Ultimately, my goal is to lift you up, giving you the solid foundation
					you need to fearlessly support your own team and clients. I take pride
					in being someone you can genuinely rely on—a trusted partner in your
					corner, not just a distant numbers tracker.
				</div>,
				<div>
					<strong>
						You focus on growing your business and chasing your dreams. I’ll
						take care of the numbers!
					</strong>
				</div>,
			],
			image: jeannye.src,
			imageMobile: jM.src,
		},
		{
			heading: "Meet Chris: Your Financial Strategist",
			paren: "(and Office Mama Bear)",
			paragraphs: [
				<div>
					If you’ve ever felt overwhelmed by midnight cash-flow worries or a
					mountain of receipts, breathe a sigh of relief—you are officially
					protected here!
				</div>,
				<div>
					Hi, I’m <strong>Chris</strong>, and while my title says financial
					strategist, everyone at work knows me simply as the "
					<strong>Mama Bear.</strong>"
				</div>,
				<div>
					Based proudly in <strong>Wisconsin</strong>, I am the other half of
					the Somienn team. To me, being a mama bear means I am fiercely
					protective of two things:{" "}
					<strong>your peace of mind and your bottom line</strong>. I don't view
					bookkeeping as just a checklist of transactions. For me, it is about
					building a trusted partnership where you feel completely looked after,
					supported, and safe to focus on what you do best.
				</div>,
				<div>
					My passion lies in cutting through the financial noise to give you
					clear, actionable insights. I love getting to know the unique rhythm
					of your business, celebrating your milestones like they are my own,
					and helping you design a clear path to maximum profitability. When it
					comes to organizing your books in the cloud, handling seamless
					payroll, or keeping your tax liabilities strictly minimized, I’ve got
					your back completely.
				</div>,
				<div>
					I believe a great bookkeeper should be someone you can truly lean on.
					I am here to communicate openly, listen to your goals, and handle the
					heavy administrative lifting so you can finally stop stressing over
					the spreadsheets.
				</div>,
				<div>
					<strong>
						Consider your business finances officially taken care of. You focus
						on building your empire—this Mama Bear has the numbers covered!{" "}
					</strong>
				</div>,
			],
			image: chris.src,
			imageMobile: chrisM.src,
		},
	];

	const [data, setData] = useState(memberData[0]);

	return (
		<div className="">
			<Nav />
			<div className="overflow-x-hidden! m-8 rounded-[1rem]">
				<div
					className={`py-15 border-b border-b-[#fed11f] text-center text-[#545454] text-[110px]`}
					style={{ fontFamily: "var(--font-amaranth)" }}
				>
					<Reveal>
						<p>
							About{" "}
							<strong className="tracking-[-0.095em] font-normal!">
								somienn
							</strong>
						</p>
					</Reveal>
				</div>
				<Reveal delayVal={1}>
					<div
						className="text-[50px] text-center pt-15 mb-8"
						style={{ fontFamily: "var(--font-amaranth)" }}
					>
						Meet Our Team
					</div>
				</Reveal>
				<Reveal delayVal={1.5}>
					<div
						className="text-[#545454] text-center"
						style={{ fontFamily: "var(--font-open-sans)" }}
					>
						Click here to meet each member!
					</div>
				</Reveal>
				<Reveal delayVal={1.7}>
					<div className="flex gap-8 rounded-lg justify-center items-center mx-auto w-max text-center bg-[#faf2d0]">
						<button
							className={`py-4 px-10 hover:cursor-pointer text-[#545454] text-xl rounded-lg transition-all ease-in-out duration-300 ${selectedMember === "Jeannye" ? "bg-[#fed11f] font-bold" : "bg-[#ffea99]"} `}
							onClick={() => {
								setSelectedMember("Jeannye");
								setData(memberData[0]);
							}}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Jeannye
						</button>
						<p>&</p>
						<button
							className={`py-4 px-10 hover:cursor-pointer text-[#545454] text-xl rounded-lg transition-all ease-in-out duration-300 ${selectedMember === "Chris" ? "bg-[#fed11f] font-bold" : "bg-[#ffea99]"} `}
							onClick={() => {
								setSelectedMember("Chris");
								setData(memberData[1]);
							}}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Chris
						</button>
					</div>
				</Reveal>
				{selectedMember === "Chris" && (
					<div className="mx-6 md:mx-10 rounded-2xl flex flex-col mt-15">
						<div className="text-center">
							<Reveal>
								<h1
									className={`pt-4 pb-0 px-6 md:px-10 font-bold hover:cursor-pointer text-[#545454] text-[30px]`}
									style={{ fontFamily: "var(--font-amaranth)" }}
								>
									{data?.heading}
								</h1>
							</Reveal>
							<Reveal>
								<h4
									className={`px-6 md:px-10 font-bold hover:cursor-pointer text-[#545454] text-[20px]`}
									style={{ fontFamily: "var(--font-amaranth)" }}
								>
									{data?.paren}
								</h4>
							</Reveal>
						</div>
						<Reveal>
							<div className="grid grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
								<div className="w-full ml-auto place-content-center">
									<img
										src={data?.image}
										className="w-full h-auto rounded-lg max-w-[350px] hidden lg:flex"
									/>
									<img
										src={data?.imageMobile}
										className="w-full h-auto rounded-lg flex lg:hidden"
									/>
								</div>
								<div className="lg:col-span-2 flex flex-col gap-3 w-full relative">
									{data?.paragraphs.map((para, index) => (
										<div key={index}>{para}</div>
									))}
								</div>
							</div>
						</Reveal>
					</div>
				)}
				{selectedMember === "Jeannye" && (
					<div className="mx-6 md:mx-10 rounded-2xl flex flex-col mt-15">
						<div className="text-center">
							<Reveal>
								<h1
									className={`pt-4 pb-0 px-6 md:px-10 font-bold hover:cursor-pointer text-[#545454] text-[30px]`}
									style={{ fontFamily: "var(--font-amaranth)" }}
								>
									{data?.heading}
								</h1>
							</Reveal>
							<Reveal>
								<h4
									className={`px-6 md:px-10 font-bold hover:cursor-pointer text-[#545454] text-[20px]`}
									style={{ fontFamily: "var(--font-amaranth)" }}
								>
									{data?.paren}
								</h4>
							</Reveal>
						</div>
						<Reveal>
							<div className="grid grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
								<div className="w-full ml-auto place-content-center">
									<img
										src={data?.image}
										className="w-full h-auto rounded-lg max-w-[350px] hidden lg:flex"
									/>
									<img
										src={data?.imageMobile}
										className="w-full h-auto rounded-lg flex lg:hidden"
									/>
								</div>
								<div className="lg:col-span-2 flex flex-col gap-3 w-full relative">
									{data?.paragraphs.map((para, index) => (
										<div key={index}>{para}</div>
									))}
								</div>
							</div>
						</Reveal>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};
