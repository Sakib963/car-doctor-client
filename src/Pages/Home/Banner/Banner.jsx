import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
    const common = <>
        <div className="absolute flex items-center bottom-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
          <div className="text-white font-bold space-y-7 pl-10">
            <h2 className="text-6xl w-5/12">Affordable Price For Car Servicing</h2>
            <p className="w-7/12">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-3 ">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn btn-outline btn-secondary text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
    </>
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={image1} className="w-full rounded-lg" />
        {common}
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full rounded-lg" />
        {common}
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full rounded-lg" />
        {common}
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full rounded-lg" />
        {common}
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
