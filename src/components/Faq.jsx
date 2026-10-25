import { faqs } from "../data/products.js";
import Icon from "./Icon.jsx";

export default function Faq() {
  return (
    <section className="band faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="stack"><h2 id="faq-title">Questions people ask first</h2><p className="lede">Still unsure? Your provider answers messages from your account.</p></div>
        <div className="faq-list">
          {faqs.map(([q, a], k) => (
            <details key={q} open={k === 0}><summary>{q}<Icon name="chevron" size={20} /></summary><p>{a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}
