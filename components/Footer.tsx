"use client";
export default function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: "1px solid #1e1e1c" }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span style={{ color: "#3a3a38", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
          AMOGH SHUKLA
        </span>
        <div className="flex gap-6">
          {[
            { label: "GH", href: "https://github.com/AmoghShukla16" },
            { label: "LI", href: "https://linkedin.com/in/amoghshukla16" },
            { label: "ME", href: "mailto:amoghshukla1616@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.label !== "ME" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "#3a3a38", fontSize: "0.7rem", textDecoration: "none", letterSpacing: "0.08em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b97a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3a3a38")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
