import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import peace from "../images/peace.png";
import location from "../images/local.png";
import cloud from "../images/cloud.png";
import health from "../images/health.png";
import sweep from "../images/sweep.png";
import reports from "../images/reports.png";
import auto from "../images/auto.png";

export const Services = () => {
	type bullets = { head: string; info: string }[];

	const coreBulletData: bullets = [
		{
			head: "Transaction Management:",
			info: "Capturing, tracking, and properly coding every single bank and credit card transaction.",
		},
		{
			head: "Account Reconciliation:",
			info: "Cross-referencing your statements to ensure your balances match perfectly down to the penny.",
		},
		{
			head: "Accounts Receivable:",
			info: "Customizing, sending, and tracking your customer invoices so you get paid faster.",
		},
		{
			head: "Accounts Payable:",
			info: "Organizing, tracking, and managing your vendor bills to keep your supplier relationships strong.",
		},
		{
			head: "Sales Tax Accounting:",
			info: "Calculating, filing, and managing state and local sales taxes accurately and on time.",
		},
		{
			head: "Inventory & Fixed Assets:",
			info: "Tracking physical inventory values, equipment depreciation, and fixed assets over time.",
		},
		{
			head: "Job Costing:",
			info: "Breaking down expenses per project or contract so you know exactly how profitable each job is.",
		},
		{
			head: "1099 Filings:",
			info: "Taking care of your year-end contractor reporting so your business stays fully compliant. ",
		},
	];

	const cleanBulletData: bullets = [
		{
			head: "Historical Clean-Up:",
			info: "Sorting, categorizing, and correcting past months or years of unmapped transactions.",
		},
		{
			head: "Account Diagnostics:",
			info: "Finding and fixing balancing errors, duplicate entries, or missing data in your history.",
		},
		{
			head: "Tax-Ready Restoration:",
			info: "Organizing your messy past records into clean, compliant financials that your CPA will love.",
		},
	];

	const bookBulletData: bullets = [
		{
			head: "Financial Reporting:",
			info: "Delivering clear, beautifully organized Balance Sheets and Profit & Loss (P&L) statements.",
		},
		{
			head: "Management Reporting:",
			info: "Providing custom financial dashboards focused on the specific metrics that drive your growth.",
		},
	];

	const seamlessBulletData: bullets = [
		{
			head: "Payroll Processing:",
			info: "Managing timely, accurate direct deposits and paper checks for both employees and contractors.",
		},
		{
			head: "Payroll Tax Filing:",
			info: "Automatically calculating, depositing, and filing all local, state, and federal payroll taxes to avoid costly penalties.",
		},
	];

	return (
		<div>
			<Nav />
			<div className="mb-20 px-4 md:px-6">
				<div className="place-items-center ">
					<Reveal>
						<div
							className={`pt-8 md:pt-15 pb-6 text-center text-[#545454] text-[75px]  md:text-[110px]`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Our Services
						</div>
					</Reveal>
					<Reveal delayVal={1}>
						<div
							className={`text-center text-[#fed11f] text-[30px] md:text-[40px]`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Financial Clarity & Total Peace of Mind
						</div>
					</Reveal>
					<Reveal delayVal={1}>
						<div>
							<img
								className="w-full h-auto max-w-[150px] mx-auto text-center"
								src={peace.src}
							/>
						</div>
					</Reveal>
				</div>
				<Reveal delayVal={1}>
					<div
						className="max-w-[1200px] text-[#545454] text-center text-base md:text-[20px] mx-auto mt-8"
						style={{ fontFamily: "var(--font-open-sans)" }}
					>
						At <strong>Somienn</strong>, we handle your financial management
						completely so you can focus entirely on leading your business. A
						strong business thrives on accurate, timely numbers. Flawless books
						are the secret to making smart, confident daily decisions and
						ensuring smooth, stress-free tax filings.
					</div>
				</Reveal>
				<Reveal delayVal={1}>
					<div
						className="max-w-[1200px] text-[#545454] text-center text-base md:text-[20px] mx-auto mt-8"
						style={{ fontFamily: "var(--font-open-sans)" }}
					>
						We act as your dedicated, virtual back office—combining{" "}
						<strong>
							uncompromising professional accuracy with the approachability of a
							true partner
						</strong>
						.
					</div>
				</Reveal>
				<div className="mt-25">
					<Reveal>
						<div
							className={`text-center text-[#fed11f] text-[30px] md:text-[40px]`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Where We Are (And Who We Serve)
						</div>
					</Reveal>
					<Reveal>
						<div>
							<img
								className="w-full h-auto max-w-[80px] mx-auto"
								src={location.src}
							/>
						</div>
					</Reveal>
					<div
						className="mx-auto text-center"
						style={{ fontFamily: "var(--font-open-sans)" }}
					>
						<div className="mt-5 text-base md:text-[20px] text-[#545454]">
							<Reveal>
								<div className="mt-5 text-[20px] md:text-[25px] font-bold text-[#545454]">
									Our Team
								</div>
							</Reveal>
							<Reveal>
								<div>
									<strong>Jeannye</strong> – Based proudly in Michigan
								</div>
							</Reveal>
							<Reveal>
								<div>
									<strong>Chris</strong> – Based proudly in Wisconsin
								</div>
							</Reveal>
						</div>
						<div className="mt-5 text-base md:text-[20px] text-[#545454]">
							<Reveal>
								<div className="mt-5 text-[20px] md:text-[25px] font-bold text-[#545454]">
									Our Clients
								</div>
							</Reveal>
							<Reveal>
								<div className="text-base md:text-[20px] text-[#545454]">
									Located anywhere in the U.S. via our secure cloud
									infrastructure.
								</div>
							</Reveal>
						</div>
					</div>
				</div>
				<div>
					<Reveal>
						<div
							className={`mt-25 text-center text-[#fed11f] text-[30px] md:text-[40px]`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Powered by Modern Cloud Technology
						</div>
					</Reveal>
					<Reveal>
						<img
							className="w-full h-auto mx-auto max-w-[170px] text-center"
							src={cloud.src}
						/>
					</Reveal>
					<Reveal>
						<div
							className="max-w-[1200px] text-[#545454] text-center text-base md:text-[20px] mx-auto mt-8"
							style={{ fontFamily: "var(--font-open-sans)" }}
						>
							To give you a seamless and efficient experience,{" "}
							<strong>QuickBooks Online</strong> is at the center of our
							workflow. As our platform of choice, it integrates beautifully
							with your favorite business apps (like time-tracking, expense
							reporting, and invoicing tools). This powerful automation keeps
							your financials updated in real time, eliminates manual errors,
							and saves you an incredible amount of time and money.
						</div>
					</Reveal>
				</div>
				<div className="place-items-center mt-25 px-6 md:px-8">
					<Reveal>
						<div
							className={`text-center text-[#fed11f] text-[30px] md:text-[40px]`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Core Bookkeeping & Financial Health Services
						</div>
					</Reveal>
					<Reveal>
						<img
							className="w-full h-auto mx-auto max-w-[120px] text-center"
							src={health.src}
						/>
					</Reveal>
					<Reveal>
						<div
							className="max-w-[1200px] text-[#545454] text-center text-base md:text-[20px] mx-auto mt-8"
							style={{ fontFamily: "var(--font-open-sans)" }}
						>
							We tailor our daily, weekly, and monthly bookkeeping workflows to
							match the unique rhythm of your business:
						</div>
					</Reveal>
					<Reveal>
						<div className="grid grid-cols-1 md:grid-cols-2 mx-auto mt-5 gap-6 max-w-[1200px]">
							{coreBulletData.map((data, index) => (
								<div
									key={index}
									className="rounded-lg p-4 gap-6 border border-[#fed11f] transition-all ease-in-out duration-300 cursor-auto bg-[#fffdf7] hover:bg-[#fff6d0] hover:[&_h1]:text-[24px]"
									style={{ fontFamily: "var(--font-open-sans)" }}
								>
									<Reveal>
										<h1
											className="text-black font-bold text-center text-lg md:text-[22px] transition-all ease-in-out duration-300"
											style={{ fontFamily: "var(--font-amaranth)" }}
										>
											{data.head}
										</h1>
									</Reveal>
									<Reveal>
										<div className="text-[#545454] text-center text-sm md:text-[18px]">
											{data.info}
										</div>
									</Reveal>
								</div>
							))}
						</div>
					</Reveal>
				</div>
				<div className="mt-25 px-6 md:px-8">
					<Reveal>
						<div
							className={`text-center text-[#fed11f] text-[30px] md:text-[40px]`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Catch-Up Bookkeeping & Clean-Up Services
						</div>
					</Reveal>
					<Reveal>
						<div>
							<img
								className="w-full mx-auto h-auto max-w-[110px] text-center"
								src={sweep.src}
							/>
						</div>
					</Reveal>
					<Reveal>
						<div
							className="max-w-[1200px] text-[#545454] text-center text-base md:text-[20px] mx-auto mt-8"
							style={{ fontFamily: "var(--font-open-sans)" }}
						>
							Behind on your books? Please don't stress—we are a completely
							judgment-free zone! Whether you’ve fallen a few months behind or
							have a whole year of unorganized receipts, we excel at sorting out
							the chaos. We will roll up our sleeves, dive into your past
							records, and bring everything completely up to date so you can
							file your taxes confidently and finally breathe a sigh of relief.
						</div>
					</Reveal>
					<Reveal>
						<div className="grid grid-cols-1 mt-5 mx-auto gap-6 mx-auto max-w-[1000px]">
							{cleanBulletData.map((data, index) => (
								<div
									key={index}
									className="rounded-lg p-4 gap-6 border border-[#fed11f] transition-all ease-in-out duration-300 cursor-auto bg-[#fffdf7] hover:bg-[#fff6d0] hover:[&_h1]:text-[24px]"
									style={{ fontFamily: "var(--font-open-sans)" }}
								>
									<Reveal>
										<h1
											className="text-black font-bold text-center text-lg md:text-[22px] transition-all ease-in-out duration-300"
											style={{ fontFamily: "var(--font-amaranth)" }}
										>
											{data.head}
										</h1>
									</Reveal>
									<Reveal>
										<div className="text-[#545454] text-center text-base md:text-[18px]">
											{data.info}
										</div>
									</Reveal>
								</div>
							))}
						</div>
					</Reveal>
				</div>
				<div className="mt-25 px-6 md:px-8">
					<Reveal>
						<div
							className={`text-center text-[#fed11f] text-[30px] md:text-[40px]`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Strategic Insights & Reporting
						</div>
					</Reveal>
					<Reveal>
						<div>
							<img
								className="w-full mx-auto h-auto max-w-[120px] text-center"
								src={reports.src}
							/>
						</div>
					</Reveal>
					<Reveal>
						<div
							className="max-w-[1200px] text-[#545454] text-center text-base md:text-[20px] mx-auto mt-8"
							style={{ fontFamily: "var(--font-open-sans)" }}
						>
							Data is only useful if it makes sense to you. We don't just hand
							over spreadsheets; we help you understand the story behind your
							numbers:
						</div>
					</Reveal>
					<Reveal>
						<div className="grid grid-cols-1 md:grid-cols-2 mt-5 mx-auto gap-6 max-w-[1200px]">
							{bookBulletData.map((data, index) => (
								<div
									key={index}
									className="rounded-lg p-4 gap-6 border border-[#fed11f] transition-all ease-in-out duration-300 cursor-auto bg-[#fffdf7] hover:bg-[#fff6d0] hover:[&_h1]:text-[24px]"
									style={{ fontFamily: "var(--font-open-sans)" }}
								>
									<Reveal>
										<h1
											className="text-black font-bold text-center text-lg md:text-[22px] transition-all ease-in-out duration-300"
											style={{ fontFamily: "var(--font-amaranth)" }}
										>
											{data.head}
										</h1>
									</Reveal>
									<Reveal>
										<div className="text-[#545454] text-center text-base md:text-[18px]">
											{data.info}
										</div>
									</Reveal>
								</div>
							))}
						</div>
					</Reveal>
				</div>
				<div className="mt-25 px-6 md:px-8">
					<Reveal>
						<div
							className={`text-center text-[#fed11f] text-[30px] md:text-[40px]`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Seamless Payroll Management
						</div>
					</Reveal>
					<Reveal>
						<div>
							<img
								className="w-full mx-auto h-auto max-w-[110px] text-center"
								src={auto.src}
							/>
						</div>
					</Reveal>
					<Reveal>
						<div
							className="max-w-[1200px] text-[#545454] text-center text-base md:text-[20px] mx-auto mt-8"
							style={{ fontFamily: "var(--font-open-sans)" }}
						>
							Taking care of your team should be simple. We handle your entire
							payroll infrastructure from start to finish:
						</div>
					</Reveal>
					<Reveal>
						<div className="grid grid-cols-1 md:grid-cols-2 mt-5 mx-auto gap-6 mx-auto max-w-[1200px]">
							{seamlessBulletData.map((data, index) => (
								<div
									key={index}
									className="rounded-lg p-4 gap-6 border border-[#fed11f] transition-all ease-in-out duration-300 cursor-auto bg-[#fffdf7] hover:bg-[#fff6d0] hover:[&_h1]:text-[24px]"
									style={{ fontFamily: "var(--font-open-sans)" }}
								>
									<Reveal>
										<h1
											className="text-black font-bold text-center text-lg md:text-[22px] transition-all ease-in-out duration-300"
											style={{ fontFamily: "var(--font-amaranth)" }}
										>
											{data.head}
										</h1>
									</Reveal>
									<Reveal>
										<div className="text-[#545454] text-center text-base md:text-[18px]">
											{data.info}
										</div>
									</Reveal>
								</div>
							))}
						</div>
					</Reveal>
				</div>
				<div className="mt-25 px-6 md:px-8">
					<Reveal>
						<div
							className={`text-center text-[#fed11f] text-[40px] md:text-[50px]`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Let’s Simplify Your Finances Today!
						</div>
					</Reveal>
					<Reveal>
						<div
							className="max-w-[1200px] font-bold text-[#545454] text-center text-base md:text-[20px] mx-auto mt-8"
							style={{ fontFamily: "var(--font-open-sans)" }}
						>
							You build your business. We’ll take care of the numbers.
						</div>
					</Reveal>
					<Reveal>
						<div
							className="max-w-[1200px] text-[#545454] text-center text-base md:text-[20px] mx-auto mt-8"
							style={{ fontFamily: "var(--font-open-sans)" }}
						>
							Ready to hand over the spreadsheet stress to a partner you can
							truly rely on?
						</div>
					</Reveal>
					<Reveal>
						<div
							className="max-w-[1200px] mb-5 text-[#545454] text-center text-base md:text-[20px] mx-auto mt-8"
							style={{ fontFamily: "var(--font-open-sans)" }}
						>
							<strong>Click below</strong> to schedule a friendly, casual, free
							consultation chat on our Calendly!
						</div>
					</Reveal>
					<Reveal>
						<a
							className="p-4 whitespace-nowrap rounded-lg text-[20px] md:text-[25px] flex justify-center max-w-[180px] mx-auto text-center bg-[#fed11f] hover:bg-[#ffe993] text-[#545454]"
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
