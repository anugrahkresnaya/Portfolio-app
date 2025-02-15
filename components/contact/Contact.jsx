import { SiGmail, SiInstagram, SiLinkedin, SiTwitch } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log('service id', serviceId)

    const formData = new FormData(e.target);
    const firstName = formData.get("firstName").trim();
    const lastName = formData.get("lastName").trim();
    const phoneNumber = formData.get("phoneNumber").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{8,15}$/;

    if(!firstName || !lastName || !phoneNumber || !email || !message) {
      Swal.fire("Error", "Please fill in all required fields!", "error")
      return
    }

    if(!emailPattern.test(email)) {
      Swal.fire("Error", "Please enter a valid email address!", "error")
      return
    }

    if(!phonePattern.test(phoneNumber)) {
      Swal.fire("Error", "Please enter a valid phone number (8-15 digits)!", "error");
      return;
    }

    emailjs
      .sendForm(serviceId, templateID, e.target, publicKey)
      .then(() => {
        Swal.fire("Success", "message successfully sent", "success");
        e.target.reset();
      })
      .catch(() => {
        Swal.fire("Error", "failed to send", "error");
      });
  };

  return (
    <div className="container mx-auto max-w-4xl mt-32" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <span className="text-violet-900 font-extrabold">Get in Touch</span>
        <h1 className="text-3xl md:text-5xl my-5 font-extrabold">Contact Me</h1>
      </motion.div>
      <div className="flex justify-evenly flex-col md:flex-row bg-white rounded-md text-[#131212] mb-5 overflow-hidden">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl my-6 font-bold mx-5 md:mx-0">On the Internet</h1>
          <ul className="text-lg mt-5 mx-5 md:mx-0">
            <li className="flex items-center">
              <SiGmail className="mr-4" />
              anugrahkresnaya.ak@gmail.com
            </li>
            <li>
              <a
                className="flex items-center"
                href="https://www.instagram.com/anugrah_kresnaya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram className="mr-4" />
                @anugrah_kresnaya
              </a>
            </li>
            <li>
              <a
                className="flex items-center"
                href="https://www.linkedin.com/in/anugrah-kresnaya-5628671ab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="mr-4" />
                Anugrah Kresnaya
              </a>
            </li>
            <li>
              <a
                className="flex items-center"
                href="https://www.twitch.tv/kazecrowz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTwitch className="mr-4" />
                kazecrowz
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="mx-5"
        >
          <h1 className="my-6 text-4xl font-bold">Send Me a Message</h1>
          <form onSubmit={handleOnSubmit}>
            <div className="flex">
              <div className="flex flex-col mr-5">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="rounded-md bg-slate-50 px-3 py-2 border-violet-600 border w-full"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="rounded-md bg-slate-50 px-3 py-2 border-violet-600 border w-full"
                />
              </div>
            </div>
            <div className="flex mt-5">
              <div className="flex flex-col mr-5">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="rounded-md bg-slate-50 px-3 py-2 border-violet-600 border w-full"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="rounded-md bg-slate-50 px-3 py-2 border-violet-600 border w-full"
                />
              </div>
            </div>
            <textarea
              placeholder="Write your message here..."
              name="message"
              className="
                placeholder:italic 
                resize-none 
                rounded-md 
                w-full mt-5 
                text-black 
                min-h-150 
                bg-slate-50
                px-3
                py-2
                border-violet-600 
                border
              "
            />
            <motion.button
              type="submit"
              className="
                bg-violet-900 
                text-white 
                px-4 
                py-3 
                rounded-md 
                my-5 
                flex 
                justify-evenly 
                items-center
              "
              whileHover={{ scale: 1.1 }}
            >
              <FiSend className="mr-2" />
              Send
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
