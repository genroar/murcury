import Button from "@/Components/Button";
import Providers from "@/Components/Providers";
import TextField from "@/Components/TextField";
import Spinner from "@/Components/constants/Spinner";
import useImages from "@/Hooks/useImages";
import Axios from "@/axios/axios";
import { Link } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const { Logo, Mail, AvatarTwo, StarBlue, GoogleBrandIcon } = useImages();
    const onSubmit = (data) => {
        try {
            Axios.post("/login", data).then((response) => {
                if (response.data.status === "success") {
                    toast.success(response.data.message);
                    window.location = "/dashboard";
                } else {
                    toast.error(response.data.message);
                }
            });
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    };
    return (
        <section className="w-full h-screen flex">
            <div className="xl:w-3/6 w-full xl:px-0 px-10 flex justify-center">
                <div className="xl:w-3/6 w-full flex flex-col justify-center h-full">
                    <div className="mb-6 xl:hidden block">
                        <img src={Logo} alt="Mercury Logo" className="h-10" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-textdarker">
                            Welcome Back
                        </h2>
                        <p className="text-base text-headertext mt-3">
                            Welcome back! Please enter your details.
                        </p>
                    </div>

                    <div className="w-full mt-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <TextField
                                    register={register("email", {
                                        required: "Email is required",
                                    })}
                                    label="Email"
                                    type="text"
                                    placeholder="Enter your email"
                                    error={errors.email}
                                />
                            </div>

                            <div className="mt-4">
                                <TextField
                                    register={register("password", {
                                        required: "Password is required",
                                    })}
                                    label="Password"
                                    type="text"
                                    placeholder="Enter your password"
                                    error={errors.password}
                                />
                            </div>

                            <div className="flex justify-between items-center py-4">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ms-2 text-sm font-medium text-textdark"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <div>
                                    <Link
                                        href="/"
                                        className="text-sm text-primary font-semibold"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <Button
                                    isSubmitting={isSubmitting}
                                    isRounded={false}
                                    type={"submit"}
                                >
                                    {isSubmitting ? <Spinner /> : "Login"}
                                </Button>

                                <div className="mt-4">
                                    <Providers />
                                </div>
                            </div>
                        </form>

                        <div className="text-center mt-6">
                            <p className="text-sm text-headertext">
                                Don’t have an account?{" "}
                                <Link
                                    href="/signup"
                                    className="text-primary font-semibold"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
        </section>
    );
}
