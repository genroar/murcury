import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { usePage, Link, Head } from "@inertiajs/react";
import { B as Button } from "./Button-BolbG2Nf.js";
import { u as useImages, T as TextField } from "./useImages-19sOBF2F.js";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
function Navbar() {
  const { auth } = usePage().props;
  const {
    Logo: Logo2,
    CanadaFlag: CanadaFlag2,
    SearchIcon: SearchIcon2,
    MenuBurger,
    Close,
    ChevronRightBlack
  } = useImages();
  const [isOpen, setIsOpen] = useState(false);
  const MenuList = [
    {
      name: "Insured Shipping",
      url: "/"
    },
    {
      name: "Who We Serve",
      url: "/"
    },
    {
      name: "Shipping Technology",
      url: "/"
    },
    {
      name: "Resources",
      url: "/"
    },
    {
      name: "About",
      url: "/"
    },
    {
      name: "Contact",
      url: "/"
    }
  ];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("header", { className: "h-20", children: [
    /* @__PURE__ */ jsx("div", { className: "container h-full xl:block hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-10 items-center h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-start gap-10 items-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: Logo2,
            alt: "Mercury Logo",
            className: "h-10"
          }
        ),
        /* @__PURE__ */ jsx("ul", { className: "flex justify-start items-center gap-10", children: MenuList.map((menu, index) => /* @__PURE__ */ jsx(
          "li",
          {
            className: "inline-block text-base font-semibold text-headertext",
            children: /* @__PURE__ */ jsx(
              Link,
              {
                href: menu.url,
                className: "text-gray-600 hover:text-gray-900",
                children: menu.name
              }
            )
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-start items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: SearchIcon2,
            alt: "Search Icon",
            className: "w-6"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: CanadaFlag2,
            alt: "Canada Flag",
            className: "w-6"
          }
        ),
        (auth == null ? void 0 : auth.user) ? /* @__PURE__ */ jsx(Link, { href: "/dashboard", children: " Dashboard " }) : /* @__PURE__ */ jsx(Button, { isRounded: true, href: "/login", children: "Log In" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container h-full block xl:hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full justify-between items-center", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: Logo2,
          alt: "Mercury Logo",
          className: "h-10"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-start items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: SearchIcon2,
            alt: "Search Icon",
            className: "w-6"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: CanadaFlag2,
            alt: "Canada Flag",
            className: "w-6"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            onClick: () => setIsOpen(!isOpen),
            src: MenuBurger,
            className: "w-6",
            alt: "Menu Burger"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed top-0 right-0 w-full h-screen overflow-y-scroll bg-white z-10 ${!isOpen ? "hidden" : ""}`,
        children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-20 items-center", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "img",
              {
                src: Logo2,
                alt: "Mercury Logo",
                className: "h-10"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
              "img",
              {
                onClick: () => setIsOpen(!isOpen),
                src: Close,
                className: "w-4",
                alt: "Menu Burger"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-6 mt-6", children: [
            MenuList.map((menu, index) => /* @__PURE__ */ jsx(Link, { href: menu.url, children: /* @__PURE__ */ jsxs(
              "li",
              {
                className: "text-base font-semibold text-headertext flex items-center justify-between",
                children: [
                  menu.name,
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: ChevronRightBlack,
                      className: "w-4"
                    }
                  )
                ]
              },
              index
            ) })),
            /* @__PURE__ */ jsx(Link, { href: "/login", children: /* @__PURE__ */ jsxs("li", { className: "text-base font-semibold text-headertext flex items-center justify-between", children: [
              "Sign In",
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: ChevronRightBlack,
                  className: "w-4"
                }
              )
            ] }) })
          ] })
        ] })
      }
    )
  ] }) });
}
function Services() {
  const { ServiceOne, ServiceTwo, ServiceThree, ArrowRightBlue } = useImages();
  const Services2 = [
    {
      image: ServiceOne,
      title: "Insured Shipping",
      description: "Ship your precious goods up to $200K",
      url: "/",
      urltext: "Learn More"
    },
    {
      image: ServiceTwo,
      title: "Shipping Platform",
      description: "Reduce losses with hi-tech solutions that lower risk.",
      url: "/",
      urltext: "Discover Details"
    },
    {
      image: ServiceThree,
      title: "Customer Service",
      description: "Get premium care for premium goods.",
      url: "/",
      urltext: "Contact Us"
    }
  ];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "lg:text-4xl text-3xl font-semibold", children: "Keep High-Value Goods Safe" }),
      /* @__PURE__ */ jsx("p", { className: "lg:text-xl text-lg text-headertext mt-3", children: "Smart and secure, multi-carrier insured shipping." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16", children: Services2 == null ? void 0 : Services2.map((service, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-lightgray rounded-lg text-center px-8 pt-8 pb-6",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: service.image,
              alt: service.title,
              className: "w-full lg:h-[200px] h-auto object-cover rounded-t-lg"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "lg:text-3xl text-2xl font-semibold", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "text-base text-headertext mt-3", children: service.description }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: service.url,
                className: "text-linkprimary text-base font-semibold mt-3 flex gap-2 items-center justify-center",
                children: [
                  service.urltext,
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: ArrowRightBlue,
                      alt: "arrow-right-blue"
                    }
                  )
                ]
              }
            )
          ] })
        ]
      },
      index
    )) })
  ] }) }) });
}
function DeliveryIntelligence() {
  const { ChevronRight } = useImages();
  return /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "bg-image-delivery bg-no-repeat con bg-center bg-cover h-[456px] rounded-3xl", children: /* @__PURE__ */ jsx("div", { className: "h-full flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "lg:w-5/6 w-full h-full flex flex-col items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "mt-5 text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "lg:text-4xl text-3xl font-semibold text-white", children: "Enhance Shipping Decisions with Delivery Intelligence" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "lg:w-4/6", children: /* @__PURE__ */ jsx("p", { className: "lg:text-2xl text-xl text-white mt-6", children: "Unlock the advantages of DeliveryDefense™ Address Confidence scores when you use Parcel Pro® insured shipping services." }) }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-3 mt-8", children: /* @__PURE__ */ jsxs("button", { className: "bg-primary text-white text-lg font-semibold px-10 py-4 flex items-center rounded-full gap-2", children: [
      "Explore More",
      /* @__PURE__ */ jsx(
        "img",
        {
          src: ChevronRight,
          alt: "chevron-right"
        }
      )
    ] }) })
  ] }) }) }) }) });
}
function Reviews() {
  const { StarBlue, Avatar, ReviewMain, ArrowRightLg, ArrowLeft } = useImages();
  return /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: StarBlue, alt: "star-blue" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: StarBlue, alt: "star-blue" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: StarBlue, alt: "star-blue" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: StarBlue, alt: "star-blue" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: StarBlue, alt: "star-blue" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "lg:text-5xl text-3xl font-medium text-[#101828]", children: "We’ve really sped up our workflow using Mercury and haven’t looked back." }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center gap-5 mt-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-start items-center gap-3", children: [
            /* @__PURE__ */ jsx("img", { src: Avatar, alt: "avatar" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-[#101828]", children: "Sienna Hewitt" }),
              /* @__PURE__ */ jsx("p", { className: "text-base text-headertext", children: "Project Manager, Layers" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
            /* @__PURE__ */ jsx("div", { className: " w-14 h-14 border border-borderlight rounded-full flex justify-center items-center", children: /* @__PURE__ */ jsx("img", { src: ArrowLeft, alt: "arrow-left" }) }),
            /* @__PURE__ */ jsx("div", { className: " w-14 h-14 border border-borderlight rounded-full flex justify-center items-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: ArrowRightLg,
                alt: "arrow-right"
              }
            ) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx("img", { src: ReviewMain, alt: "review-main" }) })
  ] }) }) });
}
function HowToApply() {
  const { LoginScreen } = useImages();
  return /* @__PURE__ */ jsx("section", { className: "pt-24", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsxs("div", { className: "lg:w-5/6 w-full text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "lg:text-4xl text-3xl font-semibold text-[#101828]", children: "From High-Tech to High Fashion" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:w-4/6", children: /* @__PURE__ */ jsx("p", { className: "lg:text-2xl text-xl text-headertext mt-6", children: "We serve businesses across industries. Get started with Parcel Pro to keep your goods moving safely." }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-7", children: [
          /* @__PURE__ */ jsx("button", { className: "border bg-white border-borderprimary py-3 px-[18px] rounded-lg text-base font-semibold text-dark", children: "How We Work" }),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/signup",
              className: "border bg-primary border-primary py-3 px-[18px] rounded-lg text-base font-semibold text-white",
              children: "Apply"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: LoginScreen,
        className: "w-full",
        alt: "login-screen"
      }
    ) })
  ] }) });
}
function Resources() {
  const { RsourcesSliderOne, ChevronRight, ResourcesSliderTwo } = useImages();
  const ResourcesSlider = [
    {
      image: RsourcesSliderOne,
      title: "Resources",
      description: "Get access to shipping tips, events, and more.",
      url: "/",
      urltext: "View Resources"
    },
    {
      image: ResourcesSliderTwo,
      title: "Resources Two",
      description: "Get access to shipping tips, events, and more.",
      url: "/",
      urltext: "View Resources"
    }
  ];
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(
    Swiper,
    {
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
        clickable: true
      },
      navigation: true,
      freeMode: true,
      modules: [Pagination, FreeMode],
      className: "mySwiper",
      children: ResourcesSlider == null ? void 0 : ResourcesSlider.map((slide, index) => /* @__PURE__ */ jsx(
        SwiperSlide,
        {
          className: index === 0 ? "first-slide" : "",
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-cover bg-center bg-no-repeat rounded-[64px] h-[424px] w-full",
              style: {
                backgroundImage: `linear-gradient(to bottom, #00000033, #40CAD01A), url(${slide.image})`
              },
              children: /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col justify-center items-center", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-white lg:text-4xl text-3xl font-semibold", children: slide.title }),
                /* @__PURE__ */ jsx("p", { className: "text-white lg:text-2xl text-lg mt-4 text-center", children: slide.description }),
                /* @__PURE__ */ jsx(Link, { href: slide.url, children: /* @__PURE__ */ jsxs("button", { className: "bg-primary text-white text-lg font-semibold px-10 py-4 flex items-center rounded-full gap-2 mt-6", children: [
                  slide.urltext,
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: ChevronRight,
                      alt: "chevron-right"
                    }
                  )
                ] }) })
              ] })
            }
          )
        },
        index
      ))
    }
  ) }) });
}
function Footer() {
  const { Logo } = useImages();
  const FooterMenuProduct = [
    { name: "Overview", url: "/", isNew: false },
    { name: "Features", url: "/", isNew: false },
    { name: "Solutions", url: "/", isNew: true },
    { name: "Tutorials", url: "/", isNew: false },
    { name: "Pricing", url: "/", isNew: false },
    { name: "Releases", url: "/", isNew: false }
  ];
  const FooterMenuResources = [
    { name: "Blog", url: "/", isNew: false },
    { name: "Newsletter", url: "/", isNew: false },
    { name: "Events", url: "/", isNew: false },
    { name: "Help centre", url: "/", isNew: false },
    { name: "Tutorials", url: "/", isNew: false },
    { name: "Support", url: "/", isNew: false }
  ];
  return /* @__PURE__ */ jsx("footer", { className: "bg-lightgray pt-16 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("img", { src: Logo, alt: "logo" }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-headertext mt-6", children: "We Move Goods With Care." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-col-2 gap-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[#101828] text-sm font-semibold", children: "Product" }),
          /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2 mt-3", children: FooterMenuProduct.map((menu, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: menu.url, children: /* @__PURE__ */ jsx("a", { className: "text-footerlink text-base font-semibold", children: menu.name }) }) }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[#101828] text-sm font-semibold", children: "Product" }),
          /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2 mt-3", children: FooterMenuResources.map((menu, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: menu.url, children: /* @__PURE__ */ jsx("a", { className: "text-footerlink text-base font-semibold", children: menu.name }) }) }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { htmlFor: "Stay up to date", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[#101828] text-sm font-semibold", children: "Stay up to date" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-4/6", children: /* @__PURE__ */ jsx(
            TextField,
            {
              placeholder: "Enter your email",
              type: "email",
              value: "",
              onChange: () => {
              }
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "w-2/6", children: /* @__PURE__ */ jsx("button", { className: "bg-primary text-white text-base font-semibold px-3 py-2 rounded-lg w-full", children: "Subscribe" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-borderlight pt-8 mt-12", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-base text-footerlink", children: "© 2024 Mercury. All rights reserved." }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: "flex gap-4 items-center text-footerlink", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Terms" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Privacy" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Cookies" }) })
      ] }) })
    ] }) })
  ] }) });
}
function Home() {
  const { Dot, ArrowRight, PlayCircle } = useImages();
  usePage().props;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("div", { className: "container lg:mt-12 mt-8", children: /* @__PURE__ */ jsx("div", { className: "bg-image-main bg-no-repeat con bg-center bg-cover h-[544px] rounded-3xl", children: /* @__PURE__ */ jsx("div", { className: "h-full flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "lg:w-5/6 w-full h-full flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:w-[345px] rounded-lg border border-borderprimary pr-[10px] pl-1 py-1 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-2 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-2 py-[2px] rounded-[6px] border border-borderprimary flex gap-2 items-center", children: [
          /* @__PURE__ */ jsx("img", { src: Dot, alt: "dot" }),
          /* @__PURE__ */ jsx("span", { className: "text-textdark text-sm font-medium", children: "What’s new?" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-textdark text-sm font-semibold", children: "Instantly issue virtual cards" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: ArrowRight,
              alt: "arrow-right"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 text-center lg:w-4/6", children: [
        /* @__PURE__ */ jsx("h1", { className: "lg:text-6xl text-3xl font-semibold text-white", children: "We Move Goods With Care." }),
        /* @__PURE__ */ jsx("p", { className: "lg:text-xl text-lg text-white mt-6", children: "Move your high-value goods and jewelry with maximum care and support with our insured shipping services." }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-3 mt-8", children: [
          /* @__PURE__ */ jsxs("button", { className: "bg-white text-textdark text-lg font-semibold px-10 py-4 rounded-full flex gap-2 items-center", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: PlayCircle,
                alt: "play-circle"
              }
            ),
            "Demo"
          ] }),
          /* @__PURE__ */ jsx("button", { className: "bg-primary text-white text-lg font-semibold px-10 py-4 rounded-full", children: "Sign Up" })
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(DeliveryIntelligence, {}),
    /* @__PURE__ */ jsx(Reviews, {}),
    /* @__PURE__ */ jsx(Resources, {}),
    /* @__PURE__ */ jsx(HowToApply, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as default
};
