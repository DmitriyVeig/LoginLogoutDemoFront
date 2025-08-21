"use client";

import AuthForm from "@/components/Authform";

export default function LoginPage() {
    const handleLogin = async (email: string, password?: string) => {
        await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
    };

    return <AuthForm type="login" onSubmit={handleLogin} />;
}