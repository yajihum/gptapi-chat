import { Configuration, OpenAIApi } from "openai";

export const configuration = new Configuration({
  organization: "org-ftZn3N040sOeiN08UGrf4oBE",
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);
