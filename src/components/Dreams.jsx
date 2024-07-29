import { MY_DREAMS } from "./../constants/index";
import { motion } from "framer-motion";
const Dreams = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <h1 className="my-8 text-center text-4xl font-semibold text-white">My Dreams</h1>
    <div className="w-3xl mx-auto flex flex-wrap justify-center">
        {MY_DREAMS.map((dream, index) => (
          <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.6 }}
           key={index} className="  lg:w-2/6 mx-4 mb-8 p-6 bg-neutral-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{dream.title}</h2>
              <p className="text-neutral-400 text-lg">{dream.description}</p>
          </motion.div>
        ))}
    </div>
  </div>
);
};

export default Dreams;
