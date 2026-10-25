import { useEffect, useRef, useState } from "react";
import { useBag, usd } from "../bag.jsx";
import { byId } from "../data/products.js";
import Icon from "./Icon.jsx";

// Product anatomy: the Custom Formula bottle with its four actives called out.
const calls = [
  ["Tretinoin", "0.025–0.1%", "Speeds up cell turnover so pores stay clear and fine lines soften.", "l1"],
  ["Niacinamide", "4%", "Calms redness and evens out tone. Gentle enough for every night.", "l2"],
  ["Clindamycin", "1%", "An antibiotic that targets the bacteria behind inflamed breakouts.", "r1"],
  ["Azelaic acid", "5–15%", "Fades dark marks and is safe to use during pregnancy.", "r2"]
];

export default function Spotlight() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  const { add, setOpen } = useBag();
  const p = byId("custom-formula");
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.35 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section className={`band spot${seen ? " in" : ""}`} id="formula" ref={ref} aria-labelledby="spot-title">
      <div className="wrap">
        <div className="spot-head">
          <p className="eyebrow"><span className="dot" />Inside the bottle</p>
          <h2 id="spot-title">One cream, mixed for one person</h2>
          <p className="lede">Your provider chooses up to three of these and sets the strength. Every refill can change as your skin does.</p>
        </div>
        <div className="spot-stage">
          <div className="spot-glow" aria-hidden="true" />
          <img className="spot-bottle" src={p.img} alt="Curology Custom Formula bottle" width="300" height="600" loading="lazy" />
          {calls.map(([n, pct, d, pos], k) => (
            <div className={`spot-call ${pos}`} key={n} style={{ "--k": k }}>
              <span className="sc-line" aria-hidden="true" />
              <div className="sc-card">
                <span className="sc-pct">{pct}</span>
                <h3>{n}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="spot-buy">
          <span className="price">{usd(p.price)}<small> {p.per}</small></span>
          <span className="spot-note">Billed every 30 days. Pause or cancel from your account.</span>
          <button className="btn" onClick={() => { add(p.id); setOpen(true); }}>Start with your formula <Icon name="arrow" size={18} /></button>
        </div>
      </div>
    </section>
  );
}
