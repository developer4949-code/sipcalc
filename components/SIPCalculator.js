import { useMemo, useState } from "react";
import confetti from "canvas-confetti";
import { Copy, Share2 } from "lucide-react";
import AnimatedChart from "./AnimatedChart";
import ResultCard from "./ResultCard";
import SliderInput from "./SliderInput";
import AdSlot from "./AdSlot";
import { formatINR, sipMaturity } from "../lib/calculations";

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const maturity = sipMaturity(monthly, rate, years);
    const invested = monthly * years * 12;
    const gained = maturity - invested;
    const plus500 = sipMaturity(monthly + 500, rate, years) - maturity;
    const barData = [
      { label: "Invested", value: invested },
      { label: "Gained", value: gained },
      { label: "Maturity", value: maturity }
    ];
    return { maturity, invested, gained, plus500, barData };
  }, [monthly, rate, years]);

  const shareText = `My SIP estimate: ${formatINR(result.maturity)} in ${years} years with ${formatINR(monthly)}/month. Try SIP Calc India.`;

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    const url = `${window.location.origin}/sip-calculator?monthly=${monthly}&rate=${rate}&years=${years}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const celebrate = () => {
    if (result.maturity >= 10000000) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.75 } });
    }
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr]">
      <div className="glass rounded-lg p-5" data-aos="fade-up">
        <div className="grid gap-4">
          <SliderInput label="Monthly investment" value={monthly} setValue={setMonthly} min={500} max={200000} step={500} currency />
          <SliderInput label="Expected return rate" value={rate} setValue={setRate} min={1} max={30} step={0.5} suffix="%" />
          <SliderInput label="Time period" value={years} setValue={setYears} min={1} max={40} step={1} suffix=" yr" />
        </div>
        <button onClick={celebrate} className="mt-5 w-full rounded-lg bg-profit px-5 py-3 font-bold text-ink transition hover:-translate-y-0.5">
          Check wealth goal
        </button>
      </div>
      <div className="glass rounded-lg p-5" data-aos="fade-up" data-aos-delay="80">
        <div className="grid gap-4 sm:grid-cols-3">
          <ResultCard label="Total invested" value={result.invested} />
          <ResultCard label="Wealth gained" value={result.gained} accent />
          <ResultCard label="Maturity amount" value={result.maturity} accent />
        </div>
        <AdSlot id="ad-between-calculator-results" slot="2222222222" label="AdSense slot between calculator and result" />
        <AnimatedChart invested={result.invested} gained={result.gained} barData={result.barData} />
        <div className="mt-5 grid gap-3 rounded-lg border border-profit/30 bg-profit/10 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="font-semibold">What if you increase by ₹500? Extra maturity can be around <span className="number-font text-profit">{formatINR(result.plus500)}</span>.</p>
          <div className="flex gap-2">
            <button onClick={shareWhatsApp} className="inline-flex items-center gap-2 rounded-lg bg-profit px-4 py-2 font-bold text-ink"><Share2 size={16} /> WhatsApp</button>
            <button onClick={copyLink} className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 font-bold light:border-slate-200"><Copy size={16} /> {copied ? "Copied" : "Copy"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
