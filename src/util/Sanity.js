import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2024-12-18",
  dataset: "production",
  projectId: "0z17ez3s",
  useCdn: false,
});
const builder = ImageUrlBuilder(client);

export const URLFor = (source) => {
  return builder.image(source);
};
