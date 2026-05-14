import Link from "next/link";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import PageHero from "../../components/PageHero";
import { articles } from "../../data/articles";
import { pageUrl } from "../../lib/seo";

export default function BlogIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "SIP Calc India Blog",
    url: pageUrl("/blog")
  };

  return (
    <Layout>
      <SEO title="SIP Blog India 2026 | SIP Guides for Young Investors" description="Simple SIP guides for Indian students and first-jobbers. Learn SIP, reverse SIP, FD comparison, and crorepati planning." path="/blog" schema={schema} />
      <PageHero eyebrow="SIP Guides" title="Smart money guides for Young India" description="Short, clear SIP articles for students, first-jobbers, and anyone starting with ₹500/month." />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="gradient-border rounded-lg p-5 transition hover:-translate-y-1">
            <p className="text-sm font-bold text-electric">{article.readingTime}</p>
            <h2 className="mt-3 font-heading text-2xl font-bold">{article.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/65 light:text-slate-600">{article.description}</p>
          </Link>
        ))}
      </section>
    </Layout>
  );
}
