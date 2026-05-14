import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SIPCalculator from "../components/SIPCalculator";
import AffiliateStrip from "../components/AffiliateStrip";
import AdSlot from "../components/AdSlot";
import { calculatorSchema, faqSchema } from "../lib/seo";

export default function SIPCalculatorPage() {
  const schema = [
    calculatorSchema("SIP Calculator India 2026", "Monthly SIP calculator for Indian investors with live chart and rupee outputs.", "/sip-calculator"),
    faqSchema([
      { q: "How is SIP maturity calculated?", a: "It uses monthly investment, expected annual return, and time period to estimate future value using monthly compounding." },
      { q: "Can I share my SIP result?", a: "Yes, you can share via WhatsApp or copy a link with your calculator inputs." }
    ])
  ];

  return (
    <Layout>
      <SEO title="SIP Calculator India 2026 | Monthly SIP Return Calculator" description="Free monthly SIP calculator India with live charts, animated results, WhatsApp sharing, and ₹500 increase suggestions." path="/sip-calculator" schema={schema} />
      <PageHero eyebrow="Monthly SIP Calculator" title="Calculate your SIP returns live" description="Drag the sliders and watch your invested amount, wealth gained, and maturity amount update instantly." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SIPCalculator />
        <AdSlot id="ad-sidebar-desktop" slot="3333333333" label="Desktop sidebar AdSense slot" className="hidden lg:flex" />
        <AffiliateStrip />
      </div>
    </Layout>
  );
}
