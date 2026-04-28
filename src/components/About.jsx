import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 about-title"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-4"
        >
          <p className="about-text text-gray-300 text-lg leading-relaxed">
            I am a <span className="text-blue-300 font-semibold">3rd-year IT student</span> at Bahir Dar University.
          </p>
          <p className="about-text text-gray-300 text-lg leading-relaxed">
            Passionate about <span className="text-green-300 font-semibold">website development</span> and building modern applications.
          </p>
          <p className="about-text text-gray-300 text-lg leading-relaxed">
            I am a passionate and dedicated IT student seeking an internship opportunity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
