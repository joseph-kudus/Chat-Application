import React, { useState, useRef, useEffect } from "react";
import { useChat } from "../../context/ChatContext";
import { useUser } from "../../context/UserContext";
import "../../styles/ChatWindow.css";

function ChatWindow() {
  const { messages, selectedUser, sendMessage } = useChat();
  const { user } = useUser();
  const [text, setText] = useState("");
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (text.trim()) {
      sendMessage(text);
      setText("");
    }
  };

  if (!selectedUser) {
    return (
      <div className="chat-window empty">
        <p>Select a user to start chatting</p>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="messages-container">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.from === user.id ? "sent" : "received"}`}
          >
            <div className="message-bubble">
              <p>{msg.text}</p>
              <span className="timestamp">
                {new Date(msg.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form className="message-input" onSubmit={handleSend}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;
