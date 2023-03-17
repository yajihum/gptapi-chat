import React from "react";

type ChatMessage = {
  sender: string;
  message: string;
};

type ChatAreaProps = {
  messages: ChatMessage[];
};

const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
  return (
    <div className="overflow-y-scroll h-full p-4">
      {messages.map((message, index) => (
        <div key={index} className="mb-4">
          <p className="font-bold text-blue-600">{message.sender}</p>
          <p className="bg-gray-100 rounded-lg p-2">{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatArea;
