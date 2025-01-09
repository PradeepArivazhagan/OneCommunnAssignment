import Collections from "../assets/Images/StandOut/Collections.svg";
import Fabrics from "../assets/Images/StandOut/Fabrics.svg";
import Quality from "../assets/Images/StandOut/Quality.svg";
import Colour from "../assets/Images/StandOut/Colour.svg";
const StandOut = () => {
  return (
    <section className="px-8 md:px-14 lg:px-16 py-14 lg:py-20">
      <h1 className="text-2xl lg:text-4xl text-black font-semibold text-center">
        Why Vibrer Stands Out?
      </h1>
      <div className="mt-10 lg:w-3/4 mx-auto flex flex-col gap-4 md:gap-6 lg:gap-10">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10">
          <div className="flex flex-col p-6 bg-[#D3D3D3] border border-[#E5E7EB] shadow-sm rounded-xl w-full md:w-1/2">
            <img
              src={Collections}
              alt="Collections"
              className="w-14 self-center py-10 md:py-20"
            />
            <div>
              <h1 className="text-lg text-[#030303] font-bold">
                500 + Collections
              </h1>
              <p>
                Our journey begins with a comprehensive understanding of your
                unique style and space requirements.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-[#D3D3D3] border border-[#E5E7EB] shadow-sm rounded-xl w-full md:w-1/2">
            <img
              src={Fabrics}
              alt="Collections"
              className="w-24 self-center  py-10 md:py-14 lg:py-14"
            />
            <div>
              <h1 className="text-lg text-[#030303] font-bold">
                300 + Fabrics
              </h1>
              <p>
                Our journey begins with a comprehensive understanding of your
                unique style and space requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10">
          <div className="flex flex-col p-6 bg-[#D3D3D3] border border-[#E5E7EB] shadow-sm rounded-xl w-full md:w-1/2">
            <img
              src={Quality}
              alt="Collections"
              className="w-14 self-center  py-10 md:py-14 lg:py-20"
            />
            <div>
              <h1 className="text-lg text-[#030303] font-bold">
                Top-notch Quality
              </h1>
              <p>
                Our journey begins with a comprehensive understanding of your
                unique style and space requirements.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-[#D3D3D3] border border-[#E5E7EB] shadow-sm rounded-xl w-full md:w-1/2">
            <img
              src={Colour}
              alt="Collections"
              className="w-12 self-center  py-10 md:py-14 lg:py-20"
            />
            <div>
              <h1 className="text-lg text-[#030303] font-bold">
                Colour and Length customization
              </h1>
              <p>
                Our journey begins with a comprehensive understanding of your
                unique style and space requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandOut;
