import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center mb-8"
        >
          <img
            src="/1.jpg" // ✅ image from public folder
            alt="Mastewal Alebel"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* the rest remains exactly the same */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-red-600 to-yellow-700 bg-clip-text text-transparent">
            Mastewal Alebel
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-300 mb-8"
        >
          Frontend Developer • UI Enthusiast • Creative Problem Solver and also
          passionate the web development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-blue-600 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition"
          >
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
