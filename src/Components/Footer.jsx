import Logo from "../assets/Images/Logo.png";
import Payment from "../assets/Images/Payments.png";
const Footer = () => {
  return (
    <footer className="mt-10 lg:mt-28 px-8 md:px-14 lg:px-16 py-14 bg-[#030303]">
      <div className="pb-10 border-b border-white flex flex-row justify-between">
        <div className="w-1/2 lg:w-5/12 ">
          <img src={Logo} alt="Logo" />
          <p className="text-sm md:text-base text-white mt-5">
            Your dream space deserves the best execution, and that’s where
            United Buildpro Pvt Ltd excels. Our construction services encompass
            everything from foundational work to structural builds,tailored to
            residential, commercial, and industrial needs. We pride ourselves on
            using high-quality materials and advanced techniques to ensure
            durability and efficiency in every project we undertake
          </p>
          <div className="mt-3 flex flex-row items-center gap-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                ></path>
                <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m17.5 6.51l.01-.011"
                ></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row gap-10 lg:gap-32 text-white">
          <ul className="flex flex-col gap-3">
            <li>Home</li>
            <li>Living</li>
            <li>Storage</li>
            <li>Dining</li>
            <li>Bedroom</li>
            <li>Matress</li>
            <li>Study</li>
            <li>Office</li>
            <li>Outdoor</li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li>Residential</li>
            <li>Institutional</li>
            <li>Commercial</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center gap-5">
        <h1 className="text-sm text-white">2024 © All rights reserved - Cozy Comfort</h1>
        <img src={Payment} alt="payments" />
      </div>
    </footer>
  );
};

export default Footer;
