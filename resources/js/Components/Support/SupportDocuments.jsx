import useImages from "@/Hooks/useImages";
import SelectField from "../SelectField";
import BottomBar from "../Ship/BottomBar";

export default function SupportDocuments() {
    const { ArrowRightWhite, DownloadPrimary } = useImages();
    const SupportDocuments = [
        {
            id: 1,
            name: "Safe Shipping and Packaging Checklist",
            url: "https://www.google.com",
        },
        {
            id: 2,
            name: "Mercury Quick Start",
            url: "https://www.google.com",
        },

        {
            id: 3,
            name: "Jewelry Shipping Tips",
            url: "https://www.google.com",
        },

        {
            id: 4,
            name: "Billing and Invoicing FAQ",
            url: "https://www.google.com",
        },

        {
            id: 5,
            name: "Minimizing Shipping Losses FAQ",
            url: "https://www.google.com",
        },

        {
            id: 6,
            name: "Residential Shipping",
            url: "https://www.google.com",
        },

        {
            id: 7,
            name: "Members Handbook",
            url: "https://www.google.com",
        },

        {
            id: 8,
            name: "UC PPI Claim Form",
            url: "https://www.google.com",
        },

        {
            id: 9,
            name: "Commercial Invoice",
            url: "https://www.google.com",
        },

        {
            id: 10,
            name: "High Value Retailers Guide",
            url: "https://www.google.com",
        },

        {
            id: 11,
            name: "Alteration Declaration",
            url: "https://www.google.com",
        },

        {
            id: 12,
            name: "US Antique Declaration",
            url: "https://www.google.com",
        },

        {
            id: 13,
            name: "SED Form",
            url: "https://www.google.com",
        },
        {
            id: 14,
            name: "Export Address Book",
            url: "https://www.google.com",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Support Documents
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
                                    <img src={DownloadPrimary} alt="Download" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
