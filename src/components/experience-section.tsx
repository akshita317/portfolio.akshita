import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    type: "work",
    tag: "CURRENT",
    role: "Junior Platform & Automation Engineer",
    company: "Alchemy Advertising Pvt. Ltd.",
    location: "Bengaluru, India",
    period: "Jan 2026 – Present",
    bullets: [
      "Developing Python microservices for workflow orchestration, data processing and monitoring automation",
      "Designing and optimizing BigQuery SQL pipelines — query tuning, scheduling and automated reporting",
      "Building anomaly-detection and ML-assisted automation to surface campaign issues early",
      "Implementing structured logging and metrics in cloud environments for tracing and performance monitoring",
    ],
    tech: ["Python", "BigQuery", "ML/AI", "Docker", "CI/CD", "Cloud", "SQL"],
    color: "#f97316",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    type: "work",
    tag: "2025",
    role: "Software Engineer (ERP & AI Focus)",
    company: "EQIQAI",
    location: "Remote",
    period: "Jun 2025 – Nov 2025",
    bullets: [
      "Built and maintained backend microservices for ERP workflows using Python/Node.js with PostgreSQL",
      "Developed responsive React-based frontends for AI-driven applications integrated with backend APIs",
      "Containerized services using Docker and implemented end-to-end CI/CD via GitHub Actions",
      "Performed production debugging in Linux and conducted testing using Android Studio and Postman",
    ],
    tech: ["Python", "Node.js", "React", "PostgreSQL", "Docker", "GitHub Actions", "Postman"],
    color: "#8b5cf6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    type: "work",
    tag: "2024",
    role: "Web Developer Intern",
    company: "Dream Filler Software Solution Pvt Ltd",
    location: "Madhya Pradesh, India",
    period: "May 2024 – Jul 2024",
    bullets: [
      "Implemented RESTful backend services including authentication/authorization and business logic",
      "Designed and maintained relational database schemas with attention to normalization and indexing",
      "Worked in Agile sprints with Git version control, collaborating via code reviews",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "Git", "Agile"],
    color: "#3b82f6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    type: "work",
    tag: "2023",
    role: "Java Full Stack Developer Intern",
    company: "iamneo (Formerly Examly)",
    location: "Vellore, India",
    period: "Aug 2023 – Dec 2023",
    bullets: [
      "Completed a comprehensive Java full stack internship covering Spring Boot and REST APIs",
      "Built full stack features end-to-end: backend services, database interactions and responsive UI",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "SQL", "HTML/CSS"],
    color: "#f97316",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    type: "education",
    tag: "EDUCATION",
    role: "B.Tech in Computer Science",
    company: "Vellore Institute of Technology",
    location: "Vellore, India",
    period: "Aug 2021 – Sep 2025",
    bullets: [
      "CGPA 8.59 · Top Coder at VIT Vellore 2025 Batch",
      "3rd place in CodeRunSeek competition among 250+ participants",
      "25% academic fee waiver for excellence; Meritorious rank in VITEEE",
      "Core member: Mozilla Firefox Club, Iothinc Club & Pixelate",
    ],
    tech: ["Data Structures", "Algorithms", "OS", "DBMS", "Computer Networks", "Distributed Systems"],
    color: "#ea580c",
    icon: "/vit.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.07 },
  }),
};

export default function ExperienceSection() {
  const isMobile = useIsMobile()
  const dot = isMobile ? 40 : 58
  const icon = isMobile ? 22 : 32
  const itemGap = isMobile ? '0.75rem' : '1.75rem'
  const cardPad = isMobile ? '1rem' : '1.75rem'
  const lineLeft = isMobile ? 17 : 28

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: isMobile ? "3rem 1rem 2.5rem" : "5rem 2rem 4rem" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <p style={{
          fontFamily: "var(--font-code)",
          color: "#ea580c",
          fontSize: "0.85rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}>
          {"< Experience />"}
        </p>
        <h2 style={{
          fontFamily: "var(--font-code)",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700,
          color: "#111",
        }}>
          Professional journey in{" "}
          <span style={{ color: "#ea580c" }}>software development</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>

        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: lineLeft,
          top: 0,
          bottom: 0,
          width: 2,
          background: "linear-gradient(to bottom, #f97316, rgba(249,115,22,0.1))",
          borderRadius: 2,
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              style={{ display: "flex", gap: itemGap, alignItems: "flex-start" }}
            >
              {/* Timeline dot + icon */}
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", width: dot }}>
                <div style={{
                  width: dot,
                  height: dot,
                  borderRadius: "50%",
                  background: "#fff",
                  border: `2px solid ${exp.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 0 4px ${exp.color}22`,
                  zIndex: 1,
                  flexShrink: 0,
                }}>
                  <img
                    src={exp.icon}
                    alt={exp.company}
                    style={{ width: icon, height: icon, objectFit: "contain" }}
                  />
                </div>
              </div>

              {/* Card */}
              <div style={{
                flex: 1,
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "1.25rem",
                padding: cardPad,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px ${exp.color}20`
                  ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)"
                  ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
                }}
              >
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <div>
                    <span style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: exp.color,
                      background: `${exp.color}14`,
                      border: `1px solid ${exp.color}30`,
                      borderRadius: "9999px",
                      padding: "0.2rem 0.65rem",
                      fontFamily: "var(--font-code)",
                      marginBottom: "0.5rem",
                      display: "inline-block",
                    }}>
                      {exp.tag}
                    </span>
                    <h3 style={{
                      color: "#111",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      margin: "0.4rem 0 0.2rem",
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: "#555", fontSize: "0.88rem", fontWeight: 500 }}>
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span style={{
                    fontSize: "0.78rem",
                    color: "#888",
                    fontFamily: "var(--font-code)",
                    whiteSpace: "nowrap",
                    paddingTop: "0.25rem",
                  }}>
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0.75rem 0 1rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {exp.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                      <span style={{ color: exp.color, fontSize: "0.6rem", marginTop: "0.38rem", flexShrink: 0 }}>▶</span>
                      <span style={{ color: "#444", fontSize: "0.85rem", lineHeight: 1.6 }}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {exp.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-code)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "9999px",
                      background: `${exp.color}10`,
                      border: `1px solid ${exp.color}28`,
                      color: exp.color,
                      fontWeight: 600,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
          marginTop: "3.5rem",
        }}
      >
        {[
          { value: "1+", label: "Year of Experience" },
          { value: "4", label: "Companies" },
          { value: "4", label: "Internships" },
          { value: "8.59", label: "CGPA at VIT" },
        ].map(({ value, label }) => (
          <div key={label} style={{
            textAlign: "center",
            padding: "1.25rem 1rem",
            background: "rgba(249,115,22,0.06)",
            border: "1px solid rgba(249,115,22,0.2)",
            borderRadius: "0.875rem",
          }}>
            <div style={{
              fontFamily: "var(--font-code)",
              fontSize: "2rem",
              fontWeight: 800,
              color: "#f97316",
              lineHeight: 1,
              marginBottom: "0.35rem",
            }}>
              {value}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#666", fontWeight: 500 }}>{label}</div>
          </div>
        ))}
      </motion.div>

    </div>
  );
}
