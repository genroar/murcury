import useImages from "@/Hooks/useImages";
import SelectField from "../SelectField";
import BottomBar from "../Ship/BottomBar";

export default function HelpCenter() {
    const { ArrowRightWhite, LinkPrimaryDownloadPrimary, LinkPrimary } =
        useImages();
    const SupportDocuments = [
        {
            id: 1,
            name: "Getting Started",
            url: "https://www.google.com",
        },
        {
            id: 2,
            name: "Shipping",
            url: "https://www.google.com",
        },

        {
            id: 3,
            name: "International",
            url: "https://www.google.com",
        },

        {
            id: 4,
            name: "Shipping Supplies",
            url: "https://www.google.com",
        },

        {
            id: 5,
            name: "Risk Management",
            url: "https://www.google.com",
        },

        {
            id: 6,
            name: "My Account & Billing",
            url: "https://www.google.com",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Help Center
                </h3>
            </div>

            <div className="mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                    {SupportDocuments?.map((item, index) => (
                        <div>
                            <div className="border border-borderlight rounded-xl p-6 flex justify-between items-center">
                                <h4
                                    className="text-lg font-medium text-textdarker
                                whitespace-nowrap overflow-hidden overflow-ellipsis"
                                >
                                    {item.name}
                                </h4>
                                <div>
                                    <img src={LinkPrimary} alt="Link" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
