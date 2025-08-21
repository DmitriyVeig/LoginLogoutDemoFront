"use client";

import AuthForm from "@/components/Authform";

export default function RegisterPage() {
    const handleRegister = async (email: string, password?: string) => {
        await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
    };

    return <AuthForm type="register" onSubmit={handleRegister} />;
}