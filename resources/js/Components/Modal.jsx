import useImages from "@/Hooks/useImages";
import { useEffect, useState } from "react";

export default function Modal({ children, title, open, setOpen }) {
    const { CloseModel } = useImages();
    const handleCloseModal = () => {
        setOpen(false);
    };

    //on body click close modal //
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    return (
        <div
            className={`w-full fixed top-0 right-0 h-screen backdrop-blur-sm bg-[#0C111D]/40 z-10 overflow-y-scroll ${
                open ? "" : "hidden"
            }`}
        >
            <div className="flex justify-center items-center h-full">
                <div className="xl:w-5/12 w-full bg-white p-6 rounded-lg relative">
                    <div
                        className="absolute top-4 right-4"
                        onClick={handleCloseModal}
                    >
                        <img
                            src={CloseModel}
                            alt="Close Model"
                            className="cursor-pointer"
                        />
                    </div>
                    <h4 className="text-sm font-semibold text-textdarker text-center mb-3">
                        {title}
                    </h4>
                    {children}
                </div>
            </div>
        </div>
    );
}
