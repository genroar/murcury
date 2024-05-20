import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import DashboardLayout from "./DashboardLayout-D5j467kC.js";
import { u as useImages } from "./useImages-19sOBF2F.js";
import "./axios-CQftZ3Ie.js";
import "axios";
import "@inertiajs/react";
import "react-hot-toast";
function Invoices() {
  const { DownloadPrimary } = useImages();
  const TableData = [
    {
      status: "N/A",
      date: "13 Oct 2024",
      invoiceid: "13 Oct 2024",
      totalcharge: "030456",
      balance: "Covered",
      pointsissued: "030456",
      pointsredeemed: "030456",
      pointsexpireby: "030456"
    },
    {
      status: "N/A",
      date: "13 Oct 2024",
      invoiceid: "13 Oct 2024",
      totalcharge: "030456",
      balance: "Covered",
      pointsissued: "030456",
      pointsredeemed: "030456",
      pointsexpireby: "030456"
    },
    {
      status: "N/A",
      date: "13 Oct 2024",
      invoiceid: "13 Oct 2024",
      totalcharge: "030456",
      balance: "Covered",
      pointsissued: "030456",
      pointsredeemed: "030456",
      pointsexpireby: "030456"
    },
    {
      status: "N/A",
      date: "13 Oct 2024",
      invoiceid: "13 Oct 2024",
      totalcharge: "030456",
      balance: "Covered",
      pointsissued: "030456",
      pointsredeemed: "030456",
      pointsexpireby: "030456"
    },
    {
      status: "N/A",
      date: "13 Oct 2024",
      invoiceid: "13 Oct 2024",
      totalcharge: "030456",
      balance: "Covered",
      pointsissued: "030456",
      pointsredeemed: "030456",
      pointsexpireby: "030456"
    },
    {
      status: "N/A",
      date: "13 Oct 2024",
      invoiceid: "13 Oct 2024",
      totalcharge: "030456",
      balance: "Covered",
      pointsissued: "030456",
      pointsredeemed: "030456",
      pointsexpireby: "030456"
    },
    {
      status: "N/A",
      date: "13 Oct 2024",
      invoiceid: "13 Oct 2024",
      totalcharge: "030456",
      balance: "Covered",
      pointsissued: "030456",
      pointsredeemed: "030456",
      pointsexpireby: "030456"
    },
    {
      status: "N/A",
      date: "13 Oct 2024",
      invoiceid: "13 Oct 2024",
      totalcharge: "030456",
      balance: "Covered",
      pointsissued: "030456",
      pointsredeemed: "030456",
      pointsexpireby: "030456"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Invoices" }),
      /* @__PURE__ */ jsx("span", { className: "text-primary text-base font-semibold", children: "Manage Credit Cards" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-xl p-6 w-full", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-textdarker", children: "0.00 USD" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium mt-2", children: "Total Balance" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-xl p-6 w-full", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-textdarker", children: "0.00 USD" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium mt-2", children: "Balance Past Due" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Status" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Invoice ID" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Total Charge" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Balance" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Points Issued" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Points Redeemed" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Points Expire By" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: TableData == null ? void 0 : TableData.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          class: "odd:bg-white border-b cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border border-borderprimary rounded-md shadow-sm px-[6px] py-[2px] inline-flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[6px] h-[6px] rounded-full bg-primaryred" }),
              /* @__PURE__ */ jsx("span", { className: " text-xs font-medium text-textdark", children: data.status })
            ] }) }) }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.date }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.invoiceid }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.totalcharge }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.balance }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.pointsissued }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.pointsredeemed }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.pointsexpireby }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: DownloadPrimary,
                alt: "Download"
              }
            ) })
          ]
        },
        index
      )) })
    ] }) }) })
  ] });
}
function PaymentHistory() {
  const { Eye } = useImages();
  const TableData = [
    {
      transactionid: "030456",
      invoice: "030456",
      date: "13 Oct 2024",
      lastfourdigits: "030456",
      authorization: "Covered",
      amount: "030456",
      status: "N/A",
      paymentmethod: "030456"
    },
    {
      transactionid: "030456",
      invoice: "030456",
      date: "13 Oct 2024",
      lastfourdigits: "030456",
      authorization: "Covered",
      amount: "030456",
      status: "N/A",
      paymentmethod: "030456"
    },
    {
      transactionid: "030456",
      invoice: "030456",
      date: "13 Oct 2024",
      lastfourdigits: "030456",
      authorization: "Covered",
      amount: "030456",
      status: "N/A",
      paymentmethod: "030456"
    },
    {
      transactionid: "030456",
      invoice: "030456",
      date: "13 Oct 2024",
      lastfourdigits: "030456",
      authorization: "Covered",
      amount: "030456",
      status: "N/A",
      paymentmethod: "030456"
    },
    {
      transactionid: "030456",
      invoice: "030456",
      date: "13 Oct 2024",
      lastfourdigits: "030456",
      authorization: "Covered",
      amount: "030456",
      status: "N/A",
      paymentmethod: "030456"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Payment History" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Transaction ID" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Invoices" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Last 4 Digits" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Authorization" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Amount" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Status" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Payment Method" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Receipt" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: TableData == null ? void 0 : TableData.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          class: "odd:bg-white border-b cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.transactionid }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.invoice }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.date }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.lastfourdigits }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.authorization }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.amount }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border border-borderprimary rounded-md shadow-sm px-[6px] py-[2px] inline-flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[6px] h-[6px] rounded-full bg-primaryred" }),
              /* @__PURE__ */ jsx("span", { className: " text-xs font-medium text-textdark", children: data.status })
            ] }) }) }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.paymentmethod }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: Eye, alt: "View" }) }) })
          ]
        },
        index
      )) })
    ] }) }) })
  ] });
}
function ManageCreditCards() {
  const { EditGray, DeletePrimary } = useImages();
  const TableData = [
    {
      type: "030456",
      lastfourdigits: "030456",
      address: "Covered",
      primary: "030456"
    },
    {
      type: "030456",
      lastfourdigits: "030456",
      address: "Covered",
      primary: "030456"
    },
    {
      type: "030456",
      lastfourdigits: "030456",
      address: "Covered",
      primary: "030456"
    },
    {
      type: "030456",
      lastfourdigits: "030456",
      address: "Covered",
      primary: "030456"
    },
    {
      type: "030456",
      lastfourdigits: "030456",
      address: "Covered",
      primary: "030456"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Manage Credit Cards" }),
      /* @__PURE__ */ jsx("span", { className: "text-primary text-base font-semibold", children: "Add Card" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Type" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Last 4 Digits" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Billing Address" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Primary" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: TableData == null ? void 0 : TableData.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          class: "odd:bg-white border-b cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.type }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.lastfourdigits }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.address }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.primary }),
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
function CreditHistory() {
  useImages();
  const TableData = [
    {
      invoiceid: "N/A",
      issuedamount: "13 Oct 2024",
      issueddate: "13 Oct 2024",
      credittype: "030456",
      remainingamount: "Covered"
    },
    {
      invoiceid: "N/A",
      issuedamount: "13 Oct 2024",
      issueddate: "13 Oct 2024",
      credittype: "030456",
      remainingamount: "Covered"
    },
    {
      invoiceid: "N/A",
      issuedamount: "13 Oct 2024",
      issueddate: "13 Oct 2024",
      credittype: "030456",
      remainingamount: "Covered"
    },
    {
      invoiceid: "N/A",
      issuedamount: "13 Oct 2024",
      issueddate: "13 Oct 2024",
      credittype: "030456",
      remainingamount: "Covered"
    },
    {
      invoiceid: "N/A",
      issuedamount: "13 Oct 2024",
      issueddate: "13 Oct 2024",
      credittype: "030456",
      remainingamount: "Covered"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-textdarker", children: "Credit History" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("div", { className: "flex justify-between gap-6", children: /* @__PURE__ */ jsxs("div", { className: "border border-borderlight rounded-xl p-6 w-full", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-textdarker", children: "0.00 USD" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium mt-2", children: "Total Balance" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto rounded-lg border border-borderlight", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500", children: [
      /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Invoice ID" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Issued Amount" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Issued Date" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Credit Type" }),
        /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Remaining Amount" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: TableData == null ? void 0 : TableData.map((data, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          class: "odd:bg-white border-b cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.invoiceid }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.issuedamount }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.issueddate }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.credittype }),
            /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: data.remainingamount })
          ]
        },
        index
      )) })
    ] }) }) })
  ] });
}
function Billing() {
  const [BillingListStatus, setBillingListStatus] = useState([
    {
      id: 1,
      name: "Invoices",
      slug: "invoices",
      isActive: true
    },
    {
      id: 2,
      name: "Payment History",
      slug: "payment-history",
      isActive: false
    },
    {
      id: 3,
      name: "Manage Credit Cards",
      slug: "manage-credit-cards",
      isActive: false
    },
    {
      id: 4,
      name: "Credit History",
      slug: "credit-history",
      isActive: false
    }
  ]);
  const handleBillingList = (id) => {
    const updatedBillingList = BillingListStatus.map((item) => {
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
    setBillingListStatus(updatedBillingList);
  };
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold text-textdarker", children: "Billing" }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-#475467", children: "Manage your finances and billing here" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "inline-flex gap-1 border border-borderprimary rounded-lg mt-5", children: BillingListStatus.map((item, index) => /* @__PURE__ */ jsx(
        "li",
        {
          onClick: () => handleBillingList(item.id),
          className: `px-4 text-sm font-semibold text-textdark py-2 cursor-pointer ${index === BillingListStatus.length - 1 ? "" : "border-r border-borderprimary"} ${item.isActive ? "bg-lightgray" : ""} hover:bg-lightgray`,
          children: item.name
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: BillingListStatus.map(
      (item, index) => item.isActive && item.slug === "invoices" ? /* @__PURE__ */ jsx(Invoices, {}, index) : item.isActive && item.slug === "payment-history" ? /* @__PURE__ */ jsx(PaymentHistory, {}, index) : item.isActive && item.slug === "manage-credit-cards" ? /* @__PURE__ */ jsx(ManageCreditCards, {}, index) : item.isActive && item.slug === "credit-history" ? /* @__PURE__ */ jsx(CreditHistory, {}, index) : ""
    ) })
  ] });
}
export {
  Billing as default
};
