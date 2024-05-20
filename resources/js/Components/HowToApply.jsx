import useImages from "@/Hooks/useImages";
import { Link } from "@inertiajs/react";

export default function HowToApply() {
    const { LoginScreen } = useImages();
    return (
        <section className="pt-24">
            <div className="container">
                <div className="flex justify-center items-center">
                    <div className="lg:w-5/6 w-full text-center">
                        <h1 className="lg:text-4xl text-3xl font-semibold text-[#101828]">
                            From High-Tech to High Fashion
                        </h1>

                        <div className="flex flex-col justify-center items-center">
                            <div className="lg:w-4/6">
                                <p className="lg:text-2xl text-xl text-headertext mt-6">
                                    We serve businesses across industries. Get
                                    started with Parcel Pro to keep your goods
                                    moving safely.
                                </p>
                            </div>

                            <div className="flex gap-3 mt-7">
                                <button className="border bg-white border-borderprimary py-3 px-[18px] rounded-lg text-base font-semibold text-dark">
                                    How We Work
                                </button>
                                <Link
                                    href="/signup"
                                    className="border bg-primary border-primary py-3 px-[18px] rounded-lg text-base font-semibold text-white"
                                >
                                    Apply
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <img
                        src={LoginScreen}
                        className="w-full"
                        alt="login-screen"
                    />
                </div>
            </div>
        </section>
    );
}
