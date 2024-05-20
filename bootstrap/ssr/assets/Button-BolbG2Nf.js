import { jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
function Button({
  children,
  isRounded,
  isSubmitting,
  type,
  ...props
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: type === "submit" ? /* @__PURE__ */ jsx(
    "button",
    {
      disabled: isSubmitting,
      type,
      className: `w-full text-white font-semibold bg-primary py-[10px] px-3 ${isSubmitting ? "opacity-50" : ""} ${isRounded ? "rounded-full" : "rounded-lg"}`,
      children
    }
  ) : /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-block text-base font-semibold text-white w-full",
      children: /* @__PURE__ */ jsx(
        "button",
        {
          className: `w-full bg-primary font-semibold text-white py-[10px] px-3 ${isRounded ? "rounded-full" : "rounded-lg"}`,
          children
        }
      )
    }
  ) });
}
export {
  Button as B
};
