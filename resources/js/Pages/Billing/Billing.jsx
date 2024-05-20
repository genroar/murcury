import { useState } from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Invoices from "@/Components/Billing/Invoices";
import PaymentHistory from "@/Components/Billing/PaymentHistory";
import ManageCreditCards from "@/Components/Billing/ManageCreditCards";
import CreditHistory from "@/Components/Billing/CreditHistory";

export default function Billing() {
    const [BillingListStatus, setBillingListStatus] = useState([
        {
            id: 1,
            name: "Invoices",
            slug: "invoices",
            isActive: true,
        },
        {
            id: 2,
            name: "Payment History",
            slug: "payment-history",
            isActive: false,
        },
        {
            id: 3,
            name: "Manage Credit Cards",
            slug: "manage-credit-cards",
            isActive: false,
        },
        {
            id: 4,
            name: "Credit History",
            slug: "credit-history",
            isActive: false,
        },
    ]);

    const handleBillingList = (id) => {
        const updatedBillingList = BillingListStatus.map((item) => {
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
        setBillingListStatus(updatedBillingList);
    };
    return (
        <DashboardLayout>
            <div>
                <div>
                    <h1 className="text-3xl font-semibold text-textdarker">
                        Billing
                    </h1>
                    <p className="text-base text-#475467">
                        Manage your finances and billing here
                    </p>
                </div>
                <ul className="inline-flex gap-1 border border-borderprimary rounded-lg mt-5">
                    {BillingListStatus.map((item, index) => (
                        <li
                            onClick={() => handleBillingList(item.id)}
                            key={index}
                            className={`px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${
                                index === BillingListStatus.length - 1
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
                {BillingListStatus.map((item, index) =>
                    item.isActive && item.slug === "invoices" ? (
                        <Invoices key={index} />
                    ) : item.isActive && item.slug === "payment-history" ? (
                        <PaymentHistory key={index} />
                    ) : item.isActive && item.slug === "manage-credit-cards" ? (
                        <ManageCreditCards key={index} />
                    ) : item.isActive && item.slug === "credit-history" ? (
                        <CreditHistory key={index} />
                    ) : (
                        ""
                    )
                )}
            </div>
        </DashboardLayout>
    );
}
