import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Mercury";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.jsx`,
    /* @__PURE__ */ Object.assign({ "./Pages/Account/Account.jsx": () => import("./assets/Account-BPZVVuol.js"), "./Pages/Address/Address.jsx": () => import("./assets/Address-BOcO4yvY.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-BcnnVdSE.js"), "./Pages/Auth/Signup.jsx": () => import("./assets/Signup-DKYndAk6.js"), "./Pages/Billing/Billing.jsx": () => import("./assets/Billing-D40hITVy.js"), "./Pages/Dashboard/Dashboard.jsx": () => import("./assets/Dashboard-CKHN45F4.js"), "./Pages/Dashboard/DashboardLayout.jsx": () => import("./assets/DashboardLayout-D5j467kC.js"), "./Pages/Home/Home.jsx": () => import("./assets/Home-DdWZ1KDQ.js"), "./Pages/Ship/Ship.jsx": () => import("./assets/Ship-YwvCRguP.js"), "./Pages/Support/Support.jsx": () => import("./assets/Support-WnHBXUAd.js"), "./Pages/Tracking/Track.jsx": () => import("./assets/Track-D-oMEbMx.js") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(GoogleOAuthProvider, { clientId: "32407708048-lbfj907bgiu6fmefdjli3m9cmbs77cpn.apps.googleusercontent.com", children: [
        /* @__PURE__ */ jsx(Toaster, {}),
        /* @__PURE__ */ jsx(App, { ...props })
      ] }) })
    );
  },
  progress: {
    color: "#4B5563"
  }
});
