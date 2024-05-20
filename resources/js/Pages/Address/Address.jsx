import AddressBook from "@/Components/Address/AddressBook";
import DashboardLayout from "../Dashboard/DashboardLayout";
import ManageShipFromLocations from "@/Components/Address/ManageShipFromLocations";
import { useState } from "react";

export default function Address() {
    const [AddressListStatus, setAddressListStatus] = useState([
        {
            id: 1,
            name: "Address Book",
            slug: "address-book",
            isActive: true,
        },
        {
            id: 2,
            name: "Manage Ship From Locations",
            slug: "manage-ship-from-locations",
            isActive: false,
        },
    ]);

    const handleAddressList = (id) => {
        const updatedAddressList = AddressListStatus.map((item) => {
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
        setAddressListStatus(updatedAddressList);
    };
    return (
        <DashboardLayout>
            <div>
                <div>
                    <h1 className="text-3xl font-semibold text-textdarker">
                        Address Book
                    </h1>
                    <p className="text-base text-#475467">
                        Access and manage your contacts here
                    </p>
                </div>
                <ul className="inline-flex gap-1 border border-borderprimary rounded-lg mt-5">
                    {AddressListStatus.map((item, index) => (
                        <li
                            onClick={() => handleAddressList(item.id)}
                            key={index}
                            className={`px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${
                                index === AddressListStatus.length - 1
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
                {AddressListStatus.map((item, index) =>
                    item.isActive && item.slug === "address-book" ? (
                        <AddressBook key={index} />
                    ) : item.isActive &&
                      item.slug === "manage-ship-from-locations" ? (
                        <ManageShipFromLocations key={index} />
                    ) : (
                        ""
                    )
                )}
            </div>
        </DashboardLayout>
    );
}
