import { jsx, Fragment, jsxs } from "react/jsx-runtime";
function CheckBox({ label, type, name, checked, onChange }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        id: label,
        type,
        value: "",
        name,
        className: `w-4 h-4 text-primary  border-gray-300 ${type === "radio" ? "rounded-full" : "rounded"}  focus:ring-primary focus:ring-2`
      }
    ),
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: label,
        className: "ms-2 text-sm font-medium text-textdark",
        children: label
      }
    )
  ] }) });
}
export {
  CheckBox as C
};
