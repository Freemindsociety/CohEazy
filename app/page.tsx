"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

function RealLogo() {
  return (
    <div className="text-center mb-3">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto">
        <Image src="/logo.png" alt="Focus Logo" width={112} height={112} className="w-full h-full object-contain" />
      </div>
    </div>
  )
}

function Version1() {
  const [isLoading, setIsLoading] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 200)
  }, [])

  const handleAppleSignIn = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center px-6 sm:px-8 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-sm mx-auto w-full">
        {/* Brand Identity */}
        <div
          className={`text-center transition-all duration-800 delay-200 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <RealLogo />
          <p className="text-blue-100 font-medium leading-6 sm:leading-7 text-2xl">Get more done, stress less</p>
        </div>

        {/* Illustration */}
        <div
          className={`mt-6 transition-all duration-800 delay-300 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative w-full max-w-md mx-auto h-64 sm:h-72 z-10 -mt-6">
            <Image
              src="/productivity-illustration.png"
              alt="Person in productive flow state"
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Social Proof */}
        <div
          className={`text-center mt-20 transition-all duration-800 delay-400 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative z-20 inline-flex items-center space-x-3 bg-blue-900/20 backdrop-blur-sm rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-blue-500/20">
            <div className="flex -space-x-1">
              <div
                className="w-7 h-7 bg-blue-600 rounded-full border-2 border-blue-300/20 flex items-center justify-center animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "2s" }}
              >
                <span className="text-xs font-bold text-white">15</span>
              </div>
              <div
                className="w-7 h-7 bg-teal-600 rounded-full border-2 border-teal-300/20 flex items-center justify-center animate-bounce"
                style={{ animationDelay: "0.3s", animationDuration: "2s" }}
              >
                <span className="text-xs font-bold text-white">K+</span>
              </div>
            </div>
            <div className="text-left">
              <div className="text-base sm:text-lg font-semibold text-white">Happy users</div>
              <div className="text-xs sm:text-sm text-blue-300">saving 3+ hours daily</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`mt-13 transition-all duration-800 delay-500 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <button
            onClick={handleAppleSignIn}
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm sm:text-base py-3 sm:py-4 rounded-2xl flex items-center justify-center space-x-3 transition-all duration-200 shadow-2xl hover:shadow-orange-500/20 ${
              isLoading
                ? "opacity-70"
                : "hover:from-orange-600 hover:to-orange-700 active:scale-98 transform hover:scale-105"
            }`}
          >
            {isLoading ? (
              <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span>Continue with Apple</span>
              </>
            )}
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-orange-300/90 font-medium">One-tap, secure sign in</p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-blue-300/60 leading-5">We respect your privacy and never post to your accounts.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SignInPage() {
  return <Version1 />
}
