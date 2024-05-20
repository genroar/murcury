import { Link, usePage } from "@inertiajs/react";
import Logo from "../../../public/assets/logo/mercury.svg";
import CanadaFlag from "../../../public/assets/logo/icons/canadaflag.svg";
import SearchIcon from "../../../public/assets/logo/icons/search.svg";
import Button from "@/Components/Button";
import useImages from "@/Hooks/useImages";
import { useState } from "react";

export default function Navbar() {
    const { auth } = usePage().props;

    const {
        Logo,
        CanadaFlag,
        SearchIcon,
        MenuBurger,
        Close,
        ChevronRightBlack,
    } = useImages();
    const [isOpen, setIsOpen] = useState(false);

    const MenuList = [
        {
            name: "Insured Shipping",
            url: "/",
        },
        {
            name: "Who We Serve",
            url: "/",
        },
        {
            name: "Shipping Technology",
            url: "/",
        },
        {
            name: "Resources",
            url: "/",
        },
        {
            name: "About",
            url: "/",
        },
        {
            name: "Contact",
            url: "/",
        },
    ];
    return (
        <>
            <header className="h-20">
                <div className="container h-full xl:block hidden">
                    <div className="flex justify-between gap-10 items-center h-full">
                        <div className="flex justify-start gap-10 items-center">
                            <img
                                src={Logo}
                                alt="Mercury Logo"
                                className="h-10"
                            />

                            <ul className="flex justify-start items-center gap-10">
                                {MenuList.map((menu, index) => (
                                    <li
                                        key={index}
                                        className="inline-block text-base font-semibold text-headertext"
                                    >
                                        <Link
                                            href={menu.url}
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            {menu.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <img
                                src={SearchIcon}
                                alt="Search Icon"
                                className="w-6"
                            />
                            <img
                                src={CanadaFlag}
                                alt="Canada Flag"
                                className="w-6"
                            />
                            {auth?.user ? (
                                <Link href="/dashboard"> Dashboard </Link>
                            ) : (
                                <Button isRounded={true} href="/login">
                                    Log In
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="container h-full block xl:hidden">
                    <div className="flex h-full justify-between items-center">
                        <div>
                            <img
                                src={Logo}
                                alt="Mercury Logo"
                                className="h-10"
                            />
                        </div>

                        <div className="flex justify-start items-center gap-4">
                            <img
                                src={SearchIcon}
                                alt="Search Icon"
                                className="w-6"
                            />
                            <img
                                src={CanadaFlag}
                                alt="Canada Flag"
                                className="w-6"
                            />
                            <img
                                onClick={() => setIsOpen(!isOpen)}
                                src={MenuBurger}
                                className="w-6"
                                alt="Menu Burger"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Fixed Screen */}
                <div
                    className={`fixed top-0 right-0 w-full h-screen overflow-y-scroll bg-white z-10 ${
                        !isOpen ? "hidden" : ""
                    }`}
                >
                    <div className="container">
                        <div className="flex justify-between h-20 items-center">
                            <div>
                                <img
                                    src={Logo}
                                    alt="Mercury Logo"
                                    className="h-10"
                                />
                            </div>

                            <div className="">
                                <img
                                    onClick={() => setIsOpen(!isOpen)}
                                    src={Close}
                                    className="w-4"
                                    alt="Menu Burger"
                                />
                            </div>
                        </div>

                        <ul className="flex flex-col gap-6 mt-6">
                            {MenuList.map((menu, index) => (
                                <Link href={menu.url}>
                                    <li
                                        key={index}
                                        className="text-base font-semibold text-headertext flex items-center justify-between"
                                    >
                                        {menu.name}

                                        <img
                                            src={ChevronRightBlack}
                                            className="w-4"
                                        />
                                    </li>
                                </Link>
                            ))}
                            <Link href="/login">
                                <li className="text-base font-semibold text-headertext flex items-center justify-between">
                                    Sign In
                                    <img
                                        src={ChevronRightBlack}
                                        className="w-4"
                                    />
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}
