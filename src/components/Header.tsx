import Link from "next/link";
import { UserCircle2 } from "lucide-react";

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-gray-800 px-6 py-3 shadow-md">
            <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 rounded-full">
                    <UserCircle2 className="text-white w-6 h-6" />
                </div>
                <span className="text-white font-semibold text-lg">LoginLogoutDemo</span>
            </div>
            <nav className="flex gap-3">
                <Link
                    href="/register"
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Register
                </Link>
                <Link
                    href="/login"
                    className="px-3 py-1 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition">
                    Log in
                </Link>
            </nav>
        </header>
    );
}