import React, { useState } from "react";

type InputFormProps = {
  onSubmit: (message: string) => void;
};

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center p-4 border-t border-gray-200"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        placeholder="メッセージを入力..."
      />
      <button
        type="submit"
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      >
        送信
      </button>
    </form>
  );
};

export default InputForm;
