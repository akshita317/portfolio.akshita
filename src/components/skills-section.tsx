import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExpandableSkillTags } from "@/components/ui/expandable-skill-tags";
import { useIsMobile } from "@/hooks/use-mobile";

interface Skill {
  name: string;
  level?: number;
  label?: string;
  desc: string;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Programming Languages",
    color: "#f97316",
    skills: [
      { name: "Python",     level: 90, desc: "Backend development, data processing, automation scripts" },
      { name: "Java",       level: 85, desc: "Enterprise applications, Spring Boot, microservices" },
      { name: "JavaScript", level: 80, desc: "Node.js backend development, API integration" },
      { name: "Bash",       level: 75, desc: "Shell scripting, automation, system administration" },
      { name: "Golang",     label: "Learning", desc: "Actively upskilling — systems programming, concurrency" },
    ],
  },
  {
    title: "Backend Technologies",
    color: "#8b5cf6",
    skills: [
      { name: "Node.js",       level: 88, desc: "RESTful APIs, Express.js, middleware development" },
      { name: "Spring Boot",   level: 82, desc: "Java enterprise applications, dependency injection" },
      { name: "REST APIs",     level: 85, desc: "API design, authentication, documentation" },
      { name: "Authentication",level: 78, desc: "JWT, OAuth, session management, security" },
      { name: "React",         level: 80, desc: "Responsive frontend for AI-driven applications" },
      { name: "Apache Kafka",  level: 72, desc: "Event-driven architecture, message streaming, async workflows" },
    ],
  },
  {
    title: "Databases",
    color: "#3b82f6",
    skills: [
      { name: "PostgreSQL", level: 90, desc: "Advanced queries, optimization, stored procedures" },
      { name: "MongoDB",    level: 85, desc: "Document modeling, aggregation pipelines" },
      { name: "MySQL",      level: 80, desc: "Relational design, performance tuning" },
      { name: "Redis",      level: 70, desc: "Caching strategies, session storage" },
      { name: "BigQuery",   level: 85, desc: "SQL pipeline optimization, scheduling, analytics automation" },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "#10b981",
    skills: [
      { name: "Docker",         level: 88, desc: "Containerization, multi-stage builds, orchestration" },
      { name: "Linux",          level: 85, desc: "System administration, command line, debugging" },
      { name: "Git",            level: 80, desc: "Version control, branching strategies, collaboration" },
      { name: "GitHub Actions", level: 75, desc: "CI/CD pipelines, automated testing, deployments" },
    ],
  },
  {
    title: "Gen AI & Cloud",
    color: "#f59e0b",
    skills: [
      { name: "LLMs & Gen AI",      level: 80, desc: "LLM integration, RAG pipelines, automation agents — patent holder" },
      { name: "ML / Fraud Detection",level: 75, desc: "Shipped fraud detection ML at 85%+ accuracy; anomaly detection" },
      { name: "AWS",                  level: 80, desc: "SQS, SNS, DynamoDB, S3, EventBridge — cloud infra and serverless workflows" },
      { name: "GCP",                  level: 80, desc: "BigQuery, Cloud Functions, Pub/Sub — data pipelines and cloud automation" },
      { name: "Observability",        level: 82, desc: "Structured logging, metrics, alerting, on-call triage" },
    ],
  },
  {
    title: "Core Computer Science",
    color: "#ec4899",
    skills: [
      { name: "Data Structures & Algorithms", level: 92, desc: "Algorithm optimization, complexity analysis" },
      { name: "Operating Systems",            level: 85, desc: "Process management, memory allocation, concurrency" },
      { name: "Computer Networks",            level: 88, desc: "TCP/IP, HTTP protocols, network architecture" },
      { name: "Database Management",          level: 90, desc: "Normalization, indexing, query optimization" },
    ],
  },
];

const overviewTags = {
  "Languages":      ["Python", "Java", "JavaScript", "SQL", "Bash", "Golang (learning)"],
  "Full-Stack":     ["React", "Node.js", "Spring Boot", "REST APIs", "Kafka"],
  "Data & Cloud":   ["PostgreSQL", "BigQuery", "MongoDB", "MySQL", "AWS", "GCP"],
  "AI & Automation":["LLMs", "RAG", "ML Pipelines", "Anomaly Detection", "Patent Holder"],
};

