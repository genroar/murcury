import TextField from "@/Components/TextField";
import useImages from "@/Hooks/useImages";
import Axios from "@/axios/axios";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Sidebar() {
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
        Signout,
    } = useImages();

    const [Menu, setMenu] = useState([
        {
            name: "Home",
            icon: HomeIcon,
            link: "/dashboard",
            isActive: true,
        },
        {
            name: "Ship",
            icon: ShippingIcon,
            link: "/ship",
            isActive: false,
        },
        {
            name: "Track",
            icon: TrackingIocon,
            link: "/track",
            isActive: false,
        },
        {
            name: "Billing",
            icon: BillingIcon,
            link: "/billing",
            isActive: false,
        },
        {
            name: "Address Book",
            icon: AddressBookIcon,
            link: "/address",
            isActive: false,
        },
        {
            name: "Account",
            icon: AccountIcon,
            link: "/account",
            isActive: false,
        },
    ]);
    const [BottomLinks, setBottomLinks] = useState([
        {
            name: "Support",
            link: "/support",
            icon: SupportIcon,
            isActive: false,
        },
        {
            name: "Settings",
            link: "/",
            icon: SettingsIcon,
            isActive: false,
        },
    ]);

    //check if the current route is active
    const currentRoute = window.location.pathname;
    useEffect(() => {
        const updatedMenu = Menu.map((item) => {
            if (item.link === currentRoute) {
                return {
                    ...item,
                    isActive: true,
                };
            } else {
                return {
                    ...item,
                    isActive: false,
                };
            }
        });

        setMenu(updatedMenu);

        const updatedBottomLinks = BottomLinks.map((item) => {
            if (item.link === currentRoute) {
                return {
                    ...item,
                    isActive: true,
                };
            } else {
                return {
                    ...item,
                    isActive: false,
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

    return (
        <div className="min-w-[240px] max-w-[260px] border-r border-borderlight h-screen overflow-y-scroll">
            <div className="p-4 flex flex-col justify-between h-full">
                <div>
                    <div className="flex justify-center items-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-[100px] h-[32px]"
                        />
                    </div>

                    <div className="mt-6">
                        <TextField label="" type="text" placeholder="Search" />
                    </div>

                    <div className="mt-6">
                        <ul className="flex flex-col gap-2">
                            {Menu.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <li
                                        className={`flex text-base text-sidebarcolor font-semibold items-center space-x-2 py-2 px-4 rounded-lg ${
                                            item.isActive === true
                                                ? "bg-lightgray"
                                                : ""
                                        } hover:bg-lightgray`}
                                    >
                                        <img src={item.icon} alt={item.name} />
                                        <span>{item.name}</span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col">
                    <ul className="flex flex-col gap-2">
                        {BottomLinks.map((item, index) => (
                            <Link key={index} href={item.link}>
                                <li
                                    className={`flex text-base text-sidebarcolor font-semibold items-center space-x-2 py-2 px-4 rounded-lg ${
                                        item.isActive === true
                                            ? "bg-lightgray"
                                            : ""
                                    } hover:bg-lightgray`}
                                >
                                    <img src={item.icon} alt={item.name} />
                                    <span>{item.name}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>

                    <div className="border-t border-borderlight my-6"></div>

                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <div className="w-10">
                                <img
                                    src={auth?.user?.image ?? Avatar}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-full"
                                />
                            </div>

                            <div className="flex flex-col w-4/6">
                                <h3
                                    className="
                                texy-sm font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis w-30
                                "
                                >
                                    {auth?.user?.name}
                                </h3>
                                <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis w-30">
                                    @{auth?.user?.name}
                                </p>
                            </div>
                        </div>

                        <div
                            onClick={() => handleSignout()}
                            className="w-20 cursor-pointer rounded-full hover:bg-lightgray ease-in-out flex justify-center items-center"
                        >
                            <img
                                src={Signout}
                                className="w-5 h-5"
                                alt="Signout"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
