export default function TextField({
    label,
    placeholder,
    type,
    register,
    error,
    defaultValue,
    ...rest
}) {
    return (
        <div>
            <label
                className={`text-[#475467] text-sm font-semibold ${
                    label ? "block" : "hidden"
                } ${label ? "mb-2" : ""}`}
                htmlFor={label}
            >
                {label}
            </label>
            <input
                defaultValue={defaultValue}
                {...register}
                {...rest}
                id={label}
                className="w-full px-3 py-2 border border-borderprimary rounded-lg outline-none focus:ring-0 focus:outline-none focus:border-primary text-[#344054] text-base"
                type={type}
                placeholder={placeholder}
            />
            {error && (
                <span className="text-red-500 text-sm">
                    {error.message || "This field is required"}
                </span>
            )}
        </div>
    );
}
