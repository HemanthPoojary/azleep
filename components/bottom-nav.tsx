"use client"

import { usePathname, useRouter } from "next/navigation"
import { Home, MessageCircle, Music, Book, Target } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    path: "/home",
    label: "Home",
    icon: Home
  },
  {
    path: "/chat",
    label: "Chat",
    icon: MessageCircle
  },
  {
    path: "/sounds",
    label: "Sounds",
    icon: Music
  },
  {
    path: "/journals",
    label: "Journals",
    icon: Book
  },
  {
    path: "/goals",
    label: "Goals",
    icon: Target
  }
]

export function BottomNav() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <nav className="flex justify-around items-center h-16 max-w-md mx-auto px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-sm",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
} 