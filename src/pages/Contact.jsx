import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { description, headings } from "../constants";

const Contact = () => {
  const apiKey = import.meta.env.VITE_ACCESS_KEY;
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 " id="contact">
      <div className="flex flex-col items-center">
        <div className="mt-36 text-4xl font-bold tracking-widest mb-6 pb-4 border-b-[3px] border-violet-600">
          {headings.contact}
        </div>
        <p className="text-xl text-gray-600 text-center max-w-2xl tracking-wide mx-14">
          {description.contact}
        </p>
        <motion.form
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto text-gray-600 pt-8"
        >
          <div className="flex flex-wrap max-md:mx-16 ">
            <div className="w-full md:w-1/2 text-left max-md:mb-8">
              Your Name
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              />
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4">
              Your Email
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              />
            </div>
          </div>
          <div className="my-6 text-left max-md:mx-16">
            Message
            <textarea
              name="Message"
              placeholder="Message"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-violet-800 text-white py-4 px-10 mb-10 rounded border-2 font-bold border-violet-600 hover:bg-white hover:text-violet-800">
              {result ? result : "Send Message"}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
