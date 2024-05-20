import TextField from "@/Components/TextField";
import useImages from "@/Hooks/useImages";
import { Link } from "@inertiajs/react";

export default function Footer() {
    const { Logo } = useImages();
    const FooterMenuProduct = [
        { name: "Overview", url: "/", isNew: false },
        { name: "Features", url: "/", isNew: false },
        { name: "Solutions", url: "/", isNew: true },
        { name: "Tutorials", url: "/", isNew: false },
        { name: "Pricing", url: "/", isNew: false },
        { name: "Releases", url: "/", isNew: false },
    ];

    const FooterMenuResources = [
        { name: "Blog", url: "/", isNew: false },
        { name: "Newsletter", url: "/", isNew: false },
        { name: "Events", url: "/", isNew: false },
        { name: "Help centre", url: "/", isNew: false },
        { name: "Tutorials", url: "/", isNew: false },
        { name: "Support", url: "/", isNew: false },
    ];
    return (
        <footer className="bg-lightgray pt-16 pb-12">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <img src={Logo} alt="logo" />
                        <p className="text-base text-headertext mt-6">
                            We Move Goods With Care.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-col-2 gap-3">
                        <div>
                            <h3 className="text-[#101828] text-sm font-semibold">
                                Product
                            </h3>
                            <ul className="flex flex-col gap-2 mt-3">
                                {FooterMenuProduct.map((menu, index) => (
                                    <li key={index}>
                                        <Link href={menu.url}>
                                            <a className="text-footerlink text-base font-semibold">
                                                {menu.name}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#101828] text-sm font-semibold">
                                Product
                            </h3>
                            <ul className="flex flex-col gap-2 mt-3">
                                {FooterMenuResources.map((menu, index) => (
                                    <li key={index}>
                                        <Link href={menu.url}>
                                            <a className="text-footerlink text-base font-semibold">
                                                {menu.name}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Stay up to date">
                            <h3 className="text-[#101828] text-sm font-semibold">
                                Stay up to date
                            </h3>

                            <div className="flex items-center gap-4 mt-4">
                                <div className="w-4/6">
                                    <TextField
                                        placeholder="Enter your email"
                                        type="email"
                                        value=""
                                        onChange={() => {}}
                                    />
                                </div>
                                <div className="w-2/6">
                                    <button className="bg-primary text-white text-base font-semibold px-3 py-2 rounded-lg w-full">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="border-t border-borderlight pt-8 mt-12">
                    <div className="flex justify-between gap-3">
                        <p className="text-base text-footerlink">
                            © 2024 Mercury. All rights reserved.
                        </p>

                        <div>
                            <ul className="flex gap-4 items-center text-footerlink">
                                <li>
                                    <Link href="/">Terms</Link>
                                </li>
                                <li>
                                    <Link href="/">Privacy</Link>
                                </li>
                                <li>
                                    <Link href="/">Cookies</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
