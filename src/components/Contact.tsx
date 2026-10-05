"use client";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Reveal } from "./Reveal";
import phone from "../images/phonetran.png";
import email from "../images/emailtran.png";
import clock from "../images/clock.png";
import { useState } from "react";

export const Contact = () => {
	const [honeypot, setHoneypot] = useState("");
	const [revealSuccess, setRevealSuccess] = useState(false);
	const [result, setResult] = useState("");

	// Swap out your old onSubmit function with this updated TypeScript version:
	const onSubmit = async (event: any) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);
		formData.append("access_key", "e95fbc76-3cc4-4ee6-bca6-028408c56160");

		if (honeypot !== "") {
			setTimeout(() => {
				setRevealSuccess(true);
				setResult("Form Submitted Successfully");
				event.currentTarget.reset();
				setHoneypot(""); // reset the honeypot state
			}, 1000);
			return; // Stop execution right here
		} else {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const data = await response.json();
			if (data.success) {
				setRevealSuccess(true);
				setResult("Form Submitted Successfully");
				event.target.reset();
			} else {
				setRevealSuccess(false);
				setResult("Error");
			}
		}
	};

	return (
		<div>
			<Nav />
			<div className="mb-15 px-6">
				<Reveal>
					<div
						className={`pt-8 md:pt-15 pb-4 text-center text-[#545454] text-[75px] md:text-[110px]`}
						style={{ fontFamily: "var(--font-amaranth)" }}
					>
						Contact Us
					</div>
				</Reveal>
				<Reveal>
					<div
						className="flex flex-col my-8 place-content-center gap-6 items-center justify-center text-xl md:text-2xl"
						style={{ fontFamily: "var(--font-amaranth)" }}
					>
						<div className="flex gap-2 mx-auto">
							<img
								className="w-full items-center h-auto max-w-[30px]"
								src={phone.src}
							/>
							<div className="text-[#545454]">(906) 450-2980</div>
						</div>
						<div className="flex items-center gap-2">
							<img
								className="w-full h-auto max-w-[50px]"
								src={email.src}
							/>
							<div className="text-[#545454]">hello@somienn.com</div>
						</div>
						<div className="flex items-center gap-2">
							<img
								className="w-full h-auto max-w-[40px]"
								src={clock.src}
							/>
							<div className="text-[#545454]">Mon-Fri 9AM-3PM</div>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div
						className={`mt-8 pb-6 text-center text-[#fed11f] text-[30px] md:text-[50px]`}
						style={{ fontFamily: "var(--font-amaranth)" }}
					>
						Schedule a phone call with us!
					</div>
				</Reveal>
				<Reveal>
					<div
						className={`pt-8 pb-6 text-center text-[#545454]  md:text-[20px] flex justify-center items-center mx-auto max-w-[1200px]`}
						style={{ fontFamily: "var(--font-open-sans)" }}
					>
						Are you ready to take a step towards financial clarity and growth?
						Then we'd love to speak with you! Click below to schedule a 30
						minute call and one of our team members will be in contact with you
						and ready for the call. Our passion is helping and connecting with
						others and are excited for our next connection with you!
					</div>
				</Reveal>
				<Reveal>
					<a
						className="p-4 whitespace-nowrap rounded-lg text-lg md:text-[20px] flex justify-center max-w-[330px] md:max-w-[400px] mx-auto text-center bg-[#fed11f] hover:bg-[#ffe993] text-[#545454]"
						href="https://calendly.com/hello-somienn"
						target="_blank"
						style={{ fontFamily: "var(--font-amaranth)" }}
					>
						Schedule Now for a Free Consultation
					</a>
				</Reveal>
				<div className="max-w-[1200px] border-t border-t-gray-300 mt-30 pt-10 text-center place-items-center mx-auto">
					<Reveal>
						<div
							className=" text-[25px] md:text-[30px] tracking-wide text-center text-[#545454] mt-0 md:mt-10"
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Have a quick bookkeeping or payroll question?
						</div>
					</Reveal>
					<Reveal>
						<div>
							<div
								className="mt-4"
								style={{ fontFamily: "var(--font-open-sans)" }}
							>
								Not ready for a full consultation call yet? Drop your specific
								question below, and I will email you back a helpful answer
								within 24 hours
							</div>
						</div>
					</Reveal>
					<Reveal>
						<div className="bg-gray-100 text-left p-4 mt-8 rounded-xl max-w-[700px] mx-auto">
							<form
								className="flex flex-col"
								onSubmit={onSubmit}
							>
								<label>First Name:</label>
								<input
									className="border mb-4 bg-white border-gray-300 rounded-lg p-2"
									name="name"
									type="text"
									id="name"
									required
								/>
								<div
									style={{ display: "none" }}
									aria-hidden="true"
								>
									<label htmlFor="mid_name">Middle Name</label>
									<input
										id="mid_name"
										type="text"
										name="mid_name"
										tabIndex={-1} // Prevents keyboard users from accidentally tabbing into it
										autoComplete="off"
										value={honeypot}
										onChange={(e) => setHoneypot(e.target.value)}
									/>
								</div>
								<label>Email Address:</label>
								<input
									className="border mb-4 bg-white border-gray-300 rounded-lg p-2"
									name="email"
									id="email"
									type="email"
									required
								/>
								<label>Your Question:</label>
								<textarea
									className="border bg-white border-gray-300 rounded-lg p-2"
									name="message"
									id="message"
									required
								/>
								<button
									className="mt-4 hover:cursor-pointer p-2 whitespace-nowrap rounded-lg text-base flex justify-center w-[150px] text-center bg-[#fed11f] hover:bg-[#ffe993] text-[#545454]"
									type="submit"
									disabled={result === "Sending...."}
								>
									Submit
								</button>
							</form>
							{revealSuccess && (
								<Reveal delayVal={0}>
									<div className="mt-5 text-center text-[20px] text-green-700">
										Thanks for you submission! We will be in contact with you as
										soon as we can!
									</div>
								</Reveal>
							)}
						</div>
					</Reveal>
				</div>
				<div className="mt-25 border-t border-t-gray-300">
					<Reveal>
						<div
							className={`text-center text-[#fed11f] text-[30px] md:text-[50px] p-4`}
							style={{ fontFamily: "var(--font-amaranth)" }}
						>
							Our Locations
						</div>
					</Reveal>
					<div className="mt-5 flex flex-col md:flex-row justify-center mx-auto gap-6 max-w-[1200px]">
						<Reveal>
							<div className="w-full flex mx-auto">
								<iframe
									className="w-full"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91404.62076307464!2d-88.47983905863707!3d44.28127725922193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8803b682b903f6c9%3A0x9ca1d6a50675935b!2sAppleton%2C%20WI!5e0!3m2!1sen!2sus!4v1790213766256!5m2!1sen!2sus"
									width="600"
									height="450"
									style={{ border: 0 }}
									loading="lazy"
								></iframe>
							</div>
						</Reveal>
						<Reveal>
							<div className="w-full flex mx-auto">
								<iframe
									className="w-full"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22189.004547671553!2d-86.26702448966863!3d45.958763641775086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4c01604bed92ab%3A0xa649548fd1b7fa07!2sManistique%2C%20MI%2049854!5e0!3m2!1sen!2sus!4v1790213911688!5m2!1sen!2sus"
									width="600"
									height="450"
									style={{ border: 0 }}
									loading="lazy"
								></iframe>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
