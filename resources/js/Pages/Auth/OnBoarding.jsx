import Button from "@/Components/Button";
import TextField from "@/Components/TextField";
import useImages from "@/Hooks/useImages";
import OnBoardingHeader from "@/Layouts/OnBoardingHeader";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function OnBoarding() {
    const { LogoLandmark } = useImages();

    const handleUpdateStep = () => {
        setSteps((prevSteps) => {
            const currentIndex = prevSteps.findIndex((step) => step.isActive);
            if (currentIndex === -1) return prevSteps; // No active step found

            const newSteps = prevSteps.map((step, index) => ({
                ...step,
                isActive: index === currentIndex + 1,
            }));

            return newSteps;
        });
    };
    return (
        <>
            <OnBoardingHeader />
            <div
                className={`h-screen flex flex-col justify-center bg-onboarding`}
            >
                <div className="flex flex-col justify-center items-center mt-16">
                    <img src={LogoLandmark} alt="Mercury Logo" />
                    <h1 className="text-3xl text-textdarker font-semibold mt-6">
                        Welcome to Planet Mercury.
                    </h1>
                    <p className="text-base text-headertext mt-1">
                        Where we move goods with care.
                    </p>
                    <div className="mt-6">
                        <Link
                            href="/onboarding-steps"
                            className="bg-primary text-base font-semibold text-white py-[10px] px-3 rounded-lg"
                            type="button"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
