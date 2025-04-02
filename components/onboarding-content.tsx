"use client"

import { Button } from "@/components/ui/button"
import { SleepGenieAvatar } from "@/components/sleep-genie-avatar"

export function OnboardingContent() {
  return (
    <div className="min-h-screen sleep-gradient stars-bg flex flex-col items-center justify-center p-6 text-center">
      <div className="animate-float mb-8">
        <SleepGenieAvatar size="xl" state="awake" pulseEffect={true} />
      </div>

      <h1 className="text-4xl font-bold mb-3 text-foreground">Welcome to Azleep</h1>
      <p className="text-xl mb-8 text-muted-foreground">Let's get started with your sleep journey</p>

      <div className="max-w-md space-y-6 mb-12">
        <div className="flex items-start space-x-4">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-primary">✨</span>
          </div>
          <div className="text-left">
            <h3 className="font-medium mb-1">Set Your Sleep Schedule</h3>
            <p className="text-sm text-muted-foreground">Tell us when you typically go to bed and wake up</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-primary">🌙</span>
          </div>
          <div className="text-left">
            <h3 className="font-medium mb-1">Choose Your Preferences</h3>
            <p className="text-sm text-muted-foreground">Select your preferred sleep stories and ambient sounds</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-primary">📊</span>
          </div>
          <div className="text-left">
            <h3 className="font-medium mb-1">Track Your Progress</h3>
            <p className="text-sm text-muted-foreground">Monitor your sleep quality and get personalized insights</p>
          </div>
        </div>
      </div>

      <Button className="w-full max-w-xs rounded-full" size="lg">
        Continue
      </Button>
    </div>
  )
} 