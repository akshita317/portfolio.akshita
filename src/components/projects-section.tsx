import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";

const projects = [
  {
    title: "LLM Legal Document Simplification",
    badge: "Patent Filed",
    featured: false,
    description:
      "Designed and implemented a system for automated legal document simplification using Large Language Models. Patent filed for the novel approach to making complex legal language accessible to non-technical users using RAG pipelines and LLM-based summarization.",
    features: [
      "LLM-based Document Analysis",
      "RAG Pipeline Architecture",
      "Legal Text Simplification",
    ],
    tech: ["Python", "LLMs", "RAG", "NLP"],
    imgSrc:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
    link: "#",
    linkText: "View Patent",
  },
  {
    title: "Divyang — GenAI Hackathon",
    badge: "GenAI Hackathon",
    featured: false,
    description:
      "GenAI hackathon project — built backend APIs and dashboards for an accessibility-focused platform. Implemented CRUD workflows, data persistence with MongoDB, and contributed to feature planning and impact analysis for differently-abled users.",
    features: [
      "GenAI-Powered Features",
      "CRUD APIs & Data Persistence",
      "Impact & Analytics Dashboard",
    ],
    tech: ["Node.js", "REST APIs", "MongoDB", "Gen AI"],
    imgSrc:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop",
    link: "#",
    linkText: "View Project",
  },
  {
    title: "Cyber Secure Platform",
    badge: "Featured",
    featured: true,
    description:
      "A comprehensive cybersecurity platform with robust backend infrastructure. Features secure authentication, structured data pipelines, and real-time data processing with emphasis on reliability, access control, and backend data integrity.",
    features: [
      "Secure Authentication System",
      "Structured Data Pipelines",
      "Real-time Processing",
    ],
    tech: ["Python", "Node.js", "PostgreSQL", "MongoDB"],
    imgSrc:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
    link: "#",
    linkText: "View Project",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function ProjectsSection() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem 4rem" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: "3.5rem" }}
      >
        <p style={{
          fontFamily: "var(--font-code)",
          color: "#ea580c",
          fontSize: "0.85rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}>
          {"< Projects />"}
        </p>
        <h2 style={{
          fontFamily: "var(--font-code)",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700,
          color: "#111",
          marginBottom: "0.5rem",
        }}>
          Things I've{" "}
          <span style={{ color: "#ea580c" }}>built & shipped</span>
        </h2>
        <p style={{ color: "#555", fontSize: "0.95rem", maxWidth: 520, margin: "0 auto" }}>
          From patents to hackathons — real projects that solve real problems.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
      }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <ProjectCard
              title={project.title}
              badge={project.badge}
              featured={project.featured}
              description={project.description}
              features={project.features}
              tech={project.tech}
              imgSrc={project.imgSrc}
              link={project.link}
              linkText={project.linkText}
              style={{ height: "100%" }}
            />
          </motion.div>
        ))}
      </div>

    </div>
  );
}
