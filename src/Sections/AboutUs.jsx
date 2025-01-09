import About1 from "../assets/Images/About1.png";
import About2 from "../assets/Images/About2.png";
import About3 from "../assets/Images/About3.png";
import About4 from "../assets/Images/About4.png";
const AboutUs = () => {
  return (
    <section className="px-16 py-20">
      <h1 className="text-3xl text-black font-semibold text-center">
        About us
      </h1>
      <p className="py-4 text-center w-3/4 mx-auto text-lg">
        Discover the epitome of luxury living with our exclusive furniture
        collection. Each piece is meticulously crafted to bring sophistication
        and elegance to your home.
      </p>
      <div className="mt-5 mx-14 flex flex-row items-center gap-4">
        <div className="w-7/12 flex flex-col gap-8">
          <div className="flex flex-row items-start gap-4">
            <div className="text-[#030303] w-1/2">
              <h1 className="text-3xl font-semibold">Inspired Living</h1>
              <p>
                Discover furniture that combines modern elegance with everyday
                comfort, crafted to make your home a reflection of your unique
                style.
              </p>
            </div>
            <div className="text-[#030303] w-1/2">
              <h1 className="text-3xl font-semibold">Exceptional Savings</h1>
              <p>
                By bridging the gap between you and trusted furniture makers, we
                bring you stunning pieces at prices that fit your budget.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-4">
            <div className="text-[#030303] w-1/2">
              <h1 className="text-3xl font-semibold">Easy Shopping</h1>
              <p>
                From quick browsing to fast delivery and easy assembly, we
                simplify every step of finding and enjoying your perfect
                furniture.
              </p>
            </div>
            <div className="text-[#030303] w-1/2">
              <h1 className="text-3xl font-semibold">Sustainable Options</h1>
              <p>
                Choose from sustainable furniture options crafted with the
                planet in mind—because style should never come at the cost of
                the environment.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-5/12">
          <div className="flex flex-col gap-4">
            <img src={About1} alt="about1" className=""/>
            <img src={About2} alt="about2" className="rounded-xl"/>
          </div>
          <div className="flex flex-col gap-4">
            <img src={About3} alt="about3" className="h-3/4 rounded-xl"/>
            <img src={About4} alt="about4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
