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
    <section>
      <h1>Lediga jobb</h1>

      {jobs.map((job: any) => (
        <article key={job.uuid}>
          <h2>{job.content.title}</h2>

          <p>{job.content.summary}</p>

          <p>
            <strong>Plats:</strong> {job.content.location}
          </p>

          <p>
            <strong>Avdelning:</strong> {job.content.department}
          </p>

          <Link href={`/jobs/${job.slug}`}>
            Läs mer
          </Link>
        </article>
      ))}
    </section>
  );
}