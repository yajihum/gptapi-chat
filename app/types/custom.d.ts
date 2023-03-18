import { ChatCompletionRequestMessageRoleEnum } from "openai";

export type Message = {
  role: "system" | "assistant" | "user";
  content: string;
};
