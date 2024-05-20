import useImages from "@/Hooks/useImages";
import QuickTrack from "./QuickTrack";
import CostEstimator from "./CostEstimator";
import { useState } from "react";
import Modal from "./Modal";

export default function ShipWithFx() {
    const { FedExLogo, ArrowRightDark } = useImages();
    const [open, setOpen] = useState(false);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="col-span-2">
                <div className="border border-primary rounded-xl bg-[#FF5A0008] p-6 relative">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-4xl font-semibold text-textdarker">
                                Ship With FedEx
                            </h2>
                            <p className="text-base text-textdark mt-2">
                                Create a FedEx Shipping Label
                            </p>
                        </div>
                        <div className="flex items-end">
                            <img src={FedExLogo} alt="FedEx Logo" />
                        </div>
                    </div>

                    <div className="absolute top-3 right-3">
                        <img
                            src={ArrowRightDark}
                            alt="Arrow Right"
                            className=" w-6 h-6"
                        />
                    </div>
                </div>
            </div>

            <div className="col-span-1">
                <div className="border border-borderlight rounded-xl p-5 relative cursor-pointer">
                    <h3 className="text-base font-semibold text-textdark">
                        View Restricted Zip Codes
                    </h3>
                    <p className="text-sm text-headertext">
                        Add yourself or import from CSV
                    </p>

                    <div className="absolute top-3 right-3">
                        <img
                            src={ArrowRightDark}
                            alt="Arrow Right"
                            className=" w-6 h-6"
                        />
                    </div>
                </div>
            </div>

            <div className="col-span-1">
                <div className="border border-borderlight rounded-xl p-5 relative cursor-pointer">
                    <h3 className="text-base font-semibold text-textdark">
                        Safe Packaging Checklist
                    </h3>
                    <p className="text-sm text-headertext">
                        Dive into the editor and start creating
                    </p>

                    <div className="absolute top-3 right-3">
                        <img
                            src={ArrowRightDark}
                            alt="Arrow Right"
                            className="w-6 h-6"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div
                    className="border border-borderlight rounded-xl p-5 relative cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <h3 className="text-base font-semibold text-textdark">
                        Cost Estimator
                    </h3>
                    <p className="text-sm text-headertext">
                        Compare shipping costs at the click of a button. We
                        offer competitive UPS and FedEx Rates.
                    </p>

                    <div className="absolute top-3 right-3">
                        <img
                            src={ArrowRightDark}
                            alt="Arrow Right"
                            className=" w-6 h-6"
                        />
                    </div>
                </div>
                <Modal title="Cost Estimator" open={open} setOpen={setOpen}>
                    <CostEstimator />
                </Modal>
            </div>

            <QuickTrack />
        </div>
    );
}
