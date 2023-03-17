import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";

export const sendMessageToServer = async (message: string) => {
  try {
    const response = await axios.post(API_URL, {
      // モデル ID の指定
      model: "gpt-4",
      // 質問内容
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchMessagesFromServer = async () => {
  try {
    const response = await axios.get(`${API_URL}/fetch-messages`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
