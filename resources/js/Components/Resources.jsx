import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper/modules";
import useImages from "@/Hooks/useImages";
import { Link } from "@inertiajs/react";

export default function Resources() {
    const { RsourcesSliderOne, ChevronRight, ResourcesSliderTwo } = useImages();
    const ResourcesSlider = [
        {
            image: RsourcesSliderOne,
            title: "Resources",
            description: "Get access to shipping tips, events, and more.",
            url: "/",
            urltext: "View Resources",
        },
        {
            image: ResourcesSliderTwo,
            title: "Resources Two",
            description: "Get access to shipping tips, events, and more.",
            url: "/",
            urltext: "View Resources",
        },
    ];
    return (
        <section>
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    freeMode={true}
                    modules={[Pagination, FreeMode]}
                    className="mySwiper"
                >
                    {ResourcesSlider?.map((slide, index) => (
                        <SwiperSlide
                            key={index}
                            className={index === 0 ? "first-slide" : ""}
                        >
                            <div
                                className="bg-cover bg-center bg-no-repeat rounded-[64px] h-[424px] w-full"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, #00000033, #40CAD01A), url(${slide.image})`,
                                }}
                            >
                                <div className="h-full flex flex-col justify-center items-center">
                                    <h2 className="text-white lg:text-4xl text-3xl font-semibold">
                                        {slide.title}
                                    </h2>
                                    <p className="text-white lg:text-2xl text-lg mt-4 text-center">
                                        {slide.description}
                                    </p>

                                    <Link href={slide.url}>
                                        <button className="bg-primary text-white text-lg font-semibold px-10 py-4 flex items-center rounded-full gap-2 mt-6">
                                            {slide.urltext}
                                            <img
                                                src={ChevronRight}
                                                alt="chevron-right"
                                            />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
