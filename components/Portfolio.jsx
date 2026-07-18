"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ArrowUpRight, Mail, Linkedin, Instagram, MessageCircle, X, Send, Menu } from "lucide-react";

// ---------- Data ----------


const CHAT_KB = [

{
k:["who are you","about you","who is dayyian","introduce yourself","tell me about yourself"],
a:`I'm Dayyian Sajid, an 18-year-old marketing and AI enthusiast based in Islamabad, Pakistan. I'm currently an A-Level student while building real-world experience in marketing, AI, content creation and product development. My goal is to become someone who combines strong marketing instincts with practical AI knowledge to build impactful products and businesses.`
},

{
k:["age","old","birthday","how old are you"],
a:`I'm 18 years old.`
},

{
k:["where are you","location","based","city","country","pakistan"],
a:`I'm based in Islamabad, Pakistan. I'm open to both remote and on-site opportunities depending on the role.`
},

{
k:["education","study","school","college","university","a level","a-level","student"],
a:`I'm currently completing my A Levels while simultaneously gaining professional experience through internships. My subjects include Mathematics, Physics and Computer Science, and I believe practical experience outside the classroom is just as important as academic learning.`
},

{
k:["career","experience","work","job","internship","intern","professional"],
a:`I've worked across multiple industries including AI, marketing, automotive media and business operations.

• AI Intern — Maanz AI
• Marketing Intern — EDSPACE
• Marketing & Distribution Intern — Ghazi Gas
• Social Media Manager — Capital Cars International

Each role taught me something different and helped shape my career direction.`
},

{
k:["maanz","maanz ai","ai intern","generative ai"],
a:`At Maanz AI I work as an AI Intern focusing on Generative AI, Prompt Engineering, AI Agents, workflow automation and LLM applications. This role is helping me transition from pure marketing into AI while keeping both skill sets connected.`
},

{
k:["edspace","study abroad","sports fest"],
a:`At EDSPACE I work as a Marketing Intern. My responsibilities include creating short-form content, scholarship campaigns, event marketing, copywriting and promoting study-abroad opportunities. One of my projects involved marketing EDSPACE's Sports Fest through engaging social media campaigns.`
},

{
k:["capital cars","capital cars international","luxury cars","cars"],
a:`At Capital Cars International I managed the company's social media presence. I filmed, edited and published luxury automotive content which generated more than 500,000 cumulative views. This role significantly improved my storytelling, editing and branding skills.`
},

{
k:["ghazi gas","distribution","logistics"],
a:`My internship at Ghazi Gas focused on marketing and distribution. I learned how products move through supply chains, how sales operations work and how marketing supports business growth behind the scenes.`
},

{
k:["skills","strength","strengths","good at","expertise"],
a:`My strongest skills include:

• Marketing Strategy
• Content Strategy
• Branding
• Social Media Marketing
• Copywriting
• Event Marketing
• Prompt Engineering
• AI Agents
• Generative AI
• Workflow Automation
• Next.js
• React
• TypeScript
• Git
• Video Editing
• Photography
• Videography`
},

{
k:["marketing","content","branding","social media"],
a:`Marketing is my strongest area. I enjoy understanding audiences, creating content people actually engage with, writing compelling copy and building brands that stand out. My experience spans luxury automotive marketing, education marketing and event promotion.`
},

{
k:["ai","artificial intelligence","llm","agent","prompt"],
a:`I'm actively building my AI expertise through Maanz AI. My interests include Prompt Engineering, AI Agents, LLM Applications, workflow automation and using AI to improve marketing and business processes.`
},

{
k:["development","programming","coding","next","react","typescript"],
a:`Although marketing is my primary background, I'm also developing technical skills in Next.js, React, JavaScript, TypeScript and Git. Building this portfolio is part of that learning journey.`
},

{
k:["project","projects","portfolio","built"],
a:`Some of my notable work includes:

• This premium portfolio website.
• An integrated AI assistant.
• Marketing campaigns for EDSPACE.
• Scholarship promotion campaigns.
• Sports Fest promotion.
• Luxury automotive content creation.
• AI workflow experiments.`
},

{
k:["portfolio","website"],
a:`This portfolio was built using Next.js with a modern black and gold design. It showcases my experience, skills, projects and includes an AI assistant that answers questions about me.`
},

{
k:["views","viral","instagram","reach"],
a:`My automotive content generated over 500,000 cumulative views across Instagram through engaging short-form videos and consistent content strategy.`
},

{
k:["goal","future","dream","vision","ambition"],
a:`Long term I want to build products and startups that combine AI with marketing. Rather than choosing between creativity and technology, I want to become someone who understands both deeply enough to create meaningful solutions.`
},

{
k:["why hire","hire","recruit","employee"],
a:`I bring a combination that's becoming increasingly valuable: marketing experience, AI knowledge, technical curiosity and a willingness to learn quickly. I'm comfortable working creatively while also understanding emerging technologies.`
},

{
k:["contact","email","reach","linkedin","instagram"],
a:`You can contact me through the Contact section of this portfolio or connect with me on LinkedIn and Instagram. I'm always open to interesting conversations, collaborations and opportunities.`
},

{
k:["hobby","hobbies","interest","interests"],
a:`Outside of work I enjoy cars, AI, technology, photography, videography, fitness and exploring new ideas around startups and product building.`
},

{
k:["strength","best quality","personality"],
a:`One of my biggest strengths is adaptability. I've moved from automotive marketing into AI while continuing to improve my technical skills. I enjoy learning quickly and taking on challenges outside my comfort zone.`
},

{
k:["weakness","improve","learning"],
a:`I'm still early in my AI and software development journey, but I actively learn by building real projects instead of only studying theory. Every internship has helped me expand both my technical and professional skills.`
},

{
k:["leadership","team","teamwork"],
a:`I've worked with teams across multiple organizations, contributed to marketing campaigns, collaborated on creative projects and learned how communication and teamwork directly impact successful execution.`
},

{
k:["creative","editing","video","photography"],
a:`Creative work has always been a major part of my journey. I enjoy filming, editing videos, photography, storytelling and producing content that captures attention while communicating a clear message.`
},

{
k:["startup","business","entrepreneur"],
a:`I'm fascinated by startups because they combine creativity, execution and problem-solving. My long-term ambition is to build AI-powered products that solve real problems while using strong marketing to reach the right audience.`
},

{
k:["available","freelance","remote","collaboration"],
a:`Yes. I'm open to internships, freelance projects, collaborations and full-time opportunities that align with marketing, AI, product development or content creation.`
},

{
k:["favorite","why ai","why marketing"],
a:`Marketing taught me how people think. AI showed me how technology can amplify those ideas. Combining both fields allows me to create solutions that are not only technically useful but also genuinely valuable to users.`
},

{
k:["resume","cv"],
a:`My experience spans AI, marketing, content creation and business operations. I've worked as an AI Intern at Maanz AI, Marketing Intern at EDSPACE, Marketing & Distribution Intern at Ghazi Gas and Social Media Manager at Capital Cars International. Alongside internships, I continuously build projects in AI and web development.`
},

{
k:["achievement","achievements","accomplishments"],
a:`Some highlights include generating over 500,000 views through content, working across four companies before turning 19, building this portfolio from scratch and actively learning AI through practical projects instead of only theory.`
},

{
k:["communication","communicate"],
a:`Communication is one of my strongest skills. Marketing taught me how to simplify complex ideas and explain them in a way that's engaging and easy to understand.`
},

{
k:["leadership","leader"],
a:`I've led creative initiatives, managed social media accounts, coordinated campaigns and collaborated with teams on marketing and AI-related projects.`
},

{
k:["problem solving","solve problems"],
a:`I enjoy solving problems by experimenting, learning quickly and iterating until I find the best solution. Whether it's a marketing campaign or an AI workflow, I prefer building rather than overthinking.`
},

{
k:["software","tools"],
a:`Some tools I regularly use include ChatGPT, Claude, Gemini, Canva, CapCut, Adobe Creative Cloud, Git, VS Code, React and Next.js.`
},

{
k:["coding","developer","programmer"],
a:`I'm currently expanding my development skills through React, Next.js and AI applications. While marketing is my strongest background today, my goal is to become someone who can both build products and market them effectively.`
},

{
k:["website","portfolio"],
a:`This portfolio is built using Next.js with React. It features animations, a premium UI, responsive design and an integrated assistant designed to answer questions about my background and experience.`
},

{
k:["open source","github"],
a:`I use GitHub to manage projects and continuously improve my development workflow while learning modern web technologies.`
},

{
k:["react"],
a:`React is my primary frontend framework. I'm using it together with Next.js to build modern and interactive web applications like this portfolio.`
},

{
k:["next.js","nextjs"],
a:`This website is built with Next.js because it provides excellent performance, routing, server-side rendering and deployment support through Vercel.`
},

{
k:["javascript","js"],
a:`JavaScript is the main language I use when building websites. I'm also learning TypeScript to write more maintainable and scalable applications.`
},

{
k:["typescript","ts"],
a:`I'm actively learning TypeScript alongside React and Next.js because it helps catch bugs early and improves code quality.`
},

{
k:["ai agents","agent"],
a:`AI agents are one of the areas I'm most interested in. I enjoy learning how they can automate workflows, connect tools together and improve productivity.`
},

{
k:["prompt engineering","prompt"],
a:`Prompt engineering is an important part of my AI journey. I enjoy designing prompts that produce reliable, structured and useful outputs from language models.`
},

{
k:["workflow automation","automation"],
a:`Workflow automation combines AI with repetitive tasks. I'm learning how to automate business processes using AI agents and modern development tools.`
},

{
k:["content creation","creator"],
a:`Content creation has been a major part of my career. I enjoy filming, editing, writing captions and producing content that captures attention while delivering value.`
},

{
k:["editing","video editing"],
a:`Video editing is one of my strongest creative skills. I've created automotive, educational and promotional content designed for high engagement on social media.`
},

{
k:["photography"],
a:`Photography and videography have helped me develop an eye for storytelling, composition and branding that carries over into my marketing work.`
},

{
k:["branding"],
a:`Good branding creates trust and consistency. I enjoy designing campaigns and content that feel premium while remaining authentic.`
},

{
k:["copywriting"],
a:`Copywriting is one of my favorite marketing skills because the right words can completely change how people respond to a product or idea.`
},

{
k:["social media"],
a:`I've managed social media professionally, creating strategies, filming content, writing captions and analyzing engagement to continuously improve performance.`
},

{
k:["event marketing"],
a:`I've worked on event marketing campaigns including EDSPACE's Sports Fest, helping build awareness through creative content and promotion.`
},

{
k:["luxury","luxury cars"],
a:`Working with luxury cars taught me the importance of presentation, storytelling and premium branding. Every detail contributes to the overall perception of a brand.`
},

{
k:["cars"],
a:`Cars have always been one of my interests, which made my work at Capital Cars International especially enjoyable.`
},

{
k:["fitness","gym"],
a:`I enjoy staying active and believe discipline developed through fitness translates well into work and learning.`
},

{
k:["favorite project"],
a:`This portfolio is my favorite project because it combines marketing, design, AI and software development into a single experience that represents who I am today.`
},

{
k:["five years","5 years"],
a:`In five years I hope to be building AI-powered products, leading marketing strategy and continuing to grow as both a technical builder and business-minded creator.`
},

{
k:["ten years","10 years"],
a:`Long term I want to build my own AI-focused technology company that combines strong engineering with exceptional marketing.`
},

{
k:["fun fact"],
a:`A fun fact about me is that I intentionally started gaining real work experience before university because I believe practical experience is one of the fastest ways to learn.`
},

{
k:["hello","hi","hey"],
a:`Hi! I'm Dayyian's portfolio assistant. Feel free to ask me about his experience, projects, skills, career goals or anything related to his professional journey.`
},

{
k:["thanks","thank you"],
a:`You're welcome! Thanks for taking the time to explore Dayyian's portfolio.`
},

{
k:["bye","goodbye","see you"],
a:`Thanks for visiting! I hope you learned a little more about Dayyian. Feel free to reach out through the contact section if you'd like to connect.`
}
];

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




