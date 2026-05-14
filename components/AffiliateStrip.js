const partners = [
  { name: "Groww", href: "https://groww.in" },
  { name: "Zerodha", href: "https://zerodha.com" },
  { name: "Angel One", href: "https://www.angelone.in" }
];

export default function AffiliateStrip() {
  return (
    <section className="glass rounded-lg p-5">
      <p className="font-heading text-xl font-bold">Start your SIP today</p>
      <p className="mt-2 text-sm text-white/65 light:text-slate-600">Compare platforms, complete KYC, and begin with an amount you can sustain.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {partners.map((partner) => (
          <a key={partner.name} href={partner.href} target="_blank" rel="sponsored noopener noreferrer" className="rounded-lg bg-electric px-4 py-2 text-sm font-bold text-ink transition hover:-translate-y-0.5">
            Open {partner.name}
          </a>
        ))}
      </div>
    </section>
  );
}
