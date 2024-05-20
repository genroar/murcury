import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import DashboardLayout from "./DashboardLayout-D5j467kC.js";
import { u as useImages } from "./useImages-19sOBF2F.js";
import { S as SelectField } from "./SelectField-D5ghLT1s.js";
import { B as BottomBar } from "./BottomBar-DNmqOeKs.js";
import "./axios-CQftZ3Ie.js";
import "axios";
import "@inertiajs/react";
import "react-hot-toast";
function OrderSupplies() {
  const { ArrowRightWhite } = useImages();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Order Supplies" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker ", children: "Pouches" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(
          SelectField,
          {
            label: "",
            placeholder: "Domestic Airbill",
            options: [
              { value: "small", label: "Small" },
              { value: "medium", label: "Medium" },
              { value: "large", label: "Large" }
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker ", children: "Boxes" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(
          SelectField,
          {
            label: "",
            placeholder: "Small Boxes",
            options: [
              { value: "small", label: "Small" },
              { value: "medium", label: "Medium" },
              { value: "large", label: "Large" }
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker ", children: "Paks" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(
          SelectField,
          {
            label: "",
            placeholder: "Small Paks",
            options: [
              { value: "small", label: "Small" },
              { value: "medium", label: "Medium" },
              { value: "large", label: "Large" }
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(BottomBar, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between w-full", children: [
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("button", { className: " bg-primary font-semibold text-white py-[10px] px-3 rounded-lg flex gap-2 items-center", children: [
        "Order",
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
function RestrictedZipCodes() {
  useImages();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Restricted Zip Codes" }) }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-textdark mt-4", children: "To ensure the safe delivery of your packages and to provide added security, shipments sent to the following zip codes require special handling and are restricted under Mercury’s privacy policy." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker ", children: "Los Angles" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("li", { className: "text-sm text-textdark", children: "9007" }),
          /* @__PURE__ */ jsx("li", { className: "text-sm text-textdark", children: "9007" }),
          /* @__PURE__ */ jsx("li", { className: "text-sm text-textdark", children: "9007" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker ", children: "Beverly Hills" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("li", { className: "text-sm text-textdark", children: "9007" }),
          /* @__PURE__ */ jsx("li", { className: "text-sm text-textdark", children: "9007" }),
          /* @__PURE__ */ jsx("li", { className: "text-sm text-textdark", children: "9007" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-textdarker ", children: "New York" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("li", { className: "text-sm text-textdark", children: "9007" }),
          /* @__PURE__ */ jsx("li", { className: "text-sm text-textdark", children: "9007" }),
          /* @__PURE__ */ jsx("li", { className: "text-sm text-textdark", children: "9007" })
        ] }) })
      ] })
    ] }) })
  ] });
}
function SupportDocuments() {
  const { ArrowRightWhite, DownloadPrimary } = useImages();
  const SupportDocuments2 = [
    {
      id: 1,
      name: "Safe Shipping and Packaging Checklist",
      url: "https://www.google.com"
    },
    {
      id: 2,
      name: "Mercury Quick Start",
      url: "https://www.google.com"
    },
    {
      id: 3,
      name: "Jewelry Shipping Tips",
      url: "https://www.google.com"
    },
    {
      id: 4,
      name: "Billing and Invoicing FAQ",
      url: "https://www.google.com"
    },
    {
      id: 5,
      name: "Minimizing Shipping Losses FAQ",
      url: "https://www.google.com"
    },
    {
      id: 6,
      name: "Residential Shipping",
      url: "https://www.google.com"
    },
    {
      id: 7,
      name: "Members Handbook",
      url: "https://www.google.com"
    },
    {
      id: 8,
      name: "UC PPI Claim Form",
      url: "https://www.google.com"
    },
    {
      id: 9,
      name: "Commercial Invoice",
      url: "https://www.google.com"
    },
    {
      id: 10,
      name: "High Value Retailers Guide",
      url: "https://www.google.com"
    },
    {
      id: 11,
      name: "Alteration Declaration",
      url: "https://www.google.com"
    },
    {
      id: 12,
      name: "US Antique Declaration",
      url: "https://www.google.com"
    },
    {
      id: 13,
      name: "SED Form",
      url: "https://www.google.com"
    },
    {
      id: 14,
      name: "Export Address Book",
      url: "https://www.google.com"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Support Documents" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6", children: SupportDocuments2 == null ? void 0 : SupportDocuments2.map((item, index) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-xl p-6 flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(
        "h4",
        {
          className: "text-lg font-medium text-textdarker\n                                whitespace-nowrap overflow-hidden overflow-ellipsis",
          children: item.name
        }
      ),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: DownloadPrimary, alt: "Download" }) })
    ] }) })) }) })
  ] });
}
function HelpCenter() {
  const { ArrowRightWhite, LinkPrimaryDownloadPrimary, LinkPrimary } = useImages();
  const SupportDocuments2 = [
    {
      id: 1,
      name: "Getting Started",
      url: "https://www.google.com"
    },
    {
      id: 2,
      name: "Shipping",
      url: "https://www.google.com"
    },
    {
      id: 3,
      name: "International",
      url: "https://www.google.com"
    },
    {
      id: 4,
      name: "Shipping Supplies",
      url: "https://www.google.com"
    },
    {
      id: 5,
      name: "Risk Management",
      url: "https://www.google.com"
    },
    {
      id: 6,
      name: "My Account & Billing",
      url: "https://www.google.com"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Help Center" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6", children: SupportDocuments2 == null ? void 0 : SupportDocuments2.map((item, index) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-xl p-6 flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(
        "h4",
        {
          className: "text-lg font-medium text-textdarker\n                                whitespace-nowrap overflow-hidden overflow-ellipsis",
          children: item.name
        }
      ),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: LinkPrimary, alt: "Link" }) })
    ] }) })) }) })
  ] });
}
function RemoteRescue() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Remote Rescue" }) }) });
}
function ContactUs() {
  useImages();
  const ContactUsList = [
    {
      id: 1,
      city: "Melbourne",
      street: "100 Flinders Street",
      address: "Melbourne VIC 3000 AU"
    },
    {
      id: 2,
      city: "Sydney",
      street: "100 George Street",
      address: "Sydney NSW 2000 AU"
    },
    {
      id: 3,
      city: "Byron Bay",
      street: "100 Jonson Street",
      address: "Byron Bay QLD 4000 AU"
    },
    {
      id: 4,
      city: "London",
      street: "100 Oxford Street",
      address: "London W1D 1LL UK"
    },
    {
      id: 5,
      city: "San Francisco",
      street: "100 Market Street",
      address: "San Francisco, CA 94105 USA"
    },
    {
      id: 6,
      city: "Sweden",
      street: "Drottninggatan 100",
      address: "111 60 Stockholm SE"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Contact Us" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6", children: ContactUsList == null ? void 0 : ContactUsList.map((item, index) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-xl p-6 flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(
        "h4",
        {
          className: "text-lg font-medium text-textdarker\n                                whitespace-nowrap overflow-hidden overflow-ellipsis",
          children: item.city
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-base text-headertext", children: item.street }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-headertext", children: item.address })
      ] })
    ] }) })) }) })
  ] });
}
function Support() {
  const [SupportListstatus, setSupportListstatus] = useState([
    {
      id: 1,
      name: "Order Supplies",
      slug: "order-supplies",
      isActive: true
    },
    {
      id: 2,
      name: "Restricted Zip Codes",
      slug: "restricted-zip-codes",
      isActive: false
    },
    {
      id: 3,
      name: "Support Documents",
      slug: "support-documents",
      isActive: false
    },
    {
      id: 4,
      name: "Help Center ",
      slug: "help-center",
      isActive: false
    },
    {
      id: 5,
      name: "Remote Rescue",
      slug: "remote-rescue",
      isActive: false
    },
    {
      id: 6,
      name: "Contact Us",
      slug: "contact-us",
      isActive: false
    }
  ]);
  const handleSupportList = (id) => {
    const updatedSupportList = SupportListstatus.map((item) => {
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
    setSupportListstatus(updatedSupportList);
  };
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold text-textdarker", children: "Support" }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-#475467", children: "Get access to our customer support here" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "inline-flex gap-1 border border-borderprimary rounded-lg mt-5", children: SupportListstatus.map((item, index) => /* @__PURE__ */ jsx(
        "li",
        {
          onClick: () => handleSupportList(item.id),
          className: `px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${index === SupportListstatus.length - 1 ? "" : "border-r border-borderprimary"} ${item.isActive ? "bg-lightgray" : ""} hover:bg-lightgray`,
          children: item.name
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: SupportListstatus.map(
      (item, index) => item.isActive && item.slug === "order-supplies" ? /* @__PURE__ */ jsx(OrderSupplies, {}, index) : item.isActive && item.slug === "restricted-zip-codes" ? /* @__PURE__ */ jsx(RestrictedZipCodes, {}, index) : item.isActive && item.slug === "support-documents" ? /* @__PURE__ */ jsx(SupportDocuments, {}, index) : item.isActive && item.slug === "help-center" ? /* @__PURE__ */ jsx(HelpCenter, {}, index) : item.isActive && item.slug === "remote-rescue" ? /* @__PURE__ */ jsx(RemoteRescue, {}, index) : item.isActive && item.slug === "contact-us" ? /* @__PURE__ */ jsx(ContactUs, {}, index) : ""
    ) })
  ] });
}
export {
  Support as default
};