function SkillBar({ skill, color }: { skill: Skill; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{ marginBottom: '1.1rem' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111' }}>{skill.name}</span>
        {skill.label ? (
          <span style={{
            fontSize: '0.68rem', fontFamily: 'var(--font-code)', fontWeight: 700,
            color: '#f97316', background: 'rgba(249,115,22,0.1)',
            border: '1px solid rgba(249,115,22,0.3)', borderRadius: '9999px',
            padding: '0.15rem 0.55rem',
          }}>
            {skill.label}
          </span>
        ) : (
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color, fontFamily: 'var(--font-code)' }}>
            {skill.level}%
          </span>
        )}
      </div>
      {/* Bar track */}
      <div style={{ height: 6, background: '#f0f0f0', borderRadius: 9999, overflow: 'hidden', marginBottom: '0.3rem' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: skill.level ? `${skill.level}%` : '15%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          style={{
            height: '100%',
            borderRadius: 9999,
            background: skill.label
              ? `repeating-linear-gradient(90deg, ${color}55 0px, ${color}55 8px, transparent 8px, transparent 14px)`
              : `linear-gradient(90deg, ${color}cc, ${color})`,
          }}
        />
      </div>
      <p style={{ fontSize: '0.75rem', color: '#888', lineHeight: 1.5 }}>{skill.desc}</p>
    </motion.div>
  );
}

export default function SkillsSection() {
  const isMobile = useIsMobile()
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return categories;
    const q = query.toLowerCase();
    return categories
      .map(cat => ({
        ...cat,
        skills: cat.skills.filter(s => s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)),
      }))
      .filter(cat => cat.skills.length > 0 || cat.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "3rem 1rem 2.5rem" : "5rem 2rem 4rem" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        <p style={{ fontFamily: "var(--font-code)", color: "#ea580c", fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          {"< Skills />"}
        </p>
        <h2 style={{ fontFamily: "var(--font-code)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>
          Technical expertise &{" "}
          <span style={{ color: "#ea580c" }}>proficiencies</span>
        </h2>
      </motion.div>

      {/* Search */}
      <div style={{ maxWidth: 480, margin: "0 auto 3rem", position: "relative" }}>
        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#aaa", fontSize: "1rem" }}>🔍</span>
        <input
          type="text"
          placeholder="Search skills..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem 1rem 0.75rem 2.5rem",
            borderRadius: "9999px",
            border: "1.5px solid rgba(249,115,22,0.3)",
            background: "#fff",
            fontSize: "0.9rem",
            color: "#111",
            outline: "none",
            boxShadow: "0 2px 8px rgba(249,115,22,0.08)",
            fontFamily: "var(--font-body)",
          }}
          onFocus={e => { e.currentTarget.style.borderColor = "#f97316"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.12)"; }}
          onBlur={e => { e.currentTarget.style.borderColor = "rgba(249,115,22,0.3)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(249,115,22,0.08)"; }}
        />
      </div>

      {/* Skill Categories Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "2rem", marginBottom: "3.5rem" }}>
        {filtered.map(cat => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "1.25rem",
              padding: "1.75rem",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: cat.color, flexShrink: 0, display: "inline-block" }} />
              <h3 style={{ fontFamily: "var(--font-code)", fontWeight: 700, fontSize: "0.95rem", color: "#111" }}>{cat.title}</h3>
            </div>
            {cat.skills.map(skill => (
              <SkillBar key={skill.name} skill={skill} color={cat.color} />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Technical Proficiency Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          background: "#fff",
          border: "1px solid rgba(249,115,22,0.2)",
          borderRadius: "1.25rem",
          padding: "2rem 2.5rem",
        }}
      >
        <p style={{ fontFamily: "var(--font-code)", color: "#ea580c", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          // Technical Proficiency Overview
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "1.75rem" }}>
          {Object.entries(overviewTags).map(([label, tags]) => (
            <ExpandableSkillTags key={label} title={label} skills={tags} initialCount={6} />
          ))}
        </div>
      </motion.div>

    </div>
  );
}
