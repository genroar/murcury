export default function SavedQuotes() {
    const TableData = [
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            shipfrom: "13 Oct 2024",
            shipto: "13 Oct 2024",
            insuredvalue: "13 Oct 2024",
            Reference: "Covered",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            shipfrom: "13 Oct 2024",
            shipto: "13 Oct 2024",
            insuredvalue: "13 Oct 2024",
            Reference: "Covered",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            shipfrom: "13 Oct 2024",
            shipto: "13 Oct 2024",
            insuredvalue: "13 Oct 2024",
            Reference: "Covered",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            shipfrom: "13 Oct 2024",
            shipto: "13 Oct 2024",
            insuredvalue: "13 Oct 2024",
            Reference: "Covered",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            shipfrom: "13 Oct 2024",
            shipto: "13 Oct 2024",
            insuredvalue: "13 Oct 2024",
            Reference: "Covered",
        },
        {
            shortname: "AC",
            name: "A Coffee",
            shipdate: "13 Oct 2024",
            shipfrom: "13 Oct 2024",
            shipto: "13 Oct 2024",
            insuredvalue: "13 Oct 2024",
            Reference: "Covered",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Report Shipment History
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
                                    Carrier
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ship Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ship From
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ship To
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Insured Value
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Reference
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
                                    <td class="px-6 py-4">{data.shipfrom}</td>
                                    <td class="px-6 py-4">{data.shipto}</td>
                                    <td class="px-6 py-4">
                                        {data.insuredvalue}
                                    </td>
                                    <td class="px-6 py-4">{data.Reference}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
