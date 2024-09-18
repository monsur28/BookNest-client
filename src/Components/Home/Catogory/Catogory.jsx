import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

const Catogory = () => {
  const [catrgory, setCategory] = useState([]);

  useEffect(() => {
    fetch("/popular-card-data.json")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h1 className="text-xl lg:text-4xl font-semibold text-black mb-2">Catogory</h1>

      <Swiper
        
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >

{
            catrgory.map(cat=> <SwiperSlide key={cat.image}>
              <img src={cat.image} className='w-72 h-[300px] mb-5 hover:scale-125 transition-transform' alt="" />
              </SwiperSlide>)
          }
        
          
        
      </Swiper>
    </div>
  );
};

export default Catogory;