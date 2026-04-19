"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setErrorMsg("Network error — please try again.");
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0e0e0c",
    border: "1px solid #1e1e1c",
    color: "#e8e6e0",
    padding: "12px 14px",
    fontSize: "0.8rem",
    outline: "none",
    fontFamily: "var(--font-mono), monospace",
    letterSpacing: "0.02em",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-32 px-6" style={{ borderTop: "1px solid #1e1e1c" }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Contact</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2
              className="mb-4 font-medium"
              style={{ color: "#e8e6e0", fontSize: "1.6rem", letterSpacing: "-0.01em" }}
            >
              Let&apos;s talk.
            </h2>
            <p
              className="mb-8"
              style={{ color: "#6b6960", fontSize: "0.85rem", lineHeight: 1.8 }}
            >
              Whether it&apos;s a job opportunity, a collaboration, or just a technical
              chat — I&apos;m open to it.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { label: "Email", value: "amoghshukla1616@gmail.com", href: "mailto:amoghshukla1616@gmail.com" },
                { label: "GitHub", value: "github.com/AmoghShukla16", href: "https://github.com/AmoghShukla16" },
                { label: "LinkedIn", value: "linkedin.com/in/amoghshukla16", href: "https://linkedin.com/in/amoghshukla16" },
              ].map((link) => (
                <div key={link.label} className="flex gap-4 items-center">
                  <span
                    className="text-xs w-20 shrink-0"
                    style={{ color: "#c8b97a", fontSize: "0.7rem" }}
                  >
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-xs transition-colors duration-200"
                    style={{ color: "#6b6960", textDecoration: "none", fontSize: "0.75rem" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e8e6e0")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6960")}
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {status === "success" ? (
              <div
                className="p-8 text-center"
                style={{ border: "1px solid #1e1e1c", background: "#0e0e0c" }}
              >
                <p style={{ color: "#c8b97a", fontSize: "0.85rem", letterSpacing: "0.06em" }}>
                  MESSAGE SENT
                </p>
                <p
                  className="mt-2"
                  style={{ color: "#6b6960", fontSize: "0.75rem" }}
                >
                  I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#c8b97a")}
                  onBlur={(e) => (e.target.style.borderColor = "#1e1e1c")}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#c8b97a")}
                  onBlur={(e) => (e.target.style.borderColor = "#1e1e1c")}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "#c8b97a")}
                  onBlur={(e) => (e.target.style.borderColor = "#1e1e1c")}
                />

                {status === "error" && (
                  <p style={{ color: "#e24b4a", fontSize: "0.75rem" }}>{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="py-3 text-xs transition-all duration-200"
                  style={{
                    background: status === "sending" ? "#111110" : "#c8b97a",
                    color: status === "sending" ? "#6b6960" : "#0a0a0a",
                    border: "1px solid #c8b97a",
                    letterSpacing: "0.12em",
                    cursor: status === "sending" ? "wait" : "pointer",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.72rem",
                  }}
                >
                  {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
