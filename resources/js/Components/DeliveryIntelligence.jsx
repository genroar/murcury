import useImages from "@/Hooks/useImages";

export default function DeliveryIntelligence() {
    const { ChevronRight } = useImages();
    return (
        <div className="container">
            <div className="bg-image-delivery bg-no-repeat con bg-center bg-cover h-[456px] rounded-3xl">
                <div className="h-full flex justify-center">
                    <div className="lg:w-5/6 w-full h-full flex flex-col items-center justify-center">
                        <div className="mt-5 text-center">
                            <h1 className="lg:text-4xl text-3xl font-semibold text-white">
                                Enhance Shipping Decisions with Delivery
                                Intelligence
                            </h1>

                            <div className="flex justify-center">
                                <div className="lg:w-4/6">
                                    <p className="lg:text-2xl text-xl text-white mt-6">
                                        Unlock the advantages of
                                        DeliveryDefense™ Address Confidence
                                        scores when you use Parcel Pro® insured
                                        shipping services.
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center gap-3 mt-8">
                                <button className="bg-primary text-white text-lg font-semibold px-10 py-4 flex items-center rounded-full gap-2">
                                    Explore More
                                    <img
                                        src={ChevronRight}
                                        alt="chevron-right"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
