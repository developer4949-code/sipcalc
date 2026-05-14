import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";

export default function About() {
  return (
    <Layout>
      <SEO title="About SIP Calc India | Built for Young India" description="SIP Calc India is a free financial calculator website built for young Indian investors who want simple, fast, rupee-first planning." path="/about" />
      <PageHero eyebrow="About" title="Built for Young India" description="We make investment planning feel clear, fast, and less intimidating for students, creators, and first-job professionals." />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
        <div className="glass rounded-lg p-6">
          <h2 className="font-heading text-3xl font-bold">Mission</h2>
          <p className="mt-4 leading-8 text-white/70 light:text-slate-600">Our mission is to help young Indians understand compounding before the internet distracts them with hype. SIP Calc India keeps the math transparent, mobile-first, and free.</p>
        </div>
        <div className="glass rounded-lg p-6">
          <h2 className="font-heading text-3xl font-bold">What we believe</h2>
          <p className="mt-4 leading-8 text-white/70 light:text-slate-600">Good financial tools should be simple enough for beginners and useful enough for serious planners. No login walls, no confusing jargon, no pressure.</p>
        </div>
      </section>
    </Layout>
  );
}
