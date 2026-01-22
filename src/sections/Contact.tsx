import { motion } from "framer-motion";
import { Container, Button } from "@/components";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-white">
      <Container className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Let's build something
              <br />
              remarkable together
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Have a project in mind? We'd love to hear about it.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-gray-900 placeholder:text-gray-400"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto">
              Send Message
            </Button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center"
          >
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Email
              </h4>
              <a
                href="mailto:hello@fuseparks.com"
                className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                hello@fuseparks.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Phone
              </h4>
              <a
                href="tel:+1234567890"
                className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                +1 (234) 567-890
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Location
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                San Francisco, CA
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
