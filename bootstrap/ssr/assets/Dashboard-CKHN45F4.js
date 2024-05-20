import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TextField, u as useImages } from "./useImages-19sOBF2F.js";
import DashboardLayout from "./DashboardLayout-D5j467kC.js";
import { useState } from "react";
import { T as TrakingModel } from "./TrakingModel-BfmISea1.js";
import { C as CheckBox } from "./CheckBox-B6jssy60.js";
import { S as SelectField } from "./SelectField-D5ghLT1s.js";
import { M as Modal } from "./Modal-4epZ_nGS.js";
import { usePage } from "@inertiajs/react";
import "./axios-CQftZ3Ie.js";
import "axios";
import "react-hot-toast";
function QuickTrack() {
  const [TrackingNo, setTrackingNo] = useState("");
  const TableData = [
    {
      shortname: "AC",
      name: "A Coffee",
      trakingNumber: "1ZAG6712IKASDFKHJ12",
      status: "N/A"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      trakingNumber: "1ZAG6712IKASDFKHJ13",
      status: "Processing"
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Recipient" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Tracking Number" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Status" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: TableData == null ? void 0 : TableData.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          onClick: () => setTrackingNo(data.trakingNumber),
          class: "odd:bg-white even:bg-gray-50  border-b cursor-pointer",
          children: [
            /* @__PURE__ */ jsx(
              "th",
              {
                scope: "row",
                class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap ",
                children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full border border-[#00000014] bg-lightgray flex justify-center items-center", children: /* @__PURE__ */ jsx("h5", { className: "text-base font-semibold text-footerlink", children: data.shortname }) }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-textdarker font-medium", children: data.name })
                ] })
              }
            ),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.trakingNumber }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border border-borderprimary rounded-md shadow-sm px-[6px] py-[2px] inline-flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[6px] h-[6px] rounded-full bg-primaryred" }),
              /* @__PURE__ */ jsx("span", { className: " text-xs font-medium text-textdark", children: data.status })
            ] }) }) })
          ]
        },
        index
      )) })
    ] }) }) }) }),
    /* @__PURE__ */ jsx(TrakingModel, { trakingnumber: TrackingNo })
  ] });
}
function CostEstimator() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext mt-1 text-center", children: "Get an estimate of charges only. Actual charges may vary due to unforeseen additional cost such as but not limited to; address correction; remote or rural delivery, dimensional weight, additional pickup fees, customs fees etc. Please see the carriers surcharge for additional information." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        SelectField,
        {
          label: "",
          placeholder: "Select Ship From Addres",
          options: [
            { label: "USA", value: "USA" },
            { label: "Canada", value: "Canada" }
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        SelectField,
        {
          label: "",
          placeholder: "Select Ship To Country or Territory",
          options: [
            { label: "USA", value: "USA" },
            { label: "Canada", value: "Canada" }
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        TextField,
        {
          label: "",
          placeholder: "Ship To Postal Code",
          type: "text"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        SelectField,
        {
          label: "",
          placeholder: "Insured Value",
          options: [
            { label: "USA", value: "USA" },
            { label: "Canada", value: "Canada" }
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        SelectField,
        {
          label: "",
          placeholder: "Weight",
          options: [
            { label: "USA", value: "USA" },
            { label: "Canada", value: "Canada" }
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
      CheckBox,
      {
        type: "checkbox",
        name: "residential",
        label: "This is a residential address"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-textdark", children: "Shipping Options" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 mt-2", children: [
        /* @__PURE__ */ jsx(
          CheckBox,
          {
            type: "checkbox",
            name: "saturdayPickup",
            label: "Saturday Pickup (+fee)"
          }
        ),
        /* @__PURE__ */ jsx(
          CheckBox,
          {
            type: "checkbox",
            name: "saturdayDelivery",
            label: "Saturday Delivery (+fee)"
          }
        ),
        /* @__PURE__ */ jsx(
          CheckBox,
          {
            type: "checkbox",
            name: "signatureRequired",
            label: "Custom Packaging"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-textdark", children: "Pickup Options" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 mt-2", children: [
        /* @__PURE__ */ jsx(
          CheckBox,
          {
            type: "radio",
            name: "pickupOptions",
            label: "Schedule Pickup"
          }
        ),
        /* @__PURE__ */ jsx(
          CheckBox,
          {
            type: "radio",
            name: "pickupOptions",
            label: "Shipping Drop Off"
          }
        ),
        /* @__PURE__ */ jsx(
          CheckBox,
          {
            type: "radio",
            name: "pickupOptions",
            label: "My Pickup Location"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-4 mt-8", children: [
      /* @__PURE__ */ jsx("button", { className: "bg-white border border-borderprimary text-textdark text-base font-semibold px-4 py-[10px] rounded-lg w-full", children: "Reset" }),
      /* @__PURE__ */ jsx("button", { className: "bg-primary text-white text-base font-semibold px-4 py-[10px] rounded-lg w-full", children: "Get Quotes" })
    ] })
  ] });
}
function ShipWithFx() {
  const { FedExLogo, ArrowRightDark } = useImages();
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "border border-primary rounded-xl bg-[#FF5A0008] p-6 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-semibold text-textdarker", children: "Ship With FedEx" }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-textdark mt-2", children: "Create a FedEx Shipping Label" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsx("img", { src: FedExLogo, alt: "FedEx Logo" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: ArrowRightDark,
          alt: "Arrow Right",
          className: " w-6 h-6"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-xl p-5 relative cursor-pointer", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-textdark", children: "View Restricted Zip Codes" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "Add yourself or import from CSV" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: ArrowRightDark,
          alt: "Arrow Right",
          className: " w-6 h-6"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-xl p-5 relative cursor-pointer", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-textdark", children: "Safe Packaging Checklist" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "Dive into the editor and start creating" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: ArrowRightDark,
          alt: "Arrow Right",
          className: "w-6 h-6"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "border border-borderlight rounded-xl p-5 relative cursor-pointer",
          onClick: () => setOpen(true),
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-textdark", children: "Cost Estimator" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "Compare shipping costs at the click of a button. We offer competitive UPS and FedEx Rates." }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: ArrowRightDark,
                alt: "Arrow Right",
                className: " w-6 h-6"
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(Modal, { title: "Cost Estimator", open, setOpen, children: /* @__PURE__ */ jsx(CostEstimator, {}) })
    ] }),
    /* @__PURE__ */ jsx(QuickTrack, {})
  ] });
}
function UpcomingEvents() {
  const { MoreIcon, UserIcon } = useImages();
  return /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
    /* @__PURE__ */ jsxs("div", { className: "border-t border-l border-r border-borderlight rounded-tl-xl rounded-tr-xl px-6 py-5 relative", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-textdark", children: "Safe Packaging Checklist" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "Dive into the editor and start creating" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-3", children: /* @__PURE__ */ jsx("img", { src: MoreIcon, alt: "more icon", className: "w-5 h-5" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-bl-xl rounded-br-xl p-6 flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full border border-[#00000014] bg-lightgray flex justify-center items-center", children: /* @__PURE__ */ jsx("img", { src: UserIcon, alt: "User Icon" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium", children: "Package Delivery" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "2 hours ago" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full border border-[#00000014] bg-lightgray flex justify-center items-center", children: /* @__PURE__ */ jsx("img", { src: UserIcon, alt: "User Icon" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium", children: "Package Delivery" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "2 hours ago" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full border border-[#00000014] bg-lightgray flex justify-center items-center", children: /* @__PURE__ */ jsx("img", { src: UserIcon, alt: "User Icon" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium", children: "Package Delivery" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "2 hours ago" })
        ] })
      ] })
    ] })
  ] });
}
function NewsDashboard() {
  const { MoreIcon, UserIcon } = useImages();
  return /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
    /* @__PURE__ */ jsxs("div", { className: "border-t border-l border-r border-borderlight rounded-tl-xl rounded-tr-xl px-6 py-5 relative", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-textdark", children: "News" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "You’re using 80% of available spots." }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-3", children: /* @__PURE__ */ jsx("img", { src: MoreIcon, alt: "more icon", className: "w-5 h-5" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-bl-xl rounded-br-xl p-6 flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-[#98A2B3] font-medium", children: "09 Feb 2024" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium", children: "Package Delivery" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "2 hours ago" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-[#98A2B3] font-medium", children: "09 Feb 2024" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium", children: "Package Delivery" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "2 hours ago" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-[#98A2B3] font-medium", children: "09 Feb 2024" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium", children: "Package Delivery" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "2 hours ago" })
      ] }) })
    ] })
  ] });
}
function Dashboard() {
  var _a;
  const { auth } = usePage().props;
  const { DashboardTopImage } = useImages();
  return /* @__PURE__ */ jsx(DashboardLayout, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-semibold", children: [
      "Welcome Back,",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: (_a = auth == null ? void 0 : auth.user) == null ? void 0 : _a.name })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-base text-headertext", children: "Track your parcels quickly from home page" }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 mb-6", children: /* @__PURE__ */ jsx("img", { src: DashboardTopImage, alt: "Dashboard Top Image" }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(ShipWithFx, {}) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4", children: [
        /* @__PURE__ */ jsx(UpcomingEvents, {}),
        /* @__PURE__ */ jsx(NewsDashboard, {})
      ] }) })
    ] })
  ] }) });
}
export {
  Dashboard as default
};
