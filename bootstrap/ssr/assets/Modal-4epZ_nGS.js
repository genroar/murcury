import { jsx, jsxs } from "react/jsx-runtime";
import { u as useImages } from "./useImages-19sOBF2F.js";
import { useEffect } from "react";
function Modal({ children, title, open, setOpen }) {
  const { CloseModel } = useImages();
  const handleCloseModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `w-full fixed top-0 right-0 h-screen backdrop-blur-sm bg-[#0C111D]/40 z-10 overflow-y-scroll ${open ? "" : "hidden"}`,
      children: /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ jsxs("div", { className: "xl:w-5/12 w-full bg-white p-6 rounded-lg relative", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-4 right-4",
            onClick: handleCloseModal,
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: CloseModel,
                alt: "Close Model",
                className: "cursor-pointer"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-textdarker text-center mb-3", children: title }),
        children
      ] }) })
    }
  );
}
export {
  Modal as M
};
