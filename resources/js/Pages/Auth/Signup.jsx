import Button from "@/Components/Button";
import Providers from "@/Components/Providers";
import TextField from "@/Components/TextField";
import Spinner from "@/Components/constants/Spinner";
import useImages from "@/Hooks/useImages";
import Axios from "@/axios/axios";
import { Link } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
    const { Logo, Mail, AvatarTwo, StarBlue, GoogleBrandIcon } = useImages();

    return (
        <section className="w-full h-screen flex">
            <div className="lg:w-3/6 w-full bg-lightgray p-8 xl:block hidden">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <img src={Logo} alt="Mercury Logo" className="h-10" />
                    </div>
                    <div className="flex justify-center">
                        <div className="lg:w-5/6 flex flex-col w-full">
                            <p className="text-3xl font-medium text-textdarker text-center">
                                We’ve been using Mercury to kick start every new
                                project and can’t imagine working without it.
                            </p>

                            <div className="flex flex-col items-center mt-8">
                                <img
                                    src={AvatarTwo}
                                    alt="Avatar"
                                    className="w-20 h-20 rounded-full mx-auto"
                                />

                                <h6 className="text-base text-textdarker font-semibold mt-3">
                                    Pippa Wilkinson
                                </h6>
                                <p className="text-sm text-headertext font-medium mt-1">
                                    Head of Design, Layers
                                </p>
                                <div className="flex gap-1 mt-5">
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
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-headertext text-sm">
                                @ Mercury 2024
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <img src={Mail} alt="Mail" className="w-4" />
                            <a className="text-headertext text-sm">
                                help@Mercury.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:w-3/6 w-full xl:px-0 px-10 flex justify-center">
                <div className="xl:w-3/6 w-full flex flex-col justify-center h-full">
                    <div className="mb-6 xl:hidden block">
                        <img src={Logo} alt="Mercury Logo" className="h-10" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-textdarker">
                            Sign Up
                        </h2>
                        <p className="text-base text-headertext mt-3">
                            Start your 30-day free trial.
                        </p>
                    </div>
                    <div>
                        <div className="w-full mt-3">
                            <TextField
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mt-6">
                            <Button
                                href="/onboarding"
                                isRounded={false}
                                type={"button"}
                            >
                                Get started
                            </Button>
                        </div>

                        <div className="mt-6">
                            <Providers />
                        </div>

                        <div className="text-center mt-6">
                            <p className="text-sm text-headertext">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-primary font-semibold"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
