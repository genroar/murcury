import useImages from "@/Hooks/useImages";
import { useState } from "react";
import TextField from "../TextField";
import SelectField from "../SelectField";
import CheckBox from "../CheckBox";
import Button from "../Button";
import BottomBar from "./BottomBar";

export default function ShipFedEx() {
    const { ArrowRightWhite, ArrowLeft } = useImages();
    const [getQuotes, setGetQuotes] = useState([
        {
            id: 1,
            name: "shipping address",
            isActive: true,
        },
        {
            id: 2,
            name: "shipping information",
            isActive: false,
        },
    ]);

    const [selectedQuote, setSelectedQuote] = useState(1);

    const handleQuoteChnage = (id) => {
        // it's on 2 steps only so no need to check for more than 2 steps

        if (id > 2) {
            return;
        }

        const updatedQuotes = getQuotes.map((quote) => {
            if (quote.id === id) {
                return {
                    ...quote,
                    isActive: true,
                };
            } else {
                return {
                    ...quote,
                    isActive: false,
                };
            }
        });
        setGetQuotes(updatedQuotes);
        setSelectedQuote(id);
    };

    const ShippingAddress = () => {
        return (
            <div>
                <h1 className="text-2xl font-semibold text-textdark">
                    Create FedEx Shipment
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                        <h3 className="text-lg font-medium mb-2">
                            Ship From Address:
                        </h3>

                        <div className="col-span-2">
                            <SelectField
                                label=""
                                placeholder={"Express Contacts"}
                                options={[
                                    {
                                        value: "1",
                                        label: "United States",
                                    },
                                    {
                                        value: "2",
                                        label: "Canada",
                                    },
                                ]}
                            />
                        </div>

                        <div className="col-span-2">
                            <SelectField
                                label=""
                                placeholder={"Country or Territory"}
                                options={[
                                    {
                                        value: "1",
                                        label: "United States",
                                    },
                                    {
                                        value: "2",
                                        label: "Canada",
                                    },
                                ]}
                            />
                        </div>

                        <div className="col-span-1">
                            <TextField label="" placeholder="First Name" />
                        </div>
                        <div className="col-span-1">
                            <TextField label="" placeholder="Last Name" />
                        </div>
                        <div className="col-span-2">
                            <TextField label="" placeholder="Company" />
                        </div>
                        <div className="col-span-2">
                            <TextField label="" placeholder="Address 1" />
                        </div>
                        <div className="col-span-2">
                            <TextField label="" placeholder="Address 2" />
                        </div>
                        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                            <div className="col-span-1">
                                <TextField label="" placeholder="Postal Code" />
                            </div>
                            <div className="col-span-1">
                                <TextField label="" placeholder="City" />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder="State/Province"
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <TextField label="" placeholder="Telephone No." />
                        </div>
                        <div className="col-span-1">
                            <TextField label="" placeholder="Email Address" />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Shipment Notification"
                            />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Exception Notification"
                            />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Delivery Notification"
                            />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Add to express contacts"
                            />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Delivery Notification"
                            />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Residential Address"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                        <h3 className="text-lg font-medium mb-2">
                            Ship To Address:
                        </h3>

                        <div className="col-span-2">
                            <SelectField
                                label=""
                                placeholder={"Express Contacts"}
                                options={[
                                    {
                                        value: "1",
                                        label: "United States",
                                    },
                                    {
                                        value: "2",
                                        label: "Canada",
                                    },
                                ]}
                            />
                        </div>

                        <div className="col-span-2">
                            <SelectField
                                label=""
                                placeholder={"Country or Territory"}
                                options={[
                                    {
                                        value: "1",
                                        label: "United States",
                                    },
                                    {
                                        value: "2",
                                        label: "Canada",
                                    },
                                ]}
                            />
                        </div>

                        <div className="col-span-1">
                            <TextField label="" placeholder="First Name" />
                        </div>
                        <div className="col-span-1">
                            <TextField label="" placeholder="Last Name" />
                        </div>
                        <div className="col-span-2">
                            <TextField label="" placeholder="Company" />
                        </div>
                        <div className="col-span-2">
                            <TextField label="" placeholder="Address 1" />
                        </div>
                        <div className="col-span-2">
                            <TextField label="" placeholder="Address 2" />
                        </div>
                        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                            <div className="col-span-1">
                                <TextField label="" placeholder="Postal Code" />
                            </div>
                            <div className="col-span-1">
                                <TextField label="" placeholder="City" />
                            </div>
                            <div className="col-span-1">
                                <TextField
                                    label=""
                                    placeholder="State/Province"
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <TextField label="" placeholder="Telephone No." />
                        </div>
                        <div className="col-span-1">
                            <TextField label="" placeholder="Email Address" />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Shipment Notification"
                            />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Exception Notification"
                            />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Delivery Notification"
                            />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Add to express contacts"
                            />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Delivery Notification"
                            />
                        </div>
                        <div className="col-span-1">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Residential Address"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ShippingInformation = () => {
        return (
            <div>
                <h1 className="text-2xl font-semibold text-textdark">
                    Create FedEx Shipment
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                        <h3 className="text-lg font-medium mb-2">
                            Shipping Information
                        </h3>

                        <div className="col-span-2">
                            <SelectField
                                label=""
                                placeholder={"Shipment Date"}
                                options={[
                                    {
                                        value: "1",
                                        label: "United States",
                                    },
                                    {
                                        value: "2",
                                        label: "Canada",
                                    },
                                ]}
                            />
                        </div>

                        <div className="col-span-2">
                            <SelectField
                                label=""
                                placeholder={"Service Type"}
                                options={[
                                    {
                                        value: "1",
                                        label: "United States",
                                    },
                                    {
                                        value: "2",
                                        label: "Canada",
                                    },
                                ]}
                            />
                        </div>
                        <div className="col-span-2">
                            <SelectField
                                label=""
                                placeholder={"Package Type"}
                                options={[
                                    {
                                        value: "1",
                                        label: "United States",
                                    },
                                    {
                                        value: "2",
                                        label: "Canada",
                                    },
                                ]}
                            />
                        </div>

                        <div className="col-span-1">
                            <TextField label="" placeholder="Reference No." />
                        </div>
                        <div className="col-span-1">
                            <TextField label="" placeholder="Invoice No." />
                        </div>
                        <div className="col-span-21">
                            <TextField label="" placeholder="Weight" />
                        </div>
                        <div className="col-span-21">
                            <TextField label="" placeholder="Insured Value" />
                        </div>

                        <div className="col-span-2">
                            <h3 className="text-lg text-textdark font-medium mb-3">
                                Additional Shipment Information
                            </h3>
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Saturday Delivery (+fee)"
                            />
                        </div>
                        <div className="col-span-2">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Adult Signature Required (+fee)"
                            />
                        </div>
                        <div className="col-span-2">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Direct Signature Required (+fee)"
                            />
                        </div>
                        <div className="col-span-2">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Hold at FedEx Location"
                            />
                        </div>

                        <div className="col-span-2">
                            <h3 className="text-lg text-textdark font-medium mb-3">
                                Shipping Options
                            </h3>
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Drop off package at FedEx location. Find Location"
                            />
                        </div>
                        <div className="col-span-2">
                            <CheckBox
                                type={"checkbox"}
                                name="pickupOptions"
                                label="Use an already scheduled pickup at my location"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
                        <div>
                            <h3 className="text-lg font-medium">
                                Cost Estimate
                            </h3>
                            <div className="border border-primary bg-[#FF5A0008] rounded-xl p-6 mt-5">
                                <div className="flex flex-col gap-6">
                                    <div className="flex justify-between items-center">
                                        <h5 className="text-base font-semibold text-textdarker">
                                            Est. Shipping & Insurance
                                        </h5>
                                        <p className="text-base text-textdarker">
                                            $0.00
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h5 className="text-base font-semibold text-textdarker">
                                            Surcharge & Services
                                        </h5>
                                        <p className="text-base text-textdarker">
                                            $0.00
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h5 className="text-base font-semibold text-textdarker">
                                            Your Total
                                        </h5>
                                        <p className="text-base text-textdarker">
                                            $0.00
                                        </p>
                                    </div>

                                    <div>
                                        <p className=" text-textdarker">
                                            This is only an estimate of charges,
                                            additional charges may vary due to
                                            additional costs, such as but not
                                            limited to; address corrections,
                                            residential delivery, dimensional
                                            weight, additional pickup fees, etc.
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-end">
                                        <div className="flex items-center gap-4">
                                            <button className="bg-white border border-borderprimary text-textdark font-semibold py-[10px] px-3 rounded-lg">
                                                Save Quote
                                            </button>
                                            <button className="bg-primary text-white font-semibold py-[10px] px-3 rounded-lg">
                                                Get Quote
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
    };

    return (
        <div>
            {getQuotes.map((quote, index) => {
                return (
                    <div key={index}>
                        {quote.isActive && quote.name === "shipping address" ? (
                            <ShippingAddress />
                        ) : quote.isActive &&
                          quote.name === "shipping information" ? (
                            <ShippingInformation />
                        ) : (
                            ""
                        )}
                    </div>
                );
            })}
            <hr className="my-6" />

            <BottomBar>
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                        <div
                            className={`w-[10px] h-[10px] rounded-full ${
                                selectedQuote === 1
                                    ? "bg-primary"
                                    : "bg-borderlight"
                            }`}
                        ></div>
                        <div
                            className={`w-[10px] h-[10px] rounded-full ${
                                selectedQuote === 2
                                    ? "bg-primary"
                                    : "bg-borderlight"
                            }`}
                        ></div>
                    </div>
                    <div className="flex gap-4 items-center">
                        {selectedQuote === 2 && (
                            <button
                                onClick={() => {
                                    handleQuoteChnage(selectedQuote - 1);
                                }}
                                className=" bg-white text-textdark border border-borderprimary font-semibold py-[10px] px-3 rounded-lg flex gap-2 items-center"
                            >
                                <img
                                    src={ArrowLeft}
                                    className="w-4"
                                    alt="Arrow Right Dark"
                                />{" "}
                                Previous Step
                            </button>
                        )}
                        <button
                            onClick={() => {
                                handleQuoteChnage(selectedQuote + 1);
                            }}
                            className=" bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center"
                        >
                            {selectedQuote === 1 ? "Next Step" : "Get Label"}
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
