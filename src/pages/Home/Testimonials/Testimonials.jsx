import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <SectionTitle subHeading="What Our Client Say" heading="Testimonials" />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-24 flex flex-col items-center gap-6">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                  //   onChange={setRating}
                />
                <p className="text-center">{review.details}</p>
                <p className="text-2xl text-orange-400">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
