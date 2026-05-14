import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/20 light:border-slate-200 light:bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-heading text-2xl font-bold">SIP Calc India</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/68 light:text-slate-600">
            Free SIP calculator India tools for students, first-jobbers, and young wealth builders. Estimates are educational and not investment advice.
          </p>
        </div>
        <div>
          <p className="font-bold">Calculators</p>
          <div className="mt-3 grid gap-2 text-sm text-white/70 light:text-slate-600">
            <Link href="/sip-calculator">SIP Calculator</Link>
            <Link href="/reverse-sip-calculator">Reverse SIP Calculator</Link>
            <Link href="/step-up-sip-calculator">Step-up SIP Calculator</Link>
            <Link href="/lumpsum-calculator">Lumpsum Calculator</Link>
          </div>
        </div>
        <div>
          <p className="font-bold">Company</p>
          <div className="mt-3 grid gap-2 text-sm text-white/70 light:text-slate-600">
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/55 light:border-slate-200 light:text-slate-500">
        © 2026 SIP Calc India. Mutual fund investments are subject to market risks.
      </div>
    </footer>
  );
}
