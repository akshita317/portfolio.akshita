import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedFeatureCardProps {
  className?: string;
  index: string;
  tag: string;
  title: React.ReactNode;
  imageSrc: string;
  color: "orange" | "purple" | "blue" | "teal";
}

const colorVariants: Record<string, React.CSSProperties> = {
  orange: {
    '--feature-color': 'hsl(25, 95%, 53%)',
    '--feature-color-light': 'hsl(38, 97%, 80%)',
    '--feature-color-dark': 'hsl(48, 100%, 96%)',
  } as React.CSSProperties,
  purple: {
    '--feature-color': 'hsl(262, 85%, 60%)',
    '--feature-color-light': 'hsl(261, 100%, 87%)',
    '--feature-color-dark': 'hsl(264, 100%, 98%)',
  } as React.CSSProperties,
  blue: {
    '--feature-color': 'hsl(211, 100%, 55%)',
    '--feature-color-light': 'hsl(210, 100%, 83%)',
    '--feature-color-dark': 'hsl(216, 100%, 98%)',
  } as React.CSSProperties,
  teal: {
    '--feature-color': 'hsl(168, 84%, 38%)',
    '--feature-color-light': 'hsl(166, 72%, 78%)',
    '--feature-color-dark': 'hsl(164, 86%, 96%)',
  } as React.CSSProperties,
};

const AnimatedFeatureCard = React.forwardRef<HTMLDivElement, AnimatedFeatureCardProps>(
  ({ className, index, tag, title, imageSrc, color }, ref) => {
    return (
      <motion.div
        ref={ref}
        style={colorVariants[color]}
        className={cn(
          "relative flex h-[360px] w-full flex-col justify-end overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm",
          className
        )}
        whileHover="hover"
        initial="initial"
        variants={{
          initial: { y: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
          hover: { y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at 50% 25%, var(--feature-color-light) 0%, transparent 65%)`,
            opacity: 0.6,
          }}
        />

        {/* Index */}
        <div className="absolute top-5 left-5 font-mono text-sm font-bold text-gray-400">
          {index}
        </div>

        {/* Tech Icon */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center"
          variants={{
            initial: { scale: 1, y: 0 },
            hover: { scale: 1.25, y: -16 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <img
            src={imageSrc}
            alt={tag}
            className="w-24 h-24 object-contain drop-shadow-md"
          />
        </motion.div>

        {/* Content Card */}
        <div className="relative z-20 rounded-xl border border-gray-100 bg-white/85 p-4 backdrop-blur-sm">
          <span
            className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wide"
            style={{
              backgroundColor: 'var(--feature-color-dark)',
              color: 'var(--feature-color)',
            }}
          >
            {tag}
          </span>
          <p className="text-sm font-medium text-gray-800 leading-relaxed">{title}</p>
        </div>
      </motion.div>
    );
  }
);
AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };
