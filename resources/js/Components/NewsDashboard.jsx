import useImages from "@/Hooks/useImages";

export default function NewsDashboard() {
    const { MoreIcon, UserIcon } = useImages();
    return (
        <div className="col-span-1">
            <div className="border-t border-l border-r border-borderlight rounded-tl-xl rounded-tr-xl px-6 py-5 relative">
                <h3 className="text-base font-semibold text-textdark">News</h3>
                <p className="text-sm text-headertext">
                    You’re using 80% of available spots.
                </p>

                <div className="absolute top-6 right-3">
                    <img src={MoreIcon} alt="more icon" className="w-5 h-5" />
                </div>
            </div>
            <div className="border border-borderlight rounded-bl-xl rounded-br-xl p-6 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <p className="text-xs text-[#98A2B3] font-medium">
                            09 Feb 2024
                        </p>
                        <p className="text-sm text-headertext font-medium">
                            Package Delivery
                        </p>
                        <p className="text-sm text-headertext">2 hours ago</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <p className="text-xs text-[#98A2B3] font-medium">
                            09 Feb 2024
                        </p>
                        <p className="text-sm text-headertext font-medium">
                            Package Delivery
                        </p>
                        <p className="text-sm text-headertext">2 hours ago</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <p className="text-xs text-[#98A2B3] font-medium">
                            09 Feb 2024
                        </p>
                        <p className="text-sm text-headertext font-medium">
                            Package Delivery
                        </p>
                        <p className="text-sm text-headertext">2 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
