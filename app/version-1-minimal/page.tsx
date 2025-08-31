"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MinimalSignIn() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className={`w-full max-w-xs space-y-12 ${mounted ? "animate-in fade-in duration-700" : "opacity-0"}`}>
        <div className="text-center">
          <Image src="/icon-lockup.svg" alt="Focus Logo" width={80} height={80} className="w-20 h-20 mx-auto mb-6" />
          <p className="text-gray-600 text-base">Your productivity supercharger</p>
        </div>

        <div className="space-y-4">
          <div className="text-center space-y-2">
            <p className="text-gray-800 font-medium">Never miss what matters</p>
            <p className="text-gray-800 font-medium">Works with your apps</p>
            <p className="text-gray-800 font-medium">Smart insights</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">15,000+ users save 3+ hours daily</p>
        </div>

        <Button className="w-full h-12 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
          </svg>
          Continue with Apple
        </Button>

        <p className="text-gray-400 text-xs text-center">We respect your privacy and never post to your accounts.</p>
      </div>
    </div>
  )
}
