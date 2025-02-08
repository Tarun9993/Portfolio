import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
  const form = useRef(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yzedt57", "template_xrgu0am", form.current, {
        publicKey: "HYYOeqNTHnEoxdycR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success('Submitted! Thank you.', {
            position: "top-right",
            autoClose: 3000, // Closes after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            
          });
          setFormData({ name: "", email: "", message: "" }); // Clear form state
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Form submission failed. Please try again.");
        }
      );
  };

  return (
    <div className="z-50 bg-gradient-to-r from-black via-gray-950 to-black text-white p-8 rounded-lg">
      <div className="text-center pb-20">
        <button className="inline-flex relative h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#37BEF8_0%,#375FF8_50%,#37BEF8_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-2xl font-bold text-white backdrop-blur-3xl tracking-wide">
            Contact Me
          </span>
        </button>
      </div>

      <div className="cursor-pointer lg:flex justify-self-auto md:px-15 lg:px-15 lg:gap-40">
        <form ref={form} onSubmit={handleSubmit} className="space-y-4  lg:w-1/2">
          <div>
            <label className="block text-md tracking-wide font-medium">
              Name{" "}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-md tracking-wide font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-md tracking-wide font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full tracking-wide text-xl cursor-pointer bg-[#3e9dc6] hover:bg-[#3988aa] text-white p-2 rounded"
          >
            Submit
          </button>
          <Toaster />
        </form>
        <div className="py-15 sm:py-0 lg:w-1/2">
          <div className="text-center pt-10">
            <h1 className="font-bold tracking-wide text-2xl font-sans text-[#37BEF8]">
              Get in Touch
            </h1>
          </div>
          <div className="text-center pt-6 font-sans">
            <h1 className="">Rajamahendravaram,Andhra Pradesh, India</h1>
            <h1 className="pt-2"> +91-9381788359</h1>
            <h1 className="pt-2">tadalatarun944@gmail.com</h1>
          </div>
          <div>
            <div className="flex gap-5 mt-10 justify-center">
              <a
                href="https://www.linkedin.com/in/tarun-kumar-1aaba2252/"
                className="z-50"
                target="_blank"
              >
                <FaLinkedinIn
                  size={50}
                  className="text-white border border-neutral-200 p-3 rounded-xl cursor-pointer hover:border-[#37BEF8]"
                />
              </a>
              <a
                href="https://github.com/Tarun9993/"
                className="z-50"
                target="_blank"
              >
                {" "}
                <FaGithub
                  size={50}
                  className="text-white  border  border-neutral-200 p-3 rounded-xl cursor-pointer  hover:border-[#37BEF8]"
                />
              </a>
              <a
                href="https://x.com/Tarun_225?t=H9gIh80DhLhwi93JyBtKEA&s=09"
                className="z-50"
                target="_blank"
              >
                <RiTwitterXLine
                  size={50}
                  className="text-white border border-neutral-200 p-3 rounded-xl cursor-pointer  hover:border-[#37BEF8]"
                />
              </a>
              <a href="" target="_blank" className="z-50">
                <h2 className="text-white  border border-neutral-200 p-3 px-4 tracking-wide rounded-xl cursor-pointer  hover:border-[#37BEF8] ">
                  RESUME
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
