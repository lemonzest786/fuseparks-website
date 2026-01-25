import { motion } from "framer-motion";
import { Container } from "@/components";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "Fuseparks transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. The team was professional, responsive, and delivered exceptional results.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    company: "GrowthLabs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content:
      "Working with Fuseparks was a game-changer for our business. They delivered a stunning website that not only looks amazing but also converts visitors into customers. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, Bloom Co.",
    company: "Bloom Co.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content:
      "The monthly design plan has been perfect for our growing startup. Fuseparks consistently delivers high-quality designs on time. Their unlimited revisions policy gives us peace of mind.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "Product Manager, InnovateTech",
    company: "InnovateTech",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    content:
      "Exceptional creativity and professionalism. Fuseparks helped us rebrand our entire product line. The results speak for themselves - our engagement has increased by 300%!",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Owner, Artisan Bakery",
    company: "Artisan Bakery",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    content:
      "From logo design to our complete website, Fuseparks handled everything beautifully. They truly understood our vision and brought it to life. Our customers love the new look!",
    rating: 5,
  },
  {
    id: 6,
    name: "James Wilson",
    role: "CTO, CloudSync",
    company: "CloudSync",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    content:
      "Best design agency we've worked with. Fast turnaround, creative solutions, and excellent communication. The professional plan has been worth every penny for our team.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 md:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container className="relative z-10 px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 rounded-full mb-4 sm:mb-6"
          >
            <Quote className="w-4 h-4 text-brand" />
            <span className="text-sm font-medium text-gray-900">
              Client Testimonials
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say
            about working with Fuseparks.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-brand/50 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-brand/20 group-hover:text-brand/40 transition-colors duration-300" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-gray-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
