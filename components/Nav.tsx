"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e1c" : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-medium"
          style={{ color: "#c8b97a", letterSpacing: "0.05em" }}
        >
          amogh.
        </a>
        <div className="flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs transition-colors duration-200"
              style={{
                color: "#6b6960",
                letterSpacing: "0.1em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e8e6e0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6960")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
