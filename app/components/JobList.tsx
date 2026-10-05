import Link from "next/link";

export default async function Joblist() {
  const { getStoryblokApi } = await import("../../storyblok");
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories", {
    starts_with: "jobs/",
    content_type: "job-post",
    version: "published",
  });

  const jobs = data.stories;

  return (
    <main className="jobs-page">
      <section className="jobs-hero">
        <div className="hero-content">
          <p className="eyebrow">JOBBPORTAL</p>

          <h1>
            Hitta ditt nästa
            <br />
            jobb.
          </h1>

          <p className="hero-text">
            Upptäck nya möjligheter och hitta jobbet som passar
            dig och din karriär.
          </p>
        </div>
      </section>

      <section className="jobs-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MÖJLIGHETER</p>
            <h2>Lediga jobb</h2>
          </div>

          <p className="job-count">
            {jobs.length} lediga tjänster
          </p>
        </div>

        <div className="jobs-grid">
          {jobs.map((job: any) => (
            <article className="job-card" key={job.uuid}>
              <div className="job-card-top">
                <span className="job-department">
                  {job.content.department}
                </span>
              </div>

              <div className="job-card-body">
                <h3>{job.content.title}</h3>

                <p className="job-summary">
                  {job.content.summary}
                </p>

                <p className="job-location">
                  📍 {job.content.location}
                </p>
              </div>

              <div className="job-card-footer">
                <Link
                  className="job-link"
                  href={`/jobs/${job.slug}`}
                >
                  Läs mer
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}