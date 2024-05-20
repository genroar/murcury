import useImages from "@/Hooks/useImages";
import SelectField from "../SelectField";
import BottomBar from "../Ship/BottomBar";

export default function ContactUs() {
    const { ArrowRightWhite, LinkPrimaryDownloadPrimary, LinkPrimary } =
        useImages();
    const ContactUsList = [
        {
            id: 1,
            city: "Melbourne",
            street: "100 Flinders Street",
            address: "Melbourne VIC 3000 AU",
        },
        {
            id: 2,
            city: "Sydney",
            street: "100 George Street",
            address: "Sydney NSW 2000 AU",
        },
        {
            id: 3,
            city: "Byron Bay",
            street: "100 Jonson Street",
            address: "Byron Bay QLD 4000 AU",
        },
        {
            id: 4,
            city: "London",
            street: "100 Oxford Street",
            address: "London W1D 1LL UK",
        },
        {
            id: 5,
            city: "San Francisco",
            street: "100 Market Street",
            address: "San Francisco, CA 94105 USA",
        },
        {
            id: 6,
            city: "Sweden",
            street: "Drottninggatan 100",
            address: "111 60 Stockholm SE",
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Contact Us
                </h3>
            </div>

            <div className="mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                    {ContactUsList?.map((item, index) => (
                        <div>
                            <div className="border border-borderlight rounded-xl p-6 flex flex-col gap-2">
                                <h4
                                    className="text-lg font-medium text-textdarker
                                whitespace-nowrap overflow-hidden overflow-ellipsis"
                                >
                                    {item.city}
                                </h4>
                                <div>
                                    <p className="text-base text-headertext">
                                        {item.street}
                                    </p>
                                    <p className="text-base text-headertext">
                                        {item.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
