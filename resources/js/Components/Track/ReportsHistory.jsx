export default function ReportsHostory() {
    const TableData = [
        {
            account: "13 Oct 2024",
            shortname: "AC",
            name: "A Coffee",
            reportdate: "13 Oct 2024",
            shipdate: "13 Oct 2024",
            traking: "030456",
            confirmation: "13 Oct 2024",
            coverage: "Covered",
            status: "N/A",
        },
        {
            account: "13 Oct 2024",
            shortname: "AC",
            name: "A Coffee",
            reportdate: "13 Oct 2024",
            shipdate: "13 Oct 2024",
            traking: "030456",
            confirmation: "13 Oct 2024",
            coverage: "Covered",
            status: "Processing",
        },
        {
            account: "13 Oct 2024",
            shortname: "AC",
            name: "A Coffee",
            reportdate: "13 Oct 2024",
            shipdate: "13 Oct 2024",
            traking: "030456",
            confirmation: "13 Oct 2024",
            coverage: "Covered",
            status: "Processing",
        },
        {
            account: "13 Oct 2024",
            shortname: "AC",
            name: "A Coffee",
            reportdate: "13 Oct 2024",
            shipdate: "13 Oct 2024",
            traking: "030456",
            confirmation: "13 Oct 2024",
            coverage: "Covered",
            status: "Processing",
        },
        {
            account: "13 Oct 2024",
            shortname: "AC",
            name: "A Coffee",
            reportdate: "13 Oct 2024",
            shipdate: "13 Oct 2024",
            traking: "030456",
            confirmation: "13 Oct 2024",
            coverage: "Covered",
            status: "Processing",
        },
        {
            account: "13 Oct 2024",
            shortname: "AC",
            name: "A Coffee",
            reportdate: "13 Oct 2024",
            shipdate: "13 Oct 2024",
            traking: "030456",
            confirmation: "13 Oct 2024",
            coverage: "Covered",
            status: "Processing",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Reports History
                </h3>
                <span className="text-primary text-base font-semibold">
                    Report Shipment
                </span>
            </div>

            <div className="mt-3">
                <div class="relative overflow-x-auto rounded-lg border border-borderlight">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Account
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Carrier
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Report Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ship Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tracking #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Confirmation
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
                                    <td class="px-6 py-4">{data.account}</td>
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
                                    <td class="px-6 py-4">{data.reportdate}</td>
                                    <td class="px-6 py-4">{data.shipdate}</td>
                                    <td class="px-6 py-4">{data.traking}</td>
                                    <td class="px-6 py-4">
                                        {data.confirmation}
                                    </td>
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
