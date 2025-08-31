"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

function VibrantFeature({
  emoji,
  title,
  description,
  delay = 0,
}: { emoji: string; title: string; description: string; delay?: number }) {
  return (
    <div
      className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-200/20 hover:border-purple-300/40 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-2xl">{emoji}</div>
      <div>
        <h3 className="text-gray-800 font-semibold text-sm">{title}</h3>
        <p className="text-gray-600 text-xs">{description}</p>
      </div>
    </div>
  )
}

export default function VibrantSignIn() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex flex-col items-center justify-center px-6 py-12">
      <div className={`w-full max-w-sm space-y-8 ${mounted ? "animate-in fade-in duration-1000" : "opacity-0"}`}>
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-30"></div>
            <div className="relative w-full h-full bg-white rounded-full shadow-xl flex items-center justify-center">
              <Image src="/icon-lockup.svg" alt="Focus Logo" width={80} height={80} className="w-20 h-20" />
            </div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Focus
          </h1>
          <p className="text-gray-700 text-base font-medium">Your productivity supercharger</p>
        </div>

        <div className="space-y-3">
          <VibrantFeature
            emoji="🎯"
            title="Never miss what matters"
            description="AI keeps you focused on what's important"
            delay={200}
          />
          <VibrantFeature
            emoji="🔗"
            title="Works with your apps"
            description="Seamlessly connects with your favorite tools"
            delay={400}
          />
          <VibrantFeature
            emoji="📊"
            title="Smart insights"
            description="Beautiful analytics to track your progress"
            delay={600}
          />
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-800 text-sm font-semibold">15,000+ happy users</span>
          </div>
        </div>

        <Button className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
          </svg>
          Continue with Apple
        </Button>

        <p className="text-gray-500 text-xs text-center">🔒 We respect your privacy and never post to your accounts.</p>
      </div>
    </div>
  )
}
