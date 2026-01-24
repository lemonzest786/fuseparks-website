import { motion } from "framer-motion";
import { Container } from "@/components";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does Fuseparks offer?",
      answer:
        "We offer a comprehensive range of creative services including brand identity design, web development, digital marketing, UI/UX design, and content creation. Our team specializes in crafting cohesive brand experiences that drive results.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A brand identity project typically takes 4-6 weeks, while a full website development can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your design process?",
      answer:
        "Our process includes: 1) Discovery & Research - understanding your brand and goals, 2) Strategy & Planning - defining the creative direction, 3) Design & Development - bringing concepts to life, 4) Review & Refinement - incorporating feedback, and 5) Launch & Support - ensuring smooth delivery.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes! All our plans include revision rounds. The Starter plan includes 2 rounds, Professional includes 4 rounds, and Enterprise includes unlimited revisions. We want to ensure you're completely satisfied with the final result.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Absolutely! You can upgrade your plan at any time during the project. We'll adjust the scope and pricing accordingly, and any payments you've already made will be credited toward the upgraded plan.",
    },
    {
      question: "What happens after the project is completed?",
      answer:
        "After project completion, you'll receive all final files, assets, and documentation. Depending on your plan, you'll also have ongoing support ranging from 3 to 12 months. We're always here to help with updates, questions, or future projects.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! We work with clients worldwide. Our team is experienced in remote collaboration using tools like Zoom, Slack, and project management platforms. Time zone differences are never an issue - we'll find a schedule that works for everyone.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and PayPal. Projects are typically split into milestones: 50% upfront to begin work, 25% at mid-point review, and 25% upon final delivery. Custom payment plans are available for Enterprise clients.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-32 bg-white">
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
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Everything you need to know about working with Fuseparks
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-brand/50 transition-colors duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-brand text-gray-900 rounded-lg font-semibold hover:bg-brand/90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
