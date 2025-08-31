"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SplitSignIn() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex-col justify-center items-center p-12 text-white">
        <div className="max-w-md text-center space-y-8">
          <div className="w-32 h-32 mx-auto bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
            <Image
              src="/icon-lockup.svg"
              alt="Focus Logo"
              width={80}
              height={80}
              className="w-20 h-20 brightness-0 invert"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">Focus</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Your productivity supercharger that helps you stay focused on what matters most.
            </p>
          </div>

          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-purple-100">AI-powered focus assistance</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-purple-100">Seamless app integrations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-purple-100">Beautiful productivity insights</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div
          className={`w-full max-w-sm space-y-8 ${mounted ? "animate-in fade-in slide-in-from-right-4 duration-1000" : "opacity-0"}`}
        >
          <div className="md:hidden text-center">
            <Image src="/icon-lockup.svg" alt="Focus Logo" width={64} height={64} className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Focus</h1>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
            <p className="text-gray-600">Sign in to continue your productivity journey</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Join thousands of productive users</p>
              <div className="flex justify-center items-center gap-2 mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm font-medium text-gray-700">15,000+ users</span>
              </div>
            </div>

            <Button className="w-full h-12 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              Continue with Apple
            </Button>
          </div>

          <p className="text-gray-400 text-xs text-center">We respect your privacy and never post to your accounts.</p>
        </div>
      </div>
    </div>
  )
}
