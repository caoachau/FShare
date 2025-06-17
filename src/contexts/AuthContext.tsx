import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
    id: string
    name: string
    email: string
    avatar?: string
    role: "student" | "teacher" | "admin"
    joinDate: string
}

interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => Promise<boolean>
    register: (name: string, email: string, password: string, role?: "student" | "teacher") => Promise<boolean>
    logout: () => void
    isLoading: boolean
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
        try {
            const savedUser = localStorage.getItem("devshare_user")
            if (savedUser) {
                setUser(JSON.parse(savedUser))
            }
        } catch (error) {
            console.error('Error loading user from localStorage:', error)
            localStorage.removeItem("devshare_user")
        }
        setIsLoading(false)
    }, [])

    const login = async (email: string, password: string): Promise<boolean> => {
        setIsLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (email && password) {
            const mockUser: User = {
                id: Date.now().toString(),
                name: email.split("@")[0],
                email,
                role: email.includes("teacher") ? "teacher" : "student",
                joinDate: new Date().toISOString(),
                avatar: `https://ui-avatars.com/api/?name=${email.split("@")[0]}&background=667eea&color=fff`,
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

        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockUser: User = {
            id: Date.now().toString(),
            name,
            email,
            role,
            joinDate: new Date().toISOString(),
            avatar: `https://ui-avatars.com/api/?name=${name}&background=667eea&color=fff`,
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

    const value = {
        user,
        login,
        register,
        logout,
        isLoading,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}