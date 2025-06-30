import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneFlip, FaRegUser } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import contact from "../assets/portfolio-contact.svg";

const Contacts = () => {
  const handleContact = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contacts" className=" py-10 md:py-14 lg:py-18 ">
      <SectionTitle title={"Contacts"} />
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-5">
        <div className="flex flex-col gap-3 text-secondary-content icons  items-center md:items-start justify-center">
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
        </div>
        <div className="divider"></div>
        <form onClick={handleContact} className="flex flex-col gap-4 form">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary-content mb-10">Message Me</h3>
          <div>
            <FaRegUser />
            <input type="text" placeholder=" Name" />
          </div>
          <div>
            <MdMarkEmailUnread size={20}/>
          <input type="email" placeholder=" Email" />
          </div>
          <textarea
            cols="40"
            rows="5"
            placeholder="Text Here..."
          ></textarea>
          <button className="btn purple-btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
