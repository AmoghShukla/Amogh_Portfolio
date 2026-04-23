export default function About() {
  const skills = [
    { cat: "Languages", items: ["Python", "C++", "SQL"] },
    { cat: "Backend", items: ["FastAPI", "SQLAlchemy", "Alembic", "JWT", "REST APIs"] },
    { cat: "Databases", items: ["PostgreSQL", "MySQL"] },
    { cat: "Tools", items: ["Git", "GDB", "Postman", "VS Debugger"] },
    { cat: "Concepts", items: ["DSA", "OOP", "OS", "DBMS", "RAG Pipelines"] },
  ];

  return (
    <section id="about" className="py-32 px-6" style={{ borderTop: "1px solid #1e1e1c" }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">About</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p
              className="mb-5 leading-relaxed"
              style={{ color: "#9e9b94", fontSize: "0.875rem", lineHeight: 1.9 }}
            >
              I&apos;m a final-year B.Tech student in AI and Data Science at Ajeenkya D Y Patil
              University, Pune — with a GPA of 8.66. I specialize in building backend
              systems that are clean, maintainable, and performant.
            </p>
            <p
              style={{ color: "#9e9b94", fontSize: "0.875rem", lineHeight: 1.9 }}
            >
              Outside of professional work, I&apos;ve done research on UPI adoption, recession
              impacts on financial markets, international tourism trends, and graph
              algorithm applications in urban planning.
            </p>
          </div>

          <div>
            <p
              className="mb-6 text-xs"
              style={{ color: "#6b6960", letterSpacing: "0.08em" }}
            >
              SKILLS & TECHNOLOGIES
            </p>
            <div className="flex flex-col gap-4">
              {skills.map((s) => (
                <div key={s.cat} className="flex gap-4">
                  <span
                    className="text-xs shrink-0 w-24"
                    style={{ color: "#c8b97a", fontSize: "0.7rem", paddingTop: "2px" }}
                  >
                    {s.cat}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1"
                        style={{
                          background: "#111110",
                          border: "1px solid #1e1e1c",
                          color: "#9e9b94",
                          fontSize: "0.7rem",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
