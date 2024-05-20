import useImages from "@/Hooks/useImages";

export default function RewardShip() {
    const { DownloadPrimary } = useImages();
    const TableData = [
        {
            invoiceid: "13 Oct 2024",
            activitydate: "13 Oct 2024",
            duedate: "13 Oct 2024",
            datepaid: "13 Oct 2024",
            creditsinprogress: "030456",
            availablecredits: "030456",
            redeemed: "030456",
            forfeited: "030456",
        },
        {
            invoiceid: "13 Oct 2024",
            activitydate: "13 Oct 2024",
            duedate: "13 Oct 2024",
            datepaid: "13 Oct 2024",
            creditsinprogress: "030456",
            availablecredits: "030456",
            redeemed: "030456",
            forfeited: "030456",
        },
        {
            invoiceid: "13 Oct 2024",
            activitydate: "13 Oct 2024",
            duedate: "13 Oct 2024",
            datepaid: "13 Oct 2024",
            creditsinprogress: "030456",
            availablecredits: "030456",
            redeemed: "030456",
            forfeited: "030456",
        },
        {
            invoiceid: "13 Oct 2024",
            activitydate: "13 Oct 2024",
            duedate: "13 Oct 2024",
            datepaid: "13 Oct 2024",
            creditsinprogress: "030456",
            availablecredits: "030456",
            redeemed: "030456",
            forfeited: "030456",
        },
        {
            invoiceid: "13 Oct 2024",
            activitydate: "13 Oct 2024",
            duedate: "13 Oct 2024",
            datepaid: "13 Oct 2024",
            creditsinprogress: "030456",
            availablecredits: "030456",
            redeemed: "030456",
            forfeited: "030456",
        },
        {
            invoiceid: "13 Oct 2024",
            activitydate: "13 Oct 2024",
            duedate: "13 Oct 2024",
            datepaid: "13 Oct 2024",
            creditsinprogress: "030456",
            availablecredits: "030456",
            redeemed: "030456",
            forfeited: "030456",
        },
        {
            invoiceid: "13 Oct 2024",
            activitydate: "13 Oct 2024",
            duedate: "13 Oct 2024",
            datepaid: "13 Oct 2024",
            creditsinprogress: "030456",
            availablecredits: "030456",
            redeemed: "030456",
            forfeited: "030456",
        },
        {
            invoiceid: "13 Oct 2024",
            activitydate: "13 Oct 2024",
            duedate: "13 Oct 2024",
            datepaid: "13 Oct 2024",
            creditsinprogress: "030456",
            availablecredits: "030456",
            redeemed: "030456",
            forfeited: "030456",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    RewardShip
                </h3>
            </div>

            <div className="mt-3">
                <div className="flex justify-between gap-6">
                    <div className="border border-borderlight rounded-xl p-6 w-full relative">
                        <h4 className="text-lg font-semibold text-textdarker">
                            322.6 USD
                        </h4>
                        <p className="text-sm text-headertext font-medium mt-2">
                            Redeemable Credits
                        </p>
                        <p className="absolute top-6 right-6 text-sm text-primary font-semibold">
                            Redeem
                        </p>
                    </div>
                    <div className="border border-borderlight rounded-xl p-6 w-full">
                        <h4 className="text-lg font-semibold text-textdarker">
                            17.33 USD
                        </h4>
                        <p className="text-sm text-headertext font-medium mt-2">
                            Credits in Progress
                        </p>
                    </div>
                    <div className="border border-borderlight rounded-xl p-6 w-full">
                        <h4 className="text-lg font-semibold text-textdarker">
                            321.82 USD
                        </h4>
                        <p className="text-sm text-headertext font-medium mt-2">
                            Total Redeemed Credits
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
                                    Activity Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Due Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date Paid
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Credits In Progress
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Available Credits
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Redeemed
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Forfeited
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
                                        {data.activitydate}
                                    </td>
                                    <td class="px-6 py-4">{data.duedate}</td>
                                    <td class="px-6 py-4">{data.datepaid}</td>
                                    <td class="px-6 py-4">
                                        {data.creditsinprogress}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data.availablecredits}
                                    </td>
                                    <td class="px-6 py-4">{data.redeemed}</td>
                                    <td class="px-6 py-4">{data.forfeited}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
