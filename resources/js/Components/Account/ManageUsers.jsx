import useImages from "@/Hooks/useImages";

export default function ManageUsers() {
    const { EditGray, DeletePrimary } = useImages();
    const TableData = [
        {
            userid: "030456",
            name: "Covered",
            email: "030456",
            defaultlocation: "030456",
            role: "N/A",
        },
        {
            userid: "030456",
            name: "Covered",
            email: "030456",
            defaultlocation: "030456",
            role: "N/A",
        },
        {
            userid: "030456",
            name: "Covered",
            email: "030456",
            defaultlocation: "030456",
            role: "N/A",
        },
        {
            userid: "030456",
            name: "Covered",
            email: "030456",
            defaultlocation: "030456",
            role: "N/A",
        },
        {
            userid: "030456",
            name: "Covered",
            email: "030456",
            defaultlocation: "030456",
            role: "N/A",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Manage Users
                </h3>
                <div className="flex gap-5">
                    <span className="text-primary text-base font-semibold">
                        Add User
                    </span>
                </div>
            </div>

            <div className="mt-5">
                <div class="relative overflow-x-auto rounded-lg border border-borderlight">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    User ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Default Location
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Role
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
                                    <td class="px-6 py-4">{data.userid}</td>
                                    <td class="px-6 py-4">{data.name}</td>
                                    <td class="px-6 py-4">{data.email}</td>
                                    <td class="px-6 py-4">
                                        {data.defaultlocation}
                                    </td>
                                    <td class="px-6 py-4">
                                        <div>
                                            <div className="border border-borderprimary rounded-md shadow-sm px-[6px] py-[2px] inline-flex gap-2 items-center">
                                                <div className="w-[6px] h-[6px] rounded-full bg-primaryred"></div>
                                                <span className=" text-xs font-medium text-textdark">
                                                    {data.role}
                                                </span>
                                            </div>
                                        </div>
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
