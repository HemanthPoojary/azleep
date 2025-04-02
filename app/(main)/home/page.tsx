"use client"

import { useState } from "react"
import { SleepGenieAvatar } from "@/components/sleep-genie-avatar"
import { MoodSelector } from "@/components/mood-selector"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const [selectedMood, setSelectedMood] = useState<any>(null)

  const handleMoodSelect = (mood: any) => {
    setSelectedMood(mood)
  }

  const handleActionClick = (action: string) => {
    if (action.includes("sounds")) {
      router.push("/sounds")
    } else if (action.includes("journal")) {
      router.push("/journals")
    } else if (action.includes("Chat") || action.includes("Talk")) {
      router.push("/chat")
    }
  }

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <SleepGenieAvatar size="md" state="awake" />
          <div>
            <h1 className="text-2xl font-bold">Good evening</h1>
            <p className="text-muted-foreground">Ready for a good night's sleep?</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <MoodSelector onMoodSelect={handleMoodSelect} />
          </div>

          {selectedMood && (
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Suggested for you</h2>
              <div className="space-y-3">
                {selectedMood.suggestions.map((suggestion: string) => (
                  <Button
                    key={suggestion}
                    variant="outline"
                    className="w-full text-left justify-start h-auto py-3 px-4"
                    onClick={() => handleActionClick(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Tonight's Plan</h2>
            <p className="text-muted-foreground">Personalized sleep schedule and activities.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 