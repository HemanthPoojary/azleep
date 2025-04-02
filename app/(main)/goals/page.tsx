"use client"

import { useState } from "react"
import { Target, Trophy, Calendar, Sparkles, Clock, Moon, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SleepGoal {
  id: number
  title: string
  target: string
  progress: number
  streak: number
  completed: boolean
}

interface Challenge {
  id: number
  title: string
  description: string
  reward: string
  completed: boolean
  daysLeft: number
}

const initialGoals: SleepGoal[] = [
  {
    id: 1,
    title: "8 Hours Sleep",
    target: "Sleep 8 hours every night",
    progress: 5,
    streak: 3,
    completed: false
  },
  {
    id: 2,
    title: "Consistent Bedtime",
    target: "Go to bed at 10:30 PM",
    progress: 4,
    streak: 2,
    completed: false
  }
]

const weeklyChallenges: Challenge[] = [
  {
    id: 1,
    title: "Early Bird",
    description: "Wake up at 6 AM for 5 days",
    reward: "Golden Dawn Badge",
    completed: false,
    daysLeft: 3
  },
  {
    id: 2,
    title: "Digital Sunset",
    description: "No screens 1 hour before bed",
    reward: "Digital Detox Badge",
    completed: false,
    daysLeft: 5
  }
]

export default function GoalsPage() {
  const [goals, setGoals] = useState<SleepGoal[]>(initialGoals)
  const [challenges, setChallenges] = useState<Challenge[]>(weeklyChallenges)
  const [showNewGoal, setShowNewGoal] = useState(false)
  const [newGoal, setNewGoal] = useState<Partial<SleepGoal>>({})

  const handleNewGoal = () => {
    if (newGoal.title && newGoal.target) {
      setGoals([
        ...goals,
        {
          ...newGoal,
          id: Date.now(),
          progress: 0,
          streak: 0,
          completed: false
        } as SleepGoal
      ])
      setShowNewGoal(false)
      setNewGoal({})
    }
  }

  const toggleGoalCompletion = (id: number) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        return {
          ...goal,
          progress: goal.progress + 1,
          streak: goal.progress + 1 >= 7 ? goal.streak + 1 : goal.streak,
          completed: goal.progress + 1 >= 7
        }
      }
      return goal
    }))
  }

  const toggleChallengeCompletion = (id: number) => {
    setChallenges(challenges.map(challenge => {
      if (challenge.id === id) {
        return { ...challenge, completed: !challenge.completed }
      }
      return challenge
    }))
  }

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Sleep Goals</h1>
              <p className="text-muted-foreground">Track your sleep goals</p>
            </div>
          </div>
          <Button onClick={() => setShowNewGoal(true)} size="icon">
            <Sparkles className="h-4 w-4" />
          </Button>
        </div>

        {showNewGoal && (
          <div className="bg-card rounded-lg p-6 shadow-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">New Sleep Goal</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Goal Title</label>
                <input
                  type="text"
                  value={newGoal.title || ""}
                  onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                  placeholder="e.g., 8 Hours Sleep"
                  className="w-full rounded-lg border bg-background px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Target</label>
                <input
                  type="text"
                  value={newGoal.target || ""}
                  onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
                  placeholder="e.g., Sleep 8 hours every night"
                  className="w-full rounded-lg border bg-background px-3 py-2"
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleNewGoal} className="flex-1">Create Goal</Button>
                <Button variant="outline" onClick={() => setShowNewGoal(false)}>Cancel</Button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Current Goals</h2>
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-4">
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  className="bg-muted rounded-lg p-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{goal.title}</h3>
                      <p className="text-sm text-muted-foreground">{goal.target}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">Streak: {goal.streak} weeks</span>
                      </div>
                    </div>
                    <Button
                      variant={goal.completed ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleGoalCompletion(goal.id)}
                    >
                      {goal.completed ? "Completed" : `${goal.progress}/7 days`}
                    </Button>
                  </div>
                  <div className="mt-3 h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${(goal.progress / 7) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Weekly Challenges</h2>
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="bg-muted rounded-lg p-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{challenge.daysLeft} days left</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Moon className="h-4 w-4" />
                          <span className="text-sm">{challenge.reward}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant={challenge.completed ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleChallengeCompletion(challenge.id)}
                    >
                      {challenge.completed ? "Completed" : "Mark Done"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 