import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <div>
        <SectionTitle
          heading={"Order Online"}
          subHeading={"From 11.00 AM to 10.00 PM"}
        />
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-4xl -mt-16 text-center uppercase text-white">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-4xl -mt-16 text-center uppercase text-white">
            Piazza
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-4xl -mt-16 text-center uppercase text-white">
            Soup
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-4xl -mt-16 text-center uppercase text-white">
            Dessert
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-4xl -mt-16 mb-16 text-center uppercase text-white">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
