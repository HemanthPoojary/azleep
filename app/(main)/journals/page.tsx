"use client"

import { useState } from "react"
import { Book, Plus, Star, Moon, Sun, CloudMoon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface JournalEntry {
  id: number
  date: string
  mood: string
  sleepQuality: number
  sleepDuration: string
  dreams: string
  notes: string
}

const sampleEntries: JournalEntry[] = [
  {
    id: 1,
    date: "2024-04-02",
    mood: "😊",
    sleepQuality: 4,
    sleepDuration: "7h 30m",
    dreams: "Peaceful dream about flying",
    notes: "Had a great night's sleep after meditation"
  }
]

export default function JournalsPage() {
  const [entries, setEntries] = useState<JournalEntry[]>(sampleEntries)
  const [showNewEntry, setShowNewEntry] = useState(false)
  const [newEntry, setNewEntry] = useState<Partial<JournalEntry>>({
    date: new Date().toISOString().split('T')[0],
    sleepQuality: 0
  })

  const handleNewEntry = () => {
    if (newEntry.notes) {
      setEntries([
        {
          ...newEntry,
          id: Date.now(),
          date: newEntry.date || new Date().toISOString().split('T')[0],
          mood: newEntry.mood || "😊",
          sleepQuality: newEntry.sleepQuality || 0,
          sleepDuration: newEntry.sleepDuration || "0h 0m",
          dreams: newEntry.dreams || "",
          notes: newEntry.notes
        } as JournalEntry,
        ...entries
      ])
      setShowNewEntry(false)
      setNewEntry({
        date: new Date().toISOString().split('T')[0],
        sleepQuality: 0
      })
    }
  }

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Book className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Sleep Journal</h1>
              <p className="text-muted-foreground">Track your sleep journey</p>
            </div>
          </div>
          <Button onClick={() => setShowNewEntry(true)} size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {showNewEntry && (
          <div className="bg-card rounded-lg p-6 shadow-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">New Journal Entry</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  value={newEntry.date}
                  onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
                  className="w-full rounded-lg border bg-background px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">How did you sleep?</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating}
                      variant={newEntry.sleepQuality === rating ? "default" : "outline"}
                      size="icon"
                      onClick={() => setNewEntry({ ...newEntry, sleepQuality: rating })}
                    >
                      <Star className={`h-4 w-4 ${newEntry.sleepQuality >= rating ? "fill-current" : ""}`} />
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Sleep Duration</label>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setNewEntry({ ...newEntry, sleepDuration: "< 6h" })}
                  >
                    <Moon className="h-4 w-4 mr-2" />
                    {"< 6h"}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setNewEntry({ ...newEntry, sleepDuration: "6-8h" })}
                  >
                    <CloudMoon className="h-4 w-4 mr-2" />
                    6-8h
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setNewEntry({ ...newEntry, sleepDuration: "> 8h" })}
                  >
                    <Sun className="h-4 w-4 mr-2" />
                    {"> 8h"}
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Dreams (optional)</label>
                <textarea
                  value={newEntry.dreams}
                  onChange={(e) => setNewEntry({ ...newEntry, dreams: e.target.value })}
                  placeholder="Describe your dreams..."
                  className="w-full rounded-lg border bg-background px-3 py-2 min-h-[80px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Notes</label>
                <textarea
                  value={newEntry.notes}
                  onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
                  placeholder="How do you feel? Any observations about your sleep?"
                  className="w-full rounded-lg border bg-background px-3 py-2 min-h-[80px]"
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleNewEntry} className="flex-1">Save Entry</Button>
                <Button variant="outline" onClick={() => setShowNewEntry(false)}>Cancel</Button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-card rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">{entry.date}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {Array.from({ length: entry.sleepQuality }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">• {entry.sleepDuration}</span>
                  </div>
                </div>
              </div>
              {entry.dreams && (
                <div className="mb-3">
                  <p className="text-sm font-medium">Dreams:</p>
                  <p className="text-sm text-muted-foreground">{entry.dreams}</p>
                </div>
              )}
              <p className="text-sm">{entry.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 