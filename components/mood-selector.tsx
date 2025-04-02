"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const moods = [
  {
    emoji: "😊",
    label: "Happy",
    suggestions: [
      "Maintain your positive energy with calming meditation",
      "Listen to gentle nature sounds",
      "Write about your good day in your sleep journal"
    ]
  },
  {
    emoji: "😴",
    label: "Sleepy",
    suggestions: [
      "Perfect time for a bedtime story",
      "Try our deep sleep sounds",
      "Follow your bedtime routine"
    ]
  },
  {
    emoji: "😔",
    label: "Sad",
    suggestions: [
      "Talk to Sleep Genie about your feelings",
      "Listen to comforting rain sounds",
      "Write your thoughts in your journal"
    ]
  },
  {
    emoji: "😫",
    label: "Stressed",
    suggestions: [
      "Try our guided stress relief meditation",
      "Practice deep breathing exercises",
      "Listen to calming piano music"
    ]
  },
  {
    emoji: "😤",
    label: "Anxious",
    suggestions: [
      "Use our anxiety relief soundscape",
      "Chat with Sleep Genie for support",
      "Write down what's on your mind"
    ]
  }
]

interface MoodSelectorProps {
  onMoodSelect: (mood: typeof moods[0]) => void
}

export function MoodSelector({ onMoodSelect }: MoodSelectorProps) {
  const [selectedMood, setSelectedMood] = useState<typeof moods[0] | null>(null)

  const handleMoodClick = (mood: typeof moods[0]) => {
    setSelectedMood(mood)
    onMoodSelect(mood)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">How are you feeling tonight?</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {moods.map((mood) => (
          <Button
            key={mood.label}
            variant={selectedMood?.label === mood.label ? "default" : "outline"}
            className="h-16 w-16 rounded-full text-2xl"
            onClick={() => handleMoodClick(mood)}
          >
            {mood.emoji}
          </Button>
        ))}
      </div>
    </div>
  )
}

