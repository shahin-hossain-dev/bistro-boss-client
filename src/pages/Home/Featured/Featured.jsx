import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item text-white mt-24 pt-8">
      <SectionTitle subHeading="Check it Out" heading={"Featured Items"} />
      <div className="flex gap-5 justify-center items-center pt-12 pb-20 mx-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="">
          <p>May 15, 2024</p>
          <p className="uppercase">Where can I get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            excepturi pariatur odio nostrum. Harum, dolorum et repellendus
            provident est quidem omnis error, vel quis aspernatur libero nam
            eos! Earum reiciendis sint atque debitis quae cupiditate at, nulla,
            nobis ea corrupti impedit eaque doloremque vero placeat. Tempora
            magni cumque quis repudiandae!
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
