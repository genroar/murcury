import useImages from "@/Hooks/useImages";

export default function ManageShipFromLocations() {
    const { EditGray, DeletePrimary } = useImages();
    const TableData = [
        {
            locationname: "030456",
            address: "Covered",
            setasdefault: "030456",
        },
        {
            locationname: "030456",
            address: "Covered",
            setasdefault: "030456",
        },
        {
            locationname: "030456",
            address: "Covered",
            setasdefault: "030456",
        },
        {
            locationname: "030456",
            address: "Covered",
            setasdefault: "030456",
        },
        {
            locationname: "030456",
            address: "Covered",
            setasdefault: "030456",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Manage Ship From Locations
                </h3>
                <div className="flex gap-5">
                    <span className="text-primary text-base font-semibold">
                        Add Location
                    </span>
                </div>
            </div>

            <div className="mt-5">
                <div class="relative overflow-x-auto rounded-lg border border-borderlight">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Location Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Set as Default
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
                                    <td class="px-6 py-4">
                                        {data.locationname}
                                    </td>
                                    <td class="px-6 py-4">{data.address}</td>
                                    <td class="px-6 py-4">
                                        {data.setasdefault}
                                    </td>

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
