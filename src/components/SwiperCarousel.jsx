import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperSlideCard from "./SwiperSlideCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function SwiperCarousel() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        loop={true}
        Navigation
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
