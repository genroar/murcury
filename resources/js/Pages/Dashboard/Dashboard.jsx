import useImages from "@/Hooks/useImages";
import DashboardLayout from "./DashboardLayout";
import ShipWithFx from "@/Components/ShipWithFedEx";
import UpcomingEvents from "@/Components/UpcomingEvents";
import NewsDashboard from "@/Components/NewsDashboard";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function Dashboard() {
    const { auth } = usePage().props;
    const { DashboardTopImage } = useImages();

    return (
        <DashboardLayout>
            <div>
                <h1 className="text-3xl font-semibold">
                    Welcome Back,{" "}
                    <span className="text-primary">{auth?.user?.name}</span>
                </h1>
                <p className="text-base text-headertext">
                    Track your parcels quickly from home page
                </p>

                <div className="mt-8 mb-6">
                    <img src={DashboardTopImage} alt="Dashboard Top Image" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <ShipWithFx />
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                            <UpcomingEvents />
                            <NewsDashboard />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
