import Page from "./app/components/Page";
import JobList from "./app/components/JobList";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";


console.log(
  "Storyblok token loaded:",
  Boolean(process.env.STORYBLOK_DELIVERY_API_TOKEN)
);
export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,

  use: [apiPlugin],

  components: {
    page: Page,
 "jobb-list": JobList,
  },

  apiOptions: {
    region: "eu",
  },
});