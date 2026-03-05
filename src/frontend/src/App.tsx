import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  BarChart3,
  Camera,
  CheckCircle2,
  Compass,
  Heart,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  Quote,
  Search,
  Star,
  Target,
  TrendingUp,
  Twitter,
  X,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

// ─── Reveal Hook ─────────────────────────────────────────────────────────────
function useReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    const elements = document.querySelectorAll(".reveal");
    for (const el of elements) {
      observerRef.current?.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);
}

// ─── Navigation ──────────────────────────────────────────────────────────────
function Navigation({ onAuditClick }: { onAuditClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.08_0_0/0.95)] backdrop-blur-xl border-b border-[oklch(0.25_0_0)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
          data-ocid="nav.link"
        >
          <img
            src="/assets/generated/logo-mark-transparent.dim_120x120.png"
            alt="The Social Tailor"
            className="h-8 w-8 object-contain"
          />
          <span className="font-semibold text-base tracking-tight text-white hidden sm:block">
            The Social Tailor
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: "About", id: "about" },
            { label: "Services", id: "services" },
            { label: "Portfolio", id: "portfolio" },
            { label: "Testimonials", id: "testimonials" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              data-ocid="nav.link"
              className="text-sm text-[oklch(0.72_0_0)] hover:text-white transition-colors duration-200 tracking-wide"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button
            onClick={onAuditClick}
            data-ocid="nav.primary_button"
            className="hidden sm:inline-flex bg-[oklch(0.72_0.14_68)] hover:bg-[oklch(0.78_0.16_68)] text-[oklch(0.08_0_0)] font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-gold"
          >
            Get Free Audit
          </Button>
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.08_0_0/0.98)] backdrop-blur-xl border-b border-[oklch(0.25_0_0)] px-6 py-4 space-y-4">
          {[
            { label: "About", id: "about" },
            { label: "Services", id: "services" },
            { label: "Portfolio", id: "portfolio" },
            { label: "Testimonials", id: "testimonials" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="block w-full text-left text-[oklch(0.72_0_0)] hover:text-white py-2 text-sm"
            >
              {label}
            </button>
          ))}
          <Button
            onClick={() => {
              onAuditClick();
              setMobileOpen(false);
            }}
            className="w-full bg-[oklch(0.72_0.14_68)] text-[oklch(0.08_0_0)] font-semibold"
          >
            Get Free Audit
          </Button>
        </div>
      )}
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[oklch(0.06_0_0)]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0_0/0.85)] via-[oklch(0.06_0_0/0.78)] to-[oklch(0.06_0_0/0.95)]" />

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-[oklch(0.62_0.10_68/0.08)] blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-[oklch(0.55_0.08_68/0.06)] blur-3xl animate-float-delay" />
      <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-[oklch(0.50_0.06_68/0.05)] blur-2xl animate-float" />

      {/* Decorative thread lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          aria-hidden="true"
          className="absolute w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="30%"
            x2="100%"
            y2="70%"
            stroke="oklch(0.72 0.14 68)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="60%"
            x2="100%"
            y2="20%"
            stroke="oklch(0.72 0.14 68)"
            strokeWidth="1"
          />
          <line
            x1="20%"
            y1="0"
            x2="80%"
            y2="100%"
            stroke="oklch(0.72 0.14 68)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[oklch(0.62_0.10_68/0.4)] bg-[oklch(0.62_0.10_68/0.08)] mb-8 animate-fade-in">
          <span className="text-[oklch(0.82_0.16_68)] text-xs font-semibold tracking-widest uppercase">
            Social Media Agency
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6 animate-fade-up">
          Tailoring Social Media
          <br />
          <span className="text-gold-gradient">Success for Your Brand.</span>
        </h1>

        <p
          className="text-base sm:text-lg lg:text-xl text-[oklch(0.70_0_0)] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Helping businesses grow through strategic social media marketing,
          creative content, and performance-driven campaigns.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            onClick={() => scrollTo("audit")}
            data-ocid="hero.primary_button"
            className="bg-[oklch(0.72_0.14_68)] hover:bg-[oklch(0.78_0.16_68)] text-[oklch(0.08_0_0)] font-bold text-base px-8 py-3 rounded-full h-auto shadow-gold transition-all duration-200 hover:scale-105"
          >
            Get a Free Audit
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            onClick={() => scrollTo("contact")}
            data-ocid="hero.secondary_button"
            variant="outline"
            className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white/50 font-semibold text-base px-8 py-3 rounded-full h-auto backdrop-blur-sm transition-all duration-200"
          >
            Book a Consultation
          </Button>
        </div>

        {/* Stats strip */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            { value: "500+", label: "Brands Served" },
            { value: "3.2M+", label: "Reach Generated" },
            { value: "98%", label: "Client Retention" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-[oklch(0.82_0.16_68)]">
                {value}
              </div>
              <div className="text-xs text-[oklch(0.60_0_0)] tracking-wide mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-[oklch(0.72_0.14_68)] to-transparent mx-auto" />
      </div>
    </section>
  );
}

