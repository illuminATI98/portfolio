import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "08uzq2pr",
  dataset: "production",
  apiVersion: "2023-07-30",
  useCdn: true,
  token: "skNJTTF6NG8QefKbhTZ6TtnZaec2TFiYm7oVSdCuyk0wPAOQWBlkf8inXNM8yfrwcOQQCUeBD1SkIRucUc3vHPfo287vzptUVJAOCfHKrM5Jar1prPELkGe08PnQMbTNqtRFewXrZ8sz99zKmhc3xSNCHgS4nARHqBEBbueFk88i0QzH1WoK"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);