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
          className="text-4xl md:text-5xl font-bold text-center mb-12"
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
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a passionate frontend developer with 3+ years of experience
            building modern web applications. I love creating smooth, animated
            user interfaces that are both beautiful and functional.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            My journey started with HTML/CSS and evolved into mastering React,
            Tailwind CSS, and Framer Motion. I believe great design and
            performance go hand in hand.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            When I'm not coding, I enjoy contributing to open source, writing
            tech blogs, and exploring new frontend technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
