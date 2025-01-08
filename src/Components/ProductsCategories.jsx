import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LivingRoom from "../assets/Images/LivingRoom.png";
import Dinning from "../assets/Images/Dinning.png";
import Bedroom from "../assets/Images/BedRoom.png";
import Office from "../assets/Images/Office.png";
import Storage from "../assets/Images/Storage.png";
import Study from "../assets/Images/Study.png"

const ProductsCategories = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="px-2">
          <div className="bg-[#D3D3D3] rounded-lg p-5 flex flex-col items-center gap-4">
            <h1 className="text-xl text-black font-bold text-center">Living</h1>
            <img className="w-24 mx-auto" src={LivingRoom} alt="living room" />
          </div>
        </div>
        <div className="px-2">
          <div className="bg-[#D3D3D3] rounded-lg p-5 flex flex-col items-center gap-4">
            <h1 className="text-xl text-black font-bold text-center">
              Dinning
            </h1>
            <img className="w-24 mx-auto" src={Dinning} alt="Dinning room" />
          </div>
        </div>
        <div className="px-2">
          <div className="bg-[#D3D3D3] rounded-lg p-5 flex flex-col items-center gap-4">
            <h1 className="text-xl text-black font-bold text-center">
              Bed Room
            </h1>
            <img className="w-24 mx-auto" src={Bedroom} alt="Bed room" />
          </div>
        </div>
        <div className="px-2">
          <div className="bg-[#D3D3D3] rounded-lg p-5 flex flex-col items-center gap-4">
            <h1 className="text-xl text-black font-bold text-center">Office</h1>
            <img className="w-24 mx-auto" src={Office} alt="office room" />
          </div>
        </div>
        <div className="px-2">
          <div className="bg-[#D3D3D3] rounded-lg p-5 flex flex-col items-center gap-4">
            <h1 className="text-xl text-black font-bold text-center">
              Storage
            </h1>
            <img className="w-24 mx-auto" src={Storage} alt="Storage room" />
          </div>
        </div>
        <div className="px-2">
          <div className="bg-[#D3D3D3] rounded-lg p-5 flex flex-col items-center gap-4">
            <h1 className="text-xl text-black font-bold text-center">Study Room</h1>
            <img className="w-24 mx-auto" src={Study} alt="Study room" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ProductsCategories;
