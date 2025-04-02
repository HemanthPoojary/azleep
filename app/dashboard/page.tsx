"use client"

import { Button } from "@/components/ui/button"
import { SleepGenieAvatar } from "@/components/sleep-genie-avatar"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(`/dashboard/${path}`)
  }

  return (
    <div className="min-h-screen sleep-gradient stars-bg p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <SleepGenieAvatar size="md" state="awake" />
            <h1 className="text-2xl font-bold text-foreground">Welcome to Azleep</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Sleep Schedule</h2>
            <p className="text-muted-foreground">Track and manage your sleep schedule</p>
            <Button 
              className="mt-4" 
              variant="outline"
              onClick={() => handleNavigation('schedule')}
            >
              View Schedule
            </Button>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Sleep Stories</h2>
            <p className="text-muted-foreground">Listen to AI-generated sleep stories</p>
            <Button 
              className="mt-4" 
              variant="outline"
              onClick={() => handleNavigation('stories')}
            >
              Browse Stories
            </Button>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Sleep Insights</h2>
            <p className="text-muted-foreground">View your sleep analytics and trends</p>
            <Button 
              className="mt-4" 
              variant="outline"
              onClick={() => handleNavigation('insights')}
            >
              View Insights
            </Button>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Sleep Genie</h2>
            <p className="text-muted-foreground">Get personalized sleep recommendations</p>
            <Button 
              className="mt-4" 
              variant="outline"
              onClick={() => handleNavigation('genie')}
            >
              Talk to Genie
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 