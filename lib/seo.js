const siteUrl = "https://sipcalcindia.com";

export const defaultSeo = {
  siteUrl,
  siteName: "SIP Calc India",
  image: `${siteUrl}/og-sip-calculator.png`
};

export function pageUrl(path = "") {
  return `${siteUrl}${path}`;
}

export function calculatorSchema(name, description, path) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name,
    description,
    url: pageUrl(path),
    provider: {
      "@type": "Organization",
      name: defaultSeo.siteName,
      url: siteUrl
    }
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };
}

export function articleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: defaultSeo.siteName
    },
    publisher: {
      "@type": "Organization",
      name: defaultSeo.siteName
    }
  };
}
