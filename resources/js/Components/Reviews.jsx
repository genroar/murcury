import useImages from "@/Hooks/useImages";

export default function Reviews() {
    const { StarBlue, Avatar, ReviewMain, ArrowRightLg, ArrowLeft } =
        useImages();
    return (
        <section className="py-24">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex gap-1">
                            <div>
                                <img src={StarBlue} alt="star-blue" />
                            </div>
                            <div>
                                <img src={StarBlue} alt="star-blue" />
                            </div>
                            <div>
                                <img src={StarBlue} alt="star-blue" />
                            </div>
                            <div>
                                <img src={StarBlue} alt="star-blue" />
                            </div>
                            <div>
                                <img src={StarBlue} alt="star-blue" />
                            </div>
                        </div>

                        <div className="mt-8">
                            <h2 className="lg:text-5xl text-3xl font-medium text-[#101828]">
                                We’ve really sped up our workflow using Mercury
                                and haven’t looked back.
                            </h2>

                            <div className="flex justify-between items-center gap-5 mt-12">
                                <div className="flex justify-start items-center gap-3">
                                    <img src={Avatar} alt="avatar" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#101828]">
                                            Sienna Hewitt
                                        </h3>
                                        <p className="text-base text-headertext">
                                            Project Manager, Layers
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-8">
                                    <div className=" w-14 h-14 border border-borderlight rounded-full flex justify-center items-center">
                                        <img src={ArrowLeft} alt="arrow-left" />
                                    </div>
                                    <div className=" w-14 h-14 border border-borderlight rounded-full flex justify-center items-center">
                                        <img
                                            src={ArrowRightLg}
                                            alt="arrow-right"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <img src={ReviewMain} alt="review-main" />
                    </div>
                </div>
            </div>
        </section>
    );
}
