import useImages from "@/Hooks/useImages";
import SelectField from "../SelectField";
import TextField from "../TextField";
import BottomBar from "../Ship/BottomBar";
import CheckBox from "../CheckBox";

export default function CompanyProfile() {
    const { ArrowRightWhite } = useImages();
    return (
        <div className=" mb-28">
            <div className="">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Company Profile
                </h3>
            </div>

            <div className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-lg font-medium text-textdarker">
                            Company Address
                        </h4>
                        <div className="grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3  mt-4">
                            <div className="col-span-2">
                                <TextField
                                    label=""
                                    placeholder={"Account Number"}
                                    type="text"
                                />
                            </div>
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
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Street Address"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Suite / Apt"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"City"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"State/Province"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Zip Code"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <SelectField
                                    label=""
                                    placeholder={"Country"}
                                    options={[
                                        { label: "USA", value: "USA" },
                                        { label: "Canada", value: "Canada" },
                                    ]}
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Telephone No."}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Email Address"}
                                    type="text"
                                />
                            </div>
                        </div>

                        <h4 className="text-lg font-medium text-textdarker mt-8">
                            Accounts Payable Address
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                            <div className="col-span-2">
                                <CheckBox
                                    type={"checkbox"}
                                    label={"Same as Company Address"}
                                    name={"address"}
                                />
                            </div>
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
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Street Address"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Suite / Apt"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"City"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"State/Province"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Zip Code"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <SelectField
                                    label=""
                                    placeholder={"Country"}
                                    options={[
                                        { label: "USA", value: "USA" },
                                        { label: "Canada", value: "Canada" },
                                    ]}
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Telephone No."}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Email Address"}
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium text-textdarker">
                            Mailing Address
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                            <div className="col-span-2">
                                <CheckBox
                                    type={"checkbox"}
                                    label={"Same as Company Address"}
                                    name={"mailing"}
                                />
                            </div>
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
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Street Address"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Suite / Apt"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"City"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"State/Province"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Zip Code"}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <SelectField
                                    label=""
                                    placeholder={"Country"}
                                    options={[
                                        { label: "USA", value: "USA" },
                                        { label: "Canada", value: "Canada" },
                                    ]}
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Telephone No."}
                                    type="text"
                                />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder={"Email Address"}
                                    type="text"
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
