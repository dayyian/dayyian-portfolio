"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ArrowUpRight, Mail, Linkedin, Instagram, MessageCircle, X, Send, Menu } from "lucide-react";

// ---------- Data ----------

const EXPERIENCE = [
  {
    id: "01",
    company: "Maanz AI",
    role: "AI Intern",
    period: "Current",
    blurb:
      "Working across generative AI, LLM applications, and agent-based workflow automation — the pivot point from marketing into AI.",
    tags: ["Prompt Engineering", "AI Agents", "LLM Applications"],
  },
  {
    id: "02",
    company: "EDSPACE",
    role: "Marketing Intern",
    period: "Current",
    blurb:
      "Leading content for a study-abroad consultancy — scholarship campaigns, Sports Fest marketing, and short-form video built around retention and hooks.",
    tags: ["Copywriting", "Creative Direction", "Event Marketing"],
  },
  {
    id: "03",
    company: "Ghazi Gas",
    role: "Marketing & Distribution Intern",
    period: "2023",
    blurb:
      "Learned the operational side of the business — distribution logistics, sales workflows, and how marketing connects to the supply chain.",
    tags: ["Business Operations", "Distribution", "Teamwork"],
  },
  {
    id: "04",
    company: "Capital Cars International",
    role: "Social Media Manager",
    period: "2022",
    blurb:
      "Ran Instagram for a luxury dealership — filming, editing, and captioning content that generated hundreds of thousands of views.",
    tags: ["Content Strategy", "Videography", "Branding"],
  },
];

const SKILLS = [
  { label: "Marketing", items: ["Social Media Marketing", "Content Strategy", "Branding", "Copywriting", "Event Marketing"] },
  { label: "AI", items: ["Prompt Engineering", "AI Agents", "Generative AI", "Workflow Automation", "LLM Applications"] },
  { label: "Development", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"] },
  { label: "Creative", items: ["Video Editing", "Photography", "Videography", "Adobe Creative Suite"] },
];

const PROJECTS = [
  { title: "Personal Portfolio + AI Assistant", desc: "This site — a premium personal brand with an embedded AI assistant that answers questions as if it were me.", tag: "Product" },
  { title: "EDSPACE Campaigns", desc: "Scholarship and study-abroad campaigns, plus Sports Fest promotion, across short-form video.", tag: "Marketing" },
  { title: "Luxury Automotive Content", desc: "Social campaigns for Capital Cars International — 500,000+ cumulative views on short-form video.", tag: "Content" },
];

const STATS = [
  { value: 500000, suffix: "+", label: "Views generated" },
  { value: 4, suffix: "", label: "Companies worked with" },
  { value: 3, suffix: "", label: "Industries touched" },
  { value: 1, suffix: "", label: "AI assistant, built into this site" },
];

const MARQUEE_WORDS = [
  "Content Strategy", "Branding", "Copywriting", "Social Media Marketing", "Event Marketing",
  "Creative Direction", "Video Editing", "Prompt Engineering", "AI Agents", "Workflow Automation",
];

const CHAT_KB = [
  { k: ["who are you", "about you", "who is dayyian"], a: "I'm Dayyian Sajid — an 18-year-old marketer based in Islamabad, currently an A-Level student. Marketing is my core craft; I'm now building AI fluency on top of it." },
  { k: ["experience", "work", "job", "career"], a: "I've worked as a Social Media Manager at Capital Cars International, a Marketing Intern at Ghazi Gas and EDSPACE, and I'm currently an AI Intern at Maanz AI — deliberately building the technical side alongside my marketing background." },
  { k: ["skill", "good at", "expertise"], a: "Marketing is where I'm strongest — content strategy, branding, copywriting, social growth. I'm actively building AI skills (prompt engineering, agents, LLM applications) and some development (Next.js, React, TypeScript) alongside it." },
  { k: ["goal", "future", "plan", "vision"], a: "Long-term, I want to combine marketing instincts with real AI fluency to build products and startups — not choosing between the two, but making them work together." },
  { k: ["contact", "reach", "email", "hire"], a: "Best way to reach me is via the contact section below, or email directly — I'll drop the link in when you scroll down." },
  { k: ["project"], a: "A few things I've built: this portfolio + AI assistant, EDSPACE's scholarship and Sports Fest campaigns, and social content for Capital Cars International that crossed 500,000+ views." },
];

function chatReply(input) {
  const q = input.toLowerCase();
  for (const entry of CHAT_KB) {
    if (entry.k.some((kw) => q.includes(kw))) return entry.a;
  }
  return "Good question — I'd rather answer that myself. Reach out through the contact section and I'll get back to you directly.";
}

// ---------- Hooks ----------

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function StatCounter({ stat }) {
  const [ref, visible] = useReveal();
  const val = useCountUp(stat.value, visible);
  return (
    <div ref={ref}>
      <div style={{ fontSize: "clamp(32px,4.2vw,52px)", fontWeight: 700, letterSpacing: "-0.02em" }} className="gold-text">
        {val.toLocaleString()}
        {stat.suffix}
      </div>
      <div style={{ fontSize: "13px", color: "#8C8A82", marginTop: "8px" }}>{stat.label}</div>
    </div>
  );
}

// Tilt wrapper — subtle 3D tilt following cursor position within the element
function TiltCard({ children, style = {}, className = "" }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 10;
    const rotateX = (0.5 - py) * 10;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`);
    setGlow({ x: px * 100, y: py * 100 });
  };
  const onLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        transform,
        transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
        transformStyle: "preserve-3d",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(212,175,55,0.10) 0%, transparent 55%)`,
          pointerEvents: "none",
          transition: "background 0.1s linear",
        }}
      />
      {children}
    </div>
  );
}