function chatReply(input) {
  const q = input.toLowerCase().trim();

  let bestMatch = null;
  let bestScore = 0;

  for (const entry of CHAT_KB) {
    let score = 0;

    for (const keyword of entry.k) {
      const k = keyword.toLowerCase();

      if (q === k) score += 10;
      else if (q.includes(k)) score += 5;
      else {
        const words = k.split(" ");
        for (const word of words) {
          if (word.length > 2 && q.includes(word)) {
            score++;
          }
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch) return bestMatch.a;

  return `That's a great question.

I'm still a simple portfolio assistant rather than a full AI model, so I might not know the answer yet.

Try asking about:
• My experience
• My internships
• Maanz AI
• EDSPACE
• Skills
• Projects
• Marketing
• AI
• Future goals
• Contact information`;
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
              Driven by marketing. Powered by <span className="gold-text">AI</span> .
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p style={{ fontSize: "18px", color: "#9A988F", maxWidth: "560px", marginTop: "28px", lineHeight: 1.6 }}>
              Most people choose between marketing and technology. I'm building expertise in both. That's where I believe the biggest opportunities will be created.
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
            Marketing taught me how to capture attention. AI is teaching me how to create value.{" "}
            <span className="gold-text">I'm building at the intersection of both—where the next generation of products will be created.</span>
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ fontSize: "16px", lineHeight: 1.7, maxWidth: "680px", color: "#9A988F" }}>
            I operate at the intersection of AI, technology, and marketing — building the skills needed for the next generation of digital businesses. Currently exploring Generative AI, LLM applications, and autonomous AI agents at Maanz AI, while bringing a marketing-first mindset shaped through real-world projects, content, and brand growth. I’m not interested in simply following trends. I’m focused on understanding the technology behind them, using it to create smarter systems, solve real problems, and eventually build something of my own.

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
