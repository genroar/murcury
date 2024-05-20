import { jsx, jsxs } from "react/jsx-runtime";
import { u as useImages, T as TextField } from "./useImages-19sOBF2F.js";
import { A as Axios } from "./axios-CQftZ3Ie.js";
import { usePage, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import "axios";
function Sidebar() {
  var _a, _b, _c;
  const { auth } = usePage().props;
  const {
    Logo,
    HomeIcon,
    ShippingIcon,
    TrackingIocon,
    BillingIcon,
    AddressBookIcon,
    AccountIcon,
    SupportIcon,
    SettingsIcon,
    Avatar,
    Signout
  } = useImages();
  const [Menu, setMenu] = useState([
    {
      name: "Home",
      icon: HomeIcon,
      link: "/dashboard",
      isActive: true
    },
    {
      name: "Ship",
      icon: ShippingIcon,
      link: "/ship",
      isActive: false
    },
    {
      name: "Track",
      icon: TrackingIocon,
      link: "/track",
      isActive: false
    },
    {
      name: "Billing",
      icon: BillingIcon,
      link: "/billing",
      isActive: false
    },
    {
      name: "Address Book",
      icon: AddressBookIcon,
      link: "/address",
      isActive: false
    },
    {
      name: "Account",
      icon: AccountIcon,
      link: "/account",
      isActive: false
    }
  ]);
  const [BottomLinks, setBottomLinks] = useState([
    {
      name: "Support",
      link: "/support",
      icon: SupportIcon,
      isActive: false
    },
    {
      name: "Settings",
      link: "/",
      icon: SettingsIcon,
      isActive: false
    }
  ]);
  const currentRoute = window.location.pathname;
  useEffect(() => {
    const updatedMenu = Menu.map((item) => {
      if (item.link === currentRoute) {
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
    setMenu(updatedMenu);
    const updatedBottomLinks = BottomLinks.map((item) => {
      if (item.link === currentRoute) {
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
    setBottomLinks(updatedBottomLinks);
  }, [currentRoute]);
  const handleSignout = () => {
    const Logout = async () => {
      try {
        await Axios.get("/logout").then((response) => {
          if (response.data.status === "success") {
            toast.success("Logged out successfully.");
            window.location = "/login";
          } else {
            toast.error(response.data.errors);
          }
        });
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      }
    };
    Logout();
  };
  return /* @__PURE__ */ jsx("div", { className: "min-w-[240px] max-w-[260px] border-r border-borderlight h-screen overflow-y-scroll", children: /* @__PURE__ */ jsxs("div", { className: "p-4 flex flex-col justify-between h-full", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: Logo,
          alt: "Logo",
          className: "w-[100px] h-[32px]"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(TextField, { label: "", type: "text", placeholder: "Search" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: Menu.map((item, index) => /* @__PURE__ */ jsx(Link, { href: item.link, children: /* @__PURE__ */ jsxs(
        "li",
        {
          className: `flex text-base text-sidebarcolor font-semibold items-center space-x-2 py-2 px-4 rounded-lg ${item.isActive === true ? "bg-lightgray" : ""} hover:bg-lightgray`,
          children: [
            /* @__PURE__ */ jsx("img", { src: item.icon, alt: item.name }),
            /* @__PURE__ */ jsx("span", { children: item.name })
          ]
        }
      ) }, index)) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: BottomLinks.map((item, index) => /* @__PURE__ */ jsx(Link, { href: item.link, children: /* @__PURE__ */ jsxs(
        "li",
        {
          className: `flex text-base text-sidebarcolor font-semibold items-center space-x-2 py-2 px-4 rounded-lg ${item.isActive === true ? "bg-lightgray" : ""} hover:bg-lightgray`,
          children: [
            /* @__PURE__ */ jsx("img", { src: item.icon, alt: item.name }),
            /* @__PURE__ */ jsx("span", { children: item.name })
          ]
        }
      ) }, index)) }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-borderlight my-6" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: ((_a = auth == null ? void 0 : auth.user) == null ? void 0 : _a.image) ?? Avatar,
              alt: "Avatar",
              className: "w-10 h-10 rounded-full"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-4/6", children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "\n                                texy-sm font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis w-30\n                                ",
                children: (_b = auth == null ? void 0 : auth.user) == null ? void 0 : _b.name
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "text-sm overflow-hidden whitespace-nowrap overflow-ellipsis w-30", children: [
              "@",
              (_c = auth == null ? void 0 : auth.user) == null ? void 0 : _c.name
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            onClick: () => handleSignout(),
            className: "w-20 cursor-pointer rounded-full hover:bg-lightgray ease-in-out flex justify-center items-center",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: Signout,
                className: "w-5 h-5",
                alt: "Signout"
              }
            )
          }
        )
      ] })
    ] })
  ] }) });
}
function DashboardLayout({ children }) {
  const { auth } = usePage().props;
  useEffect(() => {
    if (!auth.user) {
      window.location = "/login";
    }
  }, [auth]);
  return /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsx("div", { className: "w-full p-6", children })
  ] });
}
export {
  DashboardLayout as default
};
