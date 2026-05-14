import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SEO title="Privacy Policy | SIP Calc India" description="Read the SIP Calc India privacy policy covering analytics, ads, cookies, and user-submitted contact information." path="/privacy-policy" />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-heading text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-white/65 light:text-slate-600">Last updated: 14 May 2026</p>
        {[
          ["Information we collect", "Calculator inputs are processed in your browser. We may collect optional contact details if you submit a WhatsApp or email form."],
          ["Analytics and cookies", "We may use Google Analytics and advertising cookies to understand traffic, improve pages, and show relevant ads after consent where required."],
          ["Advertising", "Google AdSense or similar partners may use cookies to serve and measure ads. You can manage ad personalization through your Google settings."],
          ["Data sharing", "We do not sell personal information. Service providers may process limited data for analytics, hosting, or communication delivery."],
          ["Contact", "For privacy questions, contact hello@sipcalcindia.com."]
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
