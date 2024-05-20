import { useState } from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import ShipmentHistory from "@/Components/Track/ShipmentHistory";
import ReportsHistory from "@/Components/Track/ReportsHistory";
import ScheduledPickups from "@/Components/Track/ScheduledPickups";
import EndOfDayReports from "@/Components/Track/EndOfDayReports";
import PackageInvestigation from "@/Components/Track/PackageInvestigation";

export default function Track() {
    const [TrackingLiistStatus, setTrackingLiistStatus] = useState([
        {
            id: 1,
            name: "Shipment History",
            slug: "shipment-history",
            isActive: true,
        },
        {
            id: 2,
            name: "Reports History",
            slug: "reports-history",
            isActive: false,
        },
        {
            id: 3,
            name: "Scheduled Pickups",
            slug: "scheduled-pickup",
            isActive: false,
        },
        {
            id: 4,
            name: "End of Day Reports",
            slug: "end-of-day-reports",
            isActive: false,
        },
        {
            id: 5,
            name: "Package  Investigation",
            slug: "package-investigation",
            isActive: false,
        },
    ]);

    const handleTrackingList = (id) => {
        const updatedTrakingList = TrackingLiistStatus.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    isActive: true,
                };
            } else {
                return {
                    ...item,
                    isActive: false,
                };
            }
        });
        setTrackingLiistStatus(updatedTrakingList);
    };
    return (
        <DashboardLayout>
            <div>
                <div>
                    <h1 className="text-3xl font-semibold text-textdarker">
                        Track
                    </h1>
                    <p className="text-base text-#475467">
                        Track your shipments here
                    </p>
                </div>

                <ul className="inline-flex gap-1 border border-borderprimary rounded-lg mt-5">
                    {TrackingLiistStatus.map((item, index) => (
                        <li
                            onClick={() => handleTrackingList(item.id)}
                            key={index}
                            className={`px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${
                                index === TrackingLiistStatus.length - 1
                                    ? ""
                                    : "border-r border-borderprimary"
                            } ${
                                item.isActive ? "bg-lightgray" : ""
                            } hover:bg-lightgray`}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-6">
                {TrackingLiistStatus.map((item, index) =>
                    item.isActive && item.slug === "shipment-history" ? (
                        <ShipmentHistory key={index} />
                    ) : item.isActive && item.slug === "reports-history" ? (
                        <ReportsHistory key={index} />
                    ) : item.isActive && item.slug === "scheduled-pickup" ? (
                        <ScheduledPickups key={index} />
                    ) : item.isActive && item.slug === "end-of-day-reports" ? (
                        <EndOfDayReports key={index} />
                    ) : item.isActive &&
                      item.slug === "package-investigation" ? (
                        <PackageInvestigation key={index} />
                    ) : (
                        ""
                    )
                )}
            </div>
        </DashboardLayout>
    );
}
