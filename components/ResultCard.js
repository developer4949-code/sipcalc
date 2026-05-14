import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { formatINR } from "../lib/calculations";

function useCountUp(value) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const start = display;
    const diff = value - start;
    const started = performance.now();
    const duration = 520;
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(start + diff * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return display;
}

export default function ResultCard({ label, value, accent = false }) {
  const animated = useCountUp(value);

  return (
    <motion.div layout className="gradient-border rounded-lg p-4">
      <p className="text-sm text-white/62 light:text-slate-600">{label}</p>
      <p className={`number-font mt-2 text-2xl font-bold sm:text-3xl ${accent ? "text-profit" : "text-white light:text-slate-950"}`}>
        {formatINR(animated)}
      </p>
    </motion.div>
  );
}
