"use client"

import { useState } from "react"
import { Music, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const soundCategories = [
  {
    name: "Nature",
    sounds: [
      { title: "Rain", duration: "∞" },
      { title: "Ocean Waves", duration: "∞" },
      { title: "Forest Birds", duration: "∞" },
      { title: "Creek", duration: "∞" }
    ]
  },
  {
    name: "White Noise",
    sounds: [
      { title: "White Noise", duration: "∞" },
      { title: "Pink Noise", duration: "∞" },
      { title: "Brown Noise", duration: "∞" },
      { title: "Fan Sound", duration: "∞" }
    ]
  },
  {
    name: "Meditation",
    sounds: [
      { title: "Deep Om", duration: "10:00" },
      { title: "Singing Bowls", duration: "15:00" },
      { title: "Crystal Bells", duration: "12:00" },
      { title: "Gentle Chimes", duration: "8:00" }
    ]
  }
]

export default function SoundsPage() {
  const [playing, setPlaying] = useState<string | null>(null)

  const togglePlay = (title: string) => {
    if (playing === title) {
      setPlaying(null)
    } else {
      setPlaying(title)
    }
  }

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <Music className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Sleep Sounds</h1>
            <p className="text-muted-foreground">Relaxing sounds to help you sleep</p>
          </div>
        </div>

        {playing && (
          <div className="bg-card rounded-lg p-6 shadow-lg mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Now Playing</h3>
                <p className="text-sm text-muted-foreground">{playing}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPlaying(null)}
              >
                <Pause className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {soundCategories.map((category) => (
            <div key={category.name} className="bg-card rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
              <div className="space-y-3">
                {category.sounds.map((sound) => (
                  <div
                    key={sound.title}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{sound.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Duration: {sound.duration}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => togglePlay(sound.title)}
                    >
                      {playing === sound.title ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 