import useImages from "@/Hooks/useImages";
import { useState } from "react";
import TextField from "../TextField";
import ImageUploader from "../ImageUploader";
import CheckBox from "../CheckBox";

export default function ManageNotifyTemplates() {
    const {
        NotifyTemplate,
        PlusPrimary,
        NotifyPreview,
        Close,
        ArrowRightWhite,
    } = useImages();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [NotifyTemplates, setNotifyTemplates] = useState([
        {
            id: 1,
            name: "Notify Template 1",
            image: NotifyTemplate,
            isActive: true,
        },
        {
            id: 2,
            name: "Notify Template 2",
            image: NotifyTemplate,
            isActive: false,
        },
        {
            id: 3,
            name: "Notify Template 3",
            image: NotifyTemplate,
            isActive: false,
        },
        {
            id: 4,
            name: "Notify Template 4",
            image: NotifyTemplate,
            isActive: false,
        },
        {
            id: 5,
            name: "Notify Template 5",
            image: NotifyTemplate,
            isActive: false,
        },
    ]);
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Notify Templates
                </h3>
            </div>

            <div className="mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        className={`bg-[#F2F4F7] h-[400px] cursor-pointer`}
                        onClick={() => setIsModalOpen(true)}
                    >
                        <div className="flex justify-center items-center h-full mb-2">
                            <img src={PlusPrimary} alt="Add" />
                        </div>
                        <span className="text-base text-textdarker font-medium mt-2">
                            New Template
                        </span>
                    </div>
                    {NotifyTemplates.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-lg cursor-pointer`}
                        >
                            <img
                                src={item.image}
                                className="w-full h-[400px] object-cover rounded-lg mb-2"
                                alt={item.name}
                            />
                            <span className="text-base text-textdarker font-medium">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add New Template */}
            <div
                className={`w-full fixed top-0 right-0 h-screen backdrop-blur-sm bg-[#0C111D]/40 z-10 overflow-y-scroll ${
                    isModalOpen ? "" : "hidden"
                }`}
            >
                <div className="flex justify-between gap-3">
                    <div className="xl:min-w-[560px] xl:max-w-[570px] w-full">
                        <img
                            src={NotifyPreview}
                            alt="Notify Preview"
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </div>
                    <div className="xl:min-w-[419px] xl:max-w-[430px] w-full bg-white">
                        <div className="p-5 border-b border-l-borderlight">
                            <div className="flex justify-between items-center">
                                <h4 className="text-sm font-semibold text-headertext">
                                    New Template
                                </h4>
                                <div
                                    className="w-7 h-7 rounded-lg border border-borderlight flex justify-center items-center cursor-pointer"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    <img
                                        src={Close}
                                        className="w-3 h-3"
                                        alt="close"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="p-5 h-[95vh]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <TextField
                                            label=""
                                            type="text"
                                            placeholder="Template Title"
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            label=""
                                            type="text"
                                            placeholder="Website URL"
                                        />
                                    </div>
                                    <div>
                                        <ImageUploader
                                            height={"h-[158px]"}
                                            text={"Upload a cover Image photo"}
                                            maxmb={"(max. 5MB)"}
                                        />
                                    </div>
                                    <div>
                                        <ImageUploader
                                            height={"h-[158px]"}
                                            text={"Upload a banner Image photo"}
                                            maxmb={"(max. 5MB)"}
                                        />
                                    </div>
                                    <div>
                                        <CheckBox
                                            type={"checkbox"}
                                            name="pickupOptions"
                                            label="Add Showcase Photos"
                                        />
                                    </div>
                                    <div>
                                        <CheckBox
                                            type={"checkbox"}
                                            name="pickupOptions"
                                            label="Agree to Parcel Pro Terms of Use"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full bg-white  border-t border-borderlight flex justify-end p-6">
                                        <button className=" bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center">
                                            Create
                                            <img
                                                src={ArrowRightWhite}
                                                className="w-4"
                                                alt="Arrow Right Dark"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
