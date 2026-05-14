import { useMemo, useState } from "react";
import AnimatedChart from "./AnimatedChart";
import ResultCard from "./ResultCard";
import SliderInput from "./SliderInput";
import { lumpsumMaturity, sipMaturity } from "../lib/calculations";

export default function LumpsumCalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(() => {
    const lumpsum = lumpsumMaturity(amount, rate, years);
    const monthlySip = Math.round(amount / 12);
    const sip = sipMaturity(monthlySip, rate, years);
    return {
      lumpsum,
      gained: lumpsum - amount,
      sip,
      barData: [
        { label: "Lumpsum", value: lumpsum },
        { label: "SIP", value: sip },
        { label: "Invested", value: amount }
      ]
    };
  }, [amount, rate, years]);

  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.25fr]">
      <div className="glass rounded-lg p-5">
        <div className="grid gap-4">
          <SliderInput label="One-time investment" value={amount} setValue={setAmount} min={1000} max={10000000} step={1000} currency />
          <SliderInput label="Expected return" value={rate} setValue={setRate} min={1} max={30} step={0.5} suffix="%" />
          <SliderInput label="Time period" value={years} setValue={setYears} min={1} max={40} step={1} suffix=" yr" />
        </div>
      </div>
      <div className="glass rounded-lg p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          <ResultCard label="Invested amount" value={amount} />
          <ResultCard label="Estimated gain" value={result.gained} accent />
          <ResultCard label="Maturity amount" value={result.lumpsum} accent />
        </div>
        <p className="mt-5 rounded-lg bg-violetx/15 p-4 font-semibold">Comparison: investing roughly the same first-year amount as monthly SIP can grow to a different result because money enters the market gradually.</p>
        <div className="mt-6">
          <AnimatedChart invested={amount} gained={result.gained} barData={result.barData} />
        </div>
      </div>
    </section>
  );
}
