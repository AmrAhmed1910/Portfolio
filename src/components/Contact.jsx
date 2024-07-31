import { CONTACT } from "../constants";
import { SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-8 ">
      <h1 className="my-8 text-center text-4xl font-semibold text-white ">
        Get In Touch
      </h1>
      <div className="text-center tracking-tighter max-w-md mx-auto">
        <p className=" lg:justify-middle rounded  px-2 py-1 bg-neutral-800 shadow-md my-2 text-lg ">
          
          <span className="font-semibold text-purple-500"> Number: </span>
          {CONTACT.phoneNo}
        </p>
        <p className=" lg:justify-middle rounded  px-2 py-1 bg-neutral-800 shadow-md my-2 text-lg ">
          
          <span className="font-semibold text-purple-500"> Email: </span>
          {CONTACT.email}
        </p>
      </div>
        <div className="flex justify-center space-x-6">
          <motion.button className="rounded-full border-3 border-neutral-800 p-3 hover:bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            transition={{ duration: 0.4 }}
            onClick={() => window.open(CONTACT.linkedin, "_blank")}
          >
            <SiLinkedin className="text-xl text-blue-600" />
          </motion.button>
          <motion.button className="rounded-full border-3 border-neutral-800 p-3 hover:bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            transition={{ duration: 0.4 }}
            onClick={() => window.open(CONTACT.facebook, "_blank")}
          >
            <SiFacebook className="text-xl text-blue-500" />
          </motion.button>
          <motion.button className="rounded-full border-3 border-neutral-800 p-3 hover:bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            transition={{ duration: 0.4 }}
            onClick={() => window.open(CONTACT.instagram, "_blank")}
          >
            <SiInstagram className="text-xl text-pink-600" />
          </motion.button>
        </div>
      </div>
  );
};

export default Contact;
