import useImages from "@/Hooks/useImages";

export default function CreditHistory() {
    const { DownloadPrimary } = useImages();
    const TableData = [
        {
            invoiceid: "N/A",
            issuedamount: "13 Oct 2024",
            issueddate: "13 Oct 2024",
            credittype: "030456",
            remainingamount: "Covered",
        },
        {
            invoiceid: "N/A",
            issuedamount: "13 Oct 2024",
            issueddate: "13 Oct 2024",
            credittype: "030456",
            remainingamount: "Covered",
        },
        {
            invoiceid: "N/A",
            issuedamount: "13 Oct 2024",
            issueddate: "13 Oct 2024",
            credittype: "030456",
            remainingamount: "Covered",
        },
        {
            invoiceid: "N/A",
            issuedamount: "13 Oct 2024",
            issueddate: "13 Oct 2024",
            credittype: "030456",
            remainingamount: "Covered",
        },
        {
            invoiceid: "N/A",
            issuedamount: "13 Oct 2024",
            issueddate: "13 Oct 2024",
            credittype: "030456",
            remainingamount: "Covered",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Credit History
                </h3>
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
                </div>
            </div>

            <div className="mt-5">
                <div class="relative overflow-x-auto rounded-lg border border-borderlight">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Invoice ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Issued Amount
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Issued Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Credit Type
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Remaining Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableData?.map((data, index) => (
                                <tr
                                    key={index}
                                    class="odd:bg-white border-b cursor-pointer"
                                >
                                    <td class="px-6 py-4">{data.invoiceid}</td>
                                    <td class="px-6 py-4">
                                        {data.issuedamount}
                                    </td>
                                    <td class="px-6 py-4">{data.issueddate}</td>
                                    <td class="px-6 py-4">{data.credittype}</td>
                                    <td class="px-6 py-4">
                                        {data.remainingamount}
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
