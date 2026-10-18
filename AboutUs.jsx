import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <main className="page-container">
      <section className="about-layout">
        <img
          className="about-photo"
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1100&q=85"
          alt="Sunlight filtering through a lush green forest"
        />
        <div className="about-copy">
          <div className="page-heading">
            <p className="eyebrow" style={{ color: '#1e6845' }}>OUR STORY</p>
            <h1>Helping you grow a greener home.</h1>
          </div>
          <p>
            Paradise Nursery began with a simple idea: everyone deserves a little more
            nature in their everyday life. We make it easier to find beautiful plants
            that fit your space, routine, and experience level.
          </p>
          <p>
            From resilient starter plants to leafy statement pieces, our goal is to
            make plant care welcoming, practical, and joyful. We share clear care
            guidance so your plants have a better chance to thrive long after delivery.
          </p>
          <div className="feature-row">
            <span className="feature-pill">Plant-friendly guidance</span>
            <span className="feature-pill">Thoughtful selection</span>
            <span className="feature-pill">Greener everyday living</span>
          </div>
          <p><Link className="small-button" to="/products">Explore our plants</Link></p>
        </div>
      </section>
    </main>
  );
}
