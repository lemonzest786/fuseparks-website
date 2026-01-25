import { motion } from "framer-motion";
import { Container, Card } from "@/components";
import { Sparkles, Palette, Code2, TrendingUp } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Brand Strategy",
      description:
        "We craft compelling brand identities that resonate with your audience and stand out in the market.",
    },
    {
      icon: Palette,
      title: "Digital Design",
      description:
        "Beautiful, functional designs that elevate your digital presence and create memorable experiences.",
    },
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Fast, scalable, and modern web applications built with cutting-edge technologies.",
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      description:
        "Data-driven marketing strategies that amplify your reach and drive measurable growth.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 md:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container className="relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What we do best
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            We combine strategy, design, and technology to create digital
            experiences that drive real business results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
