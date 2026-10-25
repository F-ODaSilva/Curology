import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

// Phone-only bar that appears once the hero has scrolled away and hides again over the footer.
export default function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("top"), foot = document.querySelector("footer"), lineup = document.getElementById("lineup");
    let heroGone = false, footIn = false, lineIn = false;
    const io = new IntersectionObserver((list) => {
      list.forEach((e) => { if (e.target === hero) heroGone = !e.isIntersecting; else if (e.target === lineup) lineIn = e.isIntersecting; else footIn = e.isIntersecting; });
      setShow(heroGone && !footIn && !lineIn);
    });
    [hero, foot, lineup].forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <div className={`sticky-cta${show ? " show" : ""}`} aria-hidden={!show}>
      <span><b>Your own formula</b><small>Prescribed online · from $29.90/mo</small></span>
      <a className="btn small" href="#routine" tabIndex={show ? 0 : -1}>Start <Icon name="arrow" size={16} /></a>
    </div>
  );
}
