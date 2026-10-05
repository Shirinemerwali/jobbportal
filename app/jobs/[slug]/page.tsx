import { notFound } from "next/navigation";
import { renderRichText, StoryblokServerComponent } from "@storyblok/react/rsc";
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
      <main>
        <h1>{job.content.title}</h1>

        <p>{job.content.summary}</p>

        <p>
          <strong>Plats:</strong> {job.content.location}
        </p>

        <p>
          <strong>Avdelning:</strong> {job.content.department}
        </p>

        <div
          dangerouslySetInnerHTML={{
            __html: renderRichText(job.content.content),
          }}
        />
      </main>
    );
  } catch {
    notFound();
  }
}