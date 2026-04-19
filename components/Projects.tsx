"use client";
const projects = [
  {
    name: "LeagueForge",
    tagline: "Tournament Management System",
    description:
      "A rule-driven league tournament platform simulating real-world operations. Features a constraint-based double round-robin fixture generator enforcing team rest gaps, venue availability, and conflict-free scheduling.",
    points: [
      "Dynamic standings engine that auto-updates rankings based on match outcomes",
      "Layered architecture with clean separation across models, services, repos, schemas, and routers",
      "SQLAlchemy ORM with Alembic migrations for Team, Match, Venue, and League entities",
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "Alembic", "REST API"],
    github: "https://github.com/AmoghShukla/LeagueForge-Tournament-Management-System.git",
  },
  {
    name: "SERVORA",
    tagline: "Restaurant Order Management API",
    description:
      "A scalable backend system for restaurant order management enabling efficient handling of users, restaurants, menus, and orders with full role-based access control.",
    points: [
      "Role-based authentication for Admin, Restaurant Owner, and Customer workflows",
      "JWT-secured endpoints with structured request validation via Pydantic",
      "Modular architecture built for scalability and long-term maintainability",
    ],
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT", "REST API"],
    github: "https://github.com/AmoghShukla/SERVORA_restaurent-order-management-api.git",
  },
  {
    "name": "Task Manager API",
    "tagline": "Scalable Task Management Backend",
    "description": "A production-ready task management backend built with FastAPI and PostgreSQL, supporting authentication, task operations, and clean modular architecture.",
    "points": [
      "JWT-based authentication with secure user login and registration",
      "CRUD operations for task management with relational mapping",
      "Layered architecture using routers, services, repositories, and schemas"
    ],
    "stack": ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic", "Alembic"],
    "github": "https://github.com/AmoghShukla/Task_Manager_API-With-Postgres-Database.git"
  },
  {
    "name": "Task Manager API (Extended)",
    "tagline": "Advanced Task Management System",
    "description": "An extended implementation of a task management system focusing on database design, scalability, and backend best practices using PostgreSQL.",
    "points": [
      "Optimized database schema design for users, tasks, and relationships",
      "Integration with PostgreSQL for persistent and scalable storage",
      "RESTful API design with proper validation and error handling"
    ],
    "stack": ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic", "REST API"],
    "github": "https://github.com/AmoghShukla/Task_Manager_API-With-Postgres-Database.git"
  },
  {
    "name": "InstaNews",
    "tagline": "Console-Based News Application",
    "description": "A lightweight console-based news application that fetches and displays real-time news articles, focusing on API integration and clean CLI design.",
    "points": [
      "Integration with external news APIs for real-time data fetching",
      "CLI-based user interaction for category-wise news browsing",
      "Modular structure with separation of API handling and UI logic"
    ],
    "stack": ["Python", "REST API", "CLI", "JSON"],
    "github": "https://github.com/AmoghShukla/InstaNews-Console-Based-News-Application-System.git"
  },
  {
    "name": "VisionID",
    "tagline": "AI-Based Identity Recognition System",
    "description": "A computer vision-based identity recognition system leveraging machine learning techniques to detect and identify individuals from visual input.",
    "points": [
      "Face detection and recognition using computer vision models",
      "Real-time processing of image/video input for identity matching",
      "Integration of ML models with application-level logic"
    ],
    "stack": ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    "github": "https://github.com/AmoghShukla/VisionID.git"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6" style={{ borderTop: "1px solid #1e1e1c" }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="p-8 flex flex-col"
              style={{
                background: "#0e0e0c",
                border: "1px solid #1e1e1c",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#2e2e2a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1e1e1c";
              }}
            >
              <div className="flex items-start justify-between mb-1">
                <h3
                  className="font-medium"
                  style={{ color: "#e8e6e0", fontSize: "1rem" }}
                >
                  {proj.name}
                </h3>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs transition-colors duration-200"
                  style={{
                    color: "#3a3a38",
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b97a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3a3a38")}
                >
                  GitHub ↗
                </a>
              </div>

              <p
                className="mb-4 text-xs"
                style={{ color: "#c8b97a", letterSpacing: "0.06em" }}
              >
                {proj.tagline}
              </p>

              <p
                className="mb-5 text-xs leading-relaxed"
                style={{ color: "#6b6960", lineHeight: 1.8 }}
              >
                {proj.description}
              </p>

              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {proj.points.map((pt, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-xs"
                    style={{ color: "#6b6960", lineHeight: 1.7 }}
                  >
                    <span style={{ color: "#c8b97a", flexShrink: 0 }}>·</span>
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      background: "#111110",
                      border: "1px solid #1e1e1c",
                      color: "#9e9b94",
                      fontSize: "0.65rem",
                      letterSpacing: "0.05em",
                      padding: "3px 8px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
