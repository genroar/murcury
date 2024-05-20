import { useState } from "react";
import TrakingModel from "./TrakingModel";

export default function QuickTrack() {
    const [TrackingNo, setTrackingNo] = useState("");
    const TableData = [
        {
            shortname: "AC",
            name: "A Coffee",
            trakingNumber: "1ZAG6712IKASDFKHJ12",
            status: "N/A",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            trakingNumber: "1ZAG6712IKASDFKHJ13",
            status: "Processing",
        },
    ];
    return (
        <>
            <div className="col-span-2">
                <div>
                    <div class="relative overflow-x-auto rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead class="text-xs text-gray-700 bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Recipient
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Tracking Number
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {TableData?.map((data, index) => (
                                    <tr
                                        onClick={() =>
                                            setTrackingNo(data.trakingNumber)
                                        }
                                        key={index}
                                        class="odd:bg-white even:bg-gray-50  border-b cursor-pointer"
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
                                        <td class="px-6 py-4">
                                            {data.trakingNumber}
                                        </td>
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
            <TrakingModel trakingnumber={TrackingNo} />
        </>
    );
}
