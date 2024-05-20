import { useState } from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import OrderSupplies from "@/Components/Support/OrderSupplies";
import RestrictedZipCodes from "@/Components/Support/RestrictedZipCodes";
import SupportDocuments from "@/Components/Support/SupportDocuments";
import HelpCenter from "@/Components/Support/HelpCenter";
import RemoteRescue from "@/Components/Support/RemoteRescue";
import ContactUs from "@/Components/Support/ContactUs";

export default function Support() {
    const [SupportListstatus, setSupportListstatus] = useState([
        {
            id: 1,
            name: "Order Supplies",
            slug: "order-supplies",
            isActive: true,
        },
        {
            id: 2,
            name: "Restricted Zip Codes",
            slug: "restricted-zip-codes",
            isActive: false,
        },
        {
            id: 3,
            name: "Support Documents",
            slug: "support-documents",
            isActive: false,
        },
        {
            id: 4,
            name: "Help Center ",
            slug: "help-center",
            isActive: false,
        },
        {
            id: 5,
            name: "Remote Rescue",
            slug: "remote-rescue",
            isActive: false,
        },
        {
            id: 6,
            name: "Contact Us",
            slug: "contact-us",
            isActive: false,
        },
    ]);

    const handleSupportList = (id) => {
        const updatedSupportList = SupportListstatus.map((item) => {
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
        setSupportListstatus(updatedSupportList);
    };
    return (
        <DashboardLayout>
            <div>
                <div>
                    <h1 className="text-3xl font-semibold text-textdarker">
                        Support
                    </h1>
                    <p className="text-base text-#475467">
                        Get access to our customer support here
                    </p>
                </div>
                <ul className="inline-flex gap-1 border border-borderprimary rounded-lg mt-5">
                    {SupportListstatus.map((item, index) => (
                        <li
                            onClick={() => handleSupportList(item.id)}
                            key={index}
                            className={`px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${
                                index === SupportListstatus.length - 1
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
                {SupportListstatus.map((item, index) =>
                    item.isActive && item.slug === "order-supplies" ? (
                        <OrderSupplies key={index} />
                    ) : item.isActive &&
                      item.slug === "restricted-zip-codes" ? (
                        <RestrictedZipCodes key={index} />
                    ) : item.isActive && item.slug === "support-documents" ? (
                        <SupportDocuments key={index} />
                    ) : item.isActive && item.slug === "help-center" ? (
                        <HelpCenter key={index} />
                    ) : item.isActive && item.slug === "remote-rescue" ? (
                        <RemoteRescue key={index} />
                    ) : item.isActive && item.slug === "contact-us" ? (
                        <ContactUs key={index} />
                    ) : (
                        ""
                    )
                )}
            </div>
        </DashboardLayout>
    );
}
