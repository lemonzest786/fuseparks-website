import { motion } from "framer-motion";
import { Container } from "@/components";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content:
      "Fuseparks transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. The team was professional, responsive, and delivered exceptional results.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "Working with Fuseparks was a game-changer for our business. They delivered a stunning website that not only looks amazing but also converts visitors into customers. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, Bloom Co.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "The monthly design plan has been perfect for our growing startup. Fuseparks consistently delivers high-quality designs on time. Their unlimited revisions policy gives us peace of mind.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "Product Manager, InnovateTech",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content:
      "Exceptional creativity and professionalism. Fuseparks helped us rebrand our entire product line. The results speak for themselves — our engagement has increased by 300%.",
    rating: 4,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Owner, Artisan Bakery",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face",
    content:
      "From logo design to our complete website, Fuseparks handled everything beautifully. They truly understood our vision and brought it to life. Our customers love the new look!",
    rating: 5,
  },
  {
    id: 6,
    name: "James Wilson",
    role: "CTO, CloudSync",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "Best design agency we've worked with. Fast turnaround, creative solutions, and excellent communication. The professional plan has been worth every penny for our team.",
    rating: 4,
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl p-6 border border-gray-200 mx-3 shadow-sm">
    <Quote className="w-7 h-7 text-brand/30 mb-3" />
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < t.rating ? "fill-brand text-brand" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
    <p className="text-gray-700 text-sm leading-relaxed mb-5">"{t.content}"</p>
    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
      <img
        src={t.image}
        alt={t.name}
        className="w-10 h-10 rounded-full object-cover bg-gray-100"
      />
      <div>
        <h4 className="font-semibold text-gray-900 text-sm">{t.name}</h4>
        <p className="text-xs text-gray-500">{t.role}</p>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 md:py-32 bg-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container className="relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 rounded-full mb-4 sm:mb-6">
            <Quote className="w-4 h-4 text-brand" />
            <span className="text-sm font-medium text-gray-900">Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with Fuseparks.
          </p>
        </motion.div>
      </Container>

      {/* Marquee rows — full bleed, outside Container */}
      <div className="space-y-4">
        {/* Row 1 — scroll left */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee w-max">
            {doubled.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee-reverse w-max">
            {[...doubled].reverse().map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>

      <Container className="relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 mb-4">Ready to join our happy clients?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-brand text-gray-900 rounded-lg font-semibold hover:bg-brand/90 transition-colors duration-200"
          >
            Start Your Project
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
