import { reviews } from "../data/products.js";
import Icon from "./Icon.jsx";

export default function Reviews() {
  return (
    <section className="band reviews" id="reviews" aria-labelledby="rev-title">
      <div className="wrap">
        <div className="head"><div className="stack"><p className="eyebrow">Members</p><h2 id="rev-title">What changed for them</h2></div></div>
        <div className="rev-grid">
          {reviews.map((r) => (
            <figure className="rev" key={r.name}>
              <img src={r.img} alt="" loading="lazy" width="400" height="400" />
              <div className="rev-body">
                <span className="stars" aria-label="5 out of 5">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={14} />)}</span>
                <blockquote>{r.text}</blockquote>
                <figcaption><b>{r.name}</b>{r.meta}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
