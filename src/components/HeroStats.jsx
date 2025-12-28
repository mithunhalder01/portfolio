import { motion } from "framer-motion";
import { FaBriefcase, FaUsers, FaCode, FaRocket } from "react-icons/fa";

const stats = [
  {
    label: "Projects Completed",
    value: "30+",
    icon: FaBriefcase,
  },
  {
    label: "Happy Clients",
    value: "12+",
    icon: FaUsers,
  },
  {
    label: "Technologies Used",
    value: "15+",
    icon: FaCode,
  },
  {
    label: "Years of Experience",
    value: "2+",
    icon: FaRocket,
  },
];

export default function HeroStats() {
  return (
    <section className="relative z-10 mt-12 md:mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 group"
              >
                {/* icon */}
                <div className="w-12 h-12 rounded-xl bg-cyan-400/15 text-cyan-400 flex items-center justify-center text-xl">
                  <Icon />
                </div>

                {/* text */}
                <div>
                  <h4 className="text-white text-2xl font-semibold leading-tight">
                    {stat.value}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
