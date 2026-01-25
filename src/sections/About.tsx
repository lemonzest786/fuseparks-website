import { motion } from "framer-motion";
import { Container } from "@/components";

export const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and explore new possibilities.",
    },
    {
      title: "Quality",
      description: "Excellence in every detail, every time.",
    },
    {
      title: "Collaboration",
      description: "Your success is our success. We work as partners.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container className="relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              We're a team of creators, thinkers, and builders
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Founded with a mission to help brands tell their stories in the
              digital age, we combine strategic thinking with creative execution
              to deliver work that matters.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
              Our approach is simple: understand your goals, craft a strategy,
              and execute with precision. We believe great work comes from great
              partnerships.
            </p>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border-l-4 border-brand pl-4 sm:pl-6"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
