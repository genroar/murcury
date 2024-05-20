import useImages from "@/Hooks/useImages";

export default function PaymentHistory() {
    const { Eye } = useImages();
    const TableData = [
        {
            transactionid: "030456",
            invoice: "030456",
            date: "13 Oct 2024",
            lastfourdigits: "030456",
            authorization: "Covered",
            amount: "030456",
            status: "N/A",
            paymentmethod: "030456",
        },
        {
            transactionid: "030456",
            invoice: "030456",
            date: "13 Oct 2024",
            lastfourdigits: "030456",
            authorization: "Covered",
            amount: "030456",
            status: "N/A",
            paymentmethod: "030456",
        },
        {
            transactionid: "030456",
            invoice: "030456",
            date: "13 Oct 2024",
            lastfourdigits: "030456",
            authorization: "Covered",
            amount: "030456",
            status: "N/A",
            paymentmethod: "030456",
        },
        {
            transactionid: "030456",
            invoice: "030456",
            date: "13 Oct 2024",
            lastfourdigits: "030456",
            authorization: "Covered",
            amount: "030456",
            status: "N/A",
            paymentmethod: "030456",
        },
        {
            transactionid: "030456",
            invoice: "030456",
            date: "13 Oct 2024",
            lastfourdigits: "030456",
            authorization: "Covered",
            amount: "030456",
            status: "N/A",
            paymentmethod: "030456",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Payment History
                </h3>
            </div>

            <div className="mt-5">
                <div class="relative overflow-x-auto rounded-lg border border-borderlight">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Transaction ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Invoices
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Last 4 Digits
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Authorization
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Amount
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Payment Method
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Receipt
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
                                        {data.transactionid}
                                    </td>
                                    <td class="px-6 py-4">{data.invoice}</td>
                                    <td class="px-6 py-4">{data.date}</td>
                                    <td class="px-6 py-4">
                                        {data.lastfourdigits}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data.authorization}
                                    </td>
                                    <td class="px-6 py-4">{data.amount}</td>
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
                                    <td class="px-6 py-4">
                                        {data.paymentmethod}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#">
                                            <img src={Eye} alt="View" />
                                        </a>
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
