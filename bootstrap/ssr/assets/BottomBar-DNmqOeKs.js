import { jsxs, jsx } from "react/jsx-runtime";
function BottomBar({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 right-0 w-full flex", children: [
    /* @__PURE__ */ jsx("div", { className: "min-w-[240px] max-w-[260px]" }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-white  border-t border-borderlight flex p-6", children })
  ] });
}
export {
  BottomBar as B
};
