import { jsxs, jsx } from "react/jsx-runtime";
import { u as useImages, T as TextField } from "./useImages-19sOBF2F.js";
import { useState } from "react";
import { M as Modal } from "./Modal-4epZ_nGS.js";
import { S as SelectField } from "./SelectField-D5ghLT1s.js";
import { C as CheckBox } from "./CheckBox-B6jssy60.js";
import DashboardLayout from "./DashboardLayout-D5j467kC.js";
import "./axios-CQftZ3Ie.js";
import "axios";
import "@inertiajs/react";
import "react-hot-toast";
function AddressBook() {
  const { EditGray, DeletePrimary } = useImages();
  const [open, setOpen] = useState(false);
  const TableData = [
    {
      contactname: "030456",
      companyname: "030456",
      address: "Covered",
      express: "030456",
      shared: "030456"
    },
    {
      contactname: "030456",
      companyname: "030456",
      address: "Covered",
      express: "030456",
      shared: "030456"
    },
    {
      contactname: "030456",
      companyname: "030456",
      address: "Covered",
      express: "030456",
      shared: "030456"
    },
    {
      contactname: "030456",
      companyname: "030456",
      address: "Covered",
      express: "030456",
      shared: "030456"
    },
    {
      contactname: "030456",
      companyname: "030456",
      address: "Covered",
      express: "030456",
      shared: "030456"
    }
  ];
  const handleModal = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Address Book" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-headertext text-base font-semibold", children: "Import Address Book" }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "text-primary text-base font-semibold cursor-pointer",
            onClick: () => handleModal(),
            children: "Add New Address"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Contact Name" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Company Name" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Address" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Express" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Shared" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: TableData == null ? void 0 : TableData.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          class: "odd:bg-white border-b cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.contactname }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.companyname }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.address }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.express }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.shared }),
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
    ] }) }) }),
    /* @__PURE__ */ jsx(Modal, { open, title: "Add New Address", setOpen, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "First Name" }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Last Name" }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Email Address" }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Phone" }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Fax" }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Company Name" }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Street Address" }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "Suite / Apt" }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(TextField, { label: "", placeholder: "City" }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
        SelectField,
        {
          label: "",
          placeholder: "State/Province",
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
          placeholder: "Zip / Postal Code"
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
      /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsx(
          CheckBox,
          {
            type: "checkbox",
            name: "residential",
            label: "Set as Residential"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(
          CheckBox,
          {
            type: "checkbox",
            name: "residential",
            label: "Set as express"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-4 mt-4", children: [
        /* @__PURE__ */ jsx("button", { className: "bg-white border border-borderprimary text-textdark text-base font-semibold px-4 py-[10px] rounded-lg w-full", children: "Cancel" }),
        /* @__PURE__ */ jsx("button", { className: "bg-primary text-white text-base font-semibold px-4 py-[10px] rounded-lg w-full", children: "Save" })
      ] }) })
    ] }) })
  ] });
}
function ManageShipFromLocations() {
  const { EditGray, DeletePrimary } = useImages();
  const TableData = [
    {
      locationname: "030456",
      address: "Covered",
      setasdefault: "030456"
    },
    {
      locationname: "030456",
      address: "Covered",
      setasdefault: "030456"
    },
    {
      locationname: "030456",
      address: "Covered",
      setasdefault: "030456"
    },
    {
      locationname: "030456",
      address: "Covered",
      setasdefault: "030456"
    },
    {
      locationname: "030456",
      address: "Covered",
      setasdefault: "030456"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Manage Ship From Locations" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-5", children: /* @__PURE__ */ jsx("span", { className: "text-primary text-base font-semibold", children: "Add Location" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Location Name" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Address" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Set as Default" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: TableData == null ? void 0 : TableData.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          class: "odd:bg-white border-b cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.locationname }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.address }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.setasdefault }),
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
function Address() {
  const [AddressListStatus, setAddressListStatus] = useState([
    {
      id: 1,
      name: "Address Book",
      slug: "address-book",
      isActive: true
    },
    {
      id: 2,
      name: "Manage Ship From Locations",
      slug: "manage-ship-from-locations",
      isActive: false
    }
  ]);
  const handleAddressList = (id) => {
    const updatedAddressList = AddressListStatus.map((item) => {
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
    setAddressListStatus(updatedAddressList);
  };
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold text-textdarker", children: "Address Book" }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-#475467", children: "Access and manage your contacts here" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "inline-flex gap-1 border border-borderprimary rounded-lg mt-5", children: AddressListStatus.map((item, index) => /* @__PURE__ */ jsx(
        "li",
        {
          onClick: () => handleAddressList(item.id),
          className: `px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${index === AddressListStatus.length - 1 ? "" : "border-r border-borderprimary"} ${item.isActive ? "bg-lightgray" : ""} hover:bg-lightgray`,
          children: item.name
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: AddressListStatus.map(
      (item, index) => item.isActive && item.slug === "address-book" ? /* @__PURE__ */ jsx(AddressBook, {}, index) : item.isActive && item.slug === "manage-ship-from-locations" ? /* @__PURE__ */ jsx(ManageShipFromLocations, {}, index) : ""
    ) })
  ] });
}
export {
  Address as default
};
