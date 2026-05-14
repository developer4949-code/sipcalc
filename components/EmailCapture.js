import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function EmailCapture() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("sipTipsDismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 9000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    localStorage.setItem("sipTipsDismissed", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-lg border border-electric/40 bg-ink p-5 shadow-glow light:bg-white">
          <button aria-label="Close SIP tips popup" onClick={close} className="absolute right-3 top-3 rounded-lg p-2 hover:bg-white/10 light:hover:bg-slate-100">
            <X size={17} />
          </button>
          <p className="font-heading text-xl font-bold">Free SIP tips on WhatsApp</p>
          <p className="mt-2 text-sm text-white/65 light:text-slate-600">Weekly bite-size investing notes for Young India. No spam, pakka.</p>
          <form className="mt-4 flex gap-2" onSubmit={(event) => { event.preventDefault(); close(); }}>
            <input aria-label="WhatsApp number" className="min-w-0 flex-1 rounded-lg border border-white/12 bg-white/8 px-3 py-2 outline-none focus:border-electric light:border-slate-200 light:bg-slate-50" placeholder="WhatsApp number" />
            <button className="rounded-lg bg-profit px-4 py-2 font-bold text-ink">Join</button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
