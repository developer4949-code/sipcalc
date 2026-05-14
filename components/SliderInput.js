import { formatINR } from "../lib/calculations";

export default function SliderInput({ label, value, setValue, min, max, step, suffix = "", currency = false }) {
  return (
    <label className="block rounded-lg border border-white/10 bg-white/[0.045] p-4 light:border-slate-200 light:bg-slate-50">
      <span className="flex items-center justify-between gap-4">
        <span className="font-semibold">{label}</span>
        <span className="number-font rounded-lg bg-black/25 px-3 py-1 text-sm text-electric light:bg-white">
          {currency ? formatINR(value) : `${value}${suffix}`}
        </span>
      </span>
      <input
        className="input-range mt-4 w-full"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        aria-label={label}
      />
      <span className="mt-2 flex justify-between text-xs text-white/45 light:text-slate-500">
        <span>{currency ? formatINR(min, true) : `${min}${suffix}`}</span>
        <span>{currency ? formatINR(max, true) : `${max}${suffix}`}</span>
      </span>
    </label>
  );
}
