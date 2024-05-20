import { jsx, jsxs } from "react/jsx-runtime";
import { u as useImages } from "./useImages-19sOBF2F.js";
import { useState, useEffect } from "react";
function TrakingModel({ trakingnumber }) {
  const { CloseModel, CopyIcon } = useImages();
  const [selectedTrakingTab, setSelectedTrakingTab] = useState(1);
  const [TrackingModel, setTrackingModel] = useState(false);
  const handleTrakingTab = (tabID) => {
    setSelectedTrakingTab(tabID);
  };
  useEffect(() => {
    if (trakingnumber) {
      setTrackingModel(true);
    }
  }, [trakingnumber]);
  const TrakingTabs = [
    {
      title: "Shipment Details",
      tagID: 1
    },
    {
      title: "Shipping Information",
      tagID: 2
    }
  ];
  const ShipmentDetail = [
    {
      label: "Ship Date",
      value: "1/7/2024"
    },
    {
      label: "Tracking Number",
      value: "1ZAG6712IKASDFKHJ12"
    },
    {
      label: "Confirmation Number",
      value: "ED854D54"
    },
    {
      label: "Reference Number",
      valuw: "N/A"
    },
    {
      label: "Customer Reference Number",
      value: "N/A"
    },
    {
      label: "COD",
      value: "No"
    },
    {
      label: "Service Type",
      value: "2nd Day Air"
    },
    {
      label: "Package Type",
      value: "Express box"
    },
    {
      label: "Est. Weight",
      value: "3.00 Lb."
    },
    {
      label: "Bill Duties/Taxes/Fees",
      value: "N/A"
    },
    {
      label: "Needs EEI",
      value: "No"
    },
    {
      label: "Insured Value",
      value: "2,100.00 USD"
    }
  ];
  const ShippingInformation = [
    {
      DataFrom: [
        {
          label: "Contact Name",
          value: "Olivia Rhye"
        },
        {
          label: "Company Name",
          value: "FedEx"
        },
        {
          label: "Address",
          value: "Cottbus, Germany"
        },
        {
          label: "Address 2",
          value: "Cottbus, Germany"
        },
        {
          label: "City/State",
          value: "Berlin"
        },
        {
          label: "Zip/Country or Territory",
          value: "Germany"
        }
      ],
      DataTo: [
        {
          label: "Contact Name",
          value: "Olivia Rhye"
        },
        {
          label: "Company Name",
          value: "FedEx"
        },
        {
          label: "Address",
          value: "Cottbus, Germany"
        },
        {
          label: "Address 2",
          value: "Cottbus, Germany"
        },
        {
          label: "City/State",
          value: "Berlin"
        },
        {
          label: "Zip/Country or Territory",
          value: "Germany"
        }
      ],
      DataReroute: [
        {
          label: "Contact Name",
          value: "Olivia Rhye"
        },
        {
          label: "Company Name",
          value: "FedEx"
        },
        {
          label: "Address",
          value: "Cottbus, Germany"
        },
        {
          label: "Address 2",
          value: "Cottbus, Germany"
        },
        {
          label: "City/State",
          value: "Berlin"
        },
        {
          label: "Zip/Country or Territory",
          value: "Germany"
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `fixed top-0 z-10 right-3 my-3 min-w-[419px] max-w-[430px] h-[97vh] border border-lightgray rounded-lg overflow-y-scroll shadow-md bg-white ${TrackingModel ? "" : "hidden"}`,
      children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-5 border-b border-borderlight", children: [
          /* @__PURE__ */ jsx("h5", { className: "text-sm text-headertext font-semibold", children: "Tracking Details" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-7 h-7 px-2 cursor-pointer rounded-lg border border-borderprimary flex justify-center items-center",
              onClick: () => setTrackingModel(false),
              children: /* @__PURE__ */ jsx("img", { src: CloseModel, className: "w-5 h-5", alt: "Close" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-5 py-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "text-2xl font-semibold text-textdarker", children: trakingnumber }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-footerlink", children: "Tracking Number" })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: CopyIcon, alt: "Copy" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx("ul", { className: "flex gap-5 border-b border-borderlight", children: TrakingTabs == null ? void 0 : TrakingTabs.map((tab, index) => /* @__PURE__ */ jsx(
            "li",
            {
              onClick: () => handleTrakingTab(tab.tagID),
              className: `text-base text-footerlink font-semibold cursor-pointer pb-2 ${selectedTrakingTab === tab.tagID ? "border-b-2 border-primary" : ""} `,
              children: tab.title
            },
            index
          )) }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            selectedTrakingTab === 1 && /* @__PURE__ */ jsx("div", { className: "mt-6", children: ShipmentDetail == null ? void 0 : ShipmentDetail.map((data, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex justify-between items-center py-2",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: data.label }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-textdark font-semibold", children: data.value })
                ]
              },
              index
            )) }),
            selectedTrakingTab === 2 && /* @__PURE__ */ jsx("div", { className: "mt-6", children: ShippingInformation == null ? void 0 : ShippingInformation.map((data, index) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-base text-headertext font-semibold", children: "From" }) }),
              /* @__PURE__ */ jsx("div", { className: "mt-2", children: data.DataFrom.map(
                (data2, index2) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex justify-between items-center py-2",
                    children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: data2.label }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-textdark font-semibold", children: data2.value })
                    ]
                  },
                  index2
                )
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-base text-headertext font-semibold", children: "To" }),
                /* @__PURE__ */ jsx("div", { className: "mt-2", children: data.DataTo.map(
                  (data2, index2) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex justify-between items-center py-2",
                      children: [
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: data2.label }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-textdark font-semibold", children: data2.value })
                      ]
                    },
                    index2
                  )
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-base text-headertext font-semibold", children: "Reroute" }),
                /* @__PURE__ */ jsx("div", { className: "mt-2", children: data.DataReroute.map(
                  (data2, index2) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex justify-between items-center py-2",
                      children: [
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext", children: data2.label }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-textdark font-semibold", children: data2.value })
                      ]
                    },
                    index2
                  )
                ) })
              ] })
            ] }, index)) })
          ] })
        ] })
      ] })
    }
  );
}
export {
  TrakingModel as T
};
