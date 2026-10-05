import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { getStoryblokApi } from "../../storyblok";

export default async function JobsPage() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/jobs", {
    version: "published",
  });

  return <StoryblokServerComponent blok={data.story.content} />;
}