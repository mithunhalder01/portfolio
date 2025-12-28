import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5lowsrb",
        "template_1u8juli",
        formRef.current,
        "OlgkmPW_0xWzulxtx"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (error) => {
          alert("Something went wrong ❌");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="relative mt-40 px-4 max-w-6xl mx-auto">
      {/* heading */}
      <div className="text-center mb-14">
        <p className="text-cyan-400 text-sm uppercase tracking-widest">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
          Let’s Work Together
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mt-4 text-sm md:text-base">
          Have a project in mind or want to collaborate?  
          I’m always open to discussing new ideas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* left info card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl text-white font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-white/80">
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <FiMail />
                </span>
                <span>mithunhaldar7500@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <FiPhone />
                </span>
                <span>+91 63995 19654</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <FiMapPin />
                </span>
                <span>Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-white/40 mt-8">
            Available for freelance & full-time opportunities
          </p>
        </motion.div>

        {/* right form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-8 space-y-6"
        >
          <h3 className="text-xl text-white font-semibold">
            Send a Message
          </h3>

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />

          <textarea
            name="message"
            rows="5"
            required
            placeholder="Tell me about your project..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-cyan-400 text-black font-medium py-3 hover:bg-cyan-300 transition"
          >
            Send Message <FiSend />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
