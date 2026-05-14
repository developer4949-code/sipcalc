import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Terms() {
  return (
    <Layout>
      <SEO title="Terms and Conditions | SIP Calc India" description="Read the terms for using SIP Calc India calculators, content, ads, affiliate links, and educational financial information." path="/terms" />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-heading text-4xl font-bold">Terms and Conditions</h1>
        <p className="mt-4 text-white/65 light:text-slate-600">Last updated: 14 May 2026</p>
        {[
          ["Educational use", "SIP Calc India provides calculators and content for education only. It is not investment, tax, legal, or financial advice."],
          ["No guarantees", "Calculator results are estimates based on assumptions you enter. Actual mutual fund returns can be higher or lower."],
          ["Affiliate links", "Some outbound links may be sponsored. We may earn a commission without changing your cost."],
          ["User responsibility", "You should verify fund details, risks, costs, and suitability before investing. Consult a qualified advisor when needed."],
          ["Changes", "We may update calculators, content, ads, or these terms as the site evolves."]
        ].map(([heading, text]) => (
          <div key={heading} className="mt-8">
            <h2 className="font-heading text-2xl font-bold">{heading}</h2>
            <p className="mt-3 leading-8 text-white/75 light:text-slate-700">{text}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
