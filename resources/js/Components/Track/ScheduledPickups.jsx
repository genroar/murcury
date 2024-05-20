export default function ScheduledPickups() {
    const TableData = [
        {
            shortname: "AC",
            name: "A Coffee",
            pickupdate: "13 Oct 2024",
            address: "13 Oct 2024",
            zipcode: "030456",
            dispatch: "13 Oct 2024",
            status: "N/A",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            pickupdate: "13 Oct 2024",
            address: "13 Oct 2024",
            zipcode: "030456",
            dispatch: "13 Oct 2024",
            status: "N/A",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            pickupdate: "13 Oct 2024",
            address: "13 Oct 2024",
            zipcode: "030456",
            dispatch: "13 Oct 2024",
            status: "N/A",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            pickupdate: "13 Oct 2024",
            address: "13 Oct 2024",
            zipcode: "030456",
            dispatch: "13 Oct 2024",
            status: "N/A",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            pickupdate: "13 Oct 2024",
            address: "13 Oct 2024",
            zipcode: "030456",
            dispatch: "13 Oct 2024",
            status: "N/A",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Scheduled Pickups
                </h3>
            </div>

            <div className="mt-3">
                <div class="relative overflow-x-auto rounded-lg border border-borderlight">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Carrier
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Pickup Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ship To Address
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Zip Code
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Dispatch Information
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
                                    <td class="px-6 py-4">{data.pickupdate}</td>
                                    <td class="px-6 py-4">{data.address}</td>
                                    <td class="px-6 py-4">{data.zipcode}</td>
                                    <td class="px-6 py-4">{data.dispatch}</td>
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
