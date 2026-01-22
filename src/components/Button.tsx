import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<
  HTMLMotionProps<"button">,
  "children" | "className"
> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg overflow-hidden";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-800 border border-black hover:border-gray-800",
    secondary:
      "bg-white text-black hover:bg-gray-50 border border-gray-200 hover:border-gray-300",
    outline:
      "bg-transparent text-black hover:bg-gray-50 border border-gray-300 hover:border-gray-400",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
