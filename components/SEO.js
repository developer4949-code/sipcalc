import Head from "next/head";
import { defaultSeo, pageUrl } from "../lib/seo";

export default function SEO({ title, description, path = "/", schema, type = "website" }) {
  const canonical = pageUrl(path);
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={defaultSeo.siteName} />
      <meta property="og:image" content={defaultSeo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultSeo.image} />
      {schemas.map((item, index) => (
        <script
          key={`${item["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  );
}
