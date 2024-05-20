import useImages from "@/Hooks/useImages";
import CheckBox from "../CheckBox";
import BottomBar from "./BottomBar";
import ImageUploader from "../ImageUploader";

export default function UploadWorldShipShipments() {
    const { UploadIcon, ArrowRightWhite } = useImages();
    return (
        <div className="">
            <h3 className="text-2xl font-semibold text-textdarker">
                Upload WorldShip Shipments
            </h3>

            <div className=" mt-6">
                <ImageUploader
                    height={"h-[240px]"}
                    text={
                        "for the worldship shipment export file on your computer"
                    }
                    maxmb={"(max. 4MB)"}
                />
            </div>

            <div className="mt-6">
                <div className="col-span-2">
                    <h3 className="text-lg text-textdark font-medium mb-2">
                        Reference Options
                    </h3>
                    <p className="text-base text-headertext">
                        Select one of the following reference options to upload
                        as insured value
                    </p>
                    <div className="flex flex-col gap-2 mt-3">
                        <CheckBox
                            type={"checkbox"}
                            name="pickupOptions"
                            label="Use an already scheduled pickup at my location"
                        />
                        <CheckBox
                            type={"checkbox"}
                            name="pickupOptions"
                            label="Drop off package at FedEx location. Find Location"
                        />
                    </div>
                </div>
            </div>

            <BottomBar>
                <div className="flex items-center justify-end w-full gap-4">
                    <p className="text-sm text-textdark font-medium">
                        Contact us if you need assistance with your worldship
                        upload{" "}
                        <span className="text-primary">
                            helpdesk@mercury.com
                        </span>
                    </p>
                    <button className=" bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center">
                        Upload File
                        <img
                            src={ArrowRightWhite}
                            className="w-3"
                            alt="Arrow Right Dark"
                        />
                    </button>
                </div>
            </BottomBar>
        </div>
    );
}