// ---------- Cursor-reactive spotlight grid background ----------

function SpotlightGrid() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: `radial-gradient(circle 320px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 320px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: `radial-gradient(circle 160px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 160px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    let ringX = 0, ringY = 0, targetX = 0, targetY = 0;
    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`;
      }
    };
    let raf;
    const animate = () => {
      ringX += (targetX - ringX) * 0.15;
      ringY += (targetY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed", top: 0, left: 0, width: 6, height: 6, borderRadius: "50%",
          background: "#D4AF37", zIndex: 100, pointerEvents: "none", marginLeft: -3, marginTop: -3,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", top: 0, left: 0, width: 32, height: 32, borderRadius: "50%",
          border: "1px solid rgba(212,175,55,0.4)", zIndex: 100, pointerEvents: "none", marginLeft: -16, marginTop: -16,
        }}
      />
    </>
  );
}

// ---------- Main ----------

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hey — I'm an AI trained on Dayyian's experience. Ask me anything about his work, skills, or goals." },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  const send = useCallback(() => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input.trim() };
    const reply = { role: "bot", text: chatReply(input.trim()) };
    setMessages((m) => [...m, userMsg, reply]);
    setInput("");
  }, [input]);

  const navLinks = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        background: "#0A0A0A",
        color: "#F5F3EE",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflowX: "hidden",
        cursor: "none",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        ::selection { background: #D4AF37; color: #0A0A0A; }
        .gold-text {
          background: linear-gradient(120deg, #D4AF37 0%, #F4E4A1 45%, #D4AF37 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 6s linear infinite;
        }
        @keyframes shimmer { to { background-position: 200% center; } }
        .nav-link { position: relative; }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0; bottom: -4px;
          width: 0%; height: 1px;
          background: #D4AF37;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .cta-btn { position: relative; overflow: hidden; }
        .cta-btn:hover { background: #F4E4A1 !important; transform: translateY(-2px); box-shadow: 0 12px 28px rgba(212,175,55,0.28); }
        .ghost-btn:hover { border-color: #D4AF37 !important; color: #D4AF37 !important; transform: translateY(-2px); }
        .chat-fab:hover { transform: scale(1.08); }
        .marquee-track { display: flex; width: max-content; animation: marquee 26s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes floatSlow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @keyframes pulseDot { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes drift1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(60px,-40px) scale(1.15); } }
        @keyframes drift2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-50px,50px) scale(1.1); } }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hero-title { font-size: 44px !important; }
          .section-pad { padding-left: 24px !important; padding-right: 24px !important; }
          body, .no-cursor-mobile { cursor: auto !important; }
        }
        @media (hover: none) {
          .cursor-el { display: none !important; }
        }
      `}</style>

      {/* Grain texture */}
      <svg style={{ position: "fixed", inset: 0, width: 0, height: 0 }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        style={{
          position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none",
          opacity: 0.035, filter: "url(#grain)", mixBlendMode: "overlay",
        }}
      />

      {/* Drifting aurora */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "5%", right: "5%", width: "560px", height: "560px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)", filter: "blur(40px)", animation: "drift1 18s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "0%", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle, rgba(244,228,161,0.07) 0%, transparent 70%)", filter: "blur(50px)", animation: "drift2 22s ease-in-out infinite" }} />
      </div>

      <div className="cursor-el">
        <CustomCursor />
      </div>
      <SpotlightGrid />

      {/* Nav */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: scrolled ? "16px 48px" : "26px 48px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled ? "rgba(10,10,10,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
        className="section-pad"
      >
        <div style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.02em", cursor: "pointer" }} onClick={() => scrollTo("hero")}>
          Dayyian <span className="gold-text">Sajid</span>
        </div>
        <div className="desktop-nav" style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {navLinks.map(([label, id]) => (
            <span key={id} className="nav-link" onClick={() => scrollTo(id)} style={{ fontSize: "13px", letterSpacing: "0.04em", color: "#B5B3AC", cursor: "pointer" }}>
              {label}
            </span>
          ))}
          <button onClick={() => scrollTo("contact")} className="cta-btn" style={{ background: "#D4AF37", color: "#0A0A0A", border: "none", padding: "10px 20px", borderRadius: "999px", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.25s ease" }}>
            Let's Talk
          </button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", color: "#F5F3EE" }} className="mobile-only">
          <Menu size={22} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "#0A0A0A", zIndex: 49, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "28px" }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 26, right: 26, background: "none", border: "none", color: "#F5F3EE" }}>
            <X size={24} />
          </button>
          {navLinks.map(([label, id]) => (
            <span key={id} onClick={() => scrollTo(id)} style={{ fontSize: "24px", cursor: "pointer" }}>{label}</span>
          ))}
        </div>
      )}

      {/* Hero */}
      <section id="hero" className="section-pad" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 48px", position: "relative", zIndex: 1 }}>
        <div style={{ transform: `translateY(${scrollY * 0.15}px)`, opacity: Math.max(1 - scrollY / 500, 0) }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "28px", border: "1px solid rgba(212,175,55,0.3)", padding: "7px 14px", borderRadius: "999px", width: "fit-content" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37", animation: "pulseDot 2s infinite" }} />
              Marketing Strategist · Building AI Fluency
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="hero-title" style={{ fontSize: "clamp(48px, 8vw, 92px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0, maxWidth: "980px" }}>
              Marketing is the craft. <span className="gold-text">AI</span> is the edge I'm building.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p style={{ fontSize: "18px", color: "#9A988F", maxWidth: "560px", marginTop: "28px", lineHeight: 1.6 }}>
              I'm Dayyian Sajid — an 18-year-old marketer based in Islamabad with 500,000+
              views generated across brand and campaign work. Now going deep on AI to build
              the next stage of my career.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div style={{ display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("experience")} className="cta-btn" style={{ background: "#D4AF37", color: "#0A0A0A", border: "none", padding: "15px 28px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", transition: "all 0.25s ease" }}>
                View my work <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollTo("contact")} className="ghost-btn" style={{ background: "transparent", color: "#F5F3EE", border: "1px solid rgba(255,255,255,0.2)", padding: "15px 28px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "all 0.25s ease" }}>
                Get in touch
              </button>
            </div>
          </Reveal>
        </div>

        <div style={{ position: "absolute", bottom: "40px", left: "48px", fontSize: "11px", letterSpacing: "0.1em", color: "#5A5850", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(#5A5850, transparent)" }} />
          SCROLL
        </div>
      </section>

      {/* Marquee */}
      <div style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "22px 0", overflow: "hidden" }}>
        <div className="marquee-track">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", fontSize: "15px", color: "#7A7870", whiteSpace: "nowrap", padding: "0 28px" }}>
              {w} <span style={{ color: "#D4AF37", marginLeft: "28px" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="section-pad" style={{ padding: "140px 48px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "20px" }}>About</div>
        </Reveal>
        <Reveal delay={80}>
          <p style={{ fontSize: "clamp(24px, 3.4vw, 38px)", lineHeight: 1.4, maxWidth: "900px", fontWeight: 500, letterSpacing: "-0.01em", marginBottom: "28px" }}>
            Marketing has been my trade since I was sixteen — running a luxury dealership's
            Instagram, writing hooks that hold attention, and shaping how brands talk to
            people. That's where the results are:{" "}
            <span className="gold-text">500,000+ views, four companies, three industries.</span>
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ fontSize: "16px", lineHeight: 1.7, maxWidth: "680px", color: "#9A988F" }}>
            I'm an A-Level student in Islamabad studying Mathematics, Physics, and Computer
            Science, and right now I'm deliberately going deep on AI — prompt engineering,
            agents, and LLM applications — as an intern at Maanz AI. Not a pivot away from
            marketing, an upgrade to it: understanding how AI actually works so I can build
            with it, not just talk about it. Long-term, that combination is the whole plan —
            marketing instincts, technical fluency, and the ambition to build something of
            my own.
          </p>
        </Reveal>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px", marginTop: "80px" }}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <StatCounter stat={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-pad" style={{ padding: "60px 48px 140px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "12px" }}>Experience</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "56px" }}>Career timeline</h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 90}>
              <TiltCard style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px" }}>
                <div style={{ padding: "32px", display: "grid", gridTemplateColumns: "60px 1fr auto", gap: "24px", alignItems: "start" }}>
                  <div style={{ fontSize: "13px", color: "#D4AF37", fontWeight: 600, paddingTop: "4px" }}>{exp.id}</div>
                  <div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "baseline", flexWrap: "wrap", marginBottom: "8px" }}>
                      <h3 style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>{exp.role}</h3>
                      <span style={{ fontSize: "14px", color: "#8C8A82" }}>· {exp.company}</span>
                    </div>
                    <p style={{ margin: "0 0 16px", color: "#9A988F", fontSize: "15px", lineHeight: 1.6, maxWidth: "640px" }}>{exp.blurb}</p>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {exp.tags.map((t) => (
                        <span key={t} style={{ fontSize: "11px", padding: "5px 12px", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "999px", color: "#D4AF37" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ fontSize: "13px", color: "#5A5850", whiteSpace: "nowrap" }}>{exp.period}</div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-pad" style={{ padding: "60px 48px 140px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "12px" }}>Skills</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "56px" }}>What I bring to the table</h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden" }}>
          {SKILLS.map((group, i) => (
            <Reveal key={group.label} delay={i * 80}>
              <div style={{ background: "#0A0A0A", padding: "32px 28px", height: "100%" }}>
                <h4 style={{ fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "20px" }}>{group.label}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {group.items.map((s) => (
                    <li key={s} style={{ fontSize: "14.5px", color: "#D8D6CE" }}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-pad" style={{ padding: "60px 48px 140px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "12px" }}>Projects</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "56px" }}>Selected work</h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <TiltCard style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", height: "100%" }}>
                <div style={{ padding: "28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "18px" }}>
                    <span style={{ fontSize: "11px", padding: "5px 12px", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "999px", color: "#D4AF37" }}>{p.tag}</span>
                    <ArrowUpRight size={18} style={{ color: "#D4AF37" }} />
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 10px" }}>{p.title}</h3>
                  <p style={{ fontSize: "14px", color: "#9A988F", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-pad" style={{ padding: "100px 48px 140px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <TiltCard style={{ border: "1px solid rgba(212,175,55,0.25)", borderRadius: "24px" }}>
            <div style={{ padding: "clamp(40px, 6vw, 80px)", textAlign: "center", background: "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 60%)" }}>
              <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "20px" }}>Contact</div>
              <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 20px" }}>Let's build something.</h2>
              <p style={{ color: "#9A988F", fontSize: "16px", maxWidth: "480px", margin: "0 auto 36px" }}>
                Open to marketing, AI, and product collaborations. Based in Islamabad — happy to work remote.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="mailto:hello@dayyiansajid@gmail.com" className="cta-btn" style={{ background: "#D4AF37", color: "#0A0A0A", padding: "15px 28px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", transition: "all 0.25s ease" }}>
                  <Mail size={16} /> Email me
                </a>
                
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="section-pad" style={{ padding: "32px 48px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", position: "relative", zIndex: 1 }}>
        <span style={{ fontSize: "13px", color: "#5A5850" }}>© {new Date().getFullYear()} Dayyian Sajid</span>
        <span style={{ fontSize: "13px", color: "#5A5850" }}>Islamabad, Pakistan</span>
      </footer>

      {/* Chat FAB */}
      <button onClick={() => setChatOpen(!chatOpen)} className="chat-fab" style={{ position: "fixed", bottom: "28px", right: "28px", zIndex: 60, width: "56px", height: "56px", borderRadius: "50%", background: "#D4AF37", border: "none", color: "#0A0A0A", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 30px rgba(212,175,55,0.35)", transition: "transform 0.25s ease", animation: chatOpen ? "none" : "floatSlow 3.5s ease-in-out infinite" }}>
        {chatOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {chatOpen && (
        <div style={{ position: "fixed", bottom: "96px", right: "28px", zIndex: 60, width: "min(340px, calc(100vw - 48px))", height: "440px", background: "#121212", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "18px", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
          <div style={{ padding: "16px 18px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4AF37", animation: "pulseDot 2s infinite" }} />
            <div>
              <div style={{ fontSize: "13px", fontWeight: 600 }}>Ask Dayyian</div>
              <div style={{ fontSize: "11px", color: "#7A7870" }}>AI assistant · trained on his profile</div>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "85%", background: m.role === "user" ? "#D4AF37" : "rgba(255,255,255,0.06)", color: m.role === "user" ? "#0A0A0A" : "#E8E6DE", padding: "10px 14px", borderRadius: "14px", fontSize: "13.5px", lineHeight: 1.5 }}>
                {m.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div style={{ padding: "12px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", gap: "8px" }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Ask about my work..." style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "10px 12px", color: "#F5F3EE", fontSize: "13px", outline: "none" }} />
            <button onClick={send} style={{ background: "#D4AF37", border: "none", borderRadius: "10px", width: "38px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#0A0A0A" }}>
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
