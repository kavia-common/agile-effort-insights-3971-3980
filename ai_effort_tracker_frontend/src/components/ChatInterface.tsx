"use client";

import React, { useRef, useState, useEffect } from "react";
import Button from "@/components/Button";
import { getWebSocketURL } from "@/utils/api";

type ChatMsg = { sender: "ai" | "user"; text: string };

export default function ChatInterface() {
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState("");
  const [connected, setConnected] = useState(false);
  const ws = useRef<WebSocket | null>(null);
  const msgEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Connect to backend WebSocket endpoint (e.g., /ws/chat)
    const wsUrl = getWebSocketURL("/ws/chat");
    ws.current = new WebSocket(wsUrl);
    ws.current.onopen = () => setConnected(true);
    ws.current.onclose = () => setConnected(false);
    ws.current.onmessage = (event) => {
      setMessages((m) => [...m, { sender: "ai", text: event.data }]);
    };
    return () => {
      ws.current?.close();
    };
  }, []);

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // PUBLIC_INTERFACE
  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || !connected) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    ws.current?.send(input);
    setInput("");
  }

  return (
    <section className="flex flex-col h-full min-h-[340px] sm:min-h-[410px] border rounded-lg bg-white shadow-inner p-2 sm:p-4 relative w-full max-w-full">
      <h2 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-primary">
        Effort Analysis Chat
      </h2>
      <div className="flex-1 overflow-y-auto mb-1 space-y-2 pr-1 sm:pr-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[92%] sm:max-w-[80%] px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-base ${
              msg.sender === "user"
                ? "ml-auto bg-primary text-white"
                : "mr-auto bg-gray-200 text-secondary"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={msgEndRef}></div>
      </div>
      <form
        onSubmit={handleSend}
        className="flex flex-col xs:flex-row gap-2 xs:gap-2 mt-2"
        autoComplete="off"
      >
        <input
          type="text"
          className="flex-1 border rounded px-2 sm:px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-full"
          placeholder={
            connected ? "Ask for analysis..." : "Connecting to AI service..."
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={!connected}
        />
        <Button
          type="submit"
          color="primary"
          disabled={!input.trim() || !connected}
        >
          Send
        </Button>
      </form>
    </section>
  );
}