// ─── About Section ─────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[oklch(0.62_0.10_68)] border border-[oklch(0.62_0.10_68/0.3)] rounded-full mb-6 reveal">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.10_0_0)] leading-tight mb-6 reveal reveal-delay-1">
              We Tailor Every Strategy
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.12 68), oklch(0.50 0.09 55))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                to Your Brand
              </span>
            </h2>
            <p className="text-base lg:text-lg text-[oklch(0.40_0_0)] leading-relaxed mb-8 reveal reveal-delay-2">
              The Social Tailor helps brands grow online through data-driven
              social media strategies, creative content, and performance
              marketing. We don't believe in one-size-fits-all — every strategy
              is stitched to fit your unique goals.
            </p>
            <p className="text-base text-[oklch(0.40_0_0)] leading-relaxed reveal reveal-delay-3">
              From bootstrapped startups to established enterprises, we've
              helped hundreds of brands build meaningful audiences, drive real
              engagement, and convert followers into loyal customers.
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 gap-4 reveal reveal-delay-2">
            {[
              {
                value: "500+",
                label: "Brands Served",
                desc: "Across 12+ industries worldwide",
                icon: Target,
              },
              {
                value: "3.2M+",
                label: "Reach Generated",
                desc: "Monthly organic impressions delivered",
                icon: TrendingUp,
              },
              {
                value: "98%",
                label: "Client Retention",
                desc: "Because results speak louder than promises",
                icon: Star,
              },
            ].map(({ value, label, desc, icon: Icon }, i) => (
              <div
                key={label}
                className={`flex items-start gap-4 p-5 rounded-2xl border border-[oklch(0.90_0_0)] bg-[oklch(0.98_0_0)] hover:border-[oklch(0.62_0.10_68/0.4)] hover:shadow-gold-sm transition-all duration-300 reveal reveal-delay-${i + 2}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.97_0.02_68)] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[oklch(0.62_0.10_68)]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[oklch(0.10_0_0)]">
                    {value}
                  </div>
                  <div className="text-sm font-semibold text-[oklch(0.20_0_0)] mt-0.5">
                    {label}
                  </div>
                  <div className="text-xs text-[oklch(0.55_0_0)] mt-1">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
const services = [
  {
    icon: BarChart3,
    title: "Social Media Management",
    desc: "Full-service management of your social channels — strategy, scheduling, community engagement, and monthly reporting.",
    id: "services.item.1",
  },
  {
    icon: Camera,
    title: "Content Creation & Reels",
    desc: "Scroll-stopping content crafted for your brand. Short-form video, static posts, carousels, and story sequences.",
    id: "services.item.2",
  },
  {
    icon: TrendingUp,
    title: "Paid Ads (Meta & Instagram)",
    desc: "Data-backed paid campaigns that maximise ROAS. From audience targeting to creative optimisation and retargeting.",
    id: "services.item.3",
  },
  {
    icon: Search,
    title: "Social Media Audits",
    desc: "In-depth analysis of your existing profiles — content gaps, engagement benchmarks, and a clear growth roadmap.",
    id: "services.item.4",
  },
  {
    icon: Compass,
    title: "Brand Strategy",
    desc: "Clarify your voice, visual identity, and messaging. We build the brand foundation that makes every post count.",
    id: "services.item.5",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      data-ocid="services.section"
      className="py-24 lg:py-32 bg-[oklch(0.08_0_0)] relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.62_0.10_68/0.5)] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,oklch(0.62_0.08_68/0.04),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.14_68)] border border-[oklch(0.62_0.10_68/0.3)] rounded-full mb-6 reveal">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            Services Built for
            <span className="text-gold-gradient"> Social Growth</span>
          </h2>
          <p className="text-[oklch(0.58_0_0)] max-w-xl mx-auto text-base lg:text-lg reveal reveal-delay-2">
            Everything your brand needs to dominate social media — under one
            roof.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc, id }, i) => (
            <div
              key={id}
              data-ocid={id}
              className={`group relative p-6 rounded-2xl glass-card hover:bg-white/[0.07] border border-white/[0.06] hover:border-[oklch(0.62_0.10_68/0.3)] transition-all duration-300 cursor-default reveal reveal-delay-${Math.min(i + 1, 5)} ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[oklch(0.62_0.10_68/0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-11 h-11 rounded-xl bg-[oklch(0.62_0.10_68/0.12)] flex items-center justify-center mb-4 group-hover:bg-[oklch(0.62_0.10_68/0.20)] transition-colors duration-300">
                <Icon className="w-5 h-5 text-[oklch(0.72_0.14_68)]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[oklch(0.85_0_0)] transition-colors">
                {title}
              </h3>
              <p className="text-sm text-[oklch(0.52_0_0)] leading-relaxed group-hover:text-[oklch(0.58_0_0)] transition-colors">
                {desc}
              </p>

              <div className="mt-4 flex items-center gap-1 text-[oklch(0.62_0.10_68)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-semibold">Learn more</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
const whyUs = [
  {
    icon: Target,
    title: "Data-driven strategies",
    desc: "We let analytics lead every decision. No guesswork — just insights that translate to measurable growth.",
  },
  {
    icon: Zap,
    title: "Creative storytelling",
    desc: "Content that stops the scroll. We craft narratives that make people stop, engage, and share.",
  },
  {
    icon: TrendingUp,
    title: "Proven growth systems",
    desc: "Repeatable frameworks that scale. Our process is built on what consistently works across industries.",
  },
  {
    icon: MessageCircle,
    title: "Fast response & client support",
    desc: "Always here when you need us. Dedicated support, regular check-ins, and transparent communication.",
  },
];

function WhyUsSection() {
  return (
    <section
      id="why"
      data-ocid="why.section"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[oklch(0.62_0.10_68)] border border-[oklch(0.62_0.10_68/0.3)] rounded-full mb-6 reveal">
            Why Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.10_0_0)] mb-4 reveal reveal-delay-1">
            The Difference That
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.12 68), oklch(0.50 0.09 55))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              Drives Results
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyUs.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`p-7 rounded-2xl border border-[oklch(0.90_0_0)] hover:border-[oklch(0.62_0.10_68/0.4)] hover:shadow-gold-sm bg-[oklch(0.99_0_0)] transition-all duration-300 group reveal reveal-delay-${i + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[oklch(0.97_0.02_68)] flex items-center justify-center mb-5 group-hover:bg-[oklch(0.93_0.04_68)] transition-colors duration-300">
                <Icon className="w-6 h-6 text-[oklch(0.62_0.10_68)]" />
              </div>
              <h3 className="text-lg font-bold text-[oklch(0.10_0_0)] mb-2">
                {title}
              </h3>
              <p className="text-sm text-[oklch(0.42_0_0)] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio Section ────────────────────────────────────────────────────────
const caseStudies = [
  {
    id: "portfolio.item.1",
    industry: "Fashion Brand",
    tag: "Instagram Growth",
    metrics: [
      { label: "Followers", before: "2.1K", after: "18.4K", change: "+776%" },
      {
        label: "Engagement Rate",
        before: "1.2%",
        after: "6.8%",
        change: "+467%",
      },
    ],
    desc: "Transformed a boutique fashion label into a recognisable Instagram brand with viral reels and influencer partnerships.",
    color: "oklch(0.62 0.10 68)",
  },
  {
    id: "portfolio.item.2",
    industry: "Restaurant Chain",
    tag: "Paid Ads + Organic",
    metrics: [
      { label: "Monthly Reach", before: "4K", after: "89K", change: "+2,125%" },
      {
        label: "Social Leads",
        before: "Baseline",
        after: "+340%",
        change: "↑",
      },
    ],
    desc: "Combined paid Meta campaigns with organic content to flood a regional restaurant chain with foot-traffic and online orders.",
    color: "oklch(0.65 0.09 55)",
  },
  {
    id: "portfolio.item.3",
    industry: "Fitness Studio",
    tag: "Reels & Content",
    metrics: [
      {
        label: "Avg. Reel Views",
        before: "500",
        after: "42K",
        change: "+8,300%",
      },
      {
        label: "New Sign-ups from IG",
        before: "Baseline",
        after: "+210%",
        change: "↑",
      },
    ],
    desc: "A consistent short-form video strategy turned a local fitness studio into a city-wide go-to, with reels becoming their top lead source.",
    color: "oklch(0.58 0.08 45)",
  },
];

function PortfolioSection() {
  return (
    <section
      id="portfolio"
      data-ocid="portfolio.section"
      className="py-24 lg:py-32 bg-[oklch(0.09_0_0)] relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.62_0.10_68/0.5)] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.14_68)] border border-[oklch(0.62_0.10_68/0.3)] rounded-full mb-6 reveal">
            Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            Results That{" "}
            <span className="text-gold-gradient">Speak Volumes</span>
          </h2>
          <p className="text-[oklch(0.55_0_0)] max-w-xl mx-auto reveal reveal-delay-2">
            Real brands, real numbers. Here's what happens when strategy meets
            execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map(({ id, industry, tag, metrics, desc }, i) => (
            <div
              key={id}
              data-ocid={id}
              className={`group p-6 rounded-2xl glass-card hover:bg-white/[0.07] border border-white/[0.06] hover:border-[oklch(0.62_0.10_68/0.3)] transition-all duration-300 reveal reveal-delay-${i + 1}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="text-xs font-semibold text-[oklch(0.72_0.14_68)] tracking-widest uppercase mb-1">
                    {tag}
                  </div>
                  <h3 className="text-lg font-bold text-white">{industry}</h3>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[oklch(0.62_0.10_68/0.15)] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[oklch(0.72_0.14_68)]" />
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-3 mb-5">
                {metrics.map(({ label, before, after, change }) => (
                  <div key={label} className="rounded-xl bg-white/[0.04] p-3.5">
                    <div className="text-xs text-[oklch(0.50_0_0)] mb-2 font-medium">
                      {label}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[oklch(0.45_0_0)] line-through text-xs">
                          {before}
                        </span>
                        <ArrowRight className="w-3 h-3 text-[oklch(0.45_0_0)]" />
                        <span className="text-white font-bold">{after}</span>
                      </div>
                      <span className="text-xs font-bold text-[oklch(0.72_0.14_68)] bg-[oklch(0.62_0.10_68/0.12)] px-2 py-0.5 rounded-full">
                        {change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[oklch(0.50_0_0)] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    id: "testimonials.item.1",
    quote:
      "The Social Tailor transformed our Instagram completely. We went from 800 followers to 15K in 4 months — and our DMs are flooded with leads.",
    name: "Sarah M.",
    title: "Boutique Owner",
    initials: "SM",
  },
  {
    id: "testimonials.item.2",
    quote:
      "Their content strategy is next level. Our reels regularly hit 50K+ views and our sales have never been better.",
    name: "James T.",
    title: "Restaurant Owner",
    initials: "JT",
  },
  {
    id: "testimonials.item.3",
    quote:
      "Professional, fast, and results-driven. They understand our brand better than we do. Highly recommend.",
    name: "Priya K.",
    title: "Fitness Coach",
    initials: "PK",
  },
];

function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      data-ocid="testimonials.section"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[oklch(0.62_0.10_68)] border border-[oklch(0.62_0.10_68/0.3)] rounded-full mb-6 reveal">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.10_0_0)] mb-4 reveal reveal-delay-1">
            What Our Clients Say
          </h2>
          <p className="text-[oklch(0.45_0_0)] max-w-xl mx-auto reveal reveal-delay-2">
            Real feedback from brands that chose to grow with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ id, quote, name, title, initials }, i) => (
            <div
              key={id}
              data-ocid={id}
              className={`p-7 rounded-2xl border border-[oklch(0.90_0_0)] bg-[oklch(0.99_0_0)] hover:border-[oklch(0.62_0.10_68/0.4)] hover:shadow-gold-sm transition-all duration-300 flex flex-col reveal reveal-delay-${i + 1}`}
            >
              <Quote className="w-7 h-7 text-[oklch(0.72_0.14_68)] mb-4 opacity-60 flex-shrink-0" />
              <p className="text-sm text-[oklch(0.30_0_0)] leading-relaxed flex-1 mb-6">
                "{quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[oklch(0.72_0.14_68)] to-[oklch(0.55_0.10_55)] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[oklch(0.10_0_0)]">
                    {name}
                  </div>
                  <div className="text-xs text-[oklch(0.55_0_0)]">{title}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {["s1", "s2", "s3", "s4", "s5"].map((s) => (
                    <Star
                      key={s}
                      className="w-3 h-3 fill-[oklch(0.72_0.14_68)] text-[oklch(0.72_0.14_68)]"
                    />
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

// ─── Audit Section ────────────────────────────────────────────────────────────
function AuditSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      try {
        const subject = encodeURIComponent("Free Social Media Audit Request");
        const body = encodeURIComponent(
          `New Free Audit Request\n\nName: ${name}\nEmail: ${email}\nInstagram / Business URL: ${handle}`,
        );
        window.location.href = `mailto:thesocialtailor25@gmail.com?subject=${subject}&body=${body}`;
        setSuccess(true);
        setName("");
        setEmail("");
        setHandle("");
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [name, email, handle],
  );

  return (
    <section
      id="audit"
      data-ocid="audit.section"
      className="py-24 lg:py-32 bg-[oklch(0.08_0_0)] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.08_68/0.08),transparent_65%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.62_0.10_68/0.5)] to-transparent" />

      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.14_68)] border border-[oklch(0.62_0.10_68/0.3)] rounded-full mb-6 reveal">
          Free Audit
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
          Get Your Free Social
          <br />
          <span className="text-gold-gradient">Media Audit</span>
        </h2>
        <p className="text-[oklch(0.55_0_0)] max-w-lg mx-auto mb-10 leading-relaxed reveal reveal-delay-2">
          We'll analyze your profile, content, and strategy — then show you
          exactly where you're leaving growth on the table.
        </p>

        {success ? (
          <div
            data-ocid="audit.success_state"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl glass-card border border-[oklch(0.62_0.10_68/0.3)] reveal"
          >
            <div className="w-14 h-14 rounded-full bg-[oklch(0.62_0.10_68/0.15)] flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-[oklch(0.72_0.14_68)]" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Audit Request Received!
            </h3>
            <p className="text-[oklch(0.55_0_0)] text-sm max-w-sm">
              We'll review your profile and send your personalised audit within
              24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-left glass-card border border-white/[0.08] p-7 rounded-2xl reveal reveal-delay-2"
          >
            <div>
              <label
                htmlFor="audit-name"
                className="block text-xs font-semibold text-[oklch(0.65_0_0)] uppercase tracking-widest mb-2"
              >
                Full Name
              </label>
              <Input
                id="audit-name"
                data-ocid="audit.name.input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Smith"
                required
                className="bg-white/[0.05] border-white/[0.10] text-white placeholder:text-[oklch(0.40_0_0)] focus:border-[oklch(0.62_0.10_68/0.6)] focus:ring-[oklch(0.62_0.10_68/0.2)] h-11 rounded-xl"
              />
            </div>
            <div>
              <label
                htmlFor="audit-email"
                className="block text-xs font-semibold text-[oklch(0.65_0_0)] uppercase tracking-widest mb-2"
              >
                Email Address
              </label>
              <Input
                id="audit-email"
                data-ocid="audit.email.input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@yourbrand.com"
                required
                className="bg-white/[0.05] border-white/[0.10] text-white placeholder:text-[oklch(0.40_0_0)] focus:border-[oklch(0.62_0.10_68/0.6)] focus:ring-[oklch(0.62_0.10_68/0.2)] h-11 rounded-xl"
              />
            </div>
            <div>
              <label
                htmlFor="audit-handle"
                className="block text-xs font-semibold text-[oklch(0.65_0_0)] uppercase tracking-widest mb-2"
              >
                Instagram Handle or Business URL
              </label>
              <Input
                id="audit-handle"
                data-ocid="audit.handle.input"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder="@yourbrand or https://instagram.com/yourbrand"
                required
                className="bg-white/[0.05] border-white/[0.10] text-white placeholder:text-[oklch(0.40_0_0)] focus:border-[oklch(0.62_0.10_68/0.6)] focus:ring-[oklch(0.62_0.10_68/0.2)] h-11 rounded-xl"
              />
            </div>

            {error && (
              <p data-ocid="audit.error_state" className="text-sm text-red-400">
                {error}
              </p>
            )}

            <Button
              type="submit"
              data-ocid="audit.submit_button"
              disabled={loading}
              className="w-full bg-[oklch(0.72_0.14_68)] hover:bg-[oklch(0.78_0.16_68)] text-[oklch(0.08_0_0)] font-bold h-11 rounded-xl transition-all duration-200 hover:scale-[1.01] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Request My Free Audit"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cMsg, setCMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      try {
        const subject = encodeURIComponent("New Contact Form Submission");
        const body = encodeURIComponent(
          `New Contact Form Submission\n\nName: ${cName}\nEmail: ${cEmail}\nPhone: ${cPhone || "N/A"}\n\nMessage:\n${cMsg}`,
        );
        window.location.href = `mailto:thesocialtailor25@gmail.com?subject=${subject}&body=${body}`;
        setSuccess(true);
        setCName("");
        setCEmail("");
        setCPhone("");
        setCMsg("");
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [cName, cEmail, cPhone, cMsg],
  );

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[oklch(0.62_0.10_68)] border border-[oklch(0.62_0.10_68/0.3)] rounded-full mb-6 reveal">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.10_0_0)] mb-4 reveal reveal-delay-1">
              Let's Start Your
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.12 68), oklch(0.50 0.09 55))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                Growth Story
              </span>
            </h2>
            <p className="text-[oklch(0.42_0_0)] leading-relaxed mb-8 reveal reveal-delay-2">
              Whether you're starting from scratch or scaling an existing
              presence, we're ready to tailor a strategy that fits.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8 reveal reveal-delay-3">
              <a
                href="mailto:hello@thesocialtailor.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[oklch(0.97_0.02_68)] flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-[oklch(0.62_0.10_68)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[oklch(0.30_0_0)] group-hover:text-[oklch(0.62_0.10_68)] transition-colors">
                  hello@thesocialtailor.com
                </span>
              </a>

              <a
                href="https://wa.me/916280082869"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[oklch(0.96_0.03_155)] flex items-center justify-center">
                  <SiWhatsapp className="w-4 h-4 text-[#25D366]" />
                </div>
                <span className="text-sm text-[oklch(0.30_0_0)] group-hover:text-[#25D366] transition-colors">
                  Chat on WhatsApp
                </span>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/916280082869"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full whatsapp-btn text-sm font-semibold transition-colors duration-200 mb-8 reveal reveal-delay-3"
            >
              <SiWhatsapp className="w-4 h-4" />
              Message Us on WhatsApp
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3 reveal reveal-delay-4">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/thesocial.tailor/",
                  label: "Instagram",
                },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: SiTiktok, href: "#", label: "TikTok" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg border border-[oklch(0.88_0_0)] flex items-center justify-center text-[oklch(0.45_0_0)] hover:text-[oklch(0.62_0.10_68)] hover:border-[oklch(0.62_0.10_68/0.4)] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2">
            {success ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-[oklch(0.90_0_0)] bg-[oklch(0.99_0_0)] text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[oklch(0.97_0.04_68)] flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[oklch(0.62_0.10_68)]" />
                </div>
                <h3 className="text-xl font-bold text-[oklch(0.10_0_0)]">
                  Message Received!
                </h3>
                <p className="text-[oklch(0.45_0_0)] text-sm max-w-sm">
                  We'll be in touch within 24 hours to discuss how we can help
                  your brand grow.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-7 rounded-2xl border border-[oklch(0.90_0_0)] bg-[oklch(0.99_0_0)]"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[oklch(0.40_0_0)] uppercase tracking-widest mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.name.input"
                      value={cName}
                      onChange={(e) => setCName(e.target.value)}
                      placeholder="Jane Smith"
                      required
                      className="h-11 rounded-xl border-[oklch(0.88_0_0)] focus:border-[oklch(0.62_0.10_68/0.5)]"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[oklch(0.40_0_0)] uppercase tracking-widest mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      data-ocid="contact.email.input"
                      type="email"
                      value={cEmail}
                      onChange={(e) => setCEmail(e.target.value)}
                      placeholder="jane@brand.com"
                      required
                      className="h-11 rounded-xl border-[oklch(0.88_0_0)] focus:border-[oklch(0.62_0.10_68/0.5)]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-semibold text-[oklch(0.40_0_0)] uppercase tracking-widest mb-2"
                  >
                    Phone{" "}
                    <span className="normal-case font-normal text-[oklch(0.60_0_0)]">
                      (optional)
                    </span>
                  </label>
                  <Input
                    id="contact-phone"
                    data-ocid="contact.phone.input"
                    type="tel"
                    value={cPhone}
                    onChange={(e) => setCPhone(e.target.value)}
                    placeholder="+1 234 567 890"
                    className="h-11 rounded-xl border-[oklch(0.88_0_0)] focus:border-[oklch(0.62_0.10_68/0.5)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[oklch(0.40_0_0)] uppercase tracking-widest mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message.textarea"
                    value={cMsg}
                    onChange={(e) => setCMsg(e.target.value)}
                    placeholder="Tell us about your brand and goals..."
                    required
                    rows={5}
                    className="rounded-xl border-[oklch(0.88_0_0)] focus:border-[oklch(0.62_0.10_68/0.5)] resize-none"
                  />
                </div>

                {error && (
                  <p
                    data-ocid="contact.error_state"
                    className="text-sm text-red-500"
                  >
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={loading}
                  className="w-full bg-[oklch(0.10_0_0)] hover:bg-[oklch(0.18_0_0)] text-white font-bold h-11 rounded-xl transition-all duration-200 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.06_0_0)] border-t border-[oklch(0.20_0_0)] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/logo-mark-transparent.dim_120x120.png"
                alt="The Social Tailor"
                className="h-8 w-8 object-contain"
              />
              <span className="text-white font-semibold tracking-tight">
                The Social Tailor
              </span>
            </div>
            <p className="text-xs text-[oklch(0.45_0_0)] leading-relaxed max-w-xs">
              Crafting bespoke social media strategies that fit your brand like
              a tailored suit.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold text-[oklch(0.65_0_0)] tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Portfolio", id: "portfolio" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact", id: "contact" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className="text-sm text-[oklch(0.45_0_0)] hover:text-[oklch(0.72_0.14_68)] transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold text-[oklch(0.65_0_0)] tracking-widest uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex gap-2 mb-4">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/thesocial.tailor/",
                  label: "Instagram",
                },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: SiTiktok, href: "#", label: "TikTok" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-8 h-8 rounded-lg border border-[oklch(0.25_0_0)] flex items-center justify-center text-[oklch(0.45_0_0)] hover:text-[oklch(0.72_0.14_68)] hover:border-[oklch(0.62_0.10_68/0.4)] transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@thesocialtailor.com"
              className="text-sm text-[oklch(0.45_0_0)] hover:text-[oklch(0.72_0.14_68)] transition-colors"
            >
              hello@thesocialtailor.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[oklch(0.20_0_0)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[oklch(0.35_0_0)]">
            © {new Date().getFullYear()} The Social Tailor. All rights reserved.
          </p>
          <p className="text-xs text-[oklch(0.35_0_0)]">
            Built with{" "}
            <Heart className="inline w-3 h-3 text-[oklch(0.72_0.14_68)] mx-0.5" />
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.55_0_0)] hover:text-[oklch(0.72_0.14_68)] transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Lead Capture Popup ───────────────────────────────────────────────────────
function LeadPopup({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
        const subject = encodeURIComponent("Free Social Media Audit Request");
        const body = encodeURIComponent(
          `New Free Audit Request\n\nEmail: ${email}\nInstagram / Business URL: ${handle}`,
        );
        window.location.href = `mailto:thesocialtailor25@gmail.com?subject=${subject}&body=${body}`;
        setSuccess(true);
        setTimeout(() => onClose(), 2500);
      } catch {
        // silently fail on popup
      } finally {
        setLoading(false);
      }
    },
    [email, handle, onClose],
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
      {/* Backdrop */}
      <div
        role="button"
        tabIndex={0}
        aria-label="Close popup"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
      />

      {/* Modal */}
      <div
        data-ocid="popup.modal"
        className="relative w-full max-w-md bg-[oklch(0.10_0_0)] border border-[oklch(0.25_0_0)] rounded-2xl p-7 shadow-dark animate-fade-up"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          data-ocid="popup.close_button"
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-[oklch(0.55_0_0)] hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Gold accent top line */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.14_68/0.6)] to-transparent rounded-t-2xl" />

        {success ? (
          <div
            data-ocid="popup.success_state"
            className="flex flex-col items-center gap-3 py-4 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[oklch(0.62_0.10_68/0.15)] flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-[oklch(0.72_0.14_68)]" />
            </div>
            <h3 className="text-lg font-bold text-white">You're in!</h3>
            <p className="text-sm text-[oklch(0.55_0_0)]">
              Expect your free audit in your inbox shortly.
            </p>
          </div>
        ) : (
          <>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[oklch(0.62_0.10_68/0.12)] border border-[oklch(0.62_0.10_68/0.25)] mb-4">
              <Zap className="w-3 h-3 text-[oklch(0.72_0.14_68)]" />
              <span className="text-xs font-semibold text-[oklch(0.72_0.14_68)] tracking-wide">
                Free Offer
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              Get a Free 5-Minute
            </h3>
            <h3 className="text-xl font-bold text-gold-gradient mb-3">
              Social Media Audit
            </h3>
            <p className="text-sm text-[oklch(0.52_0_0)] mb-5 leading-relaxed">
              Drop your email and Instagram handle below — we'll send your
              personalised audit within 24 hours. No strings attached.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                data-ocid="popup.email.input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="bg-white/[0.05] border-white/[0.10] text-white placeholder:text-[oklch(0.38_0_0)] focus:border-[oklch(0.62_0.10_68/0.6)] h-11 rounded-xl text-sm"
              />
              <Input
                data-ocid="popup.handle.input"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder="@yourinstagram"
                required
                className="bg-white/[0.05] border-white/[0.10] text-white placeholder:text-[oklch(0.38_0_0)] focus:border-[oklch(0.62_0.10_68/0.6)] h-11 rounded-xl text-sm"
              />
              <Button
                type="submit"
                data-ocid="popup.submit_button"
                disabled={loading}
                className="w-full bg-[oklch(0.72_0.14_68)] hover:bg-[oklch(0.78_0.16_68)] text-[oklch(0.08_0_0)] font-bold h-11 rounded-xl transition-all duration-200 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Claim My Free Audit →"}
              </Button>
            </form>

            <p className="text-center text-xs text-[oklch(0.38_0_0)] mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  useReveal();

  useEffect(() => {
    const alreadyShown = localStorage.getItem("tst_popup_shown");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("tst_popup_shown", "1");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAuditClick = () => {
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[oklch(0.06_0_0)]">
      <Navigation onAuditClick={handleAuditClick} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <AuditSection />
        <ContactSection />
      </main>
      <Footer />
      {showPopup && <LeadPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
