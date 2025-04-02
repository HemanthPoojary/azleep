"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SleepGenieAvatar } from "@/components/sleep-genie-avatar"
import { useRouter } from "next/navigation"

const questions = [
  {
    id: 1,
    question: "What time do you usually go to bed?",
    options: ["Before 10 PM", "10 PM - 11 PM", "11 PM - 12 AM", "After 12 AM"]
  },
  {
    id: 2,
    question: "How many hours of sleep do you aim for?",
    options: ["Less than 6 hours", "6-7 hours", "7-8 hours", "More than 8 hours"]
  },
  {
    id: 3,
    question: "Do you have trouble falling asleep?",
    options: ["Never", "Sometimes", "Often", "Always"]
  },
  {
    id: 4,
    question: "What's your preferred way to relax before bed?",
    options: ["Reading", "Meditation", "Listening to Music", "Other"]
  }
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // All questions answered, navigate to home
      router.push("/home")
    }
  }

  return (
    <div className="min-h-screen sleep-gradient stars-bg flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="animate-float mb-8 flex justify-center">
          <SleepGenieAvatar size="lg" state="awake" pulseEffect={true} />
        </div>

        <div className="bg-card rounded-lg p-6 shadow-lg mb-4">
          <h2 className="text-xl font-semibold mb-6 text-center">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <Button
                key={option}
                variant="outline"
                className="w-full text-left justify-start h-auto py-3 px-4"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
        </div>
      </div>
    </div>
  )
} 