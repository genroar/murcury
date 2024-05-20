import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import DashboardLayout from "./DashboardLayout-D5j467kC.js";
import { u as useImages, T as TextField } from "./useImages-19sOBF2F.js";
import { B as BottomBar } from "./BottomBar-DNmqOeKs.js";
import { C as CheckBox } from "./CheckBox-B6jssy60.js";
import { S as SelectField } from "./SelectField-D5ghLT1s.js";
import { I as ImageUploader } from "./ImageUploader-DSd5OOZO.js";
import "./axios-CQftZ3Ie.js";
import "axios";
import "@inertiajs/react";
import "react-hot-toast";
function UserSettings() {
  const { ArrowRightWhite } = useImages();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "User Settings" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker", children: "User Profile" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "First Name",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Last Name",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Email Address",
              type: "text"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker mt-8", children: "Email Notifications" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-4", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              label: "Always notify sender with carrier notifications for shipment, delivery and exception",
              name: "order"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              label: "Always notify recipient with carrier notifications for shipment, delivery and exception",
              name: "order"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              label: "Always notify recipient with custom email notifications for shipments",
              name: "order"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker mt-8", children: "Print Settings" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-4", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              label: "Thermal Printer: Always use",
              name: "print"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              label: "Print Receipt: Always print receipt after label ",
              name: "print"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              label: "Print High Value Label: Always print high value form after label",
              name: "print"
            }
          ) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(BottomBar, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between w-full", children: [
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("button", { className: " bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center", children: [
        "Save Changes",
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
function CompanyProfile() {
  const { ArrowRightWhite } = useImages();
  return /* @__PURE__ */ jsxs("div", { className: " mb-28", children: [
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Company Profile" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker", children: "Company Address" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3  mt-4", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Account Number",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "First Name",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Last Name",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Street Address",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Suite / Apt",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "City",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "State/Province",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Zip Code",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Country",
              options: [
                { label: "USA", value: "USA" },
                { label: "Canada", value: "Canada" }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Telephone No.",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Email Address",
              type: "text"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker mt-8", children: "Accounts Payable Address" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-4", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              label: "Same as Company Address",
              name: "address"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "First Name",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Last Name",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Street Address",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Suite / Apt",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "City",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "State/Province",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Zip Code",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Country",
              options: [
                { label: "USA", value: "USA" },
                { label: "Canada", value: "Canada" }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Telephone No.",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Email Address",
              type: "text"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker", children: "Mailing Address" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-4", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
            CheckBox,
            {
              type: "checkbox",
              label: "Same as Company Address",
              name: "mailing"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "First Name",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Last Name",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Street Address",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Suite / Apt",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "City",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "State/Province",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Zip Code",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            SelectField,
            {
              label: "",
              placeholder: "Country",
              options: [
                { label: "USA", value: "USA" },
                { label: "Canada", value: "Canada" }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Telephone No.",
              type: "text"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
            TextField,
            {
              label: "",
              placeholder: "Email Address",
              type: "text"
            }
          ) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(BottomBar, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between w-full", children: [
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("button", { className: " bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center", children: [
        "Save Changes",
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
function ManageUsers() {
  const { EditGray, DeletePrimary } = useImages();
  const TableData = [
    {
      userid: "030456",
      name: "Covered",
      email: "030456",
      defaultlocation: "030456",
      role: "N/A"
    },
    {
      userid: "030456",
      name: "Covered",
      email: "030456",
      defaultlocation: "030456",
      role: "N/A"
    },
    {
      userid: "030456",
      name: "Covered",
      email: "030456",
      defaultlocation: "030456",
      role: "N/A"
    },
    {
      userid: "030456",
      name: "Covered",
      email: "030456",
      defaultlocation: "030456",
      role: "N/A"
    },
    {
      userid: "030456",
      name: "Covered",
      email: "030456",
      defaultlocation: "030456",
      role: "N/A"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Manage Users" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-5", children: /* @__PURE__ */ jsx("span", { className: "text-primary text-base font-semibold", children: "Add User" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "User ID" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Name" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Email" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Default Location" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Role" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: TableData == null ? void 0 : TableData.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          class: "odd:bg-white border-b cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.userid }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.name }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.email }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.defaultlocation }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border border-borderprimary rounded-md shadow-sm px-[6px] py-[2px] inline-flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[6px] h-[6px] rounded-full bg-primaryred" }),
              /* @__PURE__ */ jsx("span", { className: " text-xs font-medium text-textdark", children: data.role })
            ] }) }) }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
              /* @__PURE__ */ jsx("img", { src: EditGray, alt: "Edit" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: DeletePrimary,
                  alt: "Delete"
                }
              )
            ] }) })
          ]
        },
        index
      )) })
    ] }) }) })
  ] });
}
function RewardShip() {
  useImages();
  const TableData = [
    {
      invoiceid: "13 Oct 2024",
      activitydate: "13 Oct 2024",
      duedate: "13 Oct 2024",
      datepaid: "13 Oct 2024",
      creditsinprogress: "030456",
      availablecredits: "030456",
      redeemed: "030456",
      forfeited: "030456"
    },
    {
      invoiceid: "13 Oct 2024",
      activitydate: "13 Oct 2024",
      duedate: "13 Oct 2024",
      datepaid: "13 Oct 2024",
      creditsinprogress: "030456",
      availablecredits: "030456",
      redeemed: "030456",
      forfeited: "030456"
    },
    {
      invoiceid: "13 Oct 2024",
      activitydate: "13 Oct 2024",
      duedate: "13 Oct 2024",
      datepaid: "13 Oct 2024",
      creditsinprogress: "030456",
      availablecredits: "030456",
      redeemed: "030456",
      forfeited: "030456"
    },
    {
      invoiceid: "13 Oct 2024",
      activitydate: "13 Oct 2024",
      duedate: "13 Oct 2024",
      datepaid: "13 Oct 2024",
      creditsinprogress: "030456",
      availablecredits: "030456",
      redeemed: "030456",
      forfeited: "030456"
    },
    {
      invoiceid: "13 Oct 2024",
      activitydate: "13 Oct 2024",
      duedate: "13 Oct 2024",
      datepaid: "13 Oct 2024",
      creditsinprogress: "030456",
      availablecredits: "030456",
      redeemed: "030456",
      forfeited: "030456"
    },
    {
      invoiceid: "13 Oct 2024",
      activitydate: "13 Oct 2024",
      duedate: "13 Oct 2024",
      datepaid: "13 Oct 2024",
      creditsinprogress: "030456",
      availablecredits: "030456",
      redeemed: "030456",
      forfeited: "030456"
    },
    {
      invoiceid: "13 Oct 2024",
      activitydate: "13 Oct 2024",
      duedate: "13 Oct 2024",
      datepaid: "13 Oct 2024",
      creditsinprogress: "030456",
      availablecredits: "030456",
      redeemed: "030456",
      forfeited: "030456"
    },
    {
      invoiceid: "13 Oct 2024",
      activitydate: "13 Oct 2024",
      duedate: "13 Oct 2024",
      datepaid: "13 Oct 2024",
      creditsinprogress: "030456",
      availablecredits: "030456",
      redeemed: "030456",
      forfeited: "030456"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "RewardShip" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-xl p-6 w-full relative", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-textdarker", children: "322.6 USD" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium mt-2", children: "Redeemable Credits" }),
        /* @__PURE__ */ jsx("p", { className: "absolute top-6 right-6 text-sm text-primary font-semibold", children: "Redeem" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-xl p-6 w-full", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-textdarker", children: "17.33 USD" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium mt-2", children: "Credits in Progress" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-xl p-6 w-full", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-textdarker", children: "321.82 USD" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium mt-2", children: "Total Redeemed Credits" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Invoice ID" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Activity Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Due Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Date Paid" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Credits In Progress" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Available Credits" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Redeemed" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Forfeited" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: TableData == null ? void 0 : TableData.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          class: "odd:bg-white border-b cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.invoiceid }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.activitydate }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.duedate }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.datepaid }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.creditsinprogress }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.availablecredits }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.redeemed }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.forfeited })
          ]
        },
        index
      )) })
    ] }) }) })
  ] });
}
function ManageNotifyTemplates() {
  const {
    NotifyTemplate,
    PlusPrimary,
    NotifyPreview,
    Close,
    ArrowRightWhite
  } = useImages();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [NotifyTemplates, setNotifyTemplates] = useState([
    {
      id: 1,
      name: "Notify Template 1",
      image: NotifyTemplate,
      isActive: true
    },
    {
      id: 2,
      name: "Notify Template 2",
      image: NotifyTemplate,
      isActive: false
    },
    {
      id: 3,
      name: "Notify Template 3",
      image: NotifyTemplate,
      isActive: false
    },
    {
      id: 4,
      name: "Notify Template 4",
      image: NotifyTemplate,
      isActive: false
    },
    {
      id: 5,
      name: "Notify Template 5",
      image: NotifyTemplate,
      isActive: false
    }
  ]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Notify Templates" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-[#F2F4F7] h-[400px] cursor-pointer`,
          onClick: () => setIsModalOpen(true),
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-full mb-2", children: /* @__PURE__ */ jsx("img", { src: PlusPrimary, alt: "Add" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-base text-textdarker font-medium mt-2", children: "New Template" })
          ]
        }
      ),
      NotifyTemplates.map((item, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `rounded-lg cursor-pointer`,
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.image,
                className: "w-full h-[400px] object-cover rounded-lg mb-2",
                alt: item.name
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-base text-textdarker font-medium", children: item.name })
          ]
        },
        index
      ))
    ] }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `w-full fixed top-0 right-0 h-screen backdrop-blur-sm bg-[#0C111D]/40 z-10 overflow-y-scroll ${isModalOpen ? "" : "hidden"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "xl:min-w-[560px] xl:max-w-[570px] w-full", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: NotifyPreview,
              alt: "Notify Preview",
              className: "w-full h-full object-contain rounded-lg"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "xl:min-w-[419px] xl:max-w-[430px] w-full bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "p-5 border-b border-l-borderlight", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-headertext", children: "New Template" }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-7 h-7 rounded-lg border border-borderlight flex justify-center items-center cursor-pointer",
                  onClick: () => setIsModalOpen(false),
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: Close,
                      className: "w-3 h-3",
                      alt: "close"
                    }
                  )
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "p-5 h-[95vh]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  TextField,
                  {
                    label: "",
                    type: "text",
                    placeholder: "Template Title"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  TextField,
                  {
                    label: "",
                    type: "text",
                    placeholder: "Website URL"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  ImageUploader,
                  {
                    height: "h-[158px]",
                    text: "Upload a cover Image photo",
                    maxmb: "(max. 5MB)"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  ImageUploader,
                  {
                    height: "h-[158px]",
                    text: "Upload a banner Image photo",
                    maxmb: "(max. 5MB)"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  CheckBox,
                  {
                    type: "checkbox",
                    name: "pickupOptions",
                    label: "Add Showcase Photos"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  CheckBox,
                  {
                    type: "checkbox",
                    name: "pickupOptions",
                    label: "Agree to Parcel Pro Terms of Use"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "w-full bg-white  border-t border-borderlight flex justify-end p-6", children: /* @__PURE__ */ jsxs("button", { className: " bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center", children: [
                "Create",
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: ArrowRightWhite,
                    className: "w-4",
                    alt: "Arrow Right Dark"
                  }
                )
              ] }) }) })
            ] }) })
          ] })
        ] })
      }
    )
  ] });
}
function Account() {
  const [Accountstatus, setAccountstatus] = useState([
    {
      id: 1,
      name: "User Settings",
      slug: "user-settings",
      isActive: true
    },
    {
      id: 2,
      name: "Company Profile",
      slug: "company-profile",
      isActive: false
    },
    {
      id: 3,
      name: "Manage Users",
      slug: "manage-users",
      isActive: false
    },
    {
      id: 4,
      name: "RewardShip",
      slug: "rewardship",
      isActive: false
    },
    {
      id: 5,
      name: "Manage Notify Templates",
      slug: "manage-notify-templates",
      isActive: false
    }
  ]);
  const handleAccountList = (id) => {
    const updatedAccountList = Accountstatus.map((item) => {
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
    setAccountstatus(updatedAccountList);
  };
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold text-textdarker", children: "Account" }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-#475467", children: "Manage your account details here" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "inline-flex gap-1 border border-borderprimary rounded-lg mt-5", children: Accountstatus.map((item, index) => /* @__PURE__ */ jsx(
        "li",
        {
          onClick: () => handleAccountList(item.id),
          className: `px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${index === Accountstatus.length - 1 ? "" : "border-r border-borderprimary"} ${item.isActive ? "bg-lightgray" : ""} hover:bg-lightgray`,
          children: item.name
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: Accountstatus.map(
      (item, index) => item.isActive && item.slug === "user-settings" ? /* @__PURE__ */ jsx(UserSettings, {}, index) : item.isActive && item.slug === "company-profile" ? /* @__PURE__ */ jsx(CompanyProfile, {}, index) : item.isActive && item.slug === "manage-users" ? /* @__PURE__ */ jsx(ManageUsers, {}, index) : item.isActive && item.slug === "rewardship" ? /* @__PURE__ */ jsx(RewardShip, {}, index) : item.isActive && item.slug === "manage-notify-templates" ? /* @__PURE__ */ jsx(ManageNotifyTemplates, {}, index) : ""
    ) })
  ] });
}
export {
  Account as default
};
