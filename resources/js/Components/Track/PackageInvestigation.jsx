import useImages from "@/Hooks/useImages";
import SelectField from "../SelectField";
import TextField from "../TextField";
import BottomBar from "../Ship/BottomBar";

export default function PackageInvestigation() {
    const { ArrowRightWhite } = useImages();
    return (
        <div>
            <div className="">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Package Investigation
                </h3>
                <p className="text-sm text-headertext mt-2">
                    Type the tracking number of the shipment to start
                    investigation. You can also call (888) 683-2300 x 4 for
                    immediate assistance.
                </p>
            </div>

            <div className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-3">
                        <div>
                            <TextField
                                label=""
                                placeholder="Enter Tracking Number"
                            />
                        </div>
                        <div>
                            <SelectField
                                label=""
                                placeholder={"Type Of Investigation"}
                                options={[
                                    { value: "1", label: "Type 1" },
                                    { value: "2", label: "Type 2" },
                                    { value: "3", label: "Type 3" },
                                ]}
                            />
                        </div>

                        <div className="mt-2">
                            <h4 className="text-lg font-medium text-textdarker">
                                Contact Information
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
                                <div className="col-span-2 mt-3">
                                    <TextField
                                        label=""
                                        placeholder="Company Name"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <TextField
                                        label=""
                                        placeholder="Mercury Account Number"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <TextField
                                        label=""
                                        placeholder="Contact Name"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <TextField
                                        label=""
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <TextField
                                        label=""
                                        placeholder="Fax Number"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <TextField
                                        label=""
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomBar>
                <div className="flex justify-between w-full">
                    <div></div>
                    <div>
                        <button className=" bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center">
                            Submit
                            <img
                                src={ArrowRightWhite}
                                className="w-4"
                                alt="Arrow Right Dark"
                            />
                        </button>
                    </div>
                </div>
            </BottomBar>
        </div>
    );
}
