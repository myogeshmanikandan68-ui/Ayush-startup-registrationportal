import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf,
  Sparkles,
  ShieldCheck,
  FileCheck2,
  Building2,
  ArrowRight,
  CheckCircle2,
  Flower2,
  HeartPulse,
  Microscope,
  Users,
  ScrollText,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AYUSH Startup Registration Portal — Register Your Wellness Venture" },
      {
        name: "description",
        content:
          "Official-style registration portal for AYUSH startups: Ayurveda, Yoga, Unani, Siddha & Homeopathy. Recognition, licensing guidance and startup benefits in one place.",
      },
      { property: "og:title", content: "AYUSH Startup Registration Portal — Register Your Wellness Venture" },
      {
        property: "og:description",
        content:
          "Official-style registration portal for AYUSH startups: Ayurveda, Yoga, Unani, Siddha & Homeopathy. Recognition, licensing guidance and startup benefits in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const pillars = [
  { key: "A", name: "Ayurveda", icon: Leaf, desc: "Herbal formulations, panchakarma & wellness products." },
  { key: "Y", name: "Yoga & Naturopathy", icon: Sparkles, desc: "Studios, teacher training, digital yoga platforms." },
  { key: "U", name: "Unani", icon: Flower2, desc: "Traditional Unani medicine and manufacturing units." },
  { key: "S", name: "Siddha", icon: HeartPulse, desc: "Siddha therapeutics, clinics and research ventures." },
  { key: "H", name: "Homeopathy", icon: Microscope, desc: "Homeopathic pharma, tele-consult and clinics." },
];

const benefits = [
  { icon: Award, title: "Recognition Certificate", desc: "Digitally signed AYUSH startup recognition." },
  { icon: ShieldCheck, title: "Regulatory Handholding", desc: "GMP, licensing & AYUSH Premium Mark guidance." },
  { icon: Users, title: "Investor Network", desc: "Access curated wellness-focused VCs & incubators." },
  { icon: FileCheck2, title: "Tax & IP Benefits", desc: "Startup India tax exemptions and IP fast-track." },
];

const steps = [
  { n: "01", title: "Create Account", desc: "Sign up with founder details and entity PAN." },
  { n: "02", title: "Submit Application", desc: "Upload incorporation, AYUSH category & pitch deck." },
  { n: "03", title: "Expert Review", desc: "Domain panel evaluates innovation & compliance readiness." },
  { n: "04", title: "Get Recognized", desc: "Receive certificate, unique AYUSH Startup ID & benefits." },
];

