import { jsxs, Fragment, jsx } from "react/jsx-runtime";
function SelectField({
  label,
  value,
  onChange,
  placeholder,
  options
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "label",
      {
        className: `text-[#475467] text-sm font-semibold ${label ? "block" : "hidden"} ${label ? "mb-2" : ""}`,
        htmlFor: label,
        children: label
      }
    ),
    /* @__PURE__ */ jsxs(
      "select",
      {
        id: "countries",
        class: "border border-borderprimary rounded-lg outline-none focus:ring-0 focus:outline-none focus:border-primary text-[#344054] text-sm  block w-full p-2.5 ",
        children: [
          /* @__PURE__ */ jsxs("option", { selected: true, disabled: true, children: [
            "Choose ",
            placeholder
          ] }),
          options.map((option, index) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, index))
        ]
      }
    )
  ] });
}
export {
  SelectField as S
};
