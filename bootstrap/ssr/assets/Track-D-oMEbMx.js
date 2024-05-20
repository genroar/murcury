import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import DashboardLayout from "./DashboardLayout-D5j467kC.js";
import { u as useImages, T as TextField } from "./useImages-19sOBF2F.js";
import { T as TrakingModel } from "./TrakingModel-BfmISea1.js";
import { S as SelectField } from "./SelectField-D5ghLT1s.js";
import { B as BottomBar } from "./BottomBar-DNmqOeKs.js";
import "./axios-CQftZ3Ie.js";
import "axios";
import "@inertiajs/react";
import "react-hot-toast";
function ShipmentHistory() {
  const { Eye } = useImages();
  const [TrackingNo, setTrackingNo] = useState("");
  const ShippingHistory = [
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      services: "030456",
      status: "N/A",
      coverage: "Covered",
      trackingno: "030456",
      referanceno: "030456"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      services: "030456",
      status: "N/A",
      coverage: "Covered",
      trackingno: "030456",
      referanceno: "030456"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      services: "030456",
      status: "N/A",
      coverage: "Covered",
      trackingno: "030456",
      referanceno: "030456"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      services: "030456",
      status: "N/A",
      coverage: "Covered",
      trackingno: "030456",
      referanceno: "030456"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      services: "030456",
      status: "N/A",
      coverage: "Covered",
      trackingno: "030456",
      referanceno: "030456"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Shipment History" }),
    /* @__PURE__ */ jsx("p", { className: "text-base text-headertext mt-2", children: "Shipments displayed below have been created, approved, or denied within the past 96 hours." }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Carrier" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Ship Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Ship To Address" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Services" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Status" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Coverage" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Tracking No." }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Reference No." }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Receipt" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: ShippingHistory == null ? void 0 : ShippingHistory.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          onClick: () => setTrackingNo(data.trackingno),
          class: "odd:bg-white border-b cursor-pointer",
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
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.shipdate }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.address }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.services }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border border-borderprimary rounded-md shadow-sm px-[6px] py-[2px] inline-flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[6px] h-[6px] rounded-full bg-primaryred" }),
              /* @__PURE__ */ jsx("span", { className: " text-xs font-medium text-textdark", children: data.status })
            ] }) }) }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.coverage }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.trackingno }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.referanceno }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { className: "flex gap-2 items-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: Eye,
                alt: "Eye",
                className: "w-5"
              }
            ) }) })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx(TrakingModel, { trakingnumber: TrackingNo })
  ] });
}
function ReportsHostory() {
  const TableData = [
    {
      account: "13 Oct 2024",
      shortname: "AC",
      name: "A Coffee",
      reportdate: "13 Oct 2024",
      shipdate: "13 Oct 2024",
      traking: "030456",
      confirmation: "13 Oct 2024",
      coverage: "Covered",
      status: "N/A"
    },
    {
      account: "13 Oct 2024",
      shortname: "AC",
      name: "A Coffee",
      reportdate: "13 Oct 2024",
      shipdate: "13 Oct 2024",
      traking: "030456",
      confirmation: "13 Oct 2024",
      coverage: "Covered",
      status: "Processing"
    },
    {
      account: "13 Oct 2024",
      shortname: "AC",
      name: "A Coffee",
      reportdate: "13 Oct 2024",
      shipdate: "13 Oct 2024",
      traking: "030456",
      confirmation: "13 Oct 2024",
      coverage: "Covered",
      status: "Processing"
    },
    {
      account: "13 Oct 2024",
      shortname: "AC",
      name: "A Coffee",
      reportdate: "13 Oct 2024",
      shipdate: "13 Oct 2024",
      traking: "030456",
      confirmation: "13 Oct 2024",
      coverage: "Covered",
      status: "Processing"
    },
    {
      account: "13 Oct 2024",
      shortname: "AC",
      name: "A Coffee",
      reportdate: "13 Oct 2024",
      shipdate: "13 Oct 2024",
      traking: "030456",
      confirmation: "13 Oct 2024",
      coverage: "Covered",
      status: "Processing"
    },
    {
      account: "13 Oct 2024",
      shortname: "AC",
      name: "A Coffee",
      reportdate: "13 Oct 2024",
      shipdate: "13 Oct 2024",
      traking: "030456",
      confirmation: "13 Oct 2024",
      coverage: "Covered",
      status: "Processing"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Reports History" }),
      /* @__PURE__ */ jsx("span", { className: "text-primary text-base font-semibold", children: "Report Shipment" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Account" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Carrier" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Report Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Ship Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Tracking #" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Confirmation" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Coverage" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Status" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: TableData == null ? void 0 : TableData.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          class: "odd:bg-white border-b cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.account }),
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
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.reportdate }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.shipdate }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.traking }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.confirmation }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.coverage }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border border-borderprimary rounded-md shadow-sm px-[6px] py-[2px] inline-flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[6px] h-[6px] rounded-full bg-primaryred" }),
              /* @__PURE__ */ jsx("span", { className: " text-xs font-medium text-textdark", children: data.status })
            ] }) }) })
          ]
        },
        index
      )) })
    ] }) }) })
  ] });
}
function ScheduledPickups() {
  const TableData = [
    {
      shortname: "AC",
      name: "A Coffee",
      pickupdate: "13 Oct 2024",
      address: "13 Oct 2024",
      zipcode: "030456",
      dispatch: "13 Oct 2024",
      status: "N/A"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      pickupdate: "13 Oct 2024",
      address: "13 Oct 2024",
      zipcode: "030456",
      dispatch: "13 Oct 2024",
      status: "N/A"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      pickupdate: "13 Oct 2024",
      address: "13 Oct 2024",
      zipcode: "030456",
      dispatch: "13 Oct 2024",
      status: "N/A"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      pickupdate: "13 Oct 2024",
      address: "13 Oct 2024",
      zipcode: "030456",
      dispatch: "13 Oct 2024",
      status: "N/A"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      pickupdate: "13 Oct 2024",
      address: "13 Oct 2024",
      zipcode: "030456",
      dispatch: "13 Oct 2024",
      status: "N/A"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Scheduled Pickups" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Carrier" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Pickup Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Ship To Address" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Zip Code" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Dispatch Information" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Status" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: TableData == null ? void 0 : TableData.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          class: "odd:bg-white border-b cursor-pointer",
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
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.pickupdate }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.address }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.zipcode }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.dispatch }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border border-borderprimary rounded-md shadow-sm px-[6px] py-[2px] inline-flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[6px] h-[6px] rounded-full bg-primaryred" }),
              /* @__PURE__ */ jsx("span", { className: " text-xs font-medium text-textdark", children: data.status })
            ] }) }) })
          ]
        },
        index
      )) })
    ] }) }) })
  ] });
}
function EndOfDayReports() {
  const { DownloadPrimary } = useImages();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "End Of Day Reports" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "border border-borderlight rounded-xl p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-textdarker", children: "Full End of Day Report" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "Today’s revenue" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: DownloadPrimary,
              alt: "Download Primary"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "border border-borderlight rounded-xl p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-textdarker", children: "End of Day High Value Report" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "Today’s orders" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: DownloadPrimary,
              alt: "Download Primary"
            }
          ) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 border border-borderlight rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-textdarker", children: "End of Day by Location" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "Select the location and carrier to download the available report." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: DownloadPrimary,
              alt: "Download Primary"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Location",
              options: [
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" }
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Carrier",
              options: [
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" }
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 border border-borderlight rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-textdarker", children: "$91.42" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: "Select the user and carrier to download the available report." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: DownloadPrimary,
              alt: "Download Primary"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "User",
              options: [
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" }
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Carrier",
              options: [
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" }
              ]
            }
          )
        ] })
      ] }) })
    ] }) })
  ] });
}
function PackageInvestigation() {
  const { ArrowRightWhite } = useImages();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Package Investigation" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext mt-2", children: "Type the tracking number of the shipment to start investigation. You can also call (888) 683-2300 x 4 for immediate assistance." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        TextField,
        {
          label: "",
          placeholder: "Enter Tracking Number"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        SelectField,
        {
          label: "",
          placeholder: "Type Of Investigation",
          options: [
            { value: "1", label: "Type 1" },
            { value: "2", label: "Type 2" },
            { value: "3", label: "Type 3" }
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker", children: "Contact Information" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-2 mt-3", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Company Name"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Mercury Account Number"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Contact Name"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Phone Number"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Fax Number"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Email Address"
            }
          ) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(BottomBar, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between w-full", children: [
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("button", { className: " bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center", children: [
        "Submit",
        /* @__PURE__ */ jsx(
          "img",
          {
            src: ArrowRightWhite,
            className: "w-4",
            alt: "Arrow Right Dark"
          }
        )
      ] }) })
    ] }) })
  ] });
}
function Track() {
  const [TrackingLiistStatus, setTrackingLiistStatus] = useState([
    {
      id: 1,
      name: "Shipment History",
      slug: "shipment-history",
      isActive: true
    },
    {
      id: 2,
      name: "Reports History",
      slug: "reports-history",
      isActive: false
    },
    {
      id: 3,
      name: "Scheduled Pickups",
      slug: "scheduled-pickup",
      isActive: false
    },
    {
      id: 4,
      name: "End of Day Reports",
      slug: "end-of-day-reports",
      isActive: false
    },
    {
      id: 5,
      name: "Package  Investigation",
      slug: "package-investigation",
      isActive: false
    }
  ]);
  const handleTrackingList = (id) => {
    const updatedTrakingList = TrackingLiistStatus.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isActive: true
        };
      } else {
        return {
          ...item,
          isActive: false
        };
      }
    });
    setTrackingLiistStatus(updatedTrakingList);
  };
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold text-textdarker", children: "Track" }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-#475467", children: "Track your shipments here" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "inline-flex gap-1 border border-borderprimary rounded-lg mt-5", children: TrackingLiistStatus.map((item, index) => /* @__PURE__ */ jsx(
        "li",
        {
          onClick: () => handleTrackingList(item.id),
          className: `px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${index === TrackingLiistStatus.length - 1 ? "" : "border-r border-borderprimary"} ${item.isActive ? "bg-lightgray" : ""} hover:bg-lightgray`,
          children: item.name
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: TrackingLiistStatus.map(
      (item, index) => item.isActive && item.slug === "shipment-history" ? /* @__PURE__ */ jsx(ShipmentHistory, {}, index) : item.isActive && item.slug === "reports-history" ? /* @__PURE__ */ jsx(ReportsHostory, {}, index) : item.isActive && item.slug === "scheduled-pickup" ? /* @__PURE__ */ jsx(ScheduledPickups, {}, index) : item.isActive && item.slug === "end-of-day-reports" ? /* @__PURE__ */ jsx(EndOfDayReports, {}, index) : item.isActive && item.slug === "package-investigation" ? /* @__PURE__ */ jsx(PackageInvestigation, {}, index) : ""
    ) })
  ] });
}
export {
  Track as default
};
