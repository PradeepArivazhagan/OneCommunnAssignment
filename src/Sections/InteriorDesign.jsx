import Slider from "react-slick";
import Interior from "../assets/Images/InteriorDesign.png";
const InteriorDesign = () => {
  var settings = {
    className: "w-full mt-10 px-36",
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="px-16 flex flex-col items-center bg-[#D3D3D3] py-8">
      <h1 className="text-4xl text-black font-semibold">Interior Designing</h1>
      <p className="py-4 text-center w-3/4">
        Kitchen Interior - Let us help you design your kitchen. Leave the worry
        of mixing and matching furniture behind. Set up your space confidently
        by purchasing the complete look for a seamless experience.
      </p>
      <button className="bg-black rounded-lg text-white py-3 px-6">
        Know More
      </button>
      <Slider {...settings}>
        <div>
          <img className="w-full h-full" src={Interior} alt="Interior" />
        </div>
        <div>
          <img className="w-full h-full" src={Interior} alt="Interior" />
        </div>
        <div>
          <img className="w-full h-full" src={Interior} alt="Interior" />
        </div>
        <div>
          <img className="w-full h-full" src={Interior} alt="Interior" />
        </div>
      </Slider>
    </section>
  );
};

export default InteriorDesign;
