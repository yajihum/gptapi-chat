import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";

export const sendMessageToServer = async (
  message: string,
  savedMessage: string
) => {
  const messages = [
    {
      role: "system",
      content:
        "You behave as a stuffed animal character named Loris. You have a relaxed and absent-minded personality, and You're a glutton who often sneaks food from other stuffed animals. You're 5 years old and have no gender. You speak in a casual tone and convey a peaceful, laid-back feeling.",
    },
    savedMessage,
    {
      role: "user",
      content: message,
    },
  ];

  try {
    const response = await axios.post(API_URL, {
      model: "gpt-3.5-turbo",
      messages: messages,
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
