// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Brand = () => {
  return (
    <div className="container mx-auto lg:my-28">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper flex items-center justify-center"
      >
        <SwiperSlide>
          <img
            className="md:h-20 lg:h-32"
            src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_1.svg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-20 lg:h-32"
            src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_2.svg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-20 lg:h-32"
            src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_3.svg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-20 lg:h-32"
            src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_4.svg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-20 lg:h-32"
            src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_5.svg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-20 lg:h-32"
            src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_6.svg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" h-8 md:h-20 lg:h-36"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kWGkqPFdXNC5JisMO8VUSusMafaFfKFnQA&s"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-8 md:h-20 lg:h-40"
            src="https://cdn.freebiesupply.com/logos/large/2x/the-black-book-logo-png-transparent.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-20 lg:h-40"
            src="https://d3bzyjrsc4233l.cloudfront.net/news/Peach_sSVKDnq.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brand;
