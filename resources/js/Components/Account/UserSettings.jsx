import useImages from "@/Hooks/useImages";
import SelectField from "../SelectField";
import TextField from "../TextField";
import BottomBar from "../Ship/BottomBar";
import CheckBox from "../CheckBox";

export default function UserSettings() {
    const { ArrowRightWhite } = useImages();
    return (
        <div>
            <div className="">
                <h3 className="text-2xl font-semibold text-textdarker">
                    User Settings
                </h3>
            </div>

            <div className="mt-4">
                <h4 className="text-lg font-medium text-textdarker">
                    User Profile
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                    <div>
                        <div className="grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"First Name"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Last Name"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-2">
                                <TextField
                                    label=""
                                    placeholder={"Email Address"}
                                    type="text"
                                />
                            </div>
                        </div>

                        <h4 className="text-lg font-medium text-textdarker mt-8">
                            Email Notifications
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                            <div className="col-span-2">
                                <CheckBox
                                    type={"checkbox"}
                                    label={
                                        "Always notify sender with carrier notifications for shipment, delivery and exception"
                                    }
                                    name={"order"}
                                />
                            </div>
                            <div className="col-span-2">
                                <CheckBox
                                    type={"checkbox"}
                                    label={
                                        "Always notify recipient with carrier notifications for shipment, delivery and exception"
                                    }
                                    name={"order"}
                                />
                            </div>
                            <div className="col-span-2">
                                <CheckBox
                                    type={"checkbox"}
                                    label={
                                        "Always notify recipient with custom email notifications for shipments"
                                    }
                                    name={"order"}
                                />
                            </div>
                        </div>

                        <h4 className="text-lg font-medium text-textdarker mt-8">
                            Print Settings
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                            <div className="col-span-2">
                                <CheckBox
                                    type={"checkbox"}
                                    label={"Thermal Printer: Always use"}
                                    name={"print"}
                                />
                            </div>
                            <div className="col-span-2">
                                <CheckBox
                                    type={"checkbox"}
                                    label={
                                        "Print Receipt: Always print receipt after label "
                                    }
                                    name={"print"}
                                />
                            </div>
                            <div className="col-span-2">
                                <CheckBox
                                    type={"checkbox"}
                                    label={
                                        "Print High Value Label: Always print high value form after label"
                                    }
                                    name={"print"}
                                />
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
                            Save Changes
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
