import useImages from "@/Hooks/useImages";
import SelectField from "../SelectField";
import BottomBar from "../Ship/BottomBar";

export default function RestrictedZipCodes() {
    const { ArrowRightWhite } = useImages();
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    Restricted Zip Codes
                </h3>
            </div>
            <p className="text-sm text-textdark mt-4">
                To ensure the safe delivery of your packages and to provide
                added security, shipments sent to the following zip codes
                require special handling and are restricted under Mercury’s
                privacy policy.
            </p>

            <div className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                    <div>
                        <h4 className="text-lg font-medium text-textdarker ">
                            Los Angles
                        </h4>
                        <div className="mt-3">
                            <ul className="flex flex-col gap-2">
                                <li className="text-sm text-textdark">9007</li>
                                <li className="text-sm text-textdark">9007</li>
                                <li className="text-sm text-textdark">9007</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-textdarker ">
                            Beverly Hills
                        </h4>
                        <div className="mt-3">
                            <ul className="flex flex-col gap-2">
                                <li className="text-sm text-textdark">9007</li>
                                <li className="text-sm text-textdark">9007</li>
                                <li className="text-sm text-textdark">9007</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-textdarker ">
                            New York
                        </h4>
                        <div className="mt-3">
                            <ul className="flex flex-col gap-2">
                                <li className="text-sm text-textdark">9007</li>
                                <li className="text-sm text-textdark">9007</li>
                                <li className="text-sm text-textdark">9007</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
