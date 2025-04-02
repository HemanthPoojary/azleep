"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function StoriesPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen sleep-gradient stars-bg p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-foreground">Sleep Stories</h1>
          <Button variant="outline" onClick={() => router.back()}>
            Back to Dashboard
          </Button>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">AI-Generated Sleep Stories</h2>
          <p className="text-muted-foreground">Browse and listen to personalized sleep stories.</p>
        </div>
      </div>
    </div>
  )
} 