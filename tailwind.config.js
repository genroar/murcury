import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            container: {
                center: true,
                padding: "1rem",
                maxWidth: "1200px",
            },
            colors: {
                primary: "#FF6200",
                primaryred: "#F04438",
                headertext: "#475467",
                borderprimary: "#D0D5DD",
                borderlight: "#EAECF0",
                textdark: "#344054",
                textdarker: "#101828",
                lightgray: "#F9FAFB",
                linkprimary: "#40CAD0",
                footerlink: "#667085",
                sidebarcolor: "#182230",
            },
        },
    },

    plugins: [forms],
};
