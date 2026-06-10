"use client";
const projects = [
  {
    name: "Assetra",
    tagline: "Enterprise Asset Management System",
    description: "Assetra is a scalable backend-driven asset management platform designed to streamline organizational asset tracking, allocation, lifecycle management, and access control through a structured and maintainable system architecture.",
    points: [
    "Role-Based Asset Management Enables controlled access and secure operations across multiple user roles and departments",
    "Scalable Backend Architecture Built using modular FastAPI architecture with clean separation of routes, services, schemas, and database layers",
    "Efficient Asset Lifecycle Tracking Supports asset allocation, monitoring, maintenance workflows, and audit-ready operations",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Pydantic", "JWT Authentication", "REST API"],
    github: "https://github.com/AmoghShukla/Assetra.git"
  },
  {
    name: "Certivax",
    tagline: "Certification & Examination Management Platform",
    description: "Certivax is a backend-focused certification and examination management platform designed to handle candidate registration, exam workflows, certification tracking, and secure result management through a scalable API-driven architecture.",
    points: [
    "Centralized Certification Workflow Manages candidate onboarding, examinations, certification issuance, and result tracking",
    "Secure Authentication & Access Control Implements structured authentication and authorization mechanisms for protected operations",
    "Production-Ready API Architecture Built with scalable backend practices including modular routing, schema validation, and database migrations",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Pydantic", "JWT Authentication", "REST API"],
    github: "https://github.com/AmoghShukla/Certivax-certification-platform.git"
  },
  {
    name: "SevaSetu",
    tagline: "Public Grivience Management System",
    description: "SevaSetu is a centralized, system-driven platform designed to streamline the lifecycle of public grievance handling from complaint registration to resolution tracking. It replaces manual, inefficient workflows with a structured, scalable, and transparent digital system.",
    points: [
      "Centralized Complaint Management Unified platform for registering and managing grievances across multiple departments",
      "Structured Resolution Workflow Ensures complaints follow a defined lifecycle with clear status tracking and accountability",
      "Category-Based Complaint Handling Organizes grievances efficiently for better routing and resolution",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic", "Alembic", "REST API"],
    github: "https://github.com/AmoghShukla/SevaSetu-Public-Grivience-Management-System.git"
  },
  {
    name: "SmartSpace",
    tagline: "Resource Booking and Management System",
    description: "A WeWork-style resource booking and workspace management platform designed to streamline shared workspace operations. Features conflict-free booking logic, role-based access control, and scalable backend architecture for managing resources, schedules, and user operations.",
    points: [
      "JWT-based authentication and authorization system with secure user access management",
      "Modular layered architecture with clean separation across models, services, repositories, schemas, and routers",
      "SQLAlchemy ORM with Alembic migrations for managing Users, Workspaces, Resources, and Bookings",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic", "Alembic", "REST API"],
    github: "https://github.com/AmoghShukla/SmartSpace.git"
  },
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
    "tagline": "Advanced Task Management System",
    "description": "A production-ready task management backend built with FastAPI and PostgreSQL, supporting authentication, task operations, and clean modular architecture.",
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
    name: "Simple Chatbot API",
    tagline: "AI-Powered Conversational Backend API",
    description: "Simple Chatbot API is a lightweight conversational AI backend built using FastAPI and Gemini API integration, designed to process user prompts and generate intelligent responses through a clean and extensible REST architecture.",
    points: [
    "AI-Powered Response Generation Integrates Gemini API for handling dynamic conversational interactions",
    "FastAPI-Based REST Architecture Provides lightweight, high-performance API endpoints for chatbot communication",
    "Structured Request Validation Uses Pydantic schemas for clean input validation and response management",
    ],
    stack: ["Python", "FastAPI", "Gemini API", "Pydantic", "REST API", "AI Integration"],
    github: "https://github.com/AmoghShukla/Simple-Chatbot-API.git"
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
