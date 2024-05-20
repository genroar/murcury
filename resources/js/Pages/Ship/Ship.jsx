import { useState } from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import ShipUps from "@/Components/Ship/ShipUps";
import ShipFedEx from "@/Components/Ship/ShipFedEx";
import ReportShipments from "@/Components/Ship/ReportShipments";
import SavedQuotes from "@/Components/Ship/SavedQuotes";
import UploadWorldShipShipments from "@/Components/Ship/UploadWorldShipShipments";
import PendingShipments from "@/Components/Ship/PendingShipments";

export default function Ship() {
    const [ShippingListstatus, setShippingListstatus] = useState([
        {
            id: 1,
            name: "Ship UPS",
            slug: "ship-ups",
            isActive: true,
        },
        {
            id: 2,
            name: "Ship FedEx",
            slug: "ship-fedex",
            isActive: false,
        },
        {
            id: 3,
            name: "Pending Shipments",
            slug: "pending-shipments",
            isActive: false,
        },
        {
            id: 4,
            name: "Report Shipments",
            slug: "report-shipments",
            isActive: false,
        },
        {
            id: 5,
            name: "Saved Quotes",
            slug: "saved-quotes",
            isActive: false,
        },
        {
            id: 6,
            name: "Upload WorldShip Shipments",
            slug: "upload-worldship-shipments",
            isActive: false,
        },
    ]);

    const handleShippingList = (id) => {
        const updatedShippingList = ShippingListstatus.map((item) => {
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
        setShippingListstatus(updatedShippingList);
    };

    return (
        <DashboardLayout>
            <div>
                <div>
                    <h1 className="text-3xl font-semibold text-textdarker">
                        Ship
                    </h1>
                    <p className="text-base text-#475467">
                        Manage your shipment here
                    </p>
                </div>
                <ul className="inline-flex gap-1 border border-borderprimary rounded-lg mt-5">
                    {ShippingListstatus.map((item, index) => (
                        <li
                            onClick={() => handleShippingList(item.id)}
                            key={index}
                            className={`px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${
                                index === ShippingListstatus.length - 1
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
                {ShippingListstatus.map((item, index) =>
                    item.isActive && item.slug === "ship-ups" ? (
                        <ShipUps key={index} />
                    ) : item.isActive && item.slug === "ship-fedex" ? (
                        <ShipFedEx key={index} />
                    ) : item.isActive && item.slug === "pending-shipments" ? (
                        <PendingShipments key={index} />
                    ) : item.isActive && item.slug === "report-shipments" ? (
                        <ReportShipments key={index} />
                    ) : item.isActive && item.slug === "saved-quotes" ? (
                        <SavedQuotes key={index} />
                    ) : item.isActive &&
                      item.slug === "upload-worldship-shipments" ? (
                        <UploadWorldShipShipments key={index} />
                    ) : (
                        ""
                    )
                )}
            </div>
        </DashboardLayout>
    );
}
