import { useState } from "react";
import Icon from "./Icon.jsx";

const cases = [
  { id: "a", before: "media/real-test-before.webp", after: "media/real-test-after.webp", who: "Hana, 24", what: "Hormonal acne · 12 weeks", formula: "Tretinoin, clindamycin, niacinamide" },
  { id: "b", before: "media/real-test-2-before.webp", after: "media/real-test-2-after.webp", who: "Claire, 29", what: "Breakouts and redness · 16 weeks", formula: "Azelaic acid, clindamycin, niacinamide" }
];

export default function Results() {
  const [c, setC] = useState(0);
  const [pos, setPos] = useState(50);
  const cur = cases[c];
  return (
    <section className="band results" id="results" aria-labelledby="results-title">
      <div className="wrap results-grid">
        <div className="stack">
          <p className="eyebrow">Real members, unretouched</p>
          <h2 id="results-title">Drag to see 12 weeks of change</h2>
          <p className="lede">Photos taken by members in their own bathrooms, at the start and at their last check-in.</p>
          <div className="case-tabs" role="tablist" aria-label="Choose a member">
            {cases.map((x, k) => <button key={x.id} role="tab" aria-selected={c === k} onClick={() => { setC(k); setPos(50); }}><b>{x.who}</b><span>{x.what}</span></button>)}
          </div>
          <dl className="stats">
            <div><dt>Saw clearer skin by week 12</dt><dd>81%</dd></div>
            <div><dt>Had their formula adjusted at least once</dt><dd>64%</dd></div>
          </dl>
        </div>
        <figure className="compare" style={{ "--pos": `${pos}%` }}>
          <img src={cur.before} alt={`${cur.who} before treatment`} width="481" height="962" />
          <img className="after" src={cur.after} alt={`${cur.who} after treatment`} width="481" height="962" />
          <span className="lbl l">Week 0</span><span className="lbl r">Week {cur.what.match(/(\d+) weeks/)[1]}</span>
          <span className="handle" aria-hidden="true"><Icon name="drag" size={18} /></span>
          <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Compare before and after" />
          <figcaption>Formula: {cur.formula}</figcaption>
        </figure>
      </div>
    </section>
  );
}
