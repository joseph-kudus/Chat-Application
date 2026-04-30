import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useUser } from "./UserContext";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const { user } = useUser();

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedUser, setSelectedUser] = useState(null);

  const [allUsers, setAllUsers] = useState(() => {
    const saved = localStorage.getItem("chatUsers");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync messages to localStorage
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  });

  // Filter out current user from user list
  const otherUsers = useMemo(() => {
    return allUsers.filter((u) => u.id !== user?.id);
  }, [allUsers, user]);

  // Get messages between current user and selected user
  const chatMessages = useMemo(() => {
    if (!selectedUser || !user) return [];
    return messages
      .filter(
        (m) =>
          (m.from === user.id && m.to === selectedUser.id) ||
          (m.from === selectedUser.id && m.to === user.id),
      )
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  }, [messages, selectedUser, user]);

  const sendMessage = (text) => {
    if (!text.trim() || !selectedUser || !user) return;

    const newMsg = {
      id: Date.now(),
      text: text.trim(),
      from: user.id,
      to: selectedUser.id,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMsg]);
  };

  const value = useMemo(
    () => ({
      messages: chatMessages,
      allMessages: messages,
      selectedUser,
      setSelectedUser,
      sendMessage,
      allUsers: otherUsers,
    }),
    [chatMessages, messages, selectedUser, otherUsers],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within ChatProvider");
  }
  return context;
}
