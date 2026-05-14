import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import LumpsumCalculator from "../components/LumpsumCalculator";
import { calculatorSchema, faqSchema } from "../lib/seo";

export default function LumpsumCalculatorPage() {
  const schema = [
    calculatorSchema("Lumpsum Calculator India", "One-time investment calculator with SIP comparison.", "/lumpsum-calculator"),
    faqSchema([{ q: "What is a lumpsum calculator?", a: "It estimates the future value of a one-time investment using an expected annual return and time period." }])
  ];

  return (
    <Layout>
      <SEO title="Lumpsum Calculator India | One-time Investment Return Calculator" description="Calculate one-time investment returns in India and compare with SIP for the same amount using animated charts." path="/lumpsum-calculator" schema={schema} />
      <PageHero eyebrow="Lumpsum Calculator" title="Estimate one-time investment growth" description="Check how a single investment can compound over time and compare it with a SIP-style approach." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <LumpsumCalculator />
      </div>
    </Layout>
  );
}
