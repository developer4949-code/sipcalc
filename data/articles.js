export const articles = [
  {
    slug: "start-sip-500-month-india",
    title: "How to Start SIP with ₹500/month in India",
    description: "Learn how students and first-job investors can start SIP with ₹500/month in India and build wealth slowly, smartly, and consistently.",
    date: "2026-01-12",
    readingTime: "5 min read",
    keyword: "monthly SIP calculator",
    content: [
      { type: "p", text: "Starting a SIP with ₹500/month is one of the easiest ways to begin investing in India. You do not need a high salary, market expertise, or perfect timing. Bas discipline chahiye." },
      { type: "h2", text: "Why ₹500 is enough to begin" },
      { type: "p", text: "A small monthly SIP builds the habit first. Once your income grows, you can step up the amount by ₹500 or ₹1,000 every few months. The magic is not only return rate; it is staying invested." },
      { type: "ul", items: ["Pick a goal like emergency fund, bike upgrade, or long-term wealth.", "Choose a diversified equity mutual fund only after reading risk details.", "Use a SIP calculator India tool before you invest.", "Review once every 6–12 months instead of checking daily."] },
      { type: "h2", text: "Example for young investors" },
      { type: "p", text: "If you invest ₹500/month for 10 years at an assumed 12% annual return, your invested amount is ₹60,000 and the maturity estimate can be much higher because of compounding." },
      { type: "h2", text: "Final thought" },
      { type: "p", text: "Start tiny, stay regular, and increase slowly. A ₹500 SIP is not small if it helps you become consistent." }
    ]
  },
  {
    slug: "sip-vs-fd-which-is-better-2026",
    title: "SIP vs FD: Which is Better in 2026?",
    description: "Compare SIP and fixed deposits in India for 2026. Understand risk, return, liquidity, tax, and which option suits young investors.",
    date: "2026-01-18",
    readingTime: "6 min read",
    keyword: "SIP calculator 2026",
    content: [
      { type: "p", text: "SIP and FD solve different money problems. FD is stable and predictable. SIP has market risk but can create stronger long-term growth when used patiently." },
      { type: "h2", text: "When FD makes sense" },
      { type: "ul", items: ["Emergency money you may need soon.", "Short-term goals under three years.", "Investors who cannot accept market volatility."] },
      { type: "h2", text: "When SIP makes sense" },
      { type: "ul", items: ["Long-term goals above five years.", "Young investors with monthly income.", "People who want inflation-beating growth potential."] },
      { type: "p", text: "In 2026, many first-jobbers use both: FD for safety money and SIP for wealth creation. That balance feels boring, but boring often wins." },
      { type: "h2", text: "Use a calculator before deciding" },
      { type: "p", text: "Run the same goal through a monthly SIP calculator and an FD estimate. The right answer depends on time period, risk comfort, and whether you need guaranteed returns." }
    ]
  },
  {
    slug: "become-crorepati-with-sip",
    title: "How to Become Crorepati with SIP?",
    description: "Use a crorepati calculator India approach to estimate how much monthly SIP you need to reach ₹1 crore over different time periods.",
    date: "2026-02-04",
    readingTime: "5 min read",
    keyword: "crorepati calculator India",
    content: [
      { type: "p", text: "Becoming a crorepati through SIP is not a fantasy headline. It is math plus time plus discipline. The earlier you start, the less pressure your monthly SIP needs." },
      { type: "h2", text: "The big lever is time" },
      { type: "p", text: "At an assumed 12% annual return, the monthly SIP needed for ₹1 crore changes dramatically between 10, 15, 20, and 25 years. Time does heavy lifting because returns can compound on returns." },
      { type: "ul", items: ["Start with what you can afford.", "Increase your SIP after salary hikes.", "Avoid stopping during market dips if your goal is long term.", "Use a reverse SIP calculator to find your required monthly amount."] },
      { type: "h2", text: "Step-up SIP can help" },
      { type: "p", text: "If ₹1 crore feels far away, a step up SIP calculator can show how increasing your SIP every year may close the gap faster." }
    ]
  },
  {
    slug: "best-sip-plans-for-students-india",
    title: "Best SIP Plans for Students in India",
    description: "A practical guide for Indian students who want to start SIP investing carefully with small monthly amounts and realistic goals.",
    date: "2026-02-11",
    readingTime: "6 min read",
    keyword: "SIP calculator India",
    content: [
      { type: "p", text: "Students should not chase random fund names from social media. The best SIP plan starts with learning, low amounts, and a clear reason to invest." },
      { type: "h2", text: "Student-friendly SIP checklist" },
      { type: "ul", items: ["Start at ₹500/month if cash flow is tight.", "Prefer broad diversified funds over narrow themes.", "Keep emergency money separate from investments.", "Read expense ratio, riskometer, and past rolling performance."] },
      { type: "p", text: "Your first SIP teaches behavior: how you react to volatility, whether you can stay consistent, and how compounding looks over time." },
      { type: "h2", text: "Do not skip risk" },
      { type: "p", text: "Mutual funds are market-linked. Use calculators for estimates, not guarantees. If a goal is very near, do not put that money into high-risk equity funds." }
    ]
  },
  {
    slug: "what-is-reverse-sip-calculator",
    title: "What is Reverse SIP and How to Use It?",
    description: "Understand reverse SIP calculators, how they estimate required monthly investment, and why goal-first planning helps Indian investors.",
    date: "2026-02-18",
    readingTime: "4 min read",
    keyword: "reverse SIP calculator",
    content: [
      { type: "p", text: "A reverse SIP calculator starts with your target amount and works backward to estimate the monthly SIP needed. Instead of asking, “What will ₹5,000 become?”, it asks, “How much do I need for ₹50 lakh?”" },
      { type: "h2", text: "When to use reverse SIP" },
      { type: "ul", items: ["Planning for ₹1 crore.", "Saving for higher education.", "Building a home down payment.", "Creating a long-term freedom fund."] },
      { type: "h2", text: "How the formula helps" },
      { type: "p", text: "The calculator uses target amount, time period, and expected annual return to estimate the required monthly investment. It is useful for planning, but actual returns can vary." },
      { type: "p", text: "Goal-first planning feels more real. Once you know your number, you can increase SIP gradually instead of feeling stuck." }
    ]
  }
];

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}
