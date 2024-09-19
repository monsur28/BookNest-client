import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Catogory = () => {
  const [catrgory, setCategory] = useState([]);

  useEffect(() => {
    fetch("/popular-card-data.json")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="mb-5">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {catrgory.map((cat) => (
          <SwiperSlide key={cat.image}>
            <div className="flex flex-col items-center">
              <img
                src={cat.image}
                className="lg:w-72 lg:h-[300px] w-96 h-40 mb-5 hover:scale-105 transition-transform"
                alt="Book 1"
              />
              <div className="text-center">
                <p className="font-semibold">{cat.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Catogory;
