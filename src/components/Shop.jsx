import { useState } from "react";
import { products, SIZES, hasSizes } from "../data/products.js";
import { useBag, usd } from "../bag.jsx";
import Icon from "./Icon.jsx";

const tabs = [["all", "Everything"], ["skin", "Skin"], ["hair", "Hair"], ["set", "Sets"]];

/* The original product card: photo on the left with the description on hover,
   a light indigo panel on the right with price, stock, S / M / L sizes and two buttons. */
function Card({ p }) {
  const { add, setOpen } = useBag();
  const [size, setSize] = useState("M");
  const sized = hasSizes(p);
  const price = sized ? Math.round(p.price * SIZES[size].f * 100) / 100 : p.price;
  return (
    <article className="ocard">
      <div className="oc-img" style={{ "--tint": p.tint }}>
        {p.tag && <span className="tag">{p.tag}</span>}
        <img src={p.img} alt={p.name} loading="lazy" width="300" height="600" />
        <p className="oc-hover">{p.body}</p>
      </div>
      <form className="oc-form" onSubmit={(e) => { e.preventDefault(); add(p.id, sized ? size : "M"); setOpen(true); }}>
        <div className="oc-top">
          <h3>{p.name}</h3>
          <span className="oc-stock">In stock</span>
        </div>
        <p className="oc-price">{usd(price)}{p.per && <small> {p.per}</small>}{p.was && <s className="was">{usd(p.was)}</s>}</p>
        <p className="oc-line">{p.line}</p>
        {sized ? (
          <fieldset className="oc-sizes">
            <legend className="sr-only">Size for {p.name}</legend>
            {Object.entries(SIZES).map(([k, v]) => (
              <label key={k} title={v.ml}>
                <input className="sr-only" type="radio" name={`size-${p.id}`} value={k} checked={size === k} onChange={() => setSize(k)} />
                <span>{v.label}</span>
              </label>
            ))}
            <span className="oc-ml">{SIZES[size].ml}</span>
          </fieldset>
        ) : (
          <p className="oc-ml solo">{p.per ? "Ships every 30 days · pause any time" : "One box, everything inside"}</p>
        )}
        <div className="oc-btns">
          <button className="oc-buy" type="submit">Buy now</button>
          <button className="oc-add" type="button" onClick={() => add(p.id, sized ? size : "M")}>Add to bag</button>
        </div>
        <p className="oc-ship">Free shipping on orders from $50 in the US, Mozambique, South Africa, Portugal, Spain and Italy.</p>
      </form>
    </article>
  );
}

export default function Shop() {
  const [tab, setTab] = useState("all");
  const list = products.filter((p) => tab === "all" || p.kind === tab);
  return (
    <section className="band shop" id="shop" aria-labelledby="shop-title">
      <div className="wrap">
        <div className="head">
          <div className="stack"><p className="eyebrow"><span className="dot" />Shop</p><h2 id="shop-title">Everything in one place</h2></div>
          <div className="tabs" role="tablist" aria-label="Filter products">
            {tabs.map(([k, l]) => <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}>{l}</button>)}
          </div>
        </div>
        <div className="ocards">{list.map((p) => <Card key={p.id} p={p} />)}</div>
      </div>
    </section>
  );
}
