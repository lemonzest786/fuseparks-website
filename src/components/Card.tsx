import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { isValidElement } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  delay?: number;
}

export const Card = ({
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
}: CardProps) => {
  // Check if Icon is a valid Lucide icon component
  const isLucideIcon = Icon && typeof Icon === "object" && "render" in Icon;
  const isFunction = Icon && typeof Icon === "function";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl hover:border-brand/50 transition-all duration-300 hover:shadow-xl",
        className,
      )}
    >
      {Icon && (
        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand/10 group-hover:bg-brand/20 transition-colors duration-300">
          <div className="text-gray-900 group-hover:scale-110 transition-transform duration-300">
            {isLucideIcon || isFunction ? (
              <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
            ) : isValidElement(Icon) ? (
              Icon
            ) : null}
          </div>
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:to-brand/10 rounded-2xl transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};
