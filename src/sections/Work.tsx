import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, ProjectCard } from "@/components";

export const Work = () => {
  const projects = [
    {
      title: "TechFlow Platform",
      category: "Web Development",
      description:
        "A comprehensive web platform built with cutting-edge technologies for seamless user experiences.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    },
    {
      title: "Luxe Cosmetics",
      category: "Brand Identity",
      description:
        "Premium brand identity design that captures elegance and sophistication.",
      imageUrl:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
    },
    {
      title: "Urban Spaces",
      category: "Digital Design",
      description:
        "Modern digital design for contemporary architecture and living spaces.",
      imageUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    },
    {
      title: "FitLife App",
      category: "App Design",
      description:
        "Mobile-first fitness application design focused on user engagement and motivation.",
      imageUrl:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
    },
  ];

  return (
    <section id="work" className="py-16 sm:py-20 md:py-32 bg-white">
      <Container className="px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            A showcase of our recent projects where creativity meets strategy to
            deliver exceptional results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors duration-200 text-sm sm:text-base"
          >
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
