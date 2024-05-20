import { useState } from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import UserSettings from "@/Components/Account/UserSettings";
import CompanyProfile from "@/Components/Account/CompanyProfile";
import ManageUsers from "@/Components/Account/ManageUsers";
import RewardShip from "@/Components/Account/RewardShip";
import ManageNotifyTemplates from "@/Components/Account/ManageNotifyTemplates";

export default function Account() {
    const [Accountstatus, setAccountstatus] = useState([
        {
            id: 1,
            name: "User Settings",
            slug: "user-settings",
            isActive: true,
        },
        {
            id: 2,
            name: "Company Profile",
            slug: "company-profile",
            isActive: false,
        },
        {
            id: 3,
            name: "Manage Users",
            slug: "manage-users",
            isActive: false,
        },
        {
            id: 4,
            name: "RewardShip",
            slug: "rewardship",
            isActive: false,
        },
        {
            id: 5,
            name: "Manage Notify Templates",
            slug: "manage-notify-templates",
            isActive: false,
        },
    ]);

    const handleAccountList = (id) => {
        const updatedAccountList = Accountstatus.map((item) => {
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
        setAccountstatus(updatedAccountList);
    };

    return (
        <DashboardLayout>
            <div>
                <div>
                    <h1 className="text-3xl font-semibold text-textdarker">
                        Account
                    </h1>
                    <p className="text-base text-#475467">
                        Manage your account details here
                    </p>
                </div>
                <ul className="inline-flex gap-1 border border-borderprimary rounded-lg mt-5">
                    {Accountstatus.map((item, index) => (
                        <li
                            onClick={() => handleAccountList(item.id)}
                            key={index}
                            className={`px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${
                                index === Accountstatus.length - 1
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
                {Accountstatus.map((item, index) =>
                    item.isActive && item.slug === "user-settings" ? (
                        <UserSettings key={index} />
                    ) : item.isActive && item.slug === "company-profile" ? (
                        <CompanyProfile key={index} />
                    ) : item.isActive && item.slug === "manage-users" ? (
                        <ManageUsers key={index} />
                    ) : item.isActive && item.slug === "rewardship" ? (
                        <RewardShip key={index} />
                    ) : item.isActive &&
                      item.slug === "manage-notify-templates" ? (
                        <ManageNotifyTemplates key={index} />
                    ) : (
                        ""
                    )
                )}
            </div>
        </DashboardLayout>
    );
}
