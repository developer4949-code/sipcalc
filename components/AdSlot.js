export default function AdSlot({ id = "ad-slot", slot = "1234567890", label = "Advertisement", className = "" }) {
  return (
    <div id={id} className={`ad-box my-8 flex min-h-24 items-center justify-center rounded-lg p-4 text-center text-xs uppercase tracking-[0.18em] text-electric ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <span className="pointer-events-none">{label}</span>
    </div>
  );
}
