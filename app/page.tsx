"use client";
import React, { useState } from "react";

// WebSocketの接続先URLを定義
const WEBSOCKET_URL = "wss://your-websocket-api-url";

const InputForm: React.FC = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // WebSocketでサーバーにメッセージを送信
    const socket = new WebSocket(WEBSOCKET_URL);
    socket.addEventListener("open", () => {
      socket.send(inputText);
      setInputText("");
    });
  };

  return (
    <>
      <div>
        <h1 className="text-4xl">ロリスと世間話をする</h1>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder="メッセージを入力"
            className="border-2 border-sky-300 px-12 py-12"
          />
          <button
            type="submit"
            className="bg-orange-400 text-white px-2 py-2 mx-10 rounded-xl"
          >
            送信
          </button>
        </form>
      </div>
    </>
  );
};

export default InputForm;
