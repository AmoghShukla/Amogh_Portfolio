"use client";
import { useEffect, useState } from "react";

const roles = [
  "software engineer",
  "backend developer",
  "api builder",
  "python developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      className="min-h-screen flex items-center px-6"
      style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 40%, #111208 0%, #0a0a0a 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto w-full pt-24 pb-20">
        {/* decorative line */}
        <div className="flex items-center gap-4 mb-10" style={{ opacity: 0.3 }}>
          <div style={{ width: 32, height: 1, background: "#c8b97a" }} />
          <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "#c8b97a" }}>
            PORTFOLIO
          </span>
        </div>

        <h1
          className="font-medium mb-4"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            lineHeight: 1.1,
            color: "#e8e6e0",
            letterSpacing: "-0.02em",
          }}
        >
          Amogh Shukla
        </h1>

        <div
          className="mb-8"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            color: "#6b6960",
            letterSpacing: "0.02em",
            minHeight: "2.2rem",
          }}
        >
          <span style={{ color: "#c8b97a" }}>&gt;</span>{" "}
          <span>{displayed}</span>
          <span className="cursor" />
        </div>

        <p
          className="mb-12 max-w-xl"
          style={{
            color: "#6b6960",
            fontSize: "0.9rem",
            lineHeight: 1.8,
            letterSpacing: "0.02em",
          }}
        >
          Building scalable backend systems, clean APIs, and maintainable code.
          Currently interning at Coditas — working with FastAPI, PostgreSQL, and
          clean architecture.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="px-6 py-3 text-xs transition-all duration-200"
            style={{
              border: "1px solid #c8b97a",
              color: "#c8b97a",
              letterSpacing: "0.1em",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#c8b97a";
              e.currentTarget.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#c8b97a";
            }}
          >
            VIEW WORK
          </a>
          <a
            href="#contact"
            className="text-xs transition-colors duration-200"
            style={{ color: "#6b6960", letterSpacing: "0.1em", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e8e6e0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6960")}
          >
            GET IN TOUCH →
          </a>
        </div>

        {/* social links */}
        <div className="flex gap-6 mt-16">
          {[
            { label: "GitHub", href: "https://github.com/AmoghShukla" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/amogh-shukla-57b1a7247/" },
            {
              label: "Email",
              href: "mailto:amoghshukla1616@gmail.com",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-xs transition-colors duration-200"
              style={{
                color: "#3a3a38",
                letterSpacing: "0.08em",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b97a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3a3a38")}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
