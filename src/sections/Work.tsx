import { motion } from "framer-motion";
import { Container } from "@/components";
import { ExpandableCard } from "@/components/ui/expandable-card";

export const Work = () => {
  const projects = [
    {
      title: "TechFlow Platform",
      description: "Web Development",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      ctaText: "View Project",
      ctaLink: "#",
      content: () => {
        return (
          <p>
            A comprehensive web platform built with cutting-edge technologies
            for seamless user experiences. This project showcases modern web
            development practices including responsive design, performance
            optimization, and intuitive user interfaces.
            <br />
            <br />
            The platform features real-time data synchronization, advanced
            analytics dashboards, and a scalable architecture designed to handle
            high traffic loads. Built with React, TypeScript, and modern backend
            technologies to ensure reliability and maintainability.
          </p>
        );
      },
    },
    {
      title: "Luxe Cosmetics",
      description: "Brand Identity",
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
      ctaText: "View Project",
      ctaLink: "#",
      content: () => {
        return (
          <p>
            Premium brand identity design that captures elegance and
            sophistication. This comprehensive branding project includes logo
            design, color palette development, typography selection, and brand
            guidelines.
            <br />
            <br />
            The visual identity reflects the luxury and quality of the cosmetics
            line while maintaining a modern and approachable aesthetic. Every
            element was carefully crafted to resonate with the target audience
            and stand out in the competitive beauty industry.
          </p>
        );
      },
    },
    {
      title: "Urban Spaces",
      description: "Digital Design",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      ctaText: "View Project",
      ctaLink: "#",
      content: () => {
        return (
          <p>
            Modern digital design for contemporary architecture and living
            spaces. This project combines stunning visuals with functional
            design to showcase architectural excellence and urban development.
            <br />
            <br />
            Features include interactive 3D visualizations, virtual tours, and
            detailed property information. The design emphasizes clean lines,
            spacious layouts, and a sophisticated color scheme that reflects the
            modern urban lifestyle.
          </p>
        );
      },
    },
    {
      title: "FitLife App",
      description: "App Design",
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
      ctaText: "View Project",
      ctaLink: "#",
      content: () => {
        return (
          <p>
            Mobile-first fitness application design focused on user engagement
            and motivation. The app provides personalized workout plans,
            nutrition tracking, and progress monitoring to help users achieve
            their fitness goals.
            <br />
            <br />
            With an intuitive interface and gamification elements, FitLife keeps
            users motivated and engaged. Features include social sharing,
            achievement badges, and integration with popular fitness wearables
            for comprehensive health tracking.
          </p>
        );
      },
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
          className="max-w-3xl mb-12 sm:mb-16 mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            A showcase of our recent projects where creativity meets strategy to
            deliver exceptional results.
          </p>
        </motion.div>

        {/* Expandable Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ExpandableCard cards={projects} />
        </motion.div>
      </Container>
    </section>
  );
};
