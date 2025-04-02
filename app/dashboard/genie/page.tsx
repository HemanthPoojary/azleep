"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { SleepGenieAvatar } from "@/components/sleep-genie-avatar"

export default function GeniePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen sleep-gradient stars-bg p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <SleepGenieAvatar size="md" state="awake" />
            <h1 className="text-2xl font-bold text-foreground">Sleep Genie</h1>
          </div>
          <Button variant="outline" onClick={() => router.back()}>
            Back to Dashboard
          </Button>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Chat with Sleep Genie</h2>
          <p className="text-muted-foreground">Get personalized sleep recommendations and advice.</p>
        </div>
      </div>
    </div>
  )
} 