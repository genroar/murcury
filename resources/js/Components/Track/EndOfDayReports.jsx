import useImages from "@/Hooks/useImages";
import SelectField from "../SelectField";

export default function EndOfDayReports() {
    const { DownloadPrimary } = useImages();
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-textdarker">
                    End Of Day Reports
                </h3>
            </div>

            <div className="mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <div className="flex flex-col gap-6">
                            <div className="border border-borderlight rounded-xl p-6">
                                <div className="flex justify-between gap-3">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-lg font-semibold text-textdarker">
                                            Full End of Day Report
                                        </h4>
                                        <p className="text-sm text-headertext">
                                            Today’s revenue
                                        </p>
                                    </div>
                                    <div className="">
                                        <img
                                            src={DownloadPrimary}
                                            alt="Download Primary"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="border border-borderlight rounded-xl p-6">
                                <div className="flex justify-between gap-3">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-lg font-semibold text-textdarker">
                                            End of Day High Value Report
                                        </h4>
                                        <p className="text-sm text-headertext">
                                            Today’s orders
                                        </p>
                                    </div>
                                    <div className="">
                                        <img
                                            src={DownloadPrimary}
                                            alt="Download Primary"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-3 border border-borderlight rounded-xl p-6">
                            <div className="">
                                <div className="flex justify-between gap-3">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-lg font-semibold text-textdarker">
                                            End of Day by Location
                                        </h4>
                                        <p className="text-sm text-headertext">
                                            Select the location and carrier to
                                            download the available report.
                                        </p>
                                    </div>
                                    <div className="">
                                        <img
                                            src={DownloadPrimary}
                                            alt="Download Primary"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <SelectField
                                    label=""
                                    placeholder="Location"
                                    options={[
                                        { value: "1", label: "1" },
                                        { value: "2", label: "2" },
                                        { value: "3", label: "3" },
                                    ]}
                                />

                                <SelectField
                                    label=""
                                    placeholder="Carrier"
                                    options={[
                                        { value: "1", label: "1" },
                                        { value: "2", label: "2" },
                                        { value: "3", label: "3" },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col gap-3 border border-borderlight rounded-xl p-6">
                            <div className="">
                                <div className="flex justify-between gap-3">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-lg font-semibold text-textdarker">
                                            $91.42
                                        </h4>
                                        <p className="text-sm text-headertext">
                                            Select the user and carrier to
                                            download the available report.
                                        </p>
                                    </div>
                                    <div className="">
                                        <img
                                            src={DownloadPrimary}
                                            alt="Download Primary"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <SelectField
                                    label=""
                                    placeholder="User"
                                    options={[
                                        { value: "1", label: "1" },
                                        { value: "2", label: "2" },
                                        { value: "3", label: "3" },
                                    ]}
                                />

                                <SelectField
                                    label=""
                                    placeholder="Carrier"
                                    options={[
                                        { value: "1", label: "1" },
                                        { value: "2", label: "2" },
                                        { value: "3", label: "3" },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
