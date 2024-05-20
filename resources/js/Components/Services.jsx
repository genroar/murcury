import useImages from "@/Hooks/useImages";

export default function Services() {
    const { ServiceOne, ServiceTwo, ServiceThree, ArrowRightBlue } =
        useImages();
    const Services = [
        {
            image: ServiceOne,
            title: "Insured Shipping",
            description: "Ship your precious goods up to $200K",
            url: "/",
            urltext: "Learn More",
        },
        {
            image: ServiceTwo,
            title: "Shipping Platform",
            description:
                "Reduce losses with hi-tech solutions that lower risk.",
            url: "/",
            urltext: "Discover Details",
        },
        {
            image: ServiceThree,
            title: "Customer Service",
            description: "Get premium care for premium goods.",
            url: "/",
            urltext: "Contact Us",
        },
    ];
    return (
        <>
            <section className="py-20">
                <div className="container">
                    <div className="text-center">
                        <h2 className="lg:text-4xl text-3xl font-semibold">
                            Keep High-Value Goods Safe
                        </h2>
                        <p className="lg:text-xl text-lg text-headertext mt-3">
                            Smart and secure, multi-carrier insured shipping.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {Services?.map((service, index) => (
                            <div
                                key={index}
                                className="bg-lightgray rounded-lg text-center px-8 pt-8 pb-6"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full lg:h-[200px] h-auto object-cover rounded-t-lg"
                                />
                                <div className="p-6">
                                    <h3 className="lg:text-3xl text-2xl font-semibold">
                                        {service.title}
                                    </h3>
                                    <p className="text-base text-headertext mt-3">
                                        {service.description}
                                    </p>
                                    <a
                                        href={service.url}
                                        className="text-linkprimary text-base font-semibold mt-3 flex gap-2 items-center justify-center"
                                    >
                                        {service.urltext}
                                        <img
                                            src={ArrowRightBlue}
                                            alt="arrow-right-blue"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
