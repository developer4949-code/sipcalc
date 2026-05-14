export function sipMaturity(monthly, annualRate, years) {
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return monthly * months;
  return monthly * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
}

export function reverseSip(target, annualRate, years) {
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return target / months;
  return target / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
}

export function lumpsumMaturity(principal, annualRate, years) {
  return principal * Math.pow(1 + annualRate / 100, years);
}

export function stepUpSipMaturity(startingSip, stepUpPercent, annualRate, years) {
  const monthlyRate = annualRate / 100 / 12;
  let maturity = 0;
  for (let month = 1; month <= years * 12; month += 1) {
    const yearIndex = Math.floor((month - 1) / 12);
    const sip = startingSip * Math.pow(1 + stepUpPercent / 100, yearIndex);
    maturity = (maturity + sip) * (1 + monthlyRate);
  }
  return maturity;
}

export function totalStepUpInvested(startingSip, stepUpPercent, years) {
  let total = 0;
  for (let year = 0; year < years; year += 1) {
    total += startingSip * Math.pow(1 + stepUpPercent / 100, year) * 12;
  }
  return total;
}

export function formatINR(value, compact = false) {
  if (compact) {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Math.round(value || 0));
}

export function yearlyMilestones(monthly, annualRate, years) {
  const points = [];
  const preferred = [1, 3, 5, 10, 15, 20, 25, 30].filter((year) => year <= years);
  if (!preferred.includes(years)) preferred.push(years);
  preferred.forEach((year) => {
    points.push({ year, value: sipMaturity(monthly, annualRate, year) });
  });
  return points;
}
