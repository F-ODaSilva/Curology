import Icon from "./Icon.jsx";

const steps = [
  ["flask", "Tell us about your skin", "Answer a few questions and take three selfies. It takes about two minutes."],
  ["doctor", "Your provider writes the formula", "A licensed dermatology provider reviews everything and picks your ingredients."],
  ["box", "It arrives every month", "Your formula and basics ship together. Message your provider whenever you need to."]
];

export default function How() {
  return (
    <section className="band how" id="how" aria-labelledby="how-title">
      <div className="wrap how-grid">
        <figure className="how-photo">
          <img src="media/doctor.webp" alt="Dermatology provider in a white coat holding a Curology bottle" loading="lazy" width="900" height="1600" />
          <figcaption>Licensed dermatology providers in all <b>50</b> states</figcaption>
        </figure>
        <div className="stack">
          <p className="eyebrow">How it works</p>
          <h2 id="how-title">A dermatology visit, without the waiting room</h2>
          <ol className="how-steps">
            {steps.map(([ic, t, d], k) => (
              <li key={t}><span className="hs-ic"><Icon name={ic} size={22} /></span><div><span className="hs-n">Step {k + 1}</span><h3>{t}</h3><p>{d}</p></div></li>
            ))}
          </ol>
          <a className="btn" href="#routine">Start the skin quiz <Icon name="arrow" size={18} /></a>
        </div>
      </div>
    </section>
  );
}
