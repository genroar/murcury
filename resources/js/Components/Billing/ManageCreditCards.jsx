import useImages from "@/Hooks/useImages";

export default function ManageCreditCards() {
    const { EditGray, DeletePrimary } = useImages();
    const TableData = [
        {
            type: "030456",
            lastfourdigits: "030456",
            address: "Covered",
            primary: "030456",
        },
        {
            type: "030456",
            lastfourdigits: "030456",
            address: "Covered",
            primary: "030456",
        },
        {
            type: "030456",
            lastfourdigits: "030456",
            address: "Covered",
            primary: "030456",
        },
        {
            type: "030456",
            lastfourdigits: "030456",
            address: "Covered",
            primary: "030456",
        },
        {
            type: "030456",
            lastfourdigits: "030456",
            address: "Covered",
            primary: "030456",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Manage Credit Cards
                </h3>
                <span className="text-primary text-base font-semibold">
                    Add Card
                </span>
            </div>

            <div className="mt-5">
                <div class="relative overflow-x-auto rounded-lg border border-borderlight">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Type
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Last 4 Digits
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Billing Address
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Primary
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableData?.map((data, index) => (
                                <tr
                                    key={index}
                                    class="odd:bg-white border-b cursor-pointer"
                                >
                                    <td class="px-6 py-4">{data.type}</td>
                                    <td class="px-6 py-4">
                                        {data.lastfourdigits}
                                    </td>
                                    <td class="px-6 py-4">{data.address}</td>
                                    <td class="px-6 py-4">{data.primary}</td>
                                    <td class="px-6 py-4">
                                        <div className="flex gap-4 items-center">
                                            <img src={EditGray} alt="Edit" />
                                            <img
                                                src={DeletePrimary}
                                                alt="Delete"
                                            />
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
