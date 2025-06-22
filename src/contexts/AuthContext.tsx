"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: "student" | "teacher" | "admin"
  joinDate: string
  permissions?: string[]
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string, role?: "student" | "teacher") => Promise<boolean>
  logout: () => void
  isLoading: boolean
  isAdmin: () => boolean
  isTeacher: () => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem("devshare_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication - check for admin credentials
    if (email && password) {
      let role: "student" | "teacher" | "admin" = "student"
      let permissions: string[] = []

      // Admin credentials
      if (email === "admin@devshare.com" || email.includes("admin")) {
        role = "admin"
        permissions = ["manage_users", "manage_content", "manage_workshops", "manage_news", "delete_content"]
      } else if (email.includes("teacher")) {
        role = "teacher"
        permissions = ["create_workshops", "upload_content"]
      }

      const mockUser: User = {
        id: Date.now().toString(),
        name: email.split("@")[0],
        email,
        role,
        joinDate: new Date().toISOString(),
        avatar: `https://ui-avatars.com/api/?name=${email.split("@")[0]}&background=667eea&color=fff`,
        permissions,
      }

      setUser(mockUser)
      localStorage.setItem("devshare_user", JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const register = async (
    name: string,
    email: string,
    password: string,
    role: "student" | "teacher" = "student",
  ): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const permissions = role === "teacher" ? ["create_workshops", "upload_content"] : []

    const mockUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role,
      joinDate: new Date().toISOString(),
      avatar: `https://ui-avatars.com/api/?name=${name}&background=667eea&color=fff`,
      permissions,
    }

    setUser(mockUser)
    localStorage.setItem("devshare_user", JSON.stringify(mockUser))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("devshare_user")
  }

  const isAdmin = () => {
    return user?.role === "admin"
  }

  const isTeacher = () => {
    return user?.role === "teacher" || user?.role === "admin"
  }

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
    isAdmin,
    isTeacher,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
