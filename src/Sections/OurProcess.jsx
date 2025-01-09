import DreamModel from "../assets/Images/OurProcess/DreamModel.png";
import Confirmation from "../assets/Images/OurProcess/Confirmation.png";
import Processing from "../assets/Images/OurProcess/Processing.png";
import Customization from "../assets/Images/OurProcess/Customization.png";
import Check from "../assets/Images/OurProcess/Check.png";
import Delivery from "../assets/Images/OurProcess/Delivery.png";
const OurProcess = () => {
  return (
    <section className="px-8 md:px-14 lg:px-16 ">
      <h1 className="text-2xl lg:text-3xl text-black font-semibold text-center">
        Our Process
      </h1>
      <div className="mt-10 flex flex-col md:flex-row gap-10 lg:gap-20">
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-4">
            <img
              src={DreamModel}
              alt="dream Model"
              className="w-24 md:w-28 lg:w-36  rounded-lg"
            />
            <div>
              <h1 className="text-lg lg:text-xl font-semibold">
                Step 1: Select your dream model
              </h1>
              <p className="text-sm lg:text-base">
                Identify the style that best suits your space and personality.
                From modern minimalism to classic elegance, choose what
                resonates with you.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img
              src={Confirmation}
              alt="Order Confirmation"
              className="w-24 md:w-28 lg:w-36 rounded-lg"
            />
            <div>
              <h1 className="ext-lg lg:text-xl font-semibold">
                Step 3: Order confirmation
              </h1>
              <p className="text-sm lg:text-base">
                Accurate measurements ensure your furniture fits perfectly,
                maximizing space and
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img
              src={Processing}
              alt="Order Processing"
              className="w-24 md:w-28 lg:w-36  rounded-lg"
            />
            <div>
              <h1 className="ext-lg lg:text-xl font-semibold">
                Step 5: Order processing
              </h1>
              <p className="text-sm lg:text-base">
                Your order is carefully reviewed and processed to ensure all
                details are correct before moving
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="flex flex-row items-center gap-4">
            <img
              src={Customization}
              alt="dream Model"
              className="w-24 md:w-28 lg:w-36  rounded-lg"
            />
            <div>
              <h1 className="ext-lg lg:text-xl font-semibold">
                Step 2: Customize to your requirement
              </h1>
              <p className="text-sm lg:text-base">
                Choose from a variety of premium materials such as rich woods,
                luxurious fabrics, and robust metals to complement your style.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src={Check} alt="dream Model" className="w-24 md:w-28 lg:w-36  rounded-lg" />
            <div>
              <h1 className="ext-lg lg:text-xl font-semibold">Step 4: Quality check</h1>
              <p className="text-sm lg:text-base">
                Enjoy seamless delivery and professional installation services
                with every purchase.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src={Delivery} alt="dream Model" className="w-24 md:w-28 lg:w-36 rounded-lg" />
            <div>
              <h1 className="ext-lg lg:text-xl font-semibold">Step 6: Delivery</h1>
              <p className="text-sm lg:text-base">
                Our commitment to quality ensures your satisfaction with every
                piece you choose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
