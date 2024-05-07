import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
    const contact_info = [
        { logo: <MdOutlineEmail />, text: "nishant.lakhani01@gmail.com", title: "email" },
        { logo: <FaWhatsapp />, text: "+91 9898471265" },
        {
            logo: <GrLocation/>,
            text: "Gandhinagar",
        },
    ];
    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    Contact <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

                <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
                    <form className="flex flex-col flex-1 gap-5">
                        <input type="text" placeholder="Your Name" />
                        <input type="Email" placeholder="Your Email Address" />
                        <textarea placeholder="Your Message" rows={10}></textarea>
                        <button className="btn-primary w-fit">Send Message</button>
                    </form>
                    <div className="flex flex-col  gap-7 ">
                        {contact_info.map((contact, i) => (
                            <div key={i} className="flex flex-row text-left gap-4 flex-wrap items-center">
                                <section className="flex justify-center items-center">
                                    <button href="/"
                                        className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                                        {contact.logo}
                                        <span
                                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                                            {contact.title}
                                        </span>
                                    </button>
                                </section>
                                <p className="md:text-base text-sm  break-words">
                                    {contact.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
