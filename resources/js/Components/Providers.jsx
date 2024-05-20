import useImages from "@/Hooks/useImages";
import Axios from "@/axios/axios";
import toast from "react-hot-toast";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Providers() {
    const { GoogleBrandIcon } = useImages();
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    // current url
    const currentUrl = window.location.href;
    //only give me last parameter
    const splitUrl = currentUrl.split("/").pop();

    const handleGoogleSignin = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log("Login Failed:", error),
    });

    useEffect(() => {
        if (user) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: "application/json",
                        },
                    }
                )
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    console.log(profile);

    useEffect(() => {
        if (profile) {
            try {
                const formData = new FormData();
                formData.append("name", profile.name);
                formData.append("email", profile.email);
                formData.append("image", profile.picture);
                formData.append("provider", "google");
                formData.append("provider_id", profile.id);
                formData.append("access_token", user.access_token);
                Axios.post("/providers", formData).then((response) => {
                    console.log(response.data);
                    if (response.data.status === "success") {
                        toast.success(response.data.message);
                        setTimeout(() => {
                            window.location = "/dashboard";
                        }, 2000);
                    } else {
                        toast.error(response.data.message);
                    }
                });
            } catch (error) {
                toast.error("An error occurred. Please try again later.");
            }
        }
    }, [profile]);

    return (
        <button
            type="button"
            onClick={() => handleGoogleSignin()}
            className="w-full text-base bg-white font-semibold border shadow-sm border-borderprimary text-textdark py-[10px] px-3 rounded-lg"
        >
            <img
                src={GoogleBrandIcon}
                alt="Google Icon"
                className="w-5 inline-block"
            />
            <span className="ms-2">
                {splitUrl === "login"
                    ? "Login with Google"
                    : "Sign up with Google"}
            </span>
        </button>
    );
}
