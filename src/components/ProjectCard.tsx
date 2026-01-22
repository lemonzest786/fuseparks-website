import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  image?: string;
  className?: string;
  delay?: number;
}

export const ProjectCard = ({
  title,
  category,
  image,
  className,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 aspect-[4/3] cursor-pointer",
        className,
      )}
    >
      {/* Image placeholder with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-110 transition-transform duration-500">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-xs sm:text-sm text-white/80 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {category}
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};
