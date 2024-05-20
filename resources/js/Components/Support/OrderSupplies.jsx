import useImages from "@/Hooks/useImages";
import SelectField from "../SelectField";
import BottomBar from "../Ship/BottomBar";

export default function OrderSupplies() {
    const { ArrowRightWhite } = useImages();
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Order Supplies
                </h3>
            </div>

            <div className="mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                        <h4 className="text-lg font-medium text-textdarker ">
                            Pouches
                        </h4>
                        <div className="mt-3">
                            <SelectField
                                label=""
                                placeholder={"Domestic Airbill"}
                                options={[
                                    { value: "small", label: "Small" },
                                    { value: "medium", label: "Medium" },
                                    { value: "large", label: "Large" },
                                ]}
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-textdarker ">
                            Boxes
                        </h4>
                        <div className="mt-3">
                            <SelectField
                                label=""
                                placeholder={"Small Boxes"}
                                options={[
                                    { value: "small", label: "Small" },
                                    { value: "medium", label: "Medium" },
                                    { value: "large", label: "Large" },
                                ]}
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-textdarker ">
                            Paks
                        </h4>
                        <div className="mt-3">
                            <SelectField
                                label=""
                                placeholder={"Small Paks"}
                                options={[
                                    { value: "small", label: "Small" },
                                    { value: "medium", label: "Medium" },
                                    { value: "large", label: "Large" },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <BottomBar>
                <div className="flex justify-between w-full">
                    <div></div>
                    <div>
                        <button className=" bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center">
                            Order
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
