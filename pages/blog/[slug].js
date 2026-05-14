import Link from "next/link";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import AdSlot from "../../components/AdSlot";
import { articles, getArticle } from "../../data/articles";
import { articleSchema } from "../../lib/seo";

export default function ArticlePage({ article }) {
  return (
    <Layout>
      <SEO title={`${article.title} | SIP Calc India`} description={article.description} path={`/blog/${article.slug}`} schema={articleSchema(article)} type="article" />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link href="/blog" className="text-sm font-bold text-electric">← Back to blog</Link>
        <h1 className="mt-5 font-heading text-4xl font-bold leading-tight sm:text-5xl">{article.title}</h1>
        <p className="mt-4 text-sm text-white/55 light:text-slate-500">{article.date} · {article.readingTime} · {article.keyword}</p>
        <div className="article-content mt-8 text-white/78 light:text-slate-700">
          {article.content.map((block, index) => {
            if (block.type === "h2") return <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
            if (block.type === "ul") {
              return (
                <ul key={`${block.items[0]}-${index}`}>
                  {block.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              );
            }
            return (
              <div key={`${block.text}-${index}`}>
                <p>{block.text}</p>
                {index === 2 && <AdSlot id={`blog-ad-${article.slug}`} slot="5555555555" label="AdSense slot between blog paragraphs" />}
              </div>
            );
          })}
        </div>
        <div className="mt-10 rounded-lg border border-electric/30 bg-electric/10 p-5">
          <h2 className="font-heading text-2xl font-bold">Try the calculators</h2>
          <p className="mt-2 text-white/70 light:text-slate-600">Put your own numbers into the SIP calculator India tools and make the article personal.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/sip-calculator" className="rounded-lg bg-electric px-4 py-2 font-bold text-ink">SIP calculator</Link>
            <Link href="/reverse-sip-calculator" className="rounded-lg border border-white/15 px-4 py-2 font-bold light:border-slate-200">Reverse SIP</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: articles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      article: getArticle(params.slug)
    }
  };
}
