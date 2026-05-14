import Link from "next/link";
import { useEffect, useState } from "react";
import { Calculator, Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/sip-calculator", label: "SIP" },
  { href: "/reverse-sip-calculator", label: "Reverse SIP" },
  { href: "/step-up-sip-calculator", label: "Step-up" },
  { href: "/lumpsum-calculator", label: "Lumpsum" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const shouldLight = saved === "light";
    setLight(shouldLight);
    document.documentElement.classList.toggle("light", shouldLight);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-2xl light:bg-white/85 light:border-slate-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-electric text-ink shadow-glow">
            <Calculator size={22} />
          </span>
          SIP Calc India
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-100">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/8 transition hover:bg-white/15 light:border-slate-200 light:bg-slate-50">
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/8 lg:hidden light:border-slate-200 light:bg-slate-50">
            <Menu size={21} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 260, damping: 28 }} className="ml-auto h-full w-80 bg-ink p-5 shadow-2xl light:bg-white" onClick={(event) => event.stopPropagation()}>
              <div className="mb-7 flex items-center justify-between">
                <span className="font-heading text-lg font-bold">Menu</span>
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 light:bg-slate-100">
                  <X size={20} />
                </button>
              </div>
              <div className="grid gap-2">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg border border-white/10 px-4 py-3 font-semibold light:border-slate-200">
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
