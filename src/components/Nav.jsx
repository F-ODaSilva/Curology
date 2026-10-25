import { useEffect, useState } from "react";
import { useBag } from "../bag.jsx";
import Icon from "./Icon.jsx";

const links = [["#top", "Home"], ["#about", "About"], ["#lineup", "Products"], ["#reviews", "Testimonials"]];

export default function Nav() {
  const { count, setOpen } = useBag();
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  const [bump, setBump] = useState(false);
  useEffect(() => { const f = () => setSolid(scrollY > 24); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  useEffect(() => { if (!count) return; setBump(true); const t = setTimeout(() => setBump(false), 500); return () => clearTimeout(t); }, [count]);
  useEffect(() => { document.documentElement.style.overflow = menu ? "hidden" : ""; }, [menu]);

  return (
    <>
      <header className={`nav${solid ? " solid" : ""}`}>
        <div className="wrap nav-row">
          <a className="brand" href="#top" aria-label="Curology home"><span className="mark" aria-hidden="true">c</span>Curology</a>
          <nav aria-label="Main"><ul className="nav-links">{links.map(([h, l]) => <li key={h}><a href={h}>{l}</a></li>)}</ul></nav>
          <a className="btn small grad hide-sm" href="#shop">Log In</a>
          <a className="btn small grad hide-sm" href="#routine">Sign In</a>
          <button className="icon-btn bag-btn" onClick={() => setOpen(true)} aria-label={`Open bag, ${count} items`}>
            <Icon name="bag" size={22} />
            {count > 0 && <span className={`bag-count${bump ? " bump" : ""}`}>{count}</span>}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setMenu(true)} aria-label="Open menu" aria-expanded={menu}><Icon name="menu" size={22} /></button>
        </div>
      </header>
      <div className={`sheet${menu ? " open" : ""}`} aria-hidden={!menu}>
        <div className="sheet-top"><span className="brand"><span className="mark" aria-hidden="true">c</span>Curology</span><button className="icon-btn" onClick={() => setMenu(false)} aria-label="Close menu"><Icon name="x" size={22} /></button></div>
        <nav aria-label="Mobile">{links.map(([h, l]) => <a key={h} href={h} onClick={() => setMenu(false)}>{l}</a>)}</nav>
        <a className="btn" href="#routine" onClick={() => setMenu(false)}>Get my formula</a>
      </div>
    </>
  );
}
