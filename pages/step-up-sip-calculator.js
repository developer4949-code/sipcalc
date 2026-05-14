import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import StepUpSIPCalculator from "../components/StepUpSIPCalculator";
import { calculatorSchema, faqSchema } from "../lib/seo";

export default function StepUpSIPCalculatorPage() {
  const schema = [
    calculatorSchema("Step Up SIP Calculator", "Compare normal SIP and step-up SIP growth in India.", "/step-up-sip-calculator"),
    faqSchema([{ q: "Why use step-up SIP?", a: "Step-up SIP helps investors increase monthly investments as income grows, which may improve long-term maturity estimates." }])
  ];

  return (
    <Layout>
      <SEO title="Step Up SIP Calculator India | Compare Normal vs Step-up SIP" description="Free step up SIP calculator for India. Compare normal SIP vs increasing SIP with live charts and rupee results." path="/step-up-sip-calculator" schema={schema} />
      <PageHero eyebrow="Step-up SIP Calculator" title="Increase SIP as your salary grows" description="Compare normal SIP with yearly increases and see how a small annual bump can change long-term wealth." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <StepUpSIPCalculator />
      </div>
    </Layout>
  );
}
