import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaRegUser, FaPaperPlane } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import toast from "react-hot-toast";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import contact from "/public/contact.json";
import Lottie from "lottie-react";

const Contacts = () => {
  const formRef = useRef();
  const [state, handleSubmit] = useForm("xyzjoeyn");
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for messaging!");
      formRef.current.reset();
    }
  }, [state.succeeded]);

  const contactInfo = [
     {
      icon: <RiWhatsappFill size={23} />,
      text: "+880 1938-627947",
      link: "https://wa.me/8801938627947",
    },
    {
      icon: <MdMarkEmailUnread size={22} />,
      text: "elorayasmin20@gmail.com",
      // link: "mailto:elorayasmin20@gmail.com",
    },
   
  ];

  return (
    <section id="contacts" className="py-10 md:py-14 lg:py-20 px-4">

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6 text-secondary-content items-center md:items-start justify-center flex-1"
        >
          {/* Title */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-violet-300 to-violet-600 bg-clip-text text-transparent mb-2">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-3 w-full max-w-md">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300 group"
              >
              
                  {info.icon}
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
                  {info.text}
                </span>
              </motion.a>
            ))}
          </div>
          

          {/* Lottie Animation */}
          <Lottie
            animationData={contact}
            loop={true}
            className="w-64 md:w-80 lg:w-96"
          />
        </motion.div>

        {/* Divider */}
        <div className="divider md:divider-horizontal"></div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 flex-1 max-w-lg w-full bg-gray-800/30 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-md shadow-violet-300"
        > 
          <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-white mb-4">
            Send a Message
          </h3>

          {/* Name Input */}
          <div className="relative">
            <label className="text-sm text-gray-400 mb-2 block">Your Name</label>
            <div className="relative">
              <FaRegUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={`w-full pl-12 pr-4 py-3 bg-gray-900 border rounded-lg text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300 ${
                  focusedField === "name"
                    ? "border-violet-500 shadow-lg shadow-violet-500/20"
                    : "border-gray-700"
                }`}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label className="text-sm text-gray-400 mb-2 block">Your Email</label>
            <div className="relative">
              <MdMarkEmailUnread
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`w-full pl-12 pr-4 py-3 bg-gray-900 border rounded-lg text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300 ${
                  focusedField === "email"
                    ? "border-violet-500 shadow-lg shadow-violet-500/20"
                    : "border-gray-700"
                }`}
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <label className="text-sm text-gray-400 mb-2 block">Your Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="5"
              required
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder:text-gray-500 focus:outline-none resize-none transition-all duration-300 ${
                focusedField === "message"
                  ? "border-violet-500 shadow-lg shadow-violet-500/20"
                  : "border-gray-700"
              }`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={state.submitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn w-full bg-gradient-to-r from-violet-600 to-violet-500 border-0 text-white hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
          >
            {state.submitting ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <FaPaperPlane size={16} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contacts;