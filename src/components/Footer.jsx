export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cta-band">
          <h2>Your skin, your formula.</h2>
          <a className="btn light" href="#routine">Find my formula</a>
        </div>
        <div className="foot-cols">
          <div className="stack"><span className="brand"><span className="mark" aria-hidden="true">c</span>Curology</span><p>Prescription skincare and haircare, written by licensed providers and delivered to your door.</p></div>
          <div><h4>Shop</h4><ul><li><a href="#lineup">Custom Formula</a></li><li><a href="#shop">Cleansers</a></li><li><a href="#shop">Moisturizers</a></li><li><a href="#shop">Hair Formula</a></li></ul></div>
          <div><h4>Learn</h4><ul><li><a href="#how">How it works</a></li><li><a href="#results">Results</a></li><li><a href="#routine">Skin quiz</a></li></ul></div>
          <div><h4>Help</h4><ul><li>help@curology.com</li><li>Mon–Fri, 9–5 PT</li></ul></div>
        </div>
        <p className="legal">© 2026 Curology concept redesign by OS.Design. Prescription products require a consultation with a licensed provider. Results vary.</p>
      </div>
    </footer>
  );
}
