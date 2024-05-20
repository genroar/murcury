export default function SelectField({
    label,
    value,
    onChange,
    placeholder,
    options,
}) {
    return (
        <>
            <label
                className={`text-[#475467] text-sm font-semibold ${
                    label ? "block" : "hidden"
                } ${label ? "mb-2" : ""}`}
                htmlFor={label}
            >
                {label}
            </label>
            <select
                id="countries"
                class="border border-borderprimary rounded-lg outline-none focus:ring-0 focus:outline-none focus:border-primary text-[#344054] text-sm  block w-full p-2.5 "
            >
                <option selected disabled>
                    Choose {placeholder}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}
