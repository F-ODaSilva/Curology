import { useEffect, useRef, useState } from "react";
import { products } from "../data/products.js";
import { useBag, usd } from "../bag.jsx";
import Icon from "./Icon.jsx";

// Pinned product "turntable": the section scrolls, the stage stays,
// and each product takes the spotlight in turn.
export default function Lineup() {
  const ref = useRef(null);
  const [i, setI] = useState(0);
  const [p, setP] = useState(0);
  const { add } = useBag();
  const reduce = typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = ref.current.getBoundingClientRect();
        const prog = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
        setP(prog);
        setI(Math.min(products.length - 1, Math.floor(prog * products.length * 0.9999)));
      });
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); };
  }, [reduce]);

  const jump = (k) => {
    const r = ref.current.getBoundingClientRect();
    const top = scrollY + r.top + (r.height - innerHeight) * ((k + 0.5) / products.length);
    reduce ? setI(k) : scrollTo({ top, behavior: "smooth" });
  };
  const cur = products[i];
  // keep the active chip visible in the phone index
  useEffect(() => {
    const list = ref.current?.querySelector(".lineup-index"), btn = list?.querySelectorAll("button")[i];
    if (list && btn && list.scrollWidth > list.clientWidth) list.scrollTo({ left: btn.offsetLeft - 16, behavior: "smooth" });
  }, [i]);

  return (
    <section className={`lineup${reduce ? " static" : ""}`} id="lineup" ref={ref} style={{ "--n": products.length, "--tint": cur.tint }} aria-labelledby="lineup-title">
      <div className="lineup-stage">
        <span className="ghost" key={`g-${cur.id}`} aria-hidden="true">{cur.name}</span>
        <div className="wrap lineup-grid">
          <div className="lineup-head">
            <p className="eyebrow"><span className="dot" />Product lineup</p>
            <h2 id="lineup-title">The lineup</h2>
            <ol className="lineup-index" aria-label="Products">
              {products.map((x, k) => (
                <li key={x.id}><button className={k === i ? "on" : ""} onClick={() => jump(k)} aria-current={k === i}><span className="li-n">{String(k + 1).padStart(2, "0")}</span>{x.name}</button></li>
              ))}
            </ol>
          </div>

          <div className="pedestal" aria-hidden="true">
            <div className="halo" />
            <div className="floor" />
            {products.map((x, k) => (
              <img key={x.id} src={x.img} alt="" className={`bottle${k === i ? " on" : k < i ? " past" : ""}`} width="300" height="600" />
            ))}
            <ul className="orbit" key={`o-${cur.id}`}>
              {cur.actives.slice(0, 4).map((a, k) => <li key={a} style={{ "--k": k }}>{a}</li>)}
            </ul>
            <div className="progress"><span style={{ width: `${p * 100}%` }} /></div>
          </div>

          <article className="lineup-card" key={cur.id} aria-live="polite">
            <div className="row">{cur.tag && <span className="tag">{cur.tag}</span>}<span className="counter"><b>{String(i + 1).padStart(2, "0")}</b> / {String(products.length).padStart(2, "0")}</span></div>
            <h3>{cur.name}</h3>
            <p className="lc-line">{cur.line}</p>
            <p className="lc-body">{cur.body}</p>
            <ul className="actives">{cur.actives.map((a) => <li key={a}>{a}</li>)}</ul>
            <div className="row lc-buy">
              <span className="price">{usd(cur.price)}{cur.per && <small> {cur.per}</small>}</span>
              {cur.was && <s className="was">{usd(cur.was)}</s>}
              <button className="btn" onClick={() => add(cur.id)}><Icon name="plus" size={18} />Add to bag</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
