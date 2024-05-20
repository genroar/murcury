import { Head, usePage } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import useImages from "@/Hooks/useImages";
import Services from "@/Components/Services";
import DeliveryIntelligence from "@/Components/DeliveryIntelligence";
import Reviews from "@/Components/Reviews";
import HowToApply from "@/Components/HowToApply";
import Resources from "@/Components/Resources";
import Footer from "@/Layouts/Footer";
export default function Home() {
    const { Dot, ArrowRight, PlayCircle } = useImages();
    const { auth } = usePage().props;
    return (
        <div>
            {/* Head Component */}
            <Head title="Home" />
            {/* Navbar Component */}
            <Navbar />
            {/* Main Content */}
            <div className="container lg:mt-12 mt-8">
                <div className="bg-image-main bg-no-repeat con bg-center bg-cover h-[544px] rounded-3xl">
                    <div className="h-full flex justify-center">
                        <div className="lg:w-5/6 w-full h-full flex flex-col items-center justify-center">
                            <div className="lg:w-[345px] rounded-lg border border-borderprimary pr-[10px] pl-1 py-1 bg-white">
                                <div className="flex justify-between gap-2 items-center">
                                    <div className="px-2 py-[2px] rounded-[6px] border border-borderprimary flex gap-2 items-center">
                                        <img src={Dot} alt="dot" />
                                        <span className="text-textdark text-sm font-medium">
                                            What’s new?
                                        </span>
                                    </div>

                                    <div className="flex gap-1 items-center">
                                        <span className="text-textdark text-sm font-semibold">
                                            Instantly issue virtual cards
                                        </span>
                                        <img
                                            src={ArrowRight}
                                            alt="arrow-right"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 text-center lg:w-4/6">
                                <h1 className="lg:text-6xl text-3xl font-semibold text-white">
                                    We Move Goods With Care.
                                </h1>

                                <p className="lg:text-xl text-lg text-white mt-6">
                                    Move your high-value goods and jewelry with
                                    maximum care and support with our insured
                                    shipping services.
                                </p>

                                <div className="flex justify-center gap-3 mt-8">
                                    <button className="bg-white text-textdark text-lg font-semibold px-10 py-4 rounded-full flex gap-2 items-center">
                                        <img
                                            src={PlayCircle}
                                            alt="play-circle"
                                        />
                                        Demo
                                    </button>
                                    <button className="bg-primary text-white text-lg font-semibold px-10 py-4 rounded-full">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Component */}
            <Services />

            {/* Delivery Component */}
            <DeliveryIntelligence />

            {/* Reviews Component */}
            <Reviews />

            {/* Resources Component */}
            <Resources />

            {/* How to Apply Component */}
            <HowToApply />

            {/* Footer Component */}
            <Footer />
        </div>
    );
}
