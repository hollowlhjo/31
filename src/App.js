import React, { useState } from "react";
import ChatMessage from "./ChatMsg";
import ChatInput from "./ChatInput";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <h1>Чат</h1>
      <div>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            username={message.username}
            text={message.message}
            file={message.image}
            date={new Date().toLocaleString()}
          />
        ))}
        {error && <div>Помилка: {error}</div>}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default Chat;
