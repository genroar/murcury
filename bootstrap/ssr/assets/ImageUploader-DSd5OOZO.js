import { jsxs, jsx } from "react/jsx-runtime";
import { u as useImages } from "./useImages-19sOBF2F.js";
function ImageUploader({ text, maxmb, height }) {
  const { UploadIcon } = useImages();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `border border-borderprimary rounded-xl ${height} flex flex-col px-5 items-center justify-center gap-3`,
      children: [
        /* @__PURE__ */ jsx("img", { src: UploadIcon, alt: "Upload Icon", className: "w-10" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-headertext", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold", children: "Browse " }),
          text ? text : "or drag and drop your file here"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: maxmb ? maxmb : "" })
      ]
    }
  );
}
export {
  ImageUploader as I
};
