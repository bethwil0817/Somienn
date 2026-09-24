import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Reveal } from "./Reveal";

export const Contact = () => {
	return (
		<div>
			<Nav />
			<div className="mb-15">
				<Reveal>
					<div
						className={`pt-8 md:pt-15 pb-6 text-center text-[#545454] text-[75px] md:text-[110px] p-4`}
						style={{ fontFamily: "var(--font-amaranth)" }}
					>
						Contact Us
					</div>
				</Reveal>
				<Reveal>
					<div
						className={`pb-6 text-center text-[#fed11f] text-[30px] md:text-[50px] p-4`}
						style={{ fontFamily: "var(--font-amaranth)" }}
					>
						Schedule a phone call with us!
					</div>
				</Reveal>
				<Reveal>
					<div
						className={`pt-8 pb-6 text-center text-[#545454]  md:text-[20px] flex justify-center items-center mx-auto px-4 md:px-6 max-w-[1200px]`}
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
						className="p-4 whitespace-nowrap rounded-lg text-[20px] md:text-[25px] flex justify-center max-w-[180px] mx-auto text-center bg-[#fed11f] hover:bg-[#ffe993] text-[#545454]"
						href="https://calendly.com/hello-somienn"
						target="_blank"
						style={{ fontFamily: "var(--font-amaranth)" }}
					>
						Schedule Now
					</a>
				</Reveal>
				<div className="mt-25 p-4">
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
