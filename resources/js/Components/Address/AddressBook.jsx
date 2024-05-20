import useImages from "@/Hooks/useImages";
import { useState } from "react";
import Modal from "../Modal";
import TextField from "../TextField";
import SelectField from "../SelectField";
import CheckBox from "../CheckBox";

export default function AddressBook() {
    const { EditGray, DeletePrimary } = useImages();
    const [open, setOpen] = useState(false);
    const TableData = [
        {
            contactname: "030456",
            companyname: "030456",
            address: "Covered",
            express: "030456",
            shared: "030456",
        },
        {
            contactname: "030456",
            companyname: "030456",
            address: "Covered",
            express: "030456",
            shared: "030456",
        },
        {
            contactname: "030456",
            companyname: "030456",
            address: "Covered",
            express: "030456",
            shared: "030456",
        },
        {
            contactname: "030456",
            companyname: "030456",
            address: "Covered",
            express: "030456",
            shared: "030456",
        },
        {
            contactname: "030456",
            companyname: "030456",
            address: "Covered",
            express: "030456",
            shared: "030456",
        },
    ];

    const handleModal = () => {
        setOpen(!open);
    };
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Address Book
                </h3>
                <div className="flex gap-5">
                    <span className="text-headertext text-base font-semibold">
                        Import Address Book
                    </span>
                    <span
                        className="text-primary text-base font-semibold cursor-pointer"
                        onClick={() => handleModal()}
                    >
                        Add New Address
                    </span>
                </div>
            </div>

            <div className="mt-5">
                <div class="relative overflow-x-auto rounded-lg border border-borderlight">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Contact Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Company Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Express
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Shared
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
                                        {data.contactname}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data.companyname}
                                    </td>
                                    <td class="px-6 py-4">{data.address}</td>
                                    <td class="px-6 py-4">{data.express}</td>
                                    <td class="px-6 py-4">{data.shared}</td>
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
            <Modal open={open} title={"Add New Address"} setOpen={setOpen}>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <TextField label={""} placeholder={"First Name"} />
                    </div>
                    <div className="col-span-1">
                        <TextField label={""} placeholder={"Last Name"} />
                    </div>
                    <div className="col-span-1">
                        <TextField label={""} placeholder={"Email Address"} />
                    </div>
                    <div className="col-span-1">
                        <TextField label={""} placeholder={"Phone"} />
                    </div>
                    <div className="col-span-2">
                        <TextField label={""} placeholder={"Fax"} />
                    </div>
                    <div className="col-span-2">
                        <TextField label={""} placeholder={"Company Name"} />
                    </div>
                    <div className="col-span-2">
                        <TextField label={""} placeholder={"Street Address"} />
                    </div>
                    <div className="col-span-1">
                        <TextField label={""} placeholder={"Suite / Apt"} />
                    </div>
                    <div className="col-span-1">
                        <TextField label={""} placeholder={"City"} />
                    </div>
                    <div className="col-span-1">
                        <SelectField
                            label={""}
                            placeholder={"State/Province"}
                            options={[
                                { label: "USA", value: "USA" },
                                { label: "Canada", value: "Canada" },
                            ]}
                        />
                    </div>
                    <div className="col-span-1">
                        <TextField
                            label={""}
                            placeholder={"Zip / Postal Code"}
                        />
                    </div>
                    <div className="col-span-1">
                        <SelectField
                            label={""}
                            placeholder={"Country"}
                            options={[
                                { label: "USA", value: "USA" },
                                { label: "Canada", value: "Canada" },
                            ]}
                        />
                    </div>
                    <div className="col-span-2">
                        <CheckBox
                            type={"checkbox"}
                            name={"residential"}
                            label={"Set as Residential"}
                        />
                        <div className="mt-2">
                            <CheckBox
                                type={"checkbox"}
                                name={"residential"}
                                label={"Set as express"}
                            />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="flex justify-between gap-4 mt-4">
                            <button className="bg-white border border-borderprimary text-textdark text-base font-semibold px-4 py-[10px] rounded-lg w-full">
                                Cancel
                            </button>
                            <button className="bg-primary text-white text-base font-semibold px-4 py-[10px] rounded-lg w-full">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
