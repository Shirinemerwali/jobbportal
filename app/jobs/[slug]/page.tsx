import { notFound } from "next/navigation";
import { renderRichText } from "@storyblok/react/rsc";
import { getStoryblokApi } from "../../../storyblok";

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const storyblokApi = getStoryblokApi();

    const { data } = await storyblokApi.get(
      `cdn/stories/jobs/${slug}`,
      {
        version: "published",
      }
    );

    const job = data.story;

    return (
      <main className="job-detail-page">
        <section className="job-detail-hero">
          <div className="job-detail-container">
            <p className="eyebrow">
              LEDIG TJÄNST
            </p>

            <h1>{job.content.title}</h1>

            <p className="job-detail-summary">
              {job.content.summary}
            </p>

            <div className="job-info">
              <span>{job.content.location}</span>
              <span>{job.content.department}</span>
            </div>
          </div>
        </section>

        <section className="job-detail-content">
          <div
            dangerouslySetInnerHTML={{
              __html: renderRichText(job.content.content),
            }}
          />
        </section>
      </main>
    );
  } catch {
    notFound();
  }
}