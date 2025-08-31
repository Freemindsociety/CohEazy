"use client"

import { useState, useEffect } from "react"
import { Calendar, CheckCircle2 } from "lucide-react"

const CoheazyStyleSignIn = () => {
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
    <div className="w-full max-w-sm mx-auto h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Status Bar */}
      <div className="h-12 flex items-center justify-between px-6 pt-2">
        <div className="text-white text-lg font-semibold">9:41</div>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          <svg className="w-6 h-4 ml-2" fill="white" viewBox="0 0 24 12">
            <rect x="18" y="4" width="2" height="4" rx="1" />
            <rect x="15" y="3" width="2" height="6" rx="1" />
            <rect x="12" y="2" width="2" height="8" rx="1" />
            <rect x="9" y="1" width="2" height="10" rx="1" />
          </svg>
          <div className="w-6 h-3 border border-white rounded-sm ml-1">
            <div className="w-4 h-1 bg-white rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full justify-center px-8">
        {/* Blue-Dominant Logo with Strategic Color Distribution */}
        <div
          className={`mx-auto mb-12 transition-all duration-800 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative w-20 h-20 mx-auto bg-blue-900 rounded-full flex items-center justify-center shadow-2xl">
            {/* Strategic 60-30-10 color placement */}
            {/* Blue (60% - dominant anchor) */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full animate-pulse"></div>
            <div
              className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>

            {/* Teal (30% - supporting clarity) */}
            <div
              className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-teal-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>

            {/* Orange (10% - energizing accent) */}
            <div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-400 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Center focus element with blue foundation */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-blue-800" />
            </div>
          </div>
        </div>

        {/* Brand Identity with Blue-Anchored Trust */}
        <div
          className={`text-center mb-16 transition-all duration-800 delay-200 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Focus</h1>
          <p className="text-xl text-blue-100 font-medium leading-7">Your productivity supercharger</p>
        </div>

        {/* Benefits with Blue Foundation & Teal Support */}
        <div
          className={`mb-16 transition-all duration-800 delay-300 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Never miss what matters</h3>
                <p className="text-sm text-blue-200">AI keeps you on track automatically</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Works with your apps</h3>
                <p className="text-sm text-teal-200">Notion, Google Calendar, and more</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof with Blue Foundation */}
        <div
          className={`text-center mb-10 transition-all duration-800 delay-400 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center space-x-4 bg-blue-900/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-blue-500/20 hover:bg-blue-900/30 transition-colors duration-300">
            <div className="flex -space-x-2">
              <div
                className="w-8 h-8 bg-blue-600 rounded-full border-2 border-blue-300/20 flex items-center justify-center animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "2s" }}
              >
                <span className="text-xs font-bold text-white">12</span>
              </div>
              <div
                className="w-8 h-8 bg-teal-600 rounded-full border-2 border-teal-300/20 flex items-center justify-center animate-bounce"
                style={{ animationDelay: "0.3s", animationDuration: "2s" }}
              >
                <span className="text-xs font-bold text-white">K+</span>
              </div>
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-white">Happy users</div>
              <div className="text-sm text-blue-300">saving 2+ hours daily</div>
            </div>
          </div>
        </div>

        {/* Orange CTA for Energy & Motivation */}
        <div
          className={`transition-all duration-800 delay-500 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <button
            onClick={handleAppleSignIn}
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all duration-200 shadow-2xl hover:shadow-orange-500/20 ${
              isLoading
                ? "opacity-70"
                : "hover:from-orange-600 hover:to-orange-700 active:scale-98 transform hover:scale-105"
            }`}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span>Continue with Apple</span>
              </>
            )}
          </button>

          {/* CTA Supporting Microcopy */}
          <div className="mt-3 text-center">
            <p className="text-xs text-orange-300 font-medium">One-tap, secure sign in</p>
          </div>

          {/* Trust Message with Blue Foundation */}
          <div className="mt-6 text-center">
            <p className="text-sm text-blue-300 leading-5">We respect your privacy and never post to your accounts.</p>
          </div>

          {/* Strategic Color Distribution in Trust Indicators */}
          <div className="mt-6 flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-xs text-blue-400 font-medium">Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-xs text-teal-400 font-medium">Private</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-xs text-orange-400 font-medium">Fast</span>
            </div>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-30"></div>
    </div>
  )
}

export default CoheazyStyleSignIn
