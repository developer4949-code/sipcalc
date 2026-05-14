import { useMemo, useState } from "react";
import ResultCard from "./ResultCard";
import SliderInput from "./SliderInput";
import { formatINR, reverseSip, yearlyMilestones } from "../lib/calculations";

export default function ReverseSIPCalculator() {
  const [target, setTarget] = useState(10000000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);

  const result = useMemo(() => {
    const required = reverseSip(target, rate, years);
    return { required, milestones: yearlyMilestones(required, rate, years) };
  }, [target, rate, years]);

  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.2fr]">
      <div className="glass rounded-lg p-5" data-aos="fade-up">
        <div className="grid gap-4">
          <SliderInput label="Target amount" value={target} setValue={setTarget} min={100000} max={50000000} step={100000} currency />
          <SliderInput label="Time period" value={years} setValue={setYears} min={1} max={40} step={1} suffix=" yr" />
          <SliderInput label="Expected return" value={rate} setValue={setRate} min={1} max={30} step={0.5} suffix="%" />
        </div>
      </div>
      <div className="glass rounded-lg p-5" data-aos="fade-up" data-aos-delay="80">
        <ResultCard label="Required monthly SIP" value={result.required} accent />
        <p className="mt-4 rounded-lg bg-electric/10 p-4 text-lg font-bold">
          You need just <span className="number-font text-electric">{formatINR(result.required)}</span>/month to chase {formatINR(target, true)}. Crorepati plan, sorted.
        </p>
        <div className="mt-6 space-y-4">
          {result.milestones.map((item, index) => (
            <div key={`${item.year}-${item.value}`} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-electric font-bold text-ink">{index + 1}</span>
                {index !== result.milestones.length - 1 && <span className="h-10 w-px bg-electric/40" />}
              </div>
              <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.04] p-3 light:border-slate-200 light:bg-slate-50">
                <p className="font-bold">Year {item.year}</p>
                <p className="number-font text-profit">{formatINR(item.value)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
