import './Hero.css';

function Hero({ title, subtitle, buttonText }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button>{buttonText}</button>
    </section>
  );
}

export default Hero;