function Home() {
  const [form, setForm] = useState({
    founder: "",
    startup: "",
    email: "",
    phone: "",
    category: "Ayurveda",
    stage: "Idea",
    about: "",
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-elegant">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight">AYUSH Startup</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Registration Portal
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#pillars" className="hover:text-foreground transition">Sectors</a>
            <a href="#benefits" className="hover:text-foreground transition">Benefits</a>
            <a href="#process" className="hover:text-foreground transition">Process</a>
            <a href="#eligibility" className="hover:text-foreground transition">Eligibility</a>
            <a href="#register" className="hover:text-foreground transition">Register</a>
          </nav>
          <a
            href="#register"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <div className="absolute inset-0 -z-10 opacity-[0.15] bg-mandala" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                <ScrollText className="h-3.5 w-3.5 text-primary" />
                Government-aligned recognition framework
              </span>
              <h1 className="mt-6 text-5xl md:text-7xl font-serif font-semibold tracking-tight leading-[1.02]">
                Register your{" "}
                <span className="bg-gradient-to-r from-primary via-accent-foreground to-primary-glow bg-clip-text text-transparent">
                  AYUSH startup
                </span>{" "}
                in one place.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                A single window for Ayurveda, Yoga, Unani, Siddha and Homeopathy founders — recognition,
                licensing, funding and compliance support, thoughtfully designed for modern wellness ventures.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-elegant hover:translate-y-[-1px] transition"
                >
                  Start Registration <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-accent transition"
                >
                  How it works
                </a>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { k: "2,400+", v: "Startups recognized" },
                  { k: "5", v: "AYUSH systems" },
                  { k: "₹120 Cr", v: "Funding facilitated" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="text-2xl md:text-3xl font-serif font-semibold text-foreground">{s.k}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-[2rem] blur-2xl" />
                <div className="relative rounded-3xl border border-border bg-card p-6 shadow-elegant">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 grid place-items-center">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        Recognition Preview
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">ID · AYUSH-25-00842</span>
                  </div>
                  <div className="mt-6">
                    <div className="text-xs text-muted-foreground">Startup</div>
                    <div className="text-xl font-serif font-semibold">Prakriti Wellness Labs</div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <Field label="Category" value="Ayurveda" />
                    <Field label="Stage" value="Growth" />
                    <Field label="Founded" value="2024" />
                    <Field label="State" value="Karnataka" />
                  </div>
                  <div className="mt-6 rounded-xl bg-gradient-to-br from-primary to-primary-glow p-4 text-primary-foreground">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest opacity-80">Status</div>
                        <div className="text-lg font-semibold">Recognized</div>
                      </div>
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] text-muted-foreground leading-relaxed">
                    Illustrative preview. Actual certificate is issued digitally after review by the domain panel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="The five sectors"
            title="One portal. Five systems of wellness."
            desc="From classical formulations to modern digital wellness, we welcome founders across the AYUSH spectrum."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((p) => (
              <div
                key={p.name}
                className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-elegant transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-serif text-primary/30 group-hover:text-primary transition">
                    {p.key}
                  </span>
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-6 font-serif text-lg font-semibold">{p.name}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Why register"
            title="Benefits built for wellness founders."
            desc="Beyond a certificate — a growth platform for regulatory clarity, capital access and market visibility."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-card border border-border p-6">
                <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-5 font-semibold">{b.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="The process"
            title="Four calm steps to recognition."
            desc="A guided flow with clear checkpoints — most applications complete within 21 working days."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6">
                <div className="text-xs font-mono text-primary">{s.n}</div>
                <div className="mt-3 font-serif text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility" className="py-24 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Eligibility"
              title="Who can apply?"
              desc="Broad enough to welcome early-stage founders, precise enough to protect the AYUSH mark."
              align="left"
            />
          </div>
          <ul className="space-y-4">
            {[
              "Entity incorporated in India (Pvt Ltd, LLP or registered partnership).",
              "Not older than 10 years since incorporation.",
              "Annual turnover under ₹100 crore in any preceding financial year.",
              "Working on products, services, or technology in one of the 5 AYUSH systems.",
              "Not formed by splitting or reconstructing an existing business.",
            ].map((t) => (
              <li key={t} className="flex gap-3 rounded-xl bg-card border border-border p-4">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REGISTER FORM */}
      <section id="register" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            eyebrow="Registration"
            title="Begin your application."
            desc="Fill in the essentials. Our team will reach out within 48 hours with the document checklist."
          />

          <div className="mt-12 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-primary/10 grid place-items-center">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-serif font-semibold">Application received</h3>
                <p className="mt-2 text-muted-foreground text-sm max-w-md mx-auto">
                  Thank you, {form.founder || "founder"}. A reference ID has been generated and our
                  domain panel will contact you at {form.email || "your email"} within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      founder: "",
                      startup: "",
                      email: "",
                      phone: "",
                      category: "Ayurveda",
                      stage: "Idea",
                      about: "",
                    });
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm hover:bg-accent transition"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid md:grid-cols-2 gap-5"
              >
                <Input
                  label="Founder name"
                  value={form.founder}
                  onChange={(v) => setForm({ ...form, founder: v })}
                  required
                />
                <Input
                  label="Startup name"
                  value={form.startup}
                  onChange={(v) => setForm({ ...form, startup: v })}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <Input
                  label="Phone"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  required
                />
                <Select
                  label="AYUSH category"
                  value={form.category}
                  onChange={(v) => setForm({ ...form, category: v })}
                  options={["Ayurveda", "Yoga & Naturopathy", "Unani", "Siddha", "Homeopathy"]}
                />
                <Select
                  label="Stage"
                  value={form.stage}
                  onChange={(v) => setForm({ ...form, stage: v })}
                  options={["Idea", "Prototype", "Early Revenue", "Growth"]}
                />
                <div className="md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    About the venture
                  </label>
                  <textarea
                    value={form.about}
                    onChange={(e) => setForm({ ...form, about: e.target.value })}
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                    placeholder="What problem are you solving? What's unique about your approach?"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-muted-foreground max-w-sm">
                    By submitting you agree to sharing details with the AYUSH domain panel for evaluation.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-elegant hover:translate-y-[-1px] transition"
                  >
                    Submit Application <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-sm font-semibold">AYUSH Startup Portal</div>
              <div className="text-xs text-muted-foreground">
                A single window for wellness founders in India.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
            <span className="flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5" /> New Delhi, India
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  desc: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl"}>
      <div className="text-xs uppercase tracking-[0.25em] text-primary font-medium">{eyebrow}</div>
      <h2 className="mt-4 text-3xl md:text-5xl font-serif font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 text-muted-foreground">{desc}</p>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-muted/60 p-3">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="text-sm font-medium mt-1">{value}</div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
