import { useState } from "react";
import Icon from "./Icon.jsx";

/* The original hero: copy on the left, a tilted bento of photo cards with coloured
   borders on the right, all floating on the purple → pink → yellow blur. */
const cards = [
  { src: "media/clear-skin.webp", alt: "Woman touching her clear cheek", border: "#fde047", rot: 2, cls: "" },
  { src: "media/product-hands-4.webp", alt: "Hands holding Future Proof", border: "#6ee7b7", rot: -6, cls: "" },
  { src: "media/person-hero.webp", alt: "Woman applying cream", border: "#fca5a5", rot: 2, cls: "" },
  { src: "media/woman-smile-2.webp", alt: "Woman smiling after her routine", border: "#c084fc", rot: -3, cls: "" },
  { src: "media/hydrate-skin.webp", alt: "Woman with hydrated skin", border: "#be185d", rot: -6, cls: "tall" },
  { src: "media/men-happy.webp", alt: "Two friends wearing face masks", border: "#06b6d4", rot: 3, cls: "wide" },
  { src: "media/regrow-hair.webp", alt: "Man running a hand through his hair", border: "#ca8a04", rot: 6, cls: "tall" },
  { src: "media/product-hands.webp", alt: "Curology products by a bathroom sink", border: "#9333ea", rot: -3, cls: "wide" }
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | error | done
  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setState("error"); return; }
    setState("done");
  };
  return (
    <section className="hero" id="top">
      <div className="blob" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>Timeless Skin<span style={{ color: "#ef4444" }}>.</span> Lush Hair<span style={{ color: "#fde047" }}>.</span> Beautifully You<span className="dot-w">.</span></h1>
          <p className="lede">Transform your skincare and hair care routine with advanced solutions for anti-aging, acne, dark spots, and hair growth. Because your confidence deserves the best care.</p>
          {state === "done" ? (
            <div className="journey done" role="status">
              <span className="tick"><Icon name="check" size={20} /></span>
              <p><b>You're in.</b> Your two-minute skin quiz is waiting below. We also sent the link to {email}.</p>
              <a className="btn" href="#routine">Start the quiz <Icon name="arrow" size={18} /></a>
            </div>
          ) : (
            <form className="journey" onSubmit={submit} noValidate>
              <h3>Start Your Journey</h3>
              <label className="sr-only" htmlFor="heroEmail">Email</label>
              <input id="heroEmail" type="email" autoComplete="email" placeholder="Enter your email" value={email}
                onChange={(e) => { setEmail(e.target.value); if (state === "error") setState("idle"); }}
                aria-invalid={state === "error"} aria-describedby="heroErr" />
              <button className="btn" type="submit">Get my formula</button>
              <span id="heroErr" className="err">{state === "error" ? "Enter an email like name@example.com." : ""}</span>
              <p className="fine">Already a member? <a href="#shop">Log in</a> to reorder.</p>
            </form>
          )}
        </div>
        <div className="bento" aria-label="Curology members and products">
          {cards.map((c, i) => (
            <figure key={i} className={`tile ${c.cls}`} style={{ "--r": `${c.rot}deg`, "--b": c.border, animationDelay: `${i * 70}ms` }}>
              <img src={c.src} alt={c.alt} width="550" height="550" loading={i < 4 ? "eager" : "lazy"} />
            </figure>
          ))}
        </div>
      </div>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...Array(2)].map((_, k) => (
            <span key={k}>Anti-aging <i /> Acne <i /> Dark spots <i /> Hair growth <i /> Prescribed by a dermatology provider <i /> Free shipping on refills <i /></span>
          ))}
        </div>
      </div>
    </section>
  );
}
