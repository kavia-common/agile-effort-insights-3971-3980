"use client";

import ProtectedLayout from "@/components/ProtectedLayout";
import Navbar from "@/components/Navbar";
import ChatInterface from "@/components/ChatInterface";

export default function ChatPage() {
  return (
    <ProtectedLayout>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6 pt-8">
        <ChatInterface />
      </main>
    </ProtectedLayout>
  );
}
