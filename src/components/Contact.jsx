import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Get In <span className="text-purple-400">Touch</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: "📧",
                label: "Email",
                value: "mastewalalebel0@gmail.com",
              },
              { icon: "📱", label: "Phone", value: "09 50 37 09 26" },
              { icon: "🌍", label: "Location", value: "BahrDar,Ethiopia" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-400">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400 transition"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400 transition"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
