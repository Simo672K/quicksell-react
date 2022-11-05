import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperSlideCard from "./SwiperSlideCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/swiperTheme.css";

function SwiperCarousel() {
  return (
    <div className="mt-8">
      <Swiper
        autoplay={true}
        spaceBetween={0}
        slidesPerView={3}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        navigation
      >
        <SwiperSlide>
          <SwiperSlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default SwiperCarousel;
