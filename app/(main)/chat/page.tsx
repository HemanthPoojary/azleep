"use client"

import { useState } from "react"
import { SleepGenieAvatar } from "@/components/sleep-genie-avatar"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

const initialMessages = [
  {
    role: "assistant",
    content: "Hi! I'm your Sleep Genie. How can I help you get better sleep tonight?"
  }
]

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const newMessages = [
      ...messages,
      { role: "user", content: input }
    ]
    setMessages(newMessages)
    setInput("")

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "I understand how you're feeling. Let me help you with some relaxation techniques and sleep advice..."
        }
      ])
    }, 1000)
  }

  return (
    <div className="p-6 h-screen flex flex-col">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <SleepGenieAvatar size="md" state="awake" />
          <div>
            <h1 className="text-2xl font-bold">Sleep Genie Chat</h1>
            <p className="text-muted-foreground">Ask me anything about sleep!</p>
          </div>
        </div>

        <div className="flex-1 bg-card rounded-lg p-6 shadow-lg mb-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {message.role === "assistant" && (
                  <SleepGenieAvatar size="sm" state="awake" />
                )}
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border bg-background px-4 py-2"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
} 