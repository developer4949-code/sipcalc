import { useMemo, useState } from "react";
import AnimatedChart from "./AnimatedChart";
import ResultCard from "./ResultCard";
import SliderInput from "./SliderInput";
import { sipMaturity, stepUpSipMaturity, totalStepUpInvested } from "../lib/calculations";

export default function StepUpSIPCalculator() {
  const [startingSip, setStartingSip] = useState(5000);
  const [stepUp, setStepUp] = useState(10);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);

  const result = useMemo(() => {
    const normal = sipMaturity(startingSip, rate, years);
    const step = stepUpSipMaturity(startingSip, stepUp, rate, years);
    const invested = totalStepUpInvested(startingSip, stepUp, years);
    return {
      normal,
      step,
      invested,
      gained: step - invested,
      barData: [
        { label: "Normal SIP", value: normal },
        { label: "Step-up SIP", value: step },
        { label: "Difference", value: step - normal }
      ]
    };
  }, [startingSip, stepUp, rate, years]);

  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.25fr]">
      <div className="glass rounded-lg p-5">
        <div className="grid gap-4">
          <SliderInput label="Starting SIP" value={startingSip} setValue={setStartingSip} min={500} max={200000} step={500} currency />
          <SliderInput label="Annual increase" value={stepUp} setValue={setStepUp} min={1} max={40} step={1} suffix="%" />
          <SliderInput label="Time period" value={years} setValue={setYears} min={1} max={40} step={1} suffix=" yr" />
          <SliderInput label="Expected return" value={rate} setValue={setRate} min={1} max={30} step={0.5} suffix="%" />
        </div>
      </div>
      <div className="glass rounded-lg p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          <ResultCard label="Normal SIP" value={result.normal} />
          <ResultCard label="Step-up SIP" value={result.step} accent />
          <ResultCard label="Extra wealth" value={result.step - result.normal} accent />
        </div>
        <div className="mt-6">
          <AnimatedChart invested={result.invested} gained={result.gained} barData={result.barData} />
        </div>
      </div>
    </section>
  );
}
