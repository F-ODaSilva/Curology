import { useMemo, useState } from "react";
import { products, byId } from "../data/products.js";
import { useBag, usd } from "../bag.jsx";
import Icon from "./Icon.jsx";

const concerns = [["acne", "Breakouts", "media/real-test-before.webp"], ["spots", "Dark marks", "media/clear-skin.webp"], ["aging", "Fine lines", "media/clear-skin-2.webp"], ["hair", "Thinning hair", "media/hair-loss.webp"]];
const types = [["oily", "Oily, shiny by noon"], ["dry", "Dry or tight"], ["combo", "Oily T-zone, dry cheeks"], ["sensitive", "Sensitive, reacts easily"]];
const styles = [["minimal", "Two steps, I'm busy"], ["full", "Full routine, morning and night"]];

function recommend(concern, type, style) {
  if (concern === "hair") return ["hair-formula"];
  const set = ["custom-formula"];
  set.unshift(concern === "acne" && type !== "sensitive" && type !== "dry" ? "acne-cleanser" : "cleanser");
  if (style === "full") {
    set.push(type === "dry" || type === "sensitive" ? "rich-moisturizer" : "moisturizer");
    if (concern === "spots" || concern === "aging") set.push("future-proof");
  }
  return set;
}

export default function Routine() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState({ concern: null, type: null, style: null });
  const { add } = useBag();
  const rec = useMemo(() => (a.concern && (a.concern === "hair" || (a.type && a.style)) ? recommend(a.concern, a.type, a.style) : []), [a]);
  const total = rec.reduce((s, id) => s + byId(id).price, 0);
  const pick = (k, v) => { const next = { ...a, [k]: v }; setA(next); setStep(k === "concern" && v === "hair" ? 3 : step + 1); };
  const steps = ["Your main concern", "Your skin type", "Your routine"];

  return (
    <section className="band routine" id="routine" aria-labelledby="routine-title">
      <div className="wrap routine-grid">
        <div className="stack">
          <p className="eyebrow">Find your routine</p>
          <h2 id="routine-title">Three questions, then we show you what to use.</h2>
          <p className="lede">This is a preview. Your provider makes the final call after the full quiz and photos.</p>
          <ol className="steps-rail" aria-label="Progress">
            {steps.map((s, k) => <li key={s} className={k < step ? "done" : k === step ? "now" : ""}><span>{k < step ? <Icon name="check" size={14} /> : k + 1}</span>{s}</li>)}
          </ol>
        </div>

        <div className="quiz">
          {step === 0 && (
            <fieldset><legend>What do you want to change first?</legend>
              <div className="opts concerns">{concerns.map(([v, l, img]) => <button key={v} className="opt-img" onClick={() => pick("concern", v)}><img src={img} alt="" width="200" height="200" loading="lazy" /><span>{l}</span></button>)}</div>
            </fieldset>
          )}
          {step === 1 && (
            <fieldset><legend>How does your skin feel by the afternoon?</legend>
              <div className="opts">{types.map(([v, l]) => <button key={v} className="opt" onClick={() => pick("type", v)}>{l}<Icon name="arrow" size={18} /></button>)}</div>
              <button className="back" onClick={() => setStep(0)}>Back</button>
            </fieldset>
          )}
          {step === 2 && (
            <fieldset><legend>How much time do you want to spend?</legend>
              <div className="opts">{styles.map(([v, l]) => <button key={v} className="opt" onClick={() => pick("style", v)}>{l}<Icon name="arrow" size={18} /></button>)}</div>
              <button className="back" onClick={() => setStep(1)}>Back</button>
            </fieldset>
          )}
          {step === 3 && rec.length > 0 && (
            <div className="result">
              <p className="r-kicker">Your starting routine</p>
              <ul className="r-list">
                {rec.map((id, k) => { const p = byId(id); return (
                  <li key={id}><span className="r-n">{k + 1}</span><img src={p.img} alt="" width="60" height="120" /><span className="r-t"><b>{p.name}</b>{p.line}</span><span className="price">{usd(p.price)}</span></li>
                ); })}
              </ul>
              <div className="r-foot">
                <span>Total <b className="price">{usd(total)}</b>{rec.some((id) => byId(id).per) && <small> first month</small>}</span>
                <div className="row">
                  <button className="btn" onClick={() => add(rec)}>Add routine to bag</button>
                  <button className="btn ghost" onClick={() => { setA({ concern: null, type: null, style: null }); setStep(0); }}>Start again</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
