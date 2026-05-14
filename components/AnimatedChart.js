import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { formatINR } from "../lib/calculations";

export default function AnimatedChart({ invested, gained, barData, height = 310 }) {
  const pieData = [
    { name: "Invested", value: Math.max(0, invested), color: "#00D4FF" },
    { name: "Wealth gained", value: Math.max(0, gained), color: "#00FF88" }
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="h-[280px] rounded-lg bg-white/[0.04] p-3 light:bg-slate-50" aria-label="SIP split pie chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={92} paddingAngle={4} animationDuration={450}>
              {pieData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => formatINR(value)}
              contentStyle={{ background: "#0A0F1E", border: "1px solid rgba(255,255,255,.15)", borderRadius: 8, color: "#FFFFFF" }}
              itemStyle={{ color: "#FFFFFF" }}
              labelStyle={{ color: "#FFFFFF" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="h-[280px] rounded-lg bg-white/[0.04] p-3 light:bg-slate-50" aria-label="Growth bar chart">
        <ResponsiveContainer width="100%" height={height}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,.22)" />
            <XAxis dataKey="label" stroke="currentColor" fontSize={12} />
            <YAxis stroke="currentColor" fontSize={12} tickFormatter={(value) => formatINR(value, true)} />
            <Tooltip
              formatter={(value) => formatINR(value)}
              contentStyle={{ background: "#0A0F1E", border: "1px solid rgba(255,255,255,.15)", borderRadius: 8, color: "#FFFFFF" }}
              itemStyle={{ color: "#FFFFFF" }}
              labelStyle={{ color: "#FFFFFF" }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} animationDuration={500}>
              {barData.map((entry, index) => (
                <Cell key={entry.label} fill={index % 2 === 0 ? "#00D4FF" : "#7C3AED"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
