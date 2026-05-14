import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ReverseSIPCalculator from "../components/ReverseSIPCalculator";
import AdSlot from "../components/AdSlot";
import { calculatorSchema, faqSchema } from "../lib/seo";

export default function ReverseSIPCalculatorPage() {
  const schema = [
    calculatorSchema("Reverse SIP Calculator", "Goal-first reverse SIP calculator for Indian investors.", "/reverse-sip-calculator"),
    faqSchema([{ q: "What is a reverse SIP calculator?", a: "It estimates the monthly SIP required to reach a target amount in a chosen time period." }])
  ];

  return (
    <Layout>
      <SEO title="Reverse SIP Calculator India | Crorepati Calculator India" description="Use a reverse SIP calculator to find the monthly SIP needed for ₹1 crore, education, house goals, and long-term wealth." path="/reverse-sip-calculator" schema={schema} />
      <PageHero eyebrow="Reverse SIP Calculator" title="Start with the goal, find the SIP" description="Tell us your target amount and timeline. We will estimate the monthly SIP needed to get there." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ReverseSIPCalculator />
        <AdSlot id="ad-reverse-sip" slot="4444444444" label="AdSense slot below reverse SIP calculator" />
      </div>
    </Layout>
  );
}
