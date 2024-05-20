import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button } from "./Button-BolbG2Nf.js";
import { S as Spinner, P as Providers } from "./Spinner-B8yNh-8W.js";
import { u as useImages, T as TextField } from "./useImages-19sOBF2F.js";
import { A as Axios } from "./axios-CQftZ3Ie.js";
import { Link } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "@react-oauth/google";
import "react";
import "axios";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();
  const { Logo, Mail, AvatarTwo, StarBlue, GoogleBrandIcon } = useImages();
  const onSubmit = (data) => {
    try {
      Axios.post("/login", data).then((response) => {
        if (response.data.status === "success") {
          toast.success(response.data.message);
          window.location = "/dashboard";
        } else {
          toast.error(response.data.message);
        }
      });
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "w-full h-screen flex", children: [
    /* @__PURE__ */ jsx("div", { className: "xl:w-3/6 w-full xl:px-0 px-10 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "xl:w-3/6 w-full flex flex-col justify-center h-full", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 xl:hidden block", children: /* @__PURE__ */ jsx("img", { src: Logo, alt: "Mercury Logo", className: "h-10" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold text-textdarker", children: "Welcome Back" }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-headertext mt-3", children: "Welcome back! Please enter your details." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full mt-6", children: [
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            TextField,
            {
              register: register("email", {
                required: "Email is required"
              }),
              label: "Email",
              type: "text",
              placeholder: "Enter your email",
              error: errors.email
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
            TextField,
            {
              register: register("password", {
                required: "Password is required"
              }),
              label: "Password",
              type: "text",
              placeholder: "Enter your password",
              error: errors.password
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "remember-me",
                  type: "checkbox",
                  value: "",
                  className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                }
              ),
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "remember-me",
                  className: "ms-2 text-sm font-medium text-textdark",
                  children: "Remember me"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              Link,
              {
                href: "/",
                className: "text-sm text-primary font-semibold",
                children: "Forgot Password?"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                isSubmitting,
                isRounded: false,
                type: "submit",
                children: isSubmitting ? /* @__PURE__ */ jsx(Spinner, {}) : "Login"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Providers, {}) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-headertext", children: [
          "Don’t have an account?",
          " ",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/signup",
              className: "text-primary font-semibold",
              children: "Sign Up"
            }
          )
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:w-3/6 w-full bg-lightgray p-8 xl:block hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between h-full", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: Logo, alt: "Mercury Logo", className: "h-10" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "lg:w-5/6 flex flex-col w-full", children: [
        /* @__PURE__ */ jsx("p", { className: "text-3xl font-medium text-textdarker text-center", children: "We’ve been using Mercury to kick start every new project and can’t imagine working without it." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mt-8", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: AvatarTwo,
              alt: "Avatar",
              className: "w-20 h-20 rounded-full mx-auto"
            }
          ),
          /* @__PURE__ */ jsx("h6", { className: "text-base text-textdarker font-semibold mt-3", children: "Pippa Wilkinson" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-headertext font-medium mt-1", children: "Head of Design, Layers" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-1 mt-5", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: StarBlue, alt: "star-blue" }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: StarBlue, alt: "star-blue" }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: StarBlue, alt: "star-blue" }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: StarBlue, alt: "star-blue" }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: StarBlue, alt: "star-blue" }) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-headertext text-sm", children: "@ Mercury 2024" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("img", { src: Mail, alt: "Mail", className: "w-4" }),
          /* @__PURE__ */ jsx("a", { className: "text-headertext text-sm", children: "help@Mercury.com" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Login as default
};
