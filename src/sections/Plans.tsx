import { motion } from "framer-motion";
import { Container } from "@/components";
import { Check } from "lucide-react";

export const Plans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$800",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "1 Design Request at a Time",
        "Unlimited Revisions",
        "2-3 Day Turnaround",
        "Brand Identity Design",
        "Social Media Graphics",
        "Marketing Materials",
        "Email Support",
        "Pause or Cancel Anytime",
      ],
      popular: false,
      planId: "starter",
    },
    {
      name: "Professional",
      price: "$1,500",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "2 Design Requests at a Time",
        "Unlimited Revisions",
        "1-2 Day Turnaround",
        "Everything in Starter",
        "Web Design & Development",
        "Custom Illustrations",
        "Priority Support",
        "Pause or Cancel Anytime",
      ],
      popular: true,
      planId: "professional",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "For established brands and agencies",
      features: [
        "Unlimited Design Requests",
        "Unlimited Revisions",
        "Same Day Turnaround",
        "Everything in Professional",
        "Dedicated Design Team",
        "Brand Strategy & Consulting",
        "24/7 Priority Support",
        "Custom Workflow Integration",
      ],
      popular: false,
      planId: "enterprise",
    },
  ];

  return (
    <section
      id="plans"
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
          className="max-w-3xl mb-12 sm:mb-16 mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Monthly Design Plans
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Unlimited design requests with flexible monthly subscriptions. Pause
            or cancel anytime.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 sm:p-8 bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-brand shadow-lg scale-105"
                  : "border-gray-200 hover:border-brand/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-brand mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 px-6 rounded-lg text-center font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? "bg-brand text-gray-900 hover:bg-brand/90"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
