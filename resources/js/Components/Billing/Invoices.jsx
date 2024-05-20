import useImages from "@/Hooks/useImages";

export default function Invoices() {
    const { DownloadPrimary } = useImages();
    const TableData = [
        {
            status: "N/A",
            date: "13 Oct 2024",
            invoiceid: "13 Oct 2024",
            totalcharge: "030456",
            balance: "Covered",
            pointsissued: "030456",
            pointsredeemed: "030456",
            pointsexpireby: "030456",
        },
        {
            status: "N/A",
            date: "13 Oct 2024",
            invoiceid: "13 Oct 2024",
            totalcharge: "030456",
            balance: "Covered",
            pointsissued: "030456",
            pointsredeemed: "030456",
            pointsexpireby: "030456",
        },
        {
            status: "N/A",
            date: "13 Oct 2024",
            invoiceid: "13 Oct 2024",
            totalcharge: "030456",
            balance: "Covered",
            pointsissued: "030456",
            pointsredeemed: "030456",
            pointsexpireby: "030456",
        },
        {
            status: "N/A",
            date: "13 Oct 2024",
            invoiceid: "13 Oct 2024",
            totalcharge: "030456",
            balance: "Covered",
            pointsissued: "030456",
            pointsredeemed: "030456",
            pointsexpireby: "030456",
        },
        {
            status: "N/A",
            date: "13 Oct 2024",
            invoiceid: "13 Oct 2024",
            totalcharge: "030456",
            balance: "Covered",
            pointsissued: "030456",
            pointsredeemed: "030456",
            pointsexpireby: "030456",
        },
        {
            status: "N/A",
            date: "13 Oct 2024",
            invoiceid: "13 Oct 2024",
            totalcharge: "030456",
            balance: "Covered",
            pointsissued: "030456",
            pointsredeemed: "030456",
            pointsexpireby: "030456",
        },
        {
            status: "N/A",
            date: "13 Oct 2024",
            invoiceid: "13 Oct 2024",
            totalcharge: "030456",
            balance: "Covered",
            pointsissued: "030456",
            pointsredeemed: "030456",
            pointsexpireby: "030456",
        },
        {
            status: "N/A",
            date: "13 Oct 2024",
            invoiceid: "13 Oct 2024",
            totalcharge: "030456",
            balance: "Covered",
            pointsissued: "030456",
            pointsredeemed: "030456",
            pointsexpireby: "030456",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Invoices
                </h3>
                <span className="text-primary text-base font-semibold">
                    Manage Credit Cards
                </span>
            </div>

            <div className="mt-3">
                <div className="flex justify-between gap-6">
                    <div className="border border-borderlight rounded-xl p-6 w-full">
                        <h4 className="text-lg font-semibold text-textdarker">
                            0.00 USD
                        </h4>
                        <p className="text-sm text-headertext font-medium mt-2">
                            Total Balance
                        </p>
                    </div>
                    <div className="border border-borderlight rounded-xl p-6 w-full">
                        <h4 className="text-lg font-semibold text-textdarker">
                            0.00 USD
                        </h4>
                        <p className="text-sm text-headertext font-medium mt-2">
                            Balance Past Due
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div class="relative overflow-x-auto rounded-lg border border-borderlight">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Invoice ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Total Charge
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Balance
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Points Issued
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Points Redeemed
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Points Expire By
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableData?.map((data, index) => (
                                <tr
                                    key={index}
                                    class="odd:bg-white border-b cursor-pointer"
                                >
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

                                    <td class="px-6 py-4">{data.date}</td>
                                    <td class="px-6 py-4">{data.invoiceid}</td>
                                    <td class="px-6 py-4">
                                        {data.totalcharge}
                                    </td>
                                    <td class="px-6 py-4">{data.balance}</td>
                                    <td class="px-6 py-4">
                                        {data.pointsissued}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data.pointsredeemed}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data.pointsexpireby}
                                    </td>
                                    <td class="px-6 py-4">
                                        <img
                                            src={DownloadPrimary}
                                            alt="Download"
                                        />
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
