"use client";

import { useState } from "react";
import "@/styles/auth.css";
import { Mail, Lock } from "lucide-react"; // иконки

type AuthFormProps = {
    type: "login" | "register" | "forgot";
    onSubmit: (email: string, password?: string) => void;
};

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email, password);
    };
    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h1 className="auth-title">
                {type === "login" && "Log in"}
                {type === "register" && "Register"}
                {type === "forgot" && ""}
            </h1>
            <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg">
                <Mail className="text-gray-400 w-5 h-5" />
                <input
                    type="email"
                    placeholder="Email"
                    className="auth-input bg-transparent border-0 focus:ring-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            {type !== "forgot" && (
                <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg">
                    <Lock className="text-gray-400 w-5 h-5" />
                    <input
                        type="password"
                        placeholder="Password"
                        className="auth-input bg-transparent border-0 focus:ring-0"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            )}
            {type === "login" && (
                <a href="/forgot-password" className="auth-link">
                    Forgot username or password?
                </a>
            )}
            <button type="submit" className="auth-button">
                {type === "login" && "Log in"}
                {type === "register" && "Sign up"}
                {type === "forgot" && "Send reset link"}
            </button>
        </form>
    );
}