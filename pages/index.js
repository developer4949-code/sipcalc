import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Lock, Sparkles, WalletCards } from "lucide-react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import AdSlot from "../components/AdSlot";
import AffiliateStrip from "../components/AffiliateStrip";
import { calculatorSchema, faqSchema } from "../lib/seo";

const cards = [
  { href: "/sip-calculator", title: "SIP Calculator", text: "Estimate monthly SIP maturity with live charts." },
  { href: "/reverse-sip-calculator", title: "Reverse SIP", text: "Find the monthly SIP needed for your goal." },
  { href: "/step-up-sip-calculator", title: "Step-up SIP", text: "See how yearly increases can change the game." },
  { href: "/lumpsum-calculator", title: "Lumpsum", text: "Calculate one-time investment growth." }
];

export default function Home() {
  const schema = [
    calculatorSchema("SIP Calculator India", "Free SIP calculator India tools for SIP, reverse SIP, step-up SIP, and lumpsum planning.", "/"),
    faqSchema([
      { q: "Is this SIP calculator free?", a: "Yes, SIP Calc India is free and does not require login." },
      { q: "Does the calculator guarantee returns?", a: "No. It provides estimates based on the inputs you choose. Mutual fund returns are market-linked." }
    ])
  ];

  return (
    <Layout>
      <SEO title="SIP Calculator India 2026 | Free Monthly SIP Calculator" description="Use a free SIP calculator India tool for 2026. Calculate SIP returns, reverse SIP, step-up SIP and lumpsum growth in rupees." path="/" schema={schema} />
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24">
        <div className="absolute inset-0 -z-10">
          {["₹", "₹", "₹", "%", "₹", "₹"].map((symbol, index) => (
            <span key={`${symbol}-${index}`} className="absolute animate-floaty text-4xl font-bold text-electric/20" style={{ left: `${12 + index * 15}%`, top: `${18 + (index % 3) * 18}%`, animationDelay: `${index * 0.55}s` }}>
              {symbol}
            </span>
          ))}
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="font-bold uppercase tracking-[0.22em] text-electric">
              Smart investing, desi style
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-5 font-heading text-5xl font-bold leading-[1.02] sm:text-7xl">
              SIP Calculator India for your future crore plan
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-2xl text-lg leading-8 text-white/70 light:text-slate-600">
              Plan SIPs, reverse goals, step-up investments, and lumpsum returns in seconds. Bas numbers daalo, future picture dekho.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/sip-calculator" className="animate-pulseGlow inline-flex items-center gap-2 rounded-lg bg-electric px-6 py-3 font-bold text-ink">
                Start Your SIP Journey Today <ArrowRight size={18} />
              </Link>
              <Link href="/blog" className="rounded-lg border border-white/15 px-6 py-3 font-bold light:border-slate-200">Read SIP guides</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Lock, text: "Secure" },
                { icon: Sparkles, text: "Free" },
                { icon: BadgeCheck, text: "No Login" }
              ].map((item) => (
                <span key={item.text} className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/8 px-4 py-2 text-sm font-bold light:border-slate-200 light:bg-white">
                  <item.icon size={16} className="text-profit" /> {item.text}
                </span>
              ))}
            </div>
          </div>
          <div className="glass rounded-lg p-6" data-aos="fade-left">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-profit">Live today</p>
            <p className="number-font mt-3 text-5xl font-bold">₹42.8 Cr</p>
            <p className="mt-2 text-white/65 light:text-slate-600">calculated by young investors today</p>
            <div className="mt-8 grid gap-3">
              {cards.map((card) => (
                <Link key={card.href} href={card.href} className="group rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-electric/60 light:border-slate-200 light:bg-slate-50">
                  <span className="flex items-center justify-between font-heading text-xl font-bold">{card.title}<WalletCards className="text-electric transition group-hover:scale-110" size={22} /></span>
                  <span className="mt-1 block text-sm text-white/60 light:text-slate-600">{card.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6"><AdSlot id="ad-below-hero" slot="1111111111" label="AdSense slot below hero" /></div>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <h2 className="font-heading text-3xl font-bold">Quick access calculators</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-4">
          {cards.map((card, index) => (
            <Link key={card.href} href={card.href} data-aos="fade-up" data-aos-delay={index * 60} className="gradient-border rounded-lg p-5 transition hover:-translate-y-1">
              <h3 className="font-heading text-xl font-bold">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65 light:text-slate-600">{card.text}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <AffiliateStrip />
      </section>
    </Layout>
  );
}
