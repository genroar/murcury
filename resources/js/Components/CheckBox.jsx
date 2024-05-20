export default function CheckBox({ label, type, name, checked, onChange }) {
    return (
        <>
            <div className="flex items-center">
                <input
                    id={label}
                    type={type}
                    value=""
                    name={name}
                    className={`w-4 h-4 text-primary  border-gray-300 ${
                        type === "radio" ? "rounded-full" : "rounded"
                    }  focus:ring-primary focus:ring-2`}
                />
                <label
                    htmlFor={label}
                    className="ms-2 text-sm font-medium text-textdark"
                >
                    {label}
                </label>
            </div>
        </>
    );
}
