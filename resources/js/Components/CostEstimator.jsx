import CheckBox from "./CheckBox";
import SelectField from "./SelectField";
import TextField from "./TextField";

export default function CostEstimator() {
    return (
        <>
            <p className="text-sm text-headertext mt-1 text-center">
                Get an estimate of charges only. Actual charges may vary due to
                unforeseen additional cost such as but not limited to; address
                correction; remote or rural delivery, dimensional weight,
                additional pickup fees, customs fees etc. Please see the
                carriers surcharge for additional information.
            </p>

            <div className="mt-5 flex flex-col gap-4">
                <div>
                    <SelectField
                        label=""
                        placeholder="Select Ship From Addres"
                        options={[
                            { label: "USA", value: "USA" },
                            { label: "Canada", value: "Canada" },
                        ]}
                    />
                </div>
                <div>
                    <SelectField
                        label=""
                        placeholder="Select Ship To Country or Territory"
                        options={[
                            { label: "USA", value: "USA" },
                            { label: "Canada", value: "Canada" },
                        ]}
                    />
                </div>
                <div>
                    <TextField
                        label=""
                        placeholder="Ship To Postal Code"
                        type="text"
                    />
                </div>
                <div>
                    <SelectField
                        label=""
                        placeholder="Insured Value"
                        options={[
                            { label: "USA", value: "USA" },
                            { label: "Canada", value: "Canada" },
                        ]}
                    />
                </div>
                <div>
                    <SelectField
                        label=""
                        placeholder="Weight"
                        options={[
                            { label: "USA", value: "USA" },
                            { label: "Canada", value: "Canada" },
                        ]}
                    />
                </div>
            </div>
            <div className="mt-4">
                <CheckBox
                    type={"checkbox"}
                    name="residential"
                    label="This is a residential address"
                />
            </div>

            <div className="mt-5">
                <p className="text-sm text-textdark">Shipping Options</p>
                <div className="flex flex-col gap-2 mt-2">
                    <CheckBox
                        type={"checkbox"}
                        name="saturdayPickup"
                        label="Saturday Pickup (+fee)"
                    />
                    <CheckBox
                        type={"checkbox"}
                        name="saturdayDelivery"
                        label="Saturday Delivery (+fee)"
                    />
                    <CheckBox
                        type={"checkbox"}
                        name="signatureRequired"
                        label="Custom Packaging"
                    />
                </div>
            </div>

            <div className="mt-5">
                <p className="text-sm text-textdark">Pickup Options</p>
                <div className="flex flex-col gap-2 mt-2">
                    <CheckBox
                        type={"radio"}
                        name="pickupOptions"
                        label="Schedule Pickup"
                    />
                    <CheckBox
                        type={"radio"}
                        name="pickupOptions"
                        label="Shipping Drop Off"
                    />
                    <CheckBox
                        type={"radio"}
                        name="pickupOptions"
                        label="My Pickup Location"
                    />
                </div>
            </div>

            <div className="flex justify-between gap-4 mt-8">
                <button className="bg-white border border-borderprimary text-textdark text-base font-semibold px-4 py-[10px] rounded-lg w-full">
                    Reset
                </button>
                <button className="bg-primary text-white text-base font-semibold px-4 py-[10px] rounded-lg w-full">
                    Get Quotes
                </button>
            </div>
        </>
    );
}
