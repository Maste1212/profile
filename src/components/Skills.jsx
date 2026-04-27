import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
    { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-500" },
    { name: "Framer Motion", level: 80, color: "from-purple-400 to-pink-500" },
    { name: "UI/UX Design", level: 82, color: "from-rose-400 to-red-500" },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
              <p className="mt-2 text-right text-gray-300">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
