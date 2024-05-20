import useImages from "@/Hooks/useImages";
import { useEffect, useState } from "react";

export default function TrakingModel({ trakingnumber }) {
    const { CloseModel, CopyIcon } = useImages();
    const [selectedTrakingTab, setSelectedTrakingTab] = useState(1);
    const [TrackingModel, setTrackingModel] = useState(false);

    const handleTrakingTab = (tabID) => {
        setSelectedTrakingTab(tabID);
    };

    useEffect(() => {
        // if tracking no activate then show the model
        if (trakingnumber) {
            setTrackingModel(true);
        }
    }, [trakingnumber]);

    const TrakingTabs = [
        {
            title: "Shipment Details",
            tagID: 1,
        },
        {
            title: "Shipping Information",
            tagID: 2,
        },
    ];

    const ShipmentDetail = [
        {
            label: "Ship Date",
            value: "1/7/2024",
        },
        {
            label: "Tracking Number",
            value: "1ZAG6712IKASDFKHJ12",
        },
        {
            label: "Confirmation Number",
            value: "ED854D54",
        },
        {
            label: "Reference Number",
            valuw: "N/A",
        },
        {
            label: "Customer Reference Number",
            value: "N/A",
        },
        {
            label: "COD",
            value: "No",
        },
        {
            label: "Service Type",
            value: "2nd Day Air",
        },
        {
            label: "Package Type",
            value: "Express box",
        },
        {
            label: "Est. Weight",
            value: "3.00 Lb.",
        },
        {
            label: "Bill Duties/Taxes/Fees",
            value: "N/A",
        },
        {
            label: "Needs EEI",
            value: "No",
        },
        {
            label: "Insured Value",
            value: "2,100.00 USD",
        },
    ];

    const ShippingInformation = [
        {
            DataFrom: [
                {
                    label: "Contact Name",
                    value: "Olivia Rhye",
                },
                {
                    label: "Company Name",
                    value: "FedEx",
                },
                {
                    label: "Address",
                    value: "Cottbus, Germany",
                },
                {
                    label: "Address 2",
                    value: "Cottbus, Germany",
                },
                {
                    label: "City/State",
                    value: "Berlin",
                },
                {
                    label: "Zip/Country or Territory",
                    value: "Germany",
                },
            ],

            DataTo: [
                {
                    label: "Contact Name",
                    value: "Olivia Rhye",
                },
                {
                    label: "Company Name",
                    value: "FedEx",
                },
                {
                    label: "Address",
                    value: "Cottbus, Germany",
                },
                {
                    label: "Address 2",
                    value: "Cottbus, Germany",
                },
                {
                    label: "City/State",
                    value: "Berlin",
                },
                {
                    label: "Zip/Country or Territory",
                    value: "Germany",
                },
            ],

            DataReroute: [
                {
                    label: "Contact Name",
                    value: "Olivia Rhye",
                },
                {
                    label: "Company Name",
                    value: "FedEx",
                },
                {
                    label: "Address",
                    value: "Cottbus, Germany",
                },
                {
                    label: "Address 2",
                    value: "Cottbus, Germany",
                },
                {
                    label: "City/State",
                    value: "Berlin",
                },
                {
                    label: "Zip/Country or Territory",
                    value: "Germany",
                },
            ],
        },
    ];
    return (
        <div
            className={`fixed top-0 z-10 right-3 my-3 min-w-[419px] max-w-[430px] h-[97vh] border border-lightgray rounded-lg overflow-y-scroll shadow-md bg-white ${
                TrackingModel ? "" : "hidden"
            }`}
        >
            <div>
                <div className="flex justify-between items-center p-5 border-b border-borderlight">
                    <h5 className="text-sm text-headertext font-semibold">
                        Tracking Details
                    </h5>
                    <div
                        className="w-7 h-7 px-2 cursor-pointer rounded-lg border border-borderprimary flex justify-center items-center"
                        onClick={() => setTrackingModel(false)}
                    >
                        <img src={CloseModel} className="w-5 h-5" alt="Close" />
                    </div>
                </div>

                <div className="px-5 py-4">
                    <div className="flex justify-between">
                        <div>
                            <h5 className="text-2xl font-semibold text-textdarker">
                                {trakingnumber}
                            </h5>
                            <p className="text-sm text-footerlink">
                                Tracking Number
                            </p>
                        </div>
                        <div>
                            <img src={CopyIcon} alt="Copy" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <ul className="flex gap-5 border-b border-borderlight">
                            {TrakingTabs?.map((tab, index) => (
                                <li
                                    onClick={() => handleTrakingTab(tab.tagID)}
                                    key={index}
                                    className={`text-base text-footerlink font-semibold cursor-pointer pb-2 ${
                                        selectedTrakingTab === tab.tagID
                                            ? "border-b-2 border-primary"
                                            : ""
                                    } `}
                                >
                                    {tab.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        {selectedTrakingTab === 1 && (
                            <div className="mt-6">
                                {ShipmentDetail?.map((data, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center py-2"
                                    >
                                        <p className="text-sm text-headertext">
                                            {data.label}
                                        </p>
                                        <p className="text-sm text-textdark font-semibold">
                                            {data.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {selectedTrakingTab === 2 && (
                            <div className="mt-6">
                                {ShippingInformation?.map((data, index) => (
                                    <div key={index}>
                                        <div>
                                            <p className="text-base text-headertext font-semibold">
                                                From
                                            </p>
                                        </div>

                                        <div className="mt-2">
                                            {data.DataFrom.map(
                                                (data, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex justify-between items-center py-2"
                                                    >
                                                        <p className="text-sm text-headertext">
                                                            {data.label}
                                                        </p>
                                                        <p className="text-sm text-textdark font-semibold">
                                                            {data.value}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-base text-headertext font-semibold">
                                                To
                                            </p>

                                            <div className="mt-2">
                                                {data.DataTo.map(
                                                    (data, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex justify-between items-center py-2"
                                                        >
                                                            <p className="text-sm text-headertext">
                                                                {data.label}
                                                            </p>
                                                            <p className="text-sm text-textdark font-semibold">
                                                                {data.value}
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-base text-headertext font-semibold">
                                                Reroute
                                            </p>

                                            <div className="mt-2">
                                                {data.DataReroute.map(
                                                    (data, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex justify-between items-center py-2"
                                                        >
                                                            <p className="text-sm text-headertext">
                                                                {data.label}
                                                            </p>
                                                            <p className="text-sm text-textdark font-semibold">
                                                                {data.value}
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
