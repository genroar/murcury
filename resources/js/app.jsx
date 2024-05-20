import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <>
                <GoogleOAuthProvider clientId="32407708048-lbfj907bgiu6fmefdjli3m9cmbs77cpn.apps.googleusercontent.com">
                    <Toaster />
                    <App {...props} />
                </GoogleOAuthProvider>
            </>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
