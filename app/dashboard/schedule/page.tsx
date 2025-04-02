"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SchedulePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen sleep-gradient stars-bg p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-foreground">Sleep Schedule</h1>
          <Button variant="outline" onClick={() => router.back()}>
            Back to Dashboard
          </Button>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Your Sleep Schedule</h2>
          <p className="text-muted-foreground">Set and manage your sleep schedule here.</p>
        </div>
      </div>
    </div>
  )
} 