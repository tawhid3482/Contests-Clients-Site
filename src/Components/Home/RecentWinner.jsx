import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/winner/1600w-MDkwjOqRZUg.webp";
import slide2 from "../../assets/winner/images (1).jpeg";
import slide3 from "../../assets/winner/images (2).jpeg";
import slide4 from "../../assets/winner/images (3).jpeg";
import slide5 from "../../assets/winner/images (4).jpeg";
import slide6 from "../../assets/winner/images.jpeg";
import SectionTitle from "../../Shared/SectionTitle";

// import required modules
const RecentWinner = () => {
  return (
    <div className="my-5 dark:bg-slate-700 dark:text-slate-100">
        <SectionTitle title={'Our Winners'}> </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} className="  md:h-44 lg:h-56" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RecentWinner;
