"use client"

import { useState } from "react"
import { FloresLogo } from "./flores-logo"
import { TFASelectionStep } from "./tfa-selection-step"
import { TFACodeEntryStep } from "./tfa-code-entry-step"

export function TFAPage() {
  const [step, setStep] = useState<"selection" | "code">("selection")
  const [selectedMethod, setSelectedMethod] = useState<"email" | "sms" | null>(null)
  const [rememberBrowser, setRememberBrowser] = useState(false)

  const handleSelectionSubmit = (method: "email" | "sms", remember: boolean) => {
    setSelectedMethod(method)
    setRememberBrowser(remember)
    setStep("code")
  }

  const handleCodeSubmit = (code: string) => {
    
    console.log("Code submitted:", code, "Method:", selectedMethod, "Remember:", rememberBrowser)
    
    window.location.href = "https://www.flores247.com/"
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      <header className="w-full py-3 sm:py-4 px-4 sm:px-6 lg:px-0" style={{ paddingLeft: "clamp(1rem, 4vw, 50px)" }}>
        <div className="flex items-start">
          <FloresLogo className="items-start" />
        </div>
      </header>

      
      <div
        className="w-full py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-center gap-2"
        style={{
          background: "linear-gradient(rgb(0, 153, 216) 0%, rgb(0, 61, 107) 100%)",
          height: "auto",
          minHeight: "132px",
        }}
      >
        <svg
          width="18"
          height="18"
          className="sm:w-5 sm:h-5 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <h1 className="text-white text-sm sm:text-lg lg:text-xl font-bold uppercase tracking-wide text-center">
          Perform Second Factor Authentication
        </h1>
      </div>

      
      <div className="flex-1 flex items-start justify-center px-4 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
            {step === "selection" ? (
              <TFASelectionStep onSubmit={handleSelectionSubmit} />
            ) : (
              <TFACodeEntryStep
                method={selectedMethod || "email"}
                onSubmit={handleCodeSubmit}
                onResend={() => {
                  
                  console.log("Resending code...")
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

