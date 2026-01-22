import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export const GradientText = ({
  children,
  className,
  animate = true,
}: GradientTextProps) => {
  const Component = animate ? motion.span : "span";

  return (
    <Component
      {...(animate && {
        initial: { backgroundPosition: "0% 50%" },
        animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
        transition: { duration: 5, repeat: Infinity, ease: "linear" },
      })}
      className={cn(
        "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent bg-[length:200%_auto]",
        className
      )}
    >
      {children}
    </Component>
  );
};

