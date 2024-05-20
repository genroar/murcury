import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import DashboardLayout from "./DashboardLayout-D5j467kC.js";
import { u as useImages, T as TextField } from "./useImages-19sOBF2F.js";
import { S as SelectField } from "./SelectField-D5ghLT1s.js";
import { C as CheckBox } from "./CheckBox-B6jssy60.js";
import "@inertiajs/react";
import { B as BottomBar } from "./BottomBar-DNmqOeKs.js";
import { I as ImageUploader } from "./ImageUploader-DSd5OOZO.js";
import "./axios-CQftZ3Ie.js";
import "axios";
import "react-hot-toast";
function ShipUps() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Ship UPS" }) });
}
function ShipFedEx() {
  const { ArrowRightWhite, ArrowLeft } = useImages();
  const [getQuotes, setGetQuotes] = useState([
    {
      id: 1,
      name: "shipping address",
      isActive: true
    },
    {
      id: 2,
      name: "shipping information",
      isActive: false
    }
  ]);
  const [selectedQuote, setSelectedQuote] = useState(1);
  const handleQuoteChnage = (id) => {
    if (id > 2) {
      return;
    }
    const updatedQuotes = getQuotes.map((quote) => {
      if (quote.id === id) {
        return {
          ...quote,
          isActive: true
        };
      } else {
        return {
          ...quote,
          isActive: false
        };
      }
    });
    setGetQuotes(updatedQuotes);
    setSelectedQuote(id);
  };
  const ShippingAddress = () => {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-textdark", children: "Create FedEx Shipment" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Ship From Address:" }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Express Contacts",
              options: [
                {
                  value: "1",
                  label: "United States"
                },
                {
                  value: "2",
                  label: "Canada"
                }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Country or Territory",
              options: [
                {
                  value: "1",
                  label: "United States"
                },
                {
                  value: "2",
                  label: "Canada"
                }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "First Name" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Last Name" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Company" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Address 1" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Address 2" }) }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Postal Code" }) }),
            /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "City" }) }),
            /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
              TextField,
              {
                label: "",
                placeholder: "State/Province"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Telephone No." }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Email Address" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Shipment Notification"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Exception Notification"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Delivery Notification"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Add to express contacts"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Delivery Notification"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Residential Address"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Ship To Address:" }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Express Contacts",
              options: [
                {
                  value: "1",
                  label: "United States"
                },
                {
                  value: "2",
                  label: "Canada"
                }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Country or Territory",
              options: [
                {
                  value: "1",
                  label: "United States"
                },
                {
                  value: "2",
                  label: "Canada"
                }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "First Name" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Last Name" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Company" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Address 1" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Address 2" }) }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Postal Code" }) }),
            /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "City" }) }),
            /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
              TextField,
              {
                label: "",
                placeholder: "State/Province"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Telephone No." }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Email Address" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Shipment Notification"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Exception Notification"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Delivery Notification"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Add to express contacts"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Delivery Notification"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Residential Address"
            }
          ) })
        ] })
      ] })
    ] });
  };
  const ShippingInformation = () => {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-textdark", children: "Create FedEx Shipment" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Shipping Information" }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Shipment Date",
              options: [
                {
                  value: "1",
                  label: "United States"
                },
                {
                  value: "2",
                  label: "Canada"
                }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Service Type",
              options: [
                {
                  value: "1",
                  label: "United States"
                },
                {
                  value: "2",
                  label: "Canada"
                }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Package Type",
              options: [
                {
                  value: "1",
                  label: "United States"
                },
                {
                  value: "2",
                  label: "Canada"
                }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Reference No." }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Invoice No." }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-21", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Weight" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-21", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Insured Value" }) }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg text-textdark font-medium mb-3", children: "Additional Shipment Information" }),
            /* @__PURE__ */ jsx(
              CheckBox,
              {
                type: "checkbox",
                name: "pickupOptions",
                label: "Saturday Delivery (+fee)"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Adult Signature Required (+fee)"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Direct Signature Required (+fee)"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Hold at FedEx Location"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg text-textdark font-medium mb-3", children: "Shipping Options" }),
            /* @__PURE__ */ jsx(
              CheckBox,
              {
                type: "checkbox",
                name: "pickupOptions",
                label: "Drop off package at FedEx location. Find Location"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              name: "pickupOptions",
              label: "Use an already scheduled pickup at my location"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium", children: "Cost Estimate" }),
          /* @__PURE__ */ jsx("div", { className: "border border-primary bg-[#FF5A0008] rounded-xl p-6 mt-5", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("h5", { className: "text-base font-semibold text-textdarker", children: "Est. Shipping & Insurance" }),
              /* @__PURE__ */ jsx("p", { className: "text-base text-textdarker", children: "$0.00" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("h5", { className: "text-base font-semibold text-textdarker", children: "Surcharge & Services" }),
              /* @__PURE__ */ jsx("p", { className: "text-base text-textdarker", children: "$0.00" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("h5", { className: "text-base font-semibold text-textdarker", children: "Your Total" }),
              /* @__PURE__ */ jsx("p", { className: "text-base text-textdarker", children: "$0.00" })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: " text-textdarker", children: "This is only an estimate of charges, additional charges may vary due to additional costs, such as but not limited to; address corrections, residential delivery, dimensional weight, additional pickup fees, etc." }) }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("button", { className: "bg-white border border-borderprimary text-textdark font-semibold py-[10px] px-3 rounded-lg", children: "Save Quote" }),
              /* @__PURE__ */ jsx("button", { className: "bg-primary text-white font-semibold py-[10px] px-3 rounded-lg", children: "Get Quote" })
            ] }) })
          ] }) })
        ] }) })
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    getQuotes.map((quote, index) => {
      return /* @__PURE__ */ jsx("div", { children: quote.isActive && quote.name === "shipping address" ? /* @__PURE__ */ jsx(ShippingAddress, {}) : quote.isActive && quote.name === "shipping information" ? /* @__PURE__ */ jsx(ShippingInformation, {}) : "" }, index);
    }),
    /* @__PURE__ */ jsx("hr", { className: "my-6" }),
    /* @__PURE__ */ jsx(BottomBar, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `w-[10px] h-[10px] rounded-full ${selectedQuote === 1 ? "bg-primary" : "bg-borderlight"}`
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `w-[10px] h-[10px] rounded-full ${selectedQuote === 2 ? "bg-primary" : "bg-borderlight"}`
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
        selectedQuote === 2 && /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              handleQuoteChnage(selectedQuote - 1);
            },
            className: " bg-white text-textdark border border-borderprimary font-semibold py-[10px] px-3 rounded-lg flex gap-2 items-center",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: ArrowLeft,
                  className: "w-4",
                  alt: "Arrow Right Dark"
                }
              ),
              " ",
              "Previous Step"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              handleQuoteChnage(selectedQuote + 1);
            },
            className: " bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center",
            children: [
              selectedQuote === 1 ? "Next Step" : "Get Label",
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: ArrowRightWhite,
                  className: "w-4",
                  alt: "Arrow Right Dark"
                }
              )
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function ReportShipments() {
  const TableData = [
    {
      account: "13 Oct 2024",
      shortname: "AC",
      name: "A Coffee",
      reportdate: "13 Oct 2024",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      zip: "030456",
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
      address: "Cottbus, Germany",
      zip: "030456",
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
      address: "Cottbus, Germany",
      zip: "030456",
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
      address: "Cottbus, Germany",
      zip: "030456",
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
      address: "Cottbus, Germany",
      zip: "030456",
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
      address: "Cottbus, Germany",
      zip: "030456",
      traking: "030456",
      confirmation: "13 Oct 2024",
      coverage: "Covered",
      status: "Processing"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Report Shipment History" }),
      /* @__PURE__ */ jsx("span", { className: "text-primary text-base font-semibold", children: "Report Shipment" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Account" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Carrier" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Report Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Ship Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Ship To Address" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Zip/Postal Code" }),
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
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.address }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.zip }),
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
function SavedQuotes() {
  const TableData = [
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      shipfrom: "13 Oct 2024",
      shipto: "13 Oct 2024",
      insuredvalue: "13 Oct 2024",
      Reference: "Covered"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      shipfrom: "13 Oct 2024",
      shipto: "13 Oct 2024",
      insuredvalue: "13 Oct 2024",
      Reference: "Covered"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      shipfrom: "13 Oct 2024",
      shipto: "13 Oct 2024",
      insuredvalue: "13 Oct 2024",
      Reference: "Covered"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      shipfrom: "13 Oct 2024",
      shipto: "13 Oct 2024",
      insuredvalue: "13 Oct 2024",
      Reference: "Covered"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      shipfrom: "13 Oct 2024",
      shipto: "13 Oct 2024",
      insuredvalue: "13 Oct 2024",
      Reference: "Covered"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      shipfrom: "13 Oct 2024",
      shipto: "13 Oct 2024",
      insuredvalue: "13 Oct 2024",
      Reference: "Covered"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Report Shipment History" }),
      /* @__PURE__ */ jsx("span", { className: "text-primary text-base font-semibold", children: "Report Shipment" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Carrier" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Ship Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Ship From" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Ship To" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Insured Value" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Reference" })
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
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.shipdate }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.shipfrom }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.shipto }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.insuredvalue }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.Reference })
          ]
        },
        index
      )) })
    ] }) }) })
  ] });
}
function UploadWorldShipShipments() {
  const { UploadIcon, ArrowRightWhite } = useImages();
  return /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Upload WorldShip Shipments" }),
    /* @__PURE__ */ jsx("div", { className: " mt-6", children: /* @__PURE__ */ jsx(
      ImageUploader,
      {
        height: "h-[240px]",
        text: "for the worldship shipment export file on your computer",
        maxmb: "(max. 4MB)"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg text-textdark font-medium mb-2", children: "Reference Options" }),
      /* @__PURE__ */ jsx("p", { className: "text-base text-headertext", children: "Select one of the following reference options to upload as insured value" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 mt-3", children: [
        /* @__PURE__ */ jsx(
          CheckBox,
          {
            type: "checkbox",
            name: "pickupOptions",
            label: "Use an already scheduled pickup at my location"
          }
        ),
        /* @__PURE__ */ jsx(
          CheckBox,
          {
            type: "checkbox",
            name: "pickupOptions",
            label: "Drop off package at FedEx location. Find Location"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(BottomBar, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end w-full gap-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-textdark font-medium", children: [
        "Contact us if you need assistance with your worldship upload",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "helpdesk@mercury.com" })
      ] }),
      /* @__PURE__ */ jsxs("button", { className: " bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center", children: [
        "Upload File",
        /* @__PURE__ */ jsx(
          "img",
          {
            src: ArrowRightWhite,
            className: "w-3",
            alt: "Arrow Right Dark"
          }
        )
      ] })
    ] }) })
  ] });
}
function PendingShipments() {
  const TableData = [
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      zip: "030456",
      coverage: "Covered",
      status: "N/A"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      zip: "030456",
      coverage: "Covered",
      status: "Processing"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      zip: "030456",
      coverage: "Covered",
      status: "Processing"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      zip: "030456",
      coverage: "Covered",
      status: "Processing"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      zip: "030456",
      coverage: "Covered",
      status: "Processing"
    },
    {
      shortname: "AC",
      name: "A Coffee",
      shipdate: "13 Oct 2024",
      address: "Cottbus, Germany",
      zip: "030456",
      coverage: "Covered",
      status: "Processing"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Pending Shipments" }),
    /* @__PURE__ */ jsx("p", { className: "text-base text-headertext mt-2", children: "Shipments displayed below have been created, approved, or denied within the past 96 hours." }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Recipient" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Ship Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Ship To Address" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Zip/Postal Code" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Coverage" }),
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
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.shipdate }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.address }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.zip }),
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
function Ship() {
  const [ShippingListstatus, setShippingListstatus] = useState([
    {
      id: 1,
      name: "Ship UPS",
      slug: "ship-ups",
      isActive: true
    },
    {
      id: 2,
      name: "Ship FedEx",
      slug: "ship-fedex",
      isActive: false
    },
    {
      id: 3,
      name: "Pending Shipments",
      slug: "pending-shipments",
      isActive: false
    },
    {
      id: 4,
      name: "Report Shipments",
      slug: "report-shipments",
      isActive: false
    },
    {
      id: 5,
      name: "Saved Quotes",
      slug: "saved-quotes",
      isActive: false
    },
    {
      id: 6,
      name: "Upload WorldShip Shipments",
      slug: "upload-worldship-shipments",
      isActive: false
    }
  ]);
  const handleShippingList = (id) => {
    const updatedShippingList = ShippingListstatus.map((item) => {
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
    setShippingListstatus(updatedShippingList);
  };
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold text-textdarker", children: "Ship" }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-#475467", children: "Manage your shipment here" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "inline-flex gap-1 border border-borderprimary rounded-lg mt-5", children: ShippingListstatus.map((item, index) => /* @__PURE__ */ jsx(
        "li",
        {
          onClick: () => handleShippingList(item.id),
          className: `px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${index === ShippingListstatus.length - 1 ? "" : "border-r border-borderprimary"} ${item.isActive ? "bg-lightgray" : ""} hover:bg-lightgray`,
          children: item.name
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: ShippingListstatus.map(
      (item, index) => item.isActive && item.slug === "ship-ups" ? /* @__PURE__ */ jsx(ShipUps, {}, index) : item.isActive && item.slug === "ship-fedex" ? /* @__PURE__ */ jsx(ShipFedEx, {}, index) : item.isActive && item.slug === "pending-shipments" ? /* @__PURE__ */ jsx(PendingShipments, {}, index) : item.isActive && item.slug === "report-shipments" ? /* @__PURE__ */ jsx(ReportShipments, {}, index) : item.isActive && item.slug === "saved-quotes" ? /* @__PURE__ */ jsx(SavedQuotes, {}, index) : item.isActive && item.slug === "upload-worldship-shipments" ? /* @__PURE__ */ jsx(UploadWorldShipShipments, {}, index) : ""
    ) })
  ] });
}
export {
  Ship as default
};
