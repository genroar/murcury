import { useState } from "react";
import TrakingModel from "../TrakingModel";

export default function PendingShipments() {
    const TableData = [
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            address: "Cottbus, Germany",
            zip: "030456",
            coverage: "Covered",
            status: "N/A",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            address: "Cottbus, Germany",
            zip: "030456",
            coverage: "Covered",
            status: "Processing",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            address: "Cottbus, Germany",
            zip: "030456",
            coverage: "Covered",
            status: "Processing",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            address: "Cottbus, Germany",
            zip: "030456",
            coverage: "Covered",
            status: "Processing",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            address: "Cottbus, Germany",
            zip: "030456",
            coverage: "Covered",
            status: "Processing",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            address: "Cottbus, Germany",
            zip: "030456",
            coverage: "Covered",
            status: "Processing",
        },
    ];
    return (
        <div>
            <h3 className="text-2xl font-semibold text-textdarker">
                Pending Shipments
            </h3>
            <p className="text-base text-headertext mt-2">
                Shipments displayed below have been created, approved, or denied
                within the past 96 hours.
            </p>
            <div className="mt-3">
                <div class="relative overflow-x-auto rounded-lg border border-borderlight">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Recipient
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ship Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ship To Address
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Zip/Postal Code
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Coverage
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableData?.map((data, index) => (
                                <tr
                                    key={index}
                                    class="odd:bg-white border-b cursor-pointer"
                                >
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        <div className="flex gap-3 items-center">
                                            <div className="w-10 h-10 rounded-full border border-[#00000014] bg-lightgray flex justify-center items-center">
                                                <h5 className="text-base font-semibold text-footerlink">
                                                    {data.shortname}
                                                </h5>
                                            </div>
                                            <p className="text-sm text-textdarker font-medium">
                                                {data.name}
                                            </p>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">{data.shipdate}</td>
                                    <td class="px-6 py-4">{data.address}</td>
                                    <td class="px-6 py-4">{data.zip}</td>
                                    <td class="px-6 py-4">{data.coverage}</td>
                                    <td class="px-6 py-4">
                                        <div>
                                            <div className="border border-borderprimary rounded-md shadow-sm px-[6px] py-[2px] inline-flex gap-2 items-center">
                                                <div className="w-[6px] h-[6px] rounded-full bg-primaryred"></div>
                                                <span className=" text-xs font-medium text-textdark">
                                                    {data.status}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
