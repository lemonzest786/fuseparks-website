import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Container, Button } from "@/components";
import { Check, AlertCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email via EmailJS
      await emailjs.send(
        "service_apdg6qs", // Your EmailJS Service ID
        "template_fwcxjs7", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        "sIxdbmNav3-4E2qc2", // Replace with your EmailJS Public Key
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-32 bg-white overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container className="relative z-10 px-4 sm:px-6">
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
            onSubmit={handleSubmit}
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
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-400"
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
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 resize-none text-gray-900 placeholder:text-gray-400"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
              >
                <Check className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">
                  Oops! Something went wrong. Please try again or email us
                  directly.
                </p>
              </motion.div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
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
