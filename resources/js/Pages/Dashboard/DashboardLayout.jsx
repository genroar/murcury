import Sidebar from "@/Layouts/Sidebar";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
    const { auth } = usePage().props;
    useEffect(() => {
        if (!auth.user) {
            window.location = "/login";
        }
    }, [auth]);
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full p-6">{children}</div>
        </div>
    );
}
