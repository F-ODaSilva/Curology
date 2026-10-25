import { useEffect, useRef, useState } from "react";
import { useBag, usd } from "../bag.jsx";
import { byId, priceOf, hasSizes, SIZES } from "../data/products.js";
import Icon from "./Icon.jsx";

const FREE = 35;

export default function BagDrawer() {
  const { lines, setQty, subtotal, open, setOpen, clear, toast } = useBag();
  const [done, setDone] = useState(null);
  const closeRef = useRef(null);
  useEffect(() => { if (open) { closeRef.current?.focus(); document.documentElement.style.overflow = "hidden"; } else document.documentElement.style.overflow = ""; }, [open]);
  useEffect(() => { const k = (e) => e.key === "Escape" && setOpen(false); addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, [setOpen]);
  const ship = subtotal >= FREE || subtotal === 0 ? 0 : 4.95;
  const checkout = () => {
    const ref = "CU-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setDone({ ref, total: subtotal + ship, items: lines.reduce((s, l) => s + l.qty, 0) });
    clear();
  };

  return (
    <>
      <div className={`scrim${open ? " show" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`drawer${open ? " open" : ""}`} aria-label="Your bag" aria-hidden={!open}>
        <header><h2>Your bag</h2><button ref={closeRef} className="icon-btn" onClick={() => { setOpen(false); setDone(null); }} aria-label="Close bag"><Icon name="x" size={22} /></button></header>
        {done ? (
          <div className="bag-done">
            <span className="tick"><Icon name="check" size={26} /></span>
            <h3>Order placed</h3>
            <p>Reference <b>{done.ref}</b>. {done.items} {done.items === 1 ? "item" : "items"}, {usd(done.total)}. Your provider will message you within a day to confirm your formula.</p>
            <button className="btn" onClick={() => { setDone(null); setOpen(false); }}>Back to the page</button>
          </div>
        ) : lines.length === 0 ? (
          <div className="bag-empty"><span className="ring"><Icon name="bag" size={30} /></span><h3>Your bag is empty</h3><p>Start with the skin quiz, or add a product from the lineup.</p><a className="btn" href="#routine" onClick={() => setOpen(false)}>Take the quiz</a></div>
        ) : (
          <>
            <ul className="bag-lines">
              {lines.map((l) => { const p = byId(l.id); return (
                <li key={l.key}>
                  <span className="bl-img" style={{ "--tint": p.tint }}><img src={p.img} alt="" /></span>
                  <span className="bl-t"><b>{p.name}</b>{hasSizes(p) ? `Size ${l.size || "M"} · ${SIZES[l.size || "M"].ml} · ` : ""}{usd(priceOf(l))}{p.per ? ` ${p.per}` : ""}</span>
                  <span className="qty"><button onClick={() => setQty(l.key, l.qty - 1)} aria-label={`One less ${p.name}`}><Icon name="minus" size={15} /></button><output>{l.qty}</output><button onClick={() => setQty(l.key, l.qty + 1)} aria-label={`One more ${p.name}`}><Icon name="plus" size={15} /></button></span>
                </li>
              ); })}
            </ul>
            <footer>
              <div className="ship-bar"><span>{subtotal >= FREE ? "Free shipping unlocked" : `${usd(FREE - subtotal)} away from free shipping`}</span><i><b style={{ width: `${Math.min(100, (subtotal / FREE) * 100)}%` }} /></i></div>
              <div className="sum"><span>Subtotal</span><span>{usd(subtotal)}</span></div>
              <div className="sum"><span>Shipping</span><span>{ship ? usd(ship) : "Free"}</span></div>
              <div className="sum total"><span>Total</span><span>{usd(subtotal + ship)}</span></div>
              <button className="btn block" onClick={checkout}>Check out</button>
            </footer>
          </>
        )}
      </aside>
      <div className={`toast${toast ? " show" : ""}`} role="status">{toast && <><Icon name="check" size={18} />{toast}<button onClick={() => setOpen(true)}>View bag</button></>}</div>
    </>
  );
}
