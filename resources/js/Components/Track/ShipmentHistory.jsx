import useImages from "@/Hooks/useImages";
import TrakingModel from "../TrakingModel";
import { useState } from "react";

export default function ShipmentHistory() {
    const { Eye } = useImages();
    const [TrackingNo, setTrackingNo] = useState("");

    const ShippingHistory = [
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            address: "Cottbus, Germany",
            services: "030456",
            status: "N/A",
            coverage: "Covered",
            trackingno: "030456",
            referanceno: "030456",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            address: "Cottbus, Germany",
            services: "030456",
            status: "N/A",
            coverage: "Covered",
            trackingno: "030456",
            referanceno: "030456",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            address: "Cottbus, Germany",
            services: "030456",
            status: "N/A",
            coverage: "Covered",
            trackingno: "030456",
            referanceno: "030456",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            address: "Cottbus, Germany",
            services: "030456",
            status: "N/A",
            coverage: "Covered",
            trackingno: "030456",
            referanceno: "030456",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            address: "Cottbus, Germany",
            services: "030456",
            status: "N/A",
            coverage: "Covered",
            trackingno: "030456",
            referanceno: "030456",
        },
    ];
    return (
        <div>
            <h3 className="text-2xl font-semibold text-textdarker">
                Shipment History
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
                                    Carrier
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ship Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ship To Address
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Services
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Coverage
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tracking No.
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Reference No.
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Receipt
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ShippingHistory?.map((data, index) => (
                                <tr
                                    onClick={() =>
                                        setTrackingNo(data.trackingno)
                                    }
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
                                    <td class="px-6 py-4">{data.services}</td>
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
                                    <td class="px-6 py-4">{data.coverage}</td>
                                    <td class="px-6 py-4">{data.trackingno}</td>
                                    <td class="px-6 py-4">
                                        {data.referanceno}
                                    </td>
                                    <td class="px-6 py-4">
                                        <div className="flex gap-2 items-center">
                                            <img
                                                src={Eye}
                                                alt="Eye"
                                                className="w-5"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <TrakingModel trakingnumber={TrackingNo} />
        </div>
    );
}
