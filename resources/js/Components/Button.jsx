import { Link } from "@inertiajs/react";

export default function Button({
    children,
    isRounded,
    isSubmitting,
    type,
    width,
    ...props
}) {
    return (
        <>
            {type === "submit" ? (
                <button
                    disabled={isSubmitting}
                    type={type}
                    className={`w-full text-white font-semibold bg-primary py-[10px] px-3 ${
                        isSubmitting ? "opacity-50" : ""
                    } ${isRounded ? "rounded-full" : "rounded-lg"}`}
                >
                    {children}
                </button>
            ) : (
                <Link
                    {...props}
                    className="inline-block text-base font-semibold text-white w-full"
                >
                    <button
                        className={`${
                            width ? width : "w-full"
                        } bg-primary text-base font-semibold text-white py-[10px] px-3 ${
                            isRounded ? "rounded-full" : "rounded-lg"
                        }`}
                    >
                        {children}
                    </button>
                </Link>
            )}
        </>
    );
}
