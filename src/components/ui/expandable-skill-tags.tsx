"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandableSkillTagsProps {
  title: string;
  skills: string[];
  initialCount?: number;
  className?: string;
}

export const ExpandableSkillTags = ({
  title,
  skills,
  initialCount = 10,
  className,
}: ExpandableSkillTagsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleSkills = React.useMemo(() => skills.slice(0, initialCount), [skills, initialCount]);
  const hiddenSkills = React.useMemo(() => skills.slice(initialCount), [skills, initialCount]);

  return (
    <section className={cn("w-full", className)}>
      <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem', fontWeight: 700, color: '#111', fontFamily: 'var(--font-code)' }}>
        {title}
      </h3>
      <motion.div
        className="flex flex-wrap gap-2"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
      >
        {visibleSkills.map((skill, i) => (
          <motion.span
            key={`v-${i}`}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-code)',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              background: 'rgba(249,115,22,0.09)',
              border: '1px solid rgba(249,115,22,0.3)',
              color: '#c2410c',
            }}
          >
            {skill}
          </motion.span>
        ))}
        <AnimatePresence>
          {isExpanded && hiddenSkills.map((skill, i) => (
            <motion.span
              key={`h-${i}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.18 }}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-code)',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                background: 'rgba(249,115,22,0.09)',
                border: '1px solid rgba(249,115,22,0.3)',
                color: '#c2410c',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
      {skills.length > initialCount && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            marginTop: '0.6rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#f97316',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'var(--font-code)',
          }}
        >
          {isExpanded ? '▲ View less' : `▼ View all ${skills.length} skills`}
        </button>
      )}
    </section>
  );
};
