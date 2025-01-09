import About1 from "../assets/Images/About1.png";
import About2 from "../assets/Images/About2.png";
import About3 from "../assets/Images/About3.png";
import About4 from "../assets/Images/About4.png";
const AboutUs = () => {
  return (
    <section className="px-8 md:px-14 lg:px-16 py-8 md:py-10 lg:py-16">
      <h1 className="text-2xl lg:text-3xl text-black font-bold text-center">
        About us
      </h1>
      <p className="py-2 md:py-4 text-center lg:w-3/4 mx-auto text-sm md:text-base lg:text-lg">
        Discover the epitome of luxury living with our exclusive furniture
        collection. Each piece is meticulously crafted to bring sophistication
        and elegance to your home.
      </p>
      <div className="mt-5 md:mx-8 lg:mx-14 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex flex-row md:hidden gap-4 w-full">
          <div className="flex flex-col gap-4">
            <img src={About1} alt="about1" className="rounded-xl" />
            <img src={About2} alt="about2" className="rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={About3} alt="about3" className="h-3/4 rounded-xl" />
            <img src={About4} alt="about4" />
          </div>
        </div>
        <div className="w-full lg:w-7/12 flex flex-col gap-4 md:gap-8 lg:gap-10">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 lg:gap-10">
            <div className="text-[#030303] w-full md:w-1/2">
              <h1 className="text-2xl lg:text-3xl font-bold">Inspired Living</h1>
              <p>
                Discover furniture that combines modern elegance with everyday
                comfort, crafted to make your home a reflection of your unique
                style.
              </p>
            </div>
            <div className="text-[#030303]  w-full md:w-1/2">
              <h1 className="text-2xl lg:text-3xl font-bold">Exceptional Savings</h1>
              <p>
                By bridging the gap between you and trusted furniture makers, we
                bring you stunning pieces at prices that fit your budget.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 lg:gap-10">
            <div className="text-[#030303]  w-full md:w-1/2">
              <h1 className="text-2xl lg:text-3xl font-bold">Easy Shopping</h1>
              <p>
                From quick browsing to fast delivery and easy assembly, we
                simplify every step of finding and enjoying your perfect
                furniture.
              </p>
            </div>
            <div className="text-[#030303]  w-full md:w-1/2">
              <h1 className="text-2xl lg:text-3xl font-bold">Sustainable Options</h1>
              <p>
                Choose from sustainable furniture options crafted with the
                planet in mind—because style should never come at the cost of
                the environment.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col md:flex-row gap-4 w-full lg:w-5/12">
          <div className="flex flex-col gap-4">
            <img src={About1} alt="about1" className="" />
            <img src={About2} alt="about2" className="rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={About3} alt="about3" className="h-3/4 rounded-xl" />
            <img src={About4} alt="about4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
