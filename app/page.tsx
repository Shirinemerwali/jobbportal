import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="eyebrow">VÄLKOMMEN TILL JOBBPORTAL</p>

          <h1>
            Sök jobb här.
          </h1>

          <p className="home-intro">
            Hitta ditt nästa jobb bland våra lediga tjänster.
          </p>

          <Link href="/jobs" className="home-button">
            Se lediga jobb
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}