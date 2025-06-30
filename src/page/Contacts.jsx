import React, { useEffect, useRef } from "react";
import SectionTitle from "../shared/SectionTitle";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneFlip, FaRegUser } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import contact from "../assets/portfolio-contact.svg";
import toast from "react-hot-toast";
import { useForm } from "@formspree/react";
import { motion } from "motion/react";

const Contacts = () => {
  const formRef = useRef();
  const [state, handleSubmit] = useForm("xyzjoeyn");
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for messaging!");
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <section id="contacts" className=" py-10 md:py-14 lg:py-18 ">
      <SectionTitle title={"Contacts"} />
      <div className="flex flex-col md:flex-row justify-around items-center gap-5">
        {/* number */}
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-3 text-secondary-content icons  items-center md:items-start justify-center">
          <img src={contact} alt="" className="h-70 lg:h-88 xl:h-96" />
          <p>
            <MdMarkEmailUnread size={22} /> elorayasmin20@gmail.com
          </p>
          {/* <p>
            <FaPhoneFlip size={20} /> +088 01938 - 627947
          </p> */}
          <p>
            <RiWhatsappFill size={23} />
            +088 01938 - 627947
          </p>
        </motion.div>

        <div className="divider md:divider-horizontal"></div>

        {/* form  */}
        <motion.form
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 form"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-secondary-content mb-8">
            Message Me
          </h3>
          <div>
            <FaRegUser />
            <input type="text" placeholder=" Name" name="name" />
          </div>
          <div>
            <MdMarkEmailUnread size={20} />
            <input type="email" placeholder=" Email" name="email" />
          </div>
          <textarea
            cols="40"
            rows="5"
            placeholder="Text Here..."
            name="message"
          ></textarea>
          <button className="btn purple-btn" type="submit">
            Send
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contacts;
