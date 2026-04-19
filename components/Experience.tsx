const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Coditas",
    period: "Jan 2026 — Present",
    points: [
      "Developed and maintained RESTful backend services using FastAPI supporting scalable user, authentication, and business workflows.",
      "Implemented JWT-based authentication and role-based access control for Admin and user-level operations.",
      "Designed relational database schemas using SQLAlchemy with version-controlled migrations via Alembic.",
      "Built modular backend architecture with routers, services, and repository layers. Optimized database queries and endpoint performance.",
    ],
    stack: ["FastAPI", "SQLAlchemy", "Alembic", "JWT", "PostgreSQL"],
  },
  {
    role: "Associate Software Engineer (AI Internship)",
    company: "Thynk Technology India",
    period: "Oct 2025 — Jan 2026",
    points: [
      "Developed and deployed scalable web modules to improve platform stability and performance.",
      "Contributed to the design and maintenance of a RAG pipeline for context generation in ThynkLearn.",
      "Assisted in training and fine-tuning models for ThynkChat, including tokenization and vector creation.",
    ],
    stack: ["Python", "RAG", "NLP", "Vector DBs"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6" style={{ borderTop: "1px solid #1e1e1c" }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Experience</p>

        <div className="flex flex-col gap-16">
          {experiences.map((exp, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
              <div>
                <p
                  className="text-xs mb-1"
                  style={{ color: "#6b6960", letterSpacing: "0.06em" }}
                >
                  {exp.period}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#c8b97a", letterSpacing: "0.06em" }}
                >
                  {exp.company}
                </p>
              </div>
              <div>
                <h3
                  className="mb-5 font-medium"
                  style={{ color: "#e8e6e0", fontSize: "0.95rem" }}
                >
                  {exp.role}
                </h3>
                <ul className="flex flex-col gap-3 mb-6">
                  {exp.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex gap-3"
                      style={{ color: "#6b6960", fontSize: "0.8rem", lineHeight: 1.7 }}
                    >
                      <span style={{ color: "#c8b97a", flexShrink: 0 }}>—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1"
                      style={{
                        background: "#111110",
                        border: "1px solid #1e1e1c",
                        color: "#9e9b94",
                        fontSize: "0.68rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
