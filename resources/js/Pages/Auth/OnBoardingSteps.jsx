import SelectField from "@/Components/SelectField";
import TextField from "@/Components/TextField";
import useImages from "@/Hooks/useImages";
import OnBoardingHeader from "@/Layouts/OnBoardingHeader";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function OnBoardingSteps() {
    const { LogoLandmark, ArrowRightWhite, ArrowLeft } = useImages();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        // try {
        //     Axios.post("/signup", data).then((response) => {
        //         if (response.data.status === "success") {
        //             toast.success(
        //                 "Account created successfully. Please login."
        //             );
        //             setTimeout(() => {
        //                 window.location = "/dashboard";
        //             }, 3000);
        //         } else {
        //             toast.error(response.data.errors);
        //         }
        //     });
        // } catch (error) {
        //     toast.error("An error occurred. Please try again later.");
        // }
    };

    const [steps, setSteps] = useState([
        { id: 1, name: "Step 1", isActive: true },
        { id: 2, name: "Step 2", isActive: false },
        { id: 3, name: "Step 3", isActive: false },
    ]);

    const handleUpdateStep = () => {
        setSteps((prevSteps) => {
            const currentIndex = prevSteps.findIndex((step) => step.isActive);
            if (currentIndex === -1) return prevSteps; // No active step found
            // If the current index is the last index, then we can't go forward
            if (currentIndex === prevSteps.length - 1) return prevSteps;
            const newSteps = prevSteps.map((step, index) => ({
                ...step,
                isActive: index === currentIndex + 1,
            }));

            return newSteps;
        });
    };

    const handleBackStep = () => {
        setSteps((prevSteps) => {
            const currentIndex = prevSteps.findIndex((step) => step.isActive);
            if (currentIndex === -1) return prevSteps; // No active step found
            // If the current index is 0, then we can't go back
            if (currentIndex === 0) return prevSteps;

            const newSteps = prevSteps.map((step, index) => ({
                ...step,
                isActive: index === currentIndex - 1,
            }));

            return newSteps;
        });
    };
    return (
        <>
            <OnBoardingHeader />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`h-screen flex flex-col justify-center`}>
                    <div>
                        <div className="flex justify-center">
                            <div className="xl:w-2/6 w-full">
                                <div className="flex flex-col items-center justify-center">
                                    <img
                                        src={LogoLandmark}
                                        alt="Mercury Logo"
                                    />
                                    <h2 className="text-3xl text-textdarker font-semibold mt-8">
                                        Account Creation
                                    </h2>
                                    <p className="text-base text-headertext text-center mt-2">
                                        Team Alicia needs some more personal and
                                        social information before you start.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {steps.map((step, index) => (
                        <div key={index}>
                            <div className="flex justify-center">
                                <div
                                    className={`${
                                        step.id === 2 || step.id === 3
                                            ? "xl:w-3/6"
                                            : "xl:w-2/6"
                                    } w-full`}
                                >
                                    <div
                                        className={`flex flex-col gap-3 ${
                                            step.isActive &&
                                            step.name === "Step 1"
                                                ? ""
                                                : "hidden"
                                        }`}
                                    >
                                        <div>
                                            <TextField
                                                register={register("fullname", {
                                                    required:
                                                        "Full name is required",
                                                })}
                                                label="Full Name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                error={errors.fullname}
                                            />
                                        </div>
                                        <div>
                                            <TextField
                                                register={register("email", {
                                                    required:
                                                        "Email is required",
                                                })}
                                                label="Email"
                                                type="email"
                                                placeholder="Enter your email"
                                                error={errors.email}
                                            />
                                        </div>
                                        <div>
                                            <TextField
                                                register={register("password", {
                                                    required:
                                                        "Password is required",
                                                })}
                                                label="Password"
                                                type="password"
                                                placeholder="Set a password for your account"
                                                error={errors.email}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={`${
                                            step.isActive &&
                                            step.name === "Step 2"
                                                ? ""
                                                : "hidden"
                                        }`}
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                            <div>
                                                <SelectField
                                                    register={register(
                                                        "country",
                                                        {
                                                            required:
                                                                "Country is required",
                                                        }
                                                    )}
                                                    placeholder={
                                                        "Select country"
                                                    }
                                                    label="What Country is your business located?"
                                                    options={[
                                                        {
                                                            value: "Nigeria",
                                                            label: "Nigeria",
                                                        },
                                                        {
                                                            value: "Ghana",
                                                            label: "Ghana",
                                                        },
                                                        {
                                                            value: "Kenya",
                                                            label: "Kenya",
                                                        },
                                                    ]}
                                                />
                                            </div>
                                            <div>
                                                <SelectField
                                                    register={register(
                                                        "country",
                                                        {
                                                            required:
                                                                "About mercury is required",
                                                        }
                                                    )}
                                                    placeholder={
                                                        "Select source"
                                                    }
                                                    label="How did you hear about Mercury?"
                                                    options={[
                                                        {
                                                            value: "Nigeria",
                                                            label: "Nigeria",
                                                        },
                                                        {
                                                            value: "Ghana",
                                                            label: "Ghana",
                                                        },
                                                        {
                                                            value: "Kenya",
                                                            label: "Kenya",
                                                        },
                                                    ]}
                                                />
                                            </div>

                                            <div>
                                                <SelectField
                                                    register={register(
                                                        "affiliation",
                                                        {
                                                            required:
                                                                "Affiliation is required",
                                                        }
                                                    )}
                                                    placeholder={
                                                        "Select affiliation"
                                                    }
                                                    label=""
                                                    options={[
                                                        {
                                                            value: "Nigeria",
                                                            label: "Nigeria",
                                                        },
                                                        {
                                                            value: "Ghana",
                                                            label: "Ghana",
                                                        },
                                                        {
                                                            value: "Kenya",
                                                            label: "Kenya",
                                                        },
                                                    ]}
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    register={register("dba", {
                                                        required:
                                                            "DBA is required",
                                                    })}
                                                    label=""
                                                    type="text"
                                                    placeholder="Enter DBA"
                                                    error={errors.dba}
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    register={register(
                                                        "company_name",
                                                        {
                                                            required:
                                                                "Company name is required",
                                                        }
                                                    )}
                                                    label=""
                                                    type="text"
                                                    placeholder="Company Name"
                                                    error={errors.company_name}
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    register={register(
                                                        "contact_person_name",
                                                        {
                                                            required:
                                                                "Contact person name is required",
                                                        }
                                                    )}
                                                    label=""
                                                    type="text"
                                                    placeholder="Contact Person Name"
                                                    error={errors.company_name}
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    register={register(
                                                        "business_owner_name",
                                                        {
                                                            required:
                                                                "Business owner name is required",
                                                        }
                                                    )}
                                                    label=""
                                                    type="text"
                                                    placeholder="Business Owner Name"
                                                    error={errors.company_name}
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    register={register(
                                                        "fed_tax_id",
                                                        {
                                                            required:
                                                                "Federal Tax ID is required",
                                                        }
                                                    )}
                                                    label=""
                                                    type="text"
                                                    placeholder="Federal Tax ID"
                                                    error={errors.company_name}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                                <div>
                                                    <TextField
                                                        register={register(
                                                            "business_founded",
                                                            {
                                                                required:
                                                                    "Business founded is required",
                                                            }
                                                        )}
                                                        label="Business Founded"
                                                        type="text"
                                                        defaultValue="2021"
                                                        placeholder=""
                                                        error={
                                                            errors.company_name
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <TextField
                                                        register={register(
                                                            "no_of_locations",
                                                            {
                                                                required:
                                                                    "Number of locations is required",
                                                            }
                                                        )}
                                                        label="Number of Locations"
                                                        type="text"
                                                        defaultValue="0"
                                                        placeholder=""
                                                        error={
                                                            errors.company_name
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                                <div>
                                                    <TextField
                                                        register={register(
                                                            "years_in_business",
                                                            {
                                                                required:
                                                                    "Years in business is required",
                                                            }
                                                        )}
                                                        label="Years in Business"
                                                        type="text"
                                                        defaultValue="1999"
                                                        placeholder=""
                                                        error={
                                                            errors.company_name
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <TextField
                                                        register={register(
                                                            "no_of_employees",
                                                            {
                                                                required:
                                                                    "Number of employees is required",
                                                            }
                                                        )}
                                                        label="Number of Employees"
                                                        type="text"
                                                        defaultValue="0"
                                                        placeholder=""
                                                        error={
                                                            errors.company_name
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`${
                                            step.isActive &&
                                            step.name === "Step 3"
                                                ? ""
                                                : "hidden"
                                        }`}
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                                            <div className="col-span-1">
                                                <TextField
                                                    label=""
                                                    placeholder={
                                                        "Street Address"
                                                    }
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <TextField
                                                    label=""
                                                    placeholder={"Suite / Apt"}
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <TextField
                                                    label=""
                                                    placeholder={"City"}
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <TextField
                                                    label=""
                                                    placeholder={
                                                        "State/Province"
                                                    }
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <TextField
                                                    label=""
                                                    placeholder={"Zip Code"}
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <SelectField
                                                    label=""
                                                    placeholder={"Country"}
                                                    options={[
                                                        {
                                                            label: "USA",
                                                            value: "USA",
                                                        },
                                                        {
                                                            label: "Canada",
                                                            value: "Canada",
                                                        },
                                                    ]}
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <TextField
                                                    label=""
                                                    placeholder={
                                                        "Telephone No."
                                                    }
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <TextField
                                                    label=""
                                                    placeholder={
                                                        "Email Address"
                                                    }
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-center">
                        {/* <div className="xl:w-2/6 w-full"> */}
                        <div
                            className={`${
                                steps[0].isActive ? "xl:w-2/6" : "xl:w-3/6"
                            } w-full`}
                        >
                            <div className="flex justify-between">
                                <div></div>
                                <div className="flex gap-2 items-end">
                                    <div className="flex justify-center mt-6">
                                        <button
                                            type="button"
                                            onClick={handleBackStep}
                                            className="bg-white border border-primaryDarklight text-base font-semibold text-primaryDark py-[10px] px-3 rounded-lg flex items-center gap-2"
                                        >
                                            <img
                                                src={ArrowLeft}
                                                alt="arrow-left"
                                            />
                                            back
                                        </button>
                                    </div>
                                    {steps[steps.length - 1].isActive ? (
                                        <button
                                            type="submit"
                                            className="bg-primary text-base font-semibold text-white py-[10px] px-3 rounded-lg flex items-center gap-2"
                                        >
                                            Submit
                                            <img
                                                src={ArrowRightWhite}
                                                alt="arrow-right"
                                            />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleUpdateStep}
                                            className="bg-primary text-base font-semibold text-white py-[10px] px-3 rounded-lg flex items-center gap-2"
                                        >
                                            Next
                                            <img
                                                src={ArrowRightWhite}
                                                alt="arrow-right"
                                            />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
