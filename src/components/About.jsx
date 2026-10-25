/* The original "About" section, kept with its copy and its three rows:
   text + image, the fanned card deck, and the grayscale image that wakes up on hover. */
const deck = ["media/hair-loss-2.webp", "media/hair-loss.webp", "media/testimonial-2.webp", "media/curology-products.webp", "media/regrow-hair.webp"];

export default function About() {
  return (
    <section className="band about" id="about" aria-labelledby="about-title">
      <div className="blob two" aria-hidden="true" />
      <div className="wrap about-rows">
        <div className="about-row">
          <div className="stack">
            <h2 id="about-title">Skincare for Every Glow</h2>
            <p className="lede">Our skincare solutions are crafted to tackle everything from anti-aging to dark spots, helping you achieve radiant, healthy skin. We combine nature and science for results you can trust.</p>
          </div>
          <img className="about-img" src="media/curology-products.webp" alt="The full Curology line on a shelf" width="1600" height="934" loading="lazy" />
        </div>

        <div className="about-row flip">
          <div className="stack">
            <h2>Haircare to Thrive</h2>
            <p className="lede">Our innovative hair growth products nourish and strengthen your hair, giving it the care it deserves. Whether you're tackling thinning or looking to boost shine, we've got you covered.</p>
          </div>
          <div className="deck" tabIndex={0} aria-label="Haircare results, hover or focus to fan the cards">
            {deck.map((src, i) => (
              <figure key={src} className="deck-card" style={{ "--i": i, zIndex: 5 - i }}>
                <img src={src} alt="" width="400" height="400" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>

        <div className="about-commit">
          <h2>Your Beauty, Our Commitment</h2>
          <p className="lede">At <span className="brand-word">Curology</span>, we're dedicated to providing premium skincare and haircare solutions that enhance your natural beauty. Discover the perfect blend of science and care with products that are made for you.</p>
          <img className="commit-img" src="media/clear-skin-2.webp" alt="Woman with clear skin framing her face with her hands" width="550" height="366" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